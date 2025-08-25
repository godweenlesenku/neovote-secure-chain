import { JobHero } from "@/components/JobHero";
import { JobDetails } from "@/components/JobDetails";
import { ApplicationForm } from "@/components/ApplicationForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <title>Junior Flutter Developer - LemyCode | NeoVote Blockchain Voting Platform</title>
      
      <JobHero />
      <JobDetails />
      <ApplicationForm />
    </div>
  );
};

export default Index;
