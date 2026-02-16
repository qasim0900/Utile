import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  LayoutDashboard, 
  Briefcase, 
  Wallet, 
  Settings, 
  Bell, 
  Search, 
  MapPin, 
  Clock, 
  MoreVertical,
  ChevronRight,
  TrendingUp,
  Users,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";
import { Link, useLocation } from "wouter";

// Sidebar Navigation Component
export function ProviderSidebar() {
  const [location] = useLocation();
  
  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/provider" },
    { icon: Briefcase, label: "Job Pool", href: "/provider/jobs" },
    { icon: Wallet, label: "Earnings", href: "/provider/earnings" },
    { icon: Settings, label: "Settings", href: "/provider/settings" },
  ];

  return (
    <div className="hidden lg:flex flex-col w-64 bg-white border-r h-screen sticky top-0">
      <div className="p-6 border-b">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-lg">
              <span className="relative top-[1px]">U</span>
            </div>
            <span className="text-xl font-bold text-primary tracking-tight">UTILE</span>
          </div>
        </Link>
      </div>
      
      <div className="flex-1 py-6 px-4 space-y-1">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
              location === item.href 
                ? "bg-primary/10 text-primary" 
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}>
              <item.icon className="w-5 h-5" />
              {item.label}
            </div>
          </Link>
        ))}
      </div>
      
      <div className="p-4 border-t mt-auto">
        <div className="bg-muted/30 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted-foreground">CURRENT STATUS</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Available for jobs</span>
            <Switch defaultChecked />
          </div>
        </div>
        <div className="mt-4 text-xs text-muted-foreground text-center">
          © 2026 UTILE Marketplace
        </div>
      </div>
    </div>
  );
}

