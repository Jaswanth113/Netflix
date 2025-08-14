import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const HelpCenter = () => {
  const popularTopics = [
    "How to cancel Netflix",
    "How to change your plan",
    "How to download titles",
    "Trouble signing in",
    "Netflix isn't working",
    "Managing profiles",
    "Billing questions",
    "Video quality issues"
  ];

  const contactOptions = [
    {
      title: "Start Live Chat",
      description: "Chat with a Netflix customer service representative",
      available: "Available 24/7"
    },
    {
      title: "Call Us",
      description: "Speak directly with a customer service agent",
      available: "Available 24/7"
    },
    {
      title: "Browse Help Articles",
      description: "Find answers to common questions",
      available: "Self-service"
    }
  ];

  return (
    <div className="min-h-screen bg-netflix-black">
      <Navbar />
      
      <div className="pt-20 px-4 md:px-16 pb-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-foreground text-4xl md:text-5xl font-bold mb-4">
            Help Center
          </h1>
          <p className="text-netflix-light-gray text-lg mb-8">
            How can we help you today?
          </p>
          
          {/* Search bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-netflix-light-gray" size={20} />
            <Input
              placeholder="Search for help topics..."
              className="pl-12 h-14 bg-netflix-dark border-netflix-gray text-foreground placeholder:text-netflix-light-gray text-lg"
            />
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mb-12">
          <h2 className="text-foreground text-2xl font-semibold mb-6">Popular Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularTopics.map((topic, index) => (
              <button
                key={index}
                className="p-4 bg-netflix-dark hover:bg-netflix-gray rounded-lg text-left transition-colors group"
              >
                <p className="text-foreground group-hover:text-netflix-red transition-colors">
                  {topic}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="mb-12">
          <h2 className="text-foreground text-2xl font-semibold mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => (
              <div
                key={index}
                className="p-6 bg-netflix-dark rounded-lg hover:bg-netflix-gray transition-colors cursor-pointer group"
              >
                <h3 className="text-foreground text-lg font-semibold mb-2 group-hover:text-netflix-red transition-colors">
                  {option.title}
                </h3>
                <p className="text-netflix-light-gray mb-3">
                  {option.description}
                </p>
                <p className="text-sm text-green-500">
                  {option.available}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Categories */}
        <div>
          <h2 className="text-foreground text-2xl font-semibold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-netflix-dark rounded-lg hover:bg-netflix-gray transition-colors cursor-pointer">
              <h3 className="text-foreground text-lg font-semibold mb-2">Account & Billing</h3>
              <p className="text-netflix-light-gray text-sm">
                Payment methods, billing cycles, account changes
              </p>
            </div>
            
            <div className="p-6 bg-netflix-dark rounded-lg hover:bg-netflix-gray transition-colors cursor-pointer">
              <h3 className="text-foreground text-lg font-semibold mb-2">Watching Netflix</h3>
              <p className="text-netflix-light-gray text-sm">
                Streaming issues, device setup, video quality
              </p>
            </div>
            
            <div className="p-6 bg-netflix-dark rounded-lg hover:bg-netflix-gray transition-colors cursor-pointer">
              <h3 className="text-foreground text-lg font-semibold mb-2">Managing Profiles</h3>
              <p className="text-netflix-light-gray text-sm">
                Creating profiles, parental controls, recommendations
              </p>
            </div>
            
            <div className="p-6 bg-netflix-dark rounded-lg hover:bg-netflix-gray transition-colors cursor-pointer">
              <h3 className="text-foreground text-lg font-semibold mb-2">Downloads</h3>
              <p className="text-netflix-light-gray text-sm">
                Download limits, storage, offline viewing
              </p>
            </div>
            
            <div className="p-6 bg-netflix-dark rounded-lg hover:bg-netflix-gray transition-colors cursor-pointer">
              <h3 className="text-foreground text-lg font-semibold mb-2">Technical Issues</h3>
              <p className="text-netflix-light-gray text-sm">
                Error codes, connection problems, troubleshooting
              </p>
            </div>
            
            <div className="p-6 bg-netflix-dark rounded-lg hover:bg-netflix-gray transition-colors cursor-pointer">
              <h3 className="text-foreground text-lg font-semibold mb-2">Privacy & Security</h3>
              <p className="text-netflix-light-gray text-sm">
                Data protection, security settings, privacy controls
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;