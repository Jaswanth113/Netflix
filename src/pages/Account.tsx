import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Account = () => {
  const user = JSON.parse(localStorage.getItem("netflix-user") || "{}");

  return (
    <div className="min-h-screen bg-netflix-black">
      <Navbar />
      
      <div className="pt-20 px-4 md:px-16 pb-8 max-w-4xl mx-auto">
        <h1 className="text-foreground text-3xl md:text-4xl font-bold mb-8">Account</h1>
        
        <div className="space-y-8">
          {/* Membership & Billing */}
          <div className="bg-netflix-dark p-6 rounded-lg">
            <h2 className="text-foreground text-xl font-semibold mb-4">Membership & Billing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-netflix-light-gray text-sm mb-1">Email</p>
                <p className="text-foreground">{user.email || "user@example.com"}</p>
              </div>
              <div>
                <p className="text-netflix-light-gray text-sm mb-1">Plan</p>
                <p className="text-foreground">Premium • 4K + HDR</p>
              </div>
              <div>
                <p className="text-netflix-light-gray text-sm mb-1">Next billing date</p>
                <p className="text-foreground">January 15, 2025</p>
              </div>
              <div>
                <p className="text-netflix-light-gray text-sm mb-1">Payment method</p>
                <p className="text-foreground">Visa ****1234</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button variant="outline" className="border-netflix-gray text-foreground hover:bg-netflix-gray">
                Change plan
              </Button>
              <Button variant="outline" className="border-netflix-gray text-foreground hover:bg-netflix-gray">
                Update payment info
              </Button>
              <Button variant="outline" className="border-netflix-gray text-foreground hover:bg-netflix-gray">
                Billing details
              </Button>
            </div>
          </div>

          <Separator className="bg-netflix-gray" />

          {/* Profile & Parental Controls */}
          <div className="bg-netflix-dark p-6 rounded-lg">
            <h2 className="text-foreground text-xl font-semibold mb-4">Profile & Parental Controls</h2>
            
            <div className="space-y-4">
              {/* Primary Profile */}
              <div className="flex items-center justify-between p-4 bg-netflix-gray rounded">
                <div className="flex items-center space-x-4">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                    alt="Profile" 
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <p className="text-foreground font-medium">Primary Profile</p>
                    <p className="text-netflix-light-gray text-sm">All Maturity Ratings</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-netflix-light-gray text-foreground hover:bg-netflix-dark">
                  Edit
                </Button>
              </div>

              {/* Kids Profile */}
              <div className="flex items-center justify-between p-4 bg-netflix-gray rounded">
                <div className="flex items-center space-x-4">
                  <img 
                    src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41" 
                    alt="Kids Profile" 
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <p className="text-foreground font-medium">Kids</p>
                    <p className="text-netflix-light-gray text-sm">For Little Kids: 12 and under</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-netflix-light-gray text-foreground hover:bg-netflix-dark">
                  Edit
                </Button>
              </div>
            </div>

            <Button className="mt-4 bg-netflix-red hover:bg-netflix-red/90 text-foreground">
              Add Profile
            </Button>
          </div>

          <Separator className="bg-netflix-gray" />

          {/* Settings */}
          <div className="bg-netflix-dark p-6 rounded-lg">
            <h2 className="text-foreground text-xl font-semibold mb-4">Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="language" className="text-foreground">Language</Label>
                <select 
                  id="language"
                  className="mt-1 w-full p-2 bg-netflix-gray border border-netflix-light-gray rounded text-foreground"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="autoplay" className="text-foreground">Autoplay</Label>
                <select 
                  id="autoplay"
                  className="mt-1 w-full p-2 bg-netflix-gray border border-netflix-light-gray rounded text-foreground"
                >
                  <option>Autoplay next episode</option>
                  <option>Don't autoplay</option>
                </select>
              </div>

              <div>
                <Label htmlFor="quality" className="text-foreground">Video Quality</Label>
                <select 
                  id="quality"
                  className="mt-1 w-full p-2 bg-netflix-gray border border-netflix-light-gray rounded text-foreground"
                >
                  <option>Auto</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>

              <div>
                <Label htmlFor="downloads" className="text-foreground">Download Quality</Label>
                <select 
                  id="downloads"
                  className="mt-1 w-full p-2 bg-netflix-gray border border-netflix-light-gray rounded text-foreground"
                >
                  <option>Standard</option>
                  <option>Higher</option>
                </select>
              </div>
            </div>
          </div>

          <Separator className="bg-netflix-gray" />

          {/* Privacy & Data */}
          <div className="bg-netflix-dark p-6 rounded-lg">
            <h2 className="text-foreground text-xl font-semibold mb-4">Privacy & Data</h2>
            
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start border-netflix-gray text-foreground hover:bg-netflix-gray">
                Download your personal information
              </Button>
              <Button variant="outline" className="w-full justify-start border-netflix-gray text-foreground hover:bg-netflix-gray">
                Delete profile
              </Button>
              <Button variant="outline" className="w-full justify-start border-netflix-gray text-foreground hover:bg-netflix-gray">
                Sign out of all devices
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;