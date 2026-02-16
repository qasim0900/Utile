import { useState } from 'react';
import { Link } from 'react-router';
import { 
  Home, Briefcase, DollarSign, Settings, Bell, MapPin, 
  Star, X, Check, Filter, Info
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';

export function MobileJobPool() {
  const [selectedRadius, setSelectedRadius] = useState('5km');

  const jobs = [
    {
      id: 1,
      customer: "Sarah Jenkins",
      avatar: "https://i.pravatar.cc/150?img=5",
      service: "Deep House Cleaning",
      distance: "2.4 km away",
      price: "$85",
      rating: 4.9,
      time: "12 mins ago",
      category: "Cleaning"
    },
    {
      id: 2,
      customer: "Marcus Chen",
      avatar: "https://i.pravatar.cc/150?img=13",
      service: "Garden Maintenance",
      distance: "4.8 km away",
      price: "$120",
      rating: 4.7,
      time: "35 mins ago",
      category: "Gardening"
    },
  ];

  const radiusOptions = ['5km', '10km', '15km'];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Mobile Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#16B8A6] flex items-center justify-center">
              <Home className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-[#16B8A6]">UTILE</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <Avatar className="w-9 h-9">
              <AvatarImage src="https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzExMjU4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Radius Filter */}
        <div className="px-4 pb-3 flex items-center gap-3">
          <Button variant="ghost" size="icon" className="flex-shrink-0">
            <Filter className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="text-sm text-gray-600 flex-shrink-0">RADIUS</span>
            <div className="flex bg-gray-100 rounded-lg p-1">
              {radiusOptions.map((radius) => (
                <button
                  key={radius}
                  onClick={() => setSelectedRadius(radius)}
                  className={`px-4 py-1.5 rounded-md text-sm transition-colors whitespace-nowrap ${
                    selectedRadius === radius
                      ? 'bg-[#16B8A6] text-white'
                      : 'text-gray-600'
                  }`}
                >
                  {radius}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Header */}
        <div>
          <h2 className="text-xl font-bold mb-1">Available Jobs</h2>
          <p className="text-sm text-gray-500">Nearby requests matching your skills</p>
          <div className="flex items-center gap-2 mt-2">
            <Badge className="bg-green-100 text-green-700 border-0">2 New</Badge>
          </div>
        </div>

        {/* Job Cards */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="bg-white border-none shadow-sm rounded-2xl overflow-hidden">
              <div className="p-4">
                <div className="flex items-start gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={job.avatar} />
                    <AvatarFallback>{job.customer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold mb-1 truncate">{job.service}</h3>
                    <p className="text-sm text-gray-600 truncate">{job.customer}</p>
                  </div>
                  <span className="text-xl font-bold text-[#16B8A6] flex-shrink-0">{job.price}</span>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-gray-600">{job.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{job.distance}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span className="text-gray-600">{job.time}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1 text-red-600 border-red-200 hover:bg-red-50 rounded-xl"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Decline
                  </Button>
                  <Button className="flex-1 bg-[#16B8A6] hover:bg-[#1BA799] text-white rounded-xl">
                    <Check className="w-4 h-4 mr-2" />
                    Accept
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pro Tip */}
        <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100 shadow-sm rounded-2xl p-4">
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Info className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold mb-1">Pro Tip:</h4>
              <p className="text-sm text-gray-600">
                Faster acceptance rates improve your visibility in the marketplace. Set up notifications to never miss a high-paying request!
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20">
        <div className="grid grid-cols-4 h-16">
          <Link 
            to="/mobile" 
            className="flex flex-col items-center justify-center gap-1 text-gray-400"
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">Dashboard</span>
          </Link>
          <Link 
            to="/mobile-jobs" 
            className="flex flex-col items-center justify-center gap-1 text-[#16B8A6]"
          >
            <Briefcase className="w-5 h-5" />
            <span className="text-xs font-medium">Job Pool</span>
          </Link>
          <a 
            href="#" 
            className="flex flex-col items-center justify-center gap-1 text-gray-400"
          >
            <DollarSign className="w-5 h-5" />
            <span className="text-xs">Earnings</span>
          </a>
          <a 
            href="#" 
            className="flex flex-col items-center justify-center gap-1 text-gray-400"
          >
            <Settings className="w-5 h-5" />
            <span className="text-xs">Settings</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