// Header Component
export function ProviderHeader({ title }: { title: string }) {
  return (
    <header className="bg-white border-b h-16 flex items-center justify-between px-6 sticky top-0 z-40">
      <h1 className="text-xl font-bold hidden md:block">{title}</h1>
      <div className="flex items-center gap-4 ml-auto">
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search jobs..." 
            className="h-9 w-64 rounded-md border bg-muted/30 pl-9 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </Button>
        <Avatar className="h-9 w-9 border cursor-pointer">
          <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&q=80" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

// Dashboard Page
export default function ProviderDashboard() {
  return (
    <div className="min-h-screen bg-muted/30 flex">
      <ProviderSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <ProviderHeader title="Dashboard" />
        
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Welcome back, Marcus!</h2>
            <p className="text-muted-foreground mt-1">You have 3 pending job requests.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="shadow-none border-none bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-full text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-green-600 flex items-center bg-green-50 px-2 py-1 rounded-full">
                    <TrendingUp className="h-3 w-3 mr-1" /> 12%
                  </span>
                </div>
                <div className="text-sm text-muted-foreground font-medium mb-1">Total Clients</div>
                <div className="text-3xl font-bold">34</div>
                <div className="text-xs text-muted-foreground mt-1">+2 since last week</div>
              </CardContent>
            </Card>

            <Card className="shadow-none border-none bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                    <Wallet className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-green-600 flex items-center bg-green-50 px-2 py-1 rounded-full">
                    <TrendingUp className="h-3 w-3 mr-1" /> 8%
                  </span>
                </div>
                <div className="text-sm text-muted-foreground font-medium mb-1">Wallet Balance</div>
                <div className="text-3xl font-bold">$1,240.50</div>
                <div className="text-xs text-muted-foreground mt-1">Next payout: Sep 24</div>
              </CardContent>
            </Card>

            <Card className="shadow-none border-none bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-orange-100 rounded-full text-orange-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>
                <div className="text-sm text-muted-foreground font-medium mb-1">Active Radius</div>
                <div className="text-3xl font-bold">15km</div>
                <div className="text-xs text-muted-foreground mt-1">Current operating zone</div>
              </CardContent>
            </Card>

            <Card className="shadow-none border-none bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-red-100 rounded-full text-red-600">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-red-600 flex items-center bg-red-50 px-2 py-1 rounded-full">
                    5%
                  </span>
                </div>
                <div className="text-sm text-muted-foreground font-medium mb-1">Pending Jobs</div>
                <div className="text-3xl font-bold">3</div>
                <div className="text-xs text-muted-foreground mt-1">Average response: 4m</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Active Service Zone Map Placeholder */}
            <div className="lg:col-span-2">
              <Card className="h-full shadow-sm border-border">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <CardTitle className="text-base">Active Service Zone</CardTitle>
                    <CardDescription>Visualizing your 15km coverage area in Seattle</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Live Updates</Badge>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center bg-muted/20 relative m-6 rounded-xl border border-dashed">
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    {/* Abstract map pattern */}
                    <div className="w-full h-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  </div>
                  
                  {/* Radar ripple effect */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-64 h-64 border border-primary/20 rounded-full animate-ping [animation-duration:3s]"></div>
                    <div className="absolute w-48 h-48 bg-primary/5 border border-primary/30 rounded-full"></div>
                    <div className="absolute w-24 h-24 bg-primary/10 border border-primary/50 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary rounded-full shadow-lg ring-4 ring-white"></div>
                    </div>
                    <div className="absolute -top-10 bg-white shadow-lg rounded-full px-3 py-1 text-xs font-bold border">You (Center)</div>
                  </div>

                  <div className="absolute top-10 right-20">
                     <div className="w-8 h-8 rounded-full bg-white border shadow-sm flex items-center justify-center text-primary">
                        <Briefcase className="w-4 h-4" />
                     </div>
                  </div>
                  
                  <div className="absolute bottom-16 left-24">
                     <div className="w-8 h-8 rounded-full bg-white border shadow-sm flex items-center justify-center text-primary">
                        <Briefcase className="w-4 h-4" />
                     </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Current Active Job */}
            <div>
              <Card className="h-full shadow-sm border-border bg-cyan-50/50">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-primary hover:bg-primary/90">Ongoing Job</Badge>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="w-3 h-3 mr-1" /> Started 45m ago
                    </span>
                  </div>
                  <CardTitle>Kitchen Sink Repair</CardTitle>
                  <CardDescription>Sarah Montgomery • Capitol Hill</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-6 bg-white p-3 rounded-lg border shadow-sm">
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">4.9 Rating</div>
                      <div className="text-xs text-muted-foreground">Priority Customer</div>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm font-medium">
                      <span>Job Progress</span>
                      <span>85%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[85%] rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button className="w-full bg-primary hover:bg-primary/90">Job Details</Button>
                    <Button variant="outline" className="w-full bg-white">Navigate</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recent History Table */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Recent Job History</h3>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                See All Activity <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            
            <Card className="shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-muted/30 text-muted-foreground font-medium border-b">
                    <tr>
                      <th className="px-6 py-4">Service & Customer</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Amount</th>
                      <th className="px-6 py-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {[
                      { service: "HVAC Maintenance", customer: "James Wilson", date: "Sep 18, 2024", status: "Completed", amount: "$185.00", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80" },
                      { service: "Light Fixture Install", customer: "Linda Chen", date: "Sep 17, 2024", status: "Completed", amount: "$95.00", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80" },
                      { service: "Pipe Leak Repair", customer: "Robert Smith", date: "Sep 16, 2024", status: "Canceled", amount: "$0.00", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" },
                      { service: "Cabinet Assembly", customer: "Emily Davis", date: "Sep 15, 2024", status: "Completed", amount: "$240.00", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" },
                    ].map((job, i) => (
                      <tr key={i} className="hover:bg-muted/10 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={job.img} />
                              <AvatarFallback>{job.customer[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{job.service}</div>
                              <div className="text-xs text-muted-foreground">{job.customer}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{job.date}</td>
                        <td className="px-6 py-4">
                          <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                            job.status === 'Completed' 
                              ? 'bg-green-50 text-green-700 border-green-200' 
                              : 'bg-red-50 text-red-700 border-red-200'
                          }`}>
                            {job.status === 'Completed' ? <CheckCircle2 className="w-3 h-3 mr-1" /> : null}
                            {job.status}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right font-medium">{job.amount}</td>
                        <td className="px-6 py-4 text-center">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="w-4 h-4 text-muted-foreground" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          <div className="mt-8 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Boost your visibility?</h3>
                <p className="text-muted-foreground text-sm max-w-lg">
                  Providers with a 98% completion rate get 2x more job invites. You are currently at 94%.
                </p>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">Optimize Profile</Button>
          </div>
        </main>
      </div>
    </div>
  );
}
