import { useState } from 'react';
import { Link } from 'react-router';
import { 
  Home, Briefcase, DollarSign, Settings, Bell, Filter, 
  SlidersHorizontal, MapPin, Clock, Star, CheckCircle2
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { Switch } from '../components/ui/switch';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';

export function JobPool() {
  const [selectedRadius, setSelectedRadius] = useState('15km');

  const jobs = [
    {
      id: 1,
      customer: "Sarah Jenkins",
      avatar: "https://i.pravatar.cc/150?img=5",
      service: "Electrical Wiring",
      category: "Electrical",
      time: "2 mins ago",
      distance: "1.2 km away",
      price: "$125.00",
      rating: 4.8,
      description: "Need help with installing new electrical outlets in kitchen and rewiring light switches.",
    },
    {
      id: 2,
      customer: "Michael Chen",
      avatar: "https://i.pravatar.cc/150?img=13",
      service: "Kitchen Faucet Repair",
      category: "Plumbing",
      time: "15 mins ago",
      distance: "3.8 km away",
      price: "$85.00",
      rating: 4.6,
      description: "Kitchen faucet is leaking. Need immediate repair or replacement.",
    },
    {
      id: 3,
      customer: "Elena Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=44",
      service: "AC Unit Maintenance",
      category: "HVAC",
      time: "45 mins ago",
      distance: "7.5 km away",
      price: "$150.00",
      rating: 4.9,
      description: "Annual AC maintenance and cleaning service needed before summer.",
    },
    {
      id: 4,
      customer: "David Wilson",
      avatar: "https://i.pravatar.cc/150?img=12",
      service: "Wall Painting - Master Room",
      category: "Painting",
      time: "1 hour ago",
      distance: "12.4 km away",
      price: "$210.00",
      rating: 4.5,
      description: "Need to paint master bedroom walls. Two coats, neutral color.",
    },
    {
      id: 5,
      customer: "Robert Miller",
      avatar: "https://i.pravatar.cc/150?img=68",
      service: "Door Lock Installation",
      category: "Carpentry",
      time: "3 hours ago",
      distance: "4.1 km away",
      price: "$95.00",
      rating: 4.7,
      description: "Install new smart lock on front door. Hardware already purchased.",
    },
  ];

  const categories = [
    { name: "All Requests" },
    { name: "Plumbing" },
    { name: "Electrical" },
    { name: "Cleaning" },
    { name: "HVAC" },
    { name: "Carpentry" },
    { name: "Gardening" },
  ];

  const radiusOptions = ['5km', '10km', '15km', '20km'];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#16B8A6] flex items-center justify-center">
              <Home className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-[#16B8A6]">UTILE</span>
          </Link>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            <li>
              <Link 
                to="/provider" 
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50"
              >
                <Home className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/jobs" 
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#E8F9F7] text-[#16B8A6]"
              >
                <Briefcase className="w-5 h-5" />
                <span>Job Pool</span>
              </Link>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50"
              >
                <DollarSign className="w-5 h-5" />
                <span>Earnings</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50"
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-[#16B8A6]">CURRENT STATUS</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Available for Jobs</span>
              <Switch defaultChecked />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold">Job Pool</h1>
                <p className="text-sm text-gray-500">Discover 5 new service requests nearby.</p>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </Button>
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzExMjU4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* Filters */}
            <div className="flex items-center justify-between">
              <Tabs defaultValue="all" className="w-full">
                <div className="flex items-center justify-between">
                  <TabsList className="bg-gray-100">
                    {categories.map((cat) => (
                      <TabsTrigger key={cat.name} value={cat.name.toLowerCase().replace(' ', '-')}>
                        {cat.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  <div className="flex items-center gap-3">
                    {/* Radius Selector */}
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">RADIUS:</span>
                      <div className="flex bg-gray-100 rounded-lg p-1">
                        {radiusOptions.map((radius) => (
                          <button
                            key={radius}
                            onClick={() => setSelectedRadius(radius)}
                            className={`px-4 py-1.5 rounded-md text-sm transition-colors ${
                              selectedRadius === radius
                                ? 'bg-[#16B8A6] text-white'
                                : 'text-gray-600 hover:text-gray-900'
                            }`}
                          >
                            {radius}
                          </button>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" size="icon">
                      <Filter className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <SlidersHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Tabs>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Alert */}
          <div className="bg-[#E8F9F7] border border-[#16B8A6]/20 rounded-xl p-4 mb-6 flex items-start gap-3">
            <Briefcase className="w-5 h-5 text-[#16B8A6] mt-0.5" />
            <div className="flex-1">
              <h3 className="font-bold text-[#16B8A6] mb-1">High Demand Alert!</h3>
              <p className="text-sm text-gray-700">
                There are 1 high-paying jobs in your current selection.
              </p>
            </div>
            <Button variant="ghost" className="text-[#16B8A6] hover:text-[#1BA799]">
              VIEW ALL
            </Button>
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div 
                key={job.id} 
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Card Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start gap-3 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={job.avatar} />
                      <AvatarFallback>{job.customer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-bold mb-1">{job.customer}</h3>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{job.time}</span>
                      </div>
                    </div>
                    <Badge 
                      className={
                        job.category === 'Electrical' ? 'bg-blue-100 text-blue-700 border-0' :
                        job.category === 'Plumbing' ? 'bg-[#E8F9F7] text-[#16B8A6] border-0' :
                        job.category === 'HVAC' ? 'bg-purple-100 text-purple-700 border-0' :
                        job.category === 'Painting' ? 'bg-pink-100 text-pink-700 border-0' :
                        'bg-orange-100 text-orange-700 border-0'
                      }
                    >
                      {job.category}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold mb-2">{job.service}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{job.description}</p>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{job.distance}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-gray-600">{job.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 flex items-center gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1 text-red-600 border-red-200 hover:bg-red-50"
                  >
                    Reject
                  </Button>
                  <Button className="flex-1 bg-[#16B8A6] hover:bg-[#1BA799] text-white">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Accept
                  </Button>
                </div>

                {/* Price Tag */}
                <div className="bg-gradient-to-r from-[#16B8A6] to-[#1BA799] px-6 py-3 flex items-center justify-between">
                  <span className="text-white text-sm">Job Value</span>
                  <span className="text-white text-xl font-bold">{job.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline" className="border-[#16B8A6] text-[#16B8A6] hover:bg-[#E8F9F7]">
              Load More Jobs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
