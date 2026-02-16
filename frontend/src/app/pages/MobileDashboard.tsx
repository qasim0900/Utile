import { Link } from 'react-router';
import { 
  Home, Briefcase, DollarSign, Settings, Bell, MapPin, 
  Users, Wallet, Target, Zap, Navigation as NavigationIcon,
  Phone, TrendingUp, Circle, Maximize2, Clock
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Switch } from '../components/ui/switch';
import { Card } from '../components/ui/card';

export function MobileDashboard() {
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
      </header>

      <div className="p-4 space-y-4">
        {/* Status Card */}
        <Card className="bg-white border-none shadow-sm rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-bold mb-1">Status: Available</h3>
              <p className="text-xs text-gray-500">Visible to local customers</p>
            </div>
            <Switch defaultChecked className="data-[state=checked]:bg-[#16B8A6]" />
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-white border-none shadow-sm rounded-2xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">124</h3>
                <p className="text-xs text-gray-500">TOTAL CLIENTS</p>
              </div>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="w-3 h-3" />
                <span>+12%</span>
              </div>
            </div>
          </Card>

          <Card className="bg-white border-none shadow-sm rounded-2xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                <Wallet className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold">$2,840</h3>
              <p className="text-xs text-gray-500">BALANCE</p>
            </div>
          </Card>

          <Card className="bg-white border-none shadow-sm rounded-2xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                <Circle className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold">15km</h3>
              <p className="text-xs text-gray-500">RADIUS</p>
            </div>
          </Card>

          <Card className="bg-white border-none shadow-sm rounded-2xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-orange-600" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">8</h3>
                <p className="text-xs text-gray-500">JOBS TODAY</p>
              </div>
              <span className="text-xs text-[#16B8A6]">+2</span>
            </div>
          </Card>
        </div>

        {/* Active Work */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold">ACTIVE WORK</h3>
            <a href="#" className="text-sm text-[#16B8A6]">
              Details
            </a>
          </div>

          <Card className="bg-gradient-to-br from-[#E8F9F7] to-white border-none shadow-sm rounded-2xl p-4">
            <div className="flex items-start gap-3 mb-4">
              <Avatar className="w-12 h-12 border-2 border-white">
                <AvatarImage src="https://i.pravatar.cc/150?img=5" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold">Sarah Jenkins</h4>
                  <Badge className="bg-[#16B8A6] text-white border-0 text-xs">
                    ONGOING
                  </Badge>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <MapPin className="w-3 h-3" />
                  <span>1.2 km away</span>
                </div>
              </div>
            </div>

            <h3 className="font-bold mb-1">Kitchen Deep Clean</h3>
            
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2 text-sm">
                <span className="text-gray-600">Job Progress</span>
                <span className="font-medium">45% Complete</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>

            <div className="flex gap-3">
              <Button className="flex-1 bg-[#16B8A6] hover:bg-[#1BA799] text-white rounded-xl">
                <NavigationIcon className="w-4 h-4 mr-2" />
                NAVIGATE
              </Button>
              <Button variant="outline" size="icon" className="rounded-xl">
                <Phone className="w-4 h-4 text-[#16B8A6]" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Job Density Map */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold">JOB DENSITY MAP</h3>
            <span className="text-xs text-[#16B8A6]">Live Updates</span>
          </div>

          <Card className="bg-white border-none shadow-sm rounded-2xl p-0 overflow-hidden">
            {/* Map Preview */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 h-64 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-[#16B8A6] mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Seattle Coverage Area</p>
                </div>
              </div>
              
              {/* Simulated marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-[#16B8A6] rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-[#16B8A6] rounded-full opacity-30"></div>
              </div>

              <Button 
                size="icon" 
                className="absolute bottom-4 right-4 bg-white hover:bg-gray-50 shadow-lg rounded-xl"
              >
                <Maximize2 className="w-4 h-4 text-gray-700" />
              </Button>
            </div>

            {/* Map Info */}
            <div className="p-4 bg-white border-t">
              <div className="flex items-center gap-3 bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                <Clock className="w-5 h-5 text-yellow-700" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-yellow-900">High Demand Area</p>
                  <p className="text-xs text-yellow-700">Expect more requests soon</p>
                </div>
                <Button 
                  size="sm" 
                  className="bg-[#16B8A6] hover:bg-[#1BA799] text-white text-xs rounded-lg"
                >
                  View Pool
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20">
        <div className="grid grid-cols-4 h-16">
          <Link 
            to="/mobile" 
            className="flex flex-col items-center justify-center gap-1 text-[#16B8A6]"
          >
            <Home className="w-5 h-5" />
            <span className="text-xs font-medium">Dashboard</span>
          </Link>
          <Link 
            to="/mobile-jobs" 
            className="flex flex-col items-center justify-center gap-1 text-gray-400"
          >
            <Briefcase className="w-5 h-5" />
            <span className="text-xs">Job Pool</span>
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
