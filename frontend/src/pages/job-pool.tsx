import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Filter, 
  ArrowUpDown, 
  MapPin, 
  Clock, 
  X, 
  CheckCircle2,
  Briefcase
} from "lucide-react";
import { ProviderSidebar, ProviderHeader } from "./provider-dashboard";

export default function JobPool() {
  const jobs = [
    {
      id: 1,
      customer: "Sarah Jenkins",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      time: "2 mins ago",
      title: "Electrical Wiring",
      category: "Electrical",
      distance: "1.2 km away",
      price: 125.00,
      highDemand: false
    },
    {
      id: 2,
      customer: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      time: "15 mins ago",
      title: "Kitchen Faucet Repair",
      category: "Plumbing",
      distance: "3.6 km away",
      price: 85.00,
      highDemand: false
    },
    {
      id: 3,
      customer: "Elena Rodriguez",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
      time: "45 mins ago",
      title: "AC Unit Maintenance",
      category: "HVAC",
      distance: "7.5 km away",
      price: 150.00,
      highDemand: true
    },
    {
      id: 4,
      customer: "David Wilson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
      time: "1 hour ago",
      title: "Wall Painting - Master Room",
      category: "Painting",
      distance: "12.4 km away",
      price: 210.00,
      highDemand: false
    },
    {
      id: 5,
      customer: "Robert Miller",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80",
      time: "3 hours ago",
      title: "Door Lock Installation",
      category: "Carpentry",
      distance: "4.1 km away",
      price: 95.00,
      highDemand: false
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30 flex">
      <ProviderSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <ProviderHeader title="Job Pool" />
        
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight">Job Pool</h2>
            <p className="text-muted-foreground mt-1">Discover 5 new service requests nearby.</p>
          </div>

          {/* Filters Bar */}
          <div className="bg-white p-4 rounded-xl border shadow-sm mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-muted-foreground uppercase mr-2">Radius:</span>
              {["5km", "10km", "15km", "20km"].map((rad, i) => (
                <Badge 
                  key={i} 
                  variant="outline" 
                  className={`cursor-pointer hover:bg-muted ${i === 0 ? "bg-primary/10 text-primary border-primary/20" : "text-muted-foreground"}`}
                >
                  {rad}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto overflow-x-auto">
              <Button variant="outline" size="sm" className="bg-white">
                <Filter className="w-3.5 h-3.5 mr-2" /> Filters
              </Button>
              <Button variant="outline" size="sm" className="bg-white">
                <ArrowUpDown className="w-3.5 h-3.5 mr-2" /> Sort
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
            <Badge className="px-3 py-1.5 bg-primary text-white rounded-full">All Requests</Badge>
            <Badge variant="outline" className="px-3 py-1.5 bg-white rounded-full hover:bg-muted cursor-pointer">Plumbing</Badge>
            <Badge variant="outline" className="px-3 py-1.5 bg-white rounded-full hover:bg-muted cursor-pointer">Electrical</Badge>
            <Badge variant="outline" className="px-3 py-1.5 bg-white rounded-full hover:bg-muted cursor-pointer">Cleaning</Badge>
            <Badge variant="outline" className="px-3 py-1.5 bg-white rounded-full hover:bg-muted cursor-pointer">HVAC</Badge>
            <Badge variant="outline" className="px-3 py-1.5 bg-white rounded-full hover:bg-muted cursor-pointer">Carpentry</Badge>
            <Badge variant="outline" className="px-3 py-1.5 bg-white rounded-full hover:bg-muted cursor-pointer">Gardening</Badge>
          </div>

          {/* Alert Banner */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-emerald-900">High Demand Alert!</h4>
                <p className="text-xs text-emerald-700">There are 1 high-paying jobs in your current selection.</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-emerald-700 hover:text-emerald-800 hover:bg-emerald-100 text-xs font-bold uppercase">
              View All &gt;
            </Button>
          </div>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border">
                      <AvatarImage src={job.avatar} />
                      <AvatarFallback>{job.customer[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-sm">{job.customer}</div>
                      <div className="text-xs text-muted-foreground flex items-center">
                        <Clock className="w-3 h-3 mr-1" /> {job.time}
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100">
                    {job.category}
                  </Badge>
                </div>

                <h3 className="font-bold text-lg mb-2">{job.title}</h3>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1" /> {job.distance}
                  </div>
                  <div className="font-bold text-lg text-foreground">
                    ${job.price.toFixed(2)}
                  </div>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-3">
                  <Button variant="outline" className="border-red-100 text-red-600 hover:bg-red-50 hover:text-red-700">
                    <X className="w-4 h-4 mr-2" /> Reject
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90">
                    <CheckCircle2 className="w-4 h-4 mr-2" /> Accept
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="bg-white">Load More Jobs</Button>
          </div>
        </main>
      </div>
    </div>
  );
}
