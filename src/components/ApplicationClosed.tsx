import { Card } from "@/components/ui/card";

export const ApplicationClosed = () => {
  return (
    <section id="application-form" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-card border-border shadow-card p-12 rounded-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Applications Closed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thank you for your interest in the Junior Flutter Developer position at LemyCode.
              Applications for this role are now closed. Please check back for future opportunities.
            </p>
            <div className="mt-8">
              <p className="text-muted-foreground">
                Questions? Contact us at{" "}
                <a
                  href="mailto:careers@lemycode.com"
                  className="text-primary hover:text-primary-glow transition-colors"
                >
                  careers@lemycode.com
                </a>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
  