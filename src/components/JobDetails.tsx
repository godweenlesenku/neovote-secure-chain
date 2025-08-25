import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, Users, Code, Zap, Shield, Globe } from "lucide-react";

export const JobDetails = () => {
  return (
    <section id="job-details" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About the Role
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our mission to revolutionize digital voting with cutting-edge blockchain technology and secure mobile applications.
          </p>
        </div>

        {/* Job Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Briefcase className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-card-foreground mb-2">Position</h3>
              <p className="text-muted-foreground">Junior Flutter Developer</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-card-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">Nairobi (Hybrid)</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-card-foreground mb-2">Type</h3>
              <p className="text-muted-foreground">Part-time to Full-time</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-card-foreground mb-2">Team</h3>
              <p className="text-muted-foreground">Early Team Member</p>
            </CardContent>
          </Card>
        </div>

        {/* About NeoVote */}
        <Card className="mb-16 bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-card-foreground">
              <Shield className="w-8 h-8 text-primary" />
              About NeoVote
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-card-foreground leading-relaxed">
              NeoVote is a revolutionary blockchain-powered digital voting platform that has already been featured in 
              <span className="text-primary font-semibold"> 7 pilot elections</span> on the Solana blockchain. 
              We're building the future of secure, transparent, and scalable voting technology from Kenya to the world.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">Blockchain</Badge>
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">Solana</Badge>
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">Civic Tech</Badge>
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">Security</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Responsibilities & Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Responsibilities */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl text-card-foreground">
                <Code className="w-6 h-6 text-primary" />
                Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-card-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  Assist in developing and maintaining cross-platform Flutter apps (iOS & Android)
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  Implement UI/UX designs to ensure smooth user experiences
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  Write clean, testable, and maintainable code under guidance of the lead dev
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  Support integration with blockchain backend and APIs
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  Participate in code reviews, debugging, and performance optimization
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  Collaborate with the team on new features and enhancements
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl text-card-foreground">
                <Zap className="w-6 h-6 text-primary" />
                Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Essential Skills</h4>
                  <ul className="space-y-2 text-card-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      Proficiency in Flutter/Dart development
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      Basic knowledge of REST APIs and state management
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      Familiarity with Git/GitHub and version control
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      Strong problem-solving skills and attention to detail
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Nice to Have</h4>
                  <ul className="space-y-2 text-card-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
                      Experience with Firebase (Auth, Firestore, Notifications)
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
                      Knowledge of UI/UX best practices for mobile apps
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
                      Interest in blockchain, civic tech, or security systems
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What We Offer */}
        <Card className="mt-8 bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-card-foreground">
              <Globe className="w-8 h-8 text-primary" />
              What We Offer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Global Impact Platform</h4>
                    <p className="text-muted-foreground text-sm">Work on a global-first civic tech platform from Kenya</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Flexible Work Model</h4>
                    <p className="text-muted-foreground text-sm">Hybrid/flexible working arrangements</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Competitive Package</h4>
                    <p className="text-muted-foreground text-sm">KSh 70,000 to 120,000 compensation range</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Equity Opportunities</h4>
                    <p className="text-muted-foreground text-sm">Participation opportunities for early team members</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};