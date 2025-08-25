import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ApplicationData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  projects: string;
  github?: string;
  portfolio?: string;
  motivation: string;
  availability: string;
  submittedAt: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const applicationData: ApplicationData = await req.json();

    // Send email notification using Resend
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "LemyCode Careers <onboarding@resend.dev>",
        to: ["lemycode@gmail.com"],
        subject: `New Job Application: ${applicationData.fullName} - Junior Flutter Developer`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0a0a; color: #f5f5f5; padding: 20px; border-radius: 10px;">
            <div style="background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%); padding: 20px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Job Application Received</h1>
              <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Junior Flutter Developer Position</p>
            </div>

            <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #ff6b35; margin: 0 0 15px 0; font-size: 20px;">Applicant Information</h2>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #ff6b35;">Name:</strong> 
                <span style="margin-left: 10px;">${applicationData.fullName}</span>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #ff6b35;">Email:</strong> 
                <span style="margin-left: 10px;">${applicationData.email}</span>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #ff6b35;">Phone:</strong> 
                <span style="margin-left: 10px;">${applicationData.phone}</span>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #ff6b35;">Location:</strong> 
                <span style="margin-left: 10px;">${applicationData.location}</span>
              </div>

              ${applicationData.github ? `
              <div style="margin-bottom: 15px;">
                <strong style="color: #ff6b35;">GitHub:</strong> 
                <a href="${applicationData.github}" style="color: #ff8c42; margin-left: 10px;">${applicationData.github}</a>
              </div>` : ''}

              ${applicationData.portfolio ? `
              <div style="margin-bottom: 15px;">
                <strong style="color: #ff6b35;">Portfolio:</strong> 
                <a href="${applicationData.portfolio}" style="color: #ff8c42; margin-left: 10px;">${applicationData.portfolio}</a>
              </div>` : ''}
            </div>

            <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #ff6b35; margin: 0 0 10px 0;">Flutter/Dart Experience</h3>
              <p style="line-height: 1.6; margin: 0;">${applicationData.experience}</p>
            </div>

            <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #ff6b35; margin: 0 0 10px 0;">Relevant Projects</h3>
              <p style="line-height: 1.6; margin: 0;">${applicationData.projects}</p>
            </div>

            <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #ff6b35; margin: 0 0 10px 0;">Motivation</h3>
              <p style="line-height: 1.6; margin: 0;">${applicationData.motivation}</p>
            </div>

            <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #ff6b35; margin: 0 0 10px 0;">Availability</h3>
              <p style="line-height: 1.6; margin: 0;">${applicationData.availability}</p>
            </div>

            <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #1a1a1a; border-radius: 8px;">
              <p style="color: #cccccc; margin: 0; font-size: 14px;">
                Application submitted on ${new Date(applicationData.submittedAt).toLocaleString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZone: 'Africa/Nairobi'
                })} (EAT)
              </p>
            </div>
          </div>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error("Resend API error:", errorText);
      throw new Error(`Failed to send email: ${errorText}`);
    }

    const emailResult = await emailResponse.json();
    console.log("Email sent successfully:", emailResult);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Application submitted successfully",
        emailId: emailResult.id 
      }),
      {
        status: 200,
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders 
        },
      }
    );

  } catch (error) {
    console.error("Error processing application:", error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Failed to process application" 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders 
        },
      }
    );
  }
});