import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, FileText, User, Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  location: z.string().min(2, "Please specify your location"),
  experience: z.string().min(10, "Please describe your Flutter/Dart experience"),
  projects: z.string().min(10, "Please describe your relevant projects"),
  github: z.string().url("Please enter a valid GitHub URL").optional().or(z.literal("")),
  portfolio: z.string().url("Please enter a valid portfolio URL").optional().or(z.literal("")),
  motivation: z.string().min(20, "Please tell us why you're interested in this role"),
  availability: z.string().min(5, "Please specify your availability"),
});

type FormData = z.infer<typeof formSchema>;

export const ApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      experience: "",
      projects: "",
      github: "",
      portfolio: "",
      motivation: "",
      availability: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      toast({
        title: "Application Submitted Successfully! 🎉",
        description: "Thank you for your interest in joining LemyCode. We'll review your application and get back to you soon.",
        duration: 5000,
      });

      form.reset();
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again or contact us directly at careers@lemycode.com",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="application-form" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Apply Now
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to join the future of digital voting? Submit your application and let's build something amazing together.
            </p>
          </div>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader className="pb-8">
              <CardTitle className="flex items-center gap-3 text-2xl text-card-foreground">
                <FileText className="w-7 h-7 text-primary" />
                Junior Flutter Developer Application
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below to apply for the Junior Flutter Developer position at LemyCode.
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="flex items-center gap-2 text-card-foreground">
                      <User className="w-4 h-4 text-primary" />
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      {...form.register("fullName")}
                      placeholder="Enter your full name"
                      className="bg-input border-border text-foreground"
                    />
                    {form.formState.errors.fullName && (
                      <p className="text-sm text-destructive">{form.formState.errors.fullName.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-card-foreground">
                      <Mail className="w-4 h-4 text-primary" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      placeholder="your.email@example.com"
                      className="bg-input border-border text-foreground"
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-card-foreground">
                      <Phone className="w-4 h-4 text-primary" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      {...form.register("phone")}
                      placeholder="+254 XXX XXX XXX"
                      className="bg-input border-border text-foreground"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="flex items-center gap-2 text-card-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      Location *
                    </Label>
                    <Input
                      id="location"
                      {...form.register("location")}
                      placeholder="City, Country"
                      className="bg-input border-border text-foreground"
                    />
                    {form.formState.errors.location && (
                      <p className="text-sm text-destructive">{form.formState.errors.location.message}</p>
                    )}
                  </div>
                </div>

                {/* Experience & Skills */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-card-foreground">
                      Flutter/Dart Experience *
                    </Label>
                    <Textarea
                      id="experience"
                      {...form.register("experience")}
                      placeholder="Describe your experience with Flutter and Dart development, including years of experience and types of projects you've worked on..."
                      rows={4}
                      className="bg-input border-border text-foreground"
                    />
                    {form.formState.errors.experience && (
                      <p className="text-sm text-destructive">{form.formState.errors.experience.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projects" className="text-card-foreground">
                      Relevant Projects *
                    </Label>
                    <Textarea
                      id="projects"
                      {...form.register("projects")}
                      placeholder="Tell us about your Flutter projects, mobile apps you've built, or contributions to open source projects..."
                      rows={4}
                      className="bg-input border-border text-foreground"
                    />
                    {form.formState.errors.projects && (
                      <p className="text-sm text-destructive">{form.formState.errors.projects.message}</p>
                    )}
                  </div>
                </div>

                {/* Portfolio Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="github" className="text-card-foreground">
                      GitHub Profile (Optional)
                    </Label>
                    <Input
                      id="github"
                      {...form.register("github")}
                      placeholder="https://github.com/yourusername"
                      className="bg-input border-border text-foreground"
                    />
                    {form.formState.errors.github && (
                      <p className="text-sm text-destructive">{form.formState.errors.github.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="portfolio" className="text-card-foreground">
                      Portfolio Website (Optional)
                    </Label>
                    <Input
                      id="portfolio"
                      {...form.register("portfolio")}
                      placeholder="https://yourportfolio.com"
                      className="bg-input border-border text-foreground"
                    />
                    {form.formState.errors.portfolio && (
                      <p className="text-sm text-destructive">{form.formState.errors.portfolio.message}</p>
                    )}
                  </div>
                </div>

                {/* Motivation & Availability */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="motivation" className="text-card-foreground">
                      Why are you interested in this role? *
                    </Label>
                    <Textarea
                      id="motivation"
                      {...form.register("motivation")}
                      placeholder="Tell us what excites you about working on NeoVote, blockchain technology, and civic tech..."
                      rows={4}
                      className="bg-input border-border text-foreground"
                    />
                    {form.formState.errors.motivation && (
                      <p className="text-sm text-destructive">{form.formState.errors.motivation.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability" className="text-card-foreground">
                      Availability *
                    </Label>
                    <Textarea
                      id="availability"
                      {...form.register("availability")}
                      placeholder="When can you start? Are you available part-time or looking for full-time transition?"
                      rows={3}
                      className="bg-input border-border text-foreground"
                    />
                    {form.formState.errors.availability && (
                      <p className="text-sm text-destructive">{form.formState.errors.availability.message}</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin"></div>
                        Submitting Application...
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <Send className="w-5 h-5" />
                        Submit Application
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Questions about the role? Contact us at{" "}
              <a 
                href="mailto:careers@lemycode.com" 
                className="text-primary hover:text-primary-glow transition-colors"
              >
                careers@lemycode.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};