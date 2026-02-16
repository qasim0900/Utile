import { Link } from 'react-router';
import { 
  Home, Briefcase, DollarSign, Settings, Bell, Search, Clock, 
  MapPin, Users, Wallet, Target, TrendingUp, TrendingDown, MoreVertical
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Switch } from '../components/ui/switch';

export function ProviderDashboard() {
  const recentJobs = [
    {
      service: "HVAC Maintenance",
      customer: "James Wilson",
      date: "Sep 18, 2024",
      status: "Completed",
      amount: "$185.00",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
      service: "Light Fixture Install",
      customer: "Linda Chen",
      date: "Sep 17, 2024",
      status: "Completed",
      amount: "$95.00",
      avatar: "https://i.pravatar.cc/150?img=45"
    },
    {
      service: "Pipe Leak Repair",
      customer: "Robert Smith",
      date: "Sep 15, 2024",
      status: "Canceled",
      amount: "$0.00",
      avatar: "https://i.pravatar.cc/150?img=33"
    },
    {
      service: "Cabinet Assembly",
      customer: "Emily Davis",
      date: "Sep 15, 2024",
      status: "Completed",
      amount: "$240.00",
      avatar: "https://i.pravatar.cc/150?img=23"
    },
    {
      service: "Deck Staining",
      customer: "Kevin Patterson",
      date: "Sep 14, 2024",
      status: "Completed",
      amount: "$520.00",
      avatar: "https://i.pravatar.cc/150?img=68"
    },
  ];

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
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#E8F9F7] text-[#16B8A6]"
              >
                <Home className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/jobs" 
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50"
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
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-sm text-gray-500">Welcome back, Marcus! You have 3 pending job requests.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Search jobs..."
                  className="pl-10 w-[300px] bg-gray-50 border-0"
                />
              </div>
              <Button variant="ghost" className="flex items-center gap-2 text-[#16B8A6]">
                <Clock className="w-4 h-4" />
                View History
              </Button>
              <Button className="bg-[#16B8A6] hover:bg-[#1BA799] text-white">
                Go Online
              </Button>
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
        </header>

        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex items-center gap-1 text-green-600 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>12%</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1">34</h3>
              <p className="text-sm text-gray-500">Total Clients</p>
              <p className="text-xs text-gray-400 mt-2">+2 since last week</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex items-center gap-1 text-green-600 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>8%</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1">$1,240.50</h3>
              <p className="text-sm text-gray-500">Wallet Balance</p>
              <p className="text-xs text-gray-400 mt-2">Next payout: Sep 24</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm text-gray-500">Current</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">15km</h3>
              <p className="text-sm text-gray-500">Active Radius</p>
              <p className="text-xs text-gray-400 mt-2">Current operating zone</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex items-center gap-1 text-red-600 text-sm">
                  <TrendingDown className="w-4 h-4" />
                  <span>5%</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1">3</h3>
              <p className="text-sm text-gray-500">Pending Jobs</p>
              <p className="text-xs text-gray-400 mt-2">Average response: 4m</p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Active Service Zone Map */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold mb-1">Active Service Zone</h3>
                    <p className="text-sm text-gray-500">Visualizing your 15km coverage area in Seattle</p>
                  </div>
                  <Button variant="outline" className="text-[#16B8A6] border-[#16B8A6]">
                    Live Updates
                  </Button>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl h-[300px] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-[#16B8A6] mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Map view - Seattle area</p>
                      <div className="mt-4 flex items-center gap-2 justify-center">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-[#16B8A6] rounded-full"></div>
                          <span className="text-xs">My Location</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                          <span className="text-xs">Service Radius (15km)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                          <span className="text-xs">Available Jobs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Simulated markers */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-[#16B8A6] rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-[#16B8A6] rounded-full opacity-30"></div>
                  </div>
                </div>
              </div>

              {/* Recent Job History */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold">Recent Job History</h3>
                  <a href="#" className="text-sm text-[#16B8A6] hover:underline">
                    See All Activity
                  </a>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b text-left text-sm text-gray-500">
                        <th className="pb-3 font-medium">Service & Customer</th>
                        <th className="pb-3 font-medium">Date</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium text-right">Amount</th>
                        <th className="pb-3 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentJobs.map((job, index) => (
                        <tr key={index} className="border-b last:border-0">
                          <td className="py-4">
                            <div className="flex items-center gap-3">
                              <Avatar className="w-10 h-10">
                                <AvatarImage src={job.avatar} />
                                <AvatarFallback>{job.customer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium text-sm">{job.service}</p>
                                <p className="text-xs text-gray-500">{job.customer}</p>
                              </div>
                            </div>
                          </td>
                          <td className="text-sm">{job.date}</td>
                          <td>
                            <Badge 
                              variant={job.status === 'Completed' ? 'default' : 'destructive'}
                              className={job.status === 'Completed' ? 'bg-green-50 text-green-700 border-0' : ''}
                            >
                              <div className="flex items-center gap-1">
                                {job.status === 'Completed' && <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>}
                                {job.status}
                              </div>
                            </Badge>
                          </td>
                          <td className="text-right font-medium">{job.amount}</td>
                          <td>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Current Active Job */}
              <div className="bg-gradient-to-br from-[#16B8A6] to-[#1BA799] rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-yellow-400 text-yellow-900 border-0">Ongoing · 45m</Badge>
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-2">Kitchen Sink Repair</h3>
                <p className="text-sm opacity-90 mb-4">Sarah Montgomery • Capitol Hill</p>

                <div className="flex items-center gap-3 mb-6">
                  <Avatar className="w-12 h-12 border-2 border-white">
                    <AvatarImage src="https://i.pravatar.cc/150?img=5" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">4.3 Rating</span>
                      <span className="text-xs opacity-75">Priority Customer</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span>Job Progress</span>
                    <span>85% Complete</span>
                  </div>
                  <Progress value={85} className="h-2 bg-white/20" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button className="bg-white text-[#16B8A6] hover:bg-gray-100">
                    Job Details
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Navigate
                  </Button>
                </div>
              </div>

              {/* Boost Visibility Card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">Boost your visibility?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Providers with a 98% completion rate get 2x more job invites. You are currently at 94%.
                </p>
                <Button className="w-full bg-[#16B8A6] hover:bg-[#1BA799] text-white">
                  Optimize Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
