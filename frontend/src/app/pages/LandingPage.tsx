import { Link } from 'react-router';
import { Search, CheckCircle2, Star, MapPin, ArrowRight, Menu, Home } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';

export function LandingPage() {
  const services = [
    {
      title: "Deep Home Cleaning",
      subtitle: "Professional & Insured Pro",
      price: "$89",
      image: "https://images.unsplash.com/photo-1758273238370-3bc08e399620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBjbGVhbmluZyUyMGhvbWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzEyMDgzMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "TOP RATED",
    },
    {
      title: "Expert Plumbing",
      subtitle: "Professional & Insured Pro",
      price: "$120",
      image: "https://images.unsplash.com/photo-1590706673178-5fd074c14f30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwZml4aW5nJTIwc2lua3xlbnwxfHx8fDE3NzEyMDMzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "AVAILABLE",
    },
    {
      title: "Electrical Maintenance",
      subtitle: "Professional & Insured Pro",
      price: "$110",
      image: "https://images.unsplash.com/photo-1617571607645-dd7dd3bf7f6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmclMjB0b29sc3xlbnwxfHx8fDE3NzEyMDgzMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "VERIFIED",
    },
    {
      title: "Garden Landscaping",
      subtitle: "Professional & Insured Pro",
      price: "$75",
      image: "https://images.unsplash.com/photo-1724556295135-ff92b9aa0a55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW5lciUyMGxhbmRzY2FwaW5nJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzEyMDgzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "NEW",
    },
  ];

  const categories = [
    { name: "Popular" },
    { name: "AC Repair" },
    { name: "Kitchen Deep Clean" },
    { name: "Wall Painting" },
    { name: "House Moving" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#16B8A6] flex items-center justify-center">
                <Home className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-[#16B8A6]">UTILE</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-900">Explore Services</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">How It Works</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Safety</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex text-gray-600">
              Become a Pro
            </Button>
            <Button variant="ghost" className="text-gray-600">Login</Button>
            <Button className="bg-[#16B8A6] hover:bg-[#1BA799] text-white">Sign Up</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F0FFFE] to-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 mb-6">
              <MapPin className="w-4 h-4 text-[#16B8A6]" />
              <span className="text-sm">Located in 25,000+ neighborhoods</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              Your home, <span className="text-[#16B8A6] italic">simplified.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Book vetted, high-quality professionals for everything from cleaning to repairs. Done right the first time.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3">
                  <Search className="w-5 h-5 text-gray-400" />
                  <Input 
                    placeholder="What do you need help with?" 
                    className="border-0 bg-transparent focus-visible:ring-0 p-0"
                  />
                </div>
                <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3 min-w-[200px]">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <Input 
                    placeholder="Anywhere" 
                    className="border-0 bg-transparent focus-visible:ring-0 p-0"
                  />
                </div>
                <Button className="bg-[#16B8A6] hover:bg-[#1BA799] text-white px-8 rounded-xl">
                  Find Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-sm text-gray-500">Popular:</span>
              {categories.map((cat) => (
                <Badge 
                  key={cat.name} 
                  variant="outline" 
                  className="px-4 py-1.5 rounded-full hover:bg-[#16B8A6] hover:text-white hover:border-[#16B8A6] cursor-pointer transition-colors"
                >
                  {cat.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="text-center mb-8 text-gray-500">Why choose UTILE?</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#16B8A6]" />
              <span>Verified Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-[#16B8A6]" />
              <span>4.8/5 Service Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#16B8A6]" />
              <span>Happiness Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Popular Services</h2>
              <p className="text-gray-600">Trusted by local residents in your neighborhood. Top rewards.</p>
            </div>
            <Button variant="ghost" className="text-[#16B8A6] hover:text-[#1BA799]">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#16B8A6] text-white border-0">
                    {service.tag}
                  </Badge>
                </div>
                <div className="p-5">
                  <h3 className="font-bold mb-1">{service.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{service.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Starting from</span>
                    <span className="text-xl font-bold text-[#16B8A6]">{service.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">Getting things done is easy</h2>
            <p className="text-gray-600">We've redesigned home maintenance to be as simple as ordering online. Just three steps to a better home.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E8F9F7] rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <Search className="w-7 h-7 text-[#16B8A6]" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#16B8A6] rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
              </div>
              <h3 className="font-bold mb-2">Search & Compare</h3>
              <p className="text-sm text-gray-600">Search from a wide variety of home services and compare prices, reviews, and availability.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#E8F9F7] rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <CheckCircle2 className="w-7 h-7 text-[#16B8A6]" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#16B8A6] rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
              </div>
              <h3 className="font-bold mb-2">Book Instantly</h3>
              <p className="text-sm text-gray-600">Pick a time slot that works for you. Security checks on all pros verified before you book. It's safe and secure.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#E8F9F7] rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <Star className="w-7 h-7 text-[#16B8A6]" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#16B8A6] rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
              </div>
              <h3 className="font-bold mb-2">Relax & Enjoy</h3>
              <p className="text-sm text-gray-600">Your pro will arrive on time and you can sit back. Your job will get done in no time. It's that simple and stress free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1766430956209-72d1c28a16ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjByZWxheGluZyUyMG1vZGVybiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcxMjA3ODgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Customer relaxing"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm mb-4 italic">
                  "UTILE changed everything. I needed a deep clean for my new home, and the pro I booked was amazing. High quality service, and very timely!"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="https://i.pravatar.cc/150?img=5" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-sm">Sarah Jackson</p>
                    <p className="text-xs text-gray-500">Seattle, WA</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-700 border-0">Weekend Special</Badge>
              <h2 className="text-4xl font-bold mb-4">
                Spend your weekends <span className="text-[#16B8A6] italic">living</span>, not repairing.
              </h2>
              <p className="text-gray-600 mb-6">
                Join thousands of homeowners who have reclaimed their free time. Our platform connects you with top-tier pros for everything from cleanings to repairs. 1% of service providers on our site, all backed by our $5,000,000 guarantee.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#16B8A6] flex-shrink-0" />
                  <span className="text-sm">Strict ID point background check for every pro</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#16B8A6] flex-shrink-0" />
                  <span className="text-sm">Fixed-option pricing-no hidden surprises</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#16B8A6] flex-shrink-0" />
                  <span className="text-sm">24/7 dedicated support for every booking</span>
                </div>
              </div>

              <Button className="bg-[#16B8A6] hover:bg-[#1BA799] text-white">
                Learn More About Our Bookables
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#16B8A6] to-[#1BA799] text-white rounded-3xl mx-4 lg:mx-8 mb-8">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to simplify your home life?</h2>
          <p className="text-lg mb-8 opacity-90">
            Download the UTILE app or sign up today to get $20 off your first booking. Experience home care the modern way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#16B8A6] hover:bg-gray-100">
              Create Free Account
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Support
            </Button>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold">4.9/5</div>
              <div className="text-sm opacity-80">App Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">1M+</div>
              <div className="text-sm opacity-80">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">25K+</div>
              <div className="text-sm opacity-80">Verified Pros</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Demo Navigation */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 mb-8 border border-gray-200">
            <h4 className="font-bold mb-4 text-center">🎨 Explore All Views</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              <Link to="/">
                <Button variant="outline" className="w-full border-[#16B8A6] text-[#16B8A6] hover:bg-[#E8F9F7]">
                  🏠 Home
                </Button>
              </Link>
              <Link to="/provider">
                <Button variant="outline" className="w-full border-[#16B8A6] text-[#16B8A6] hover:bg-[#E8F9F7]">
                  📊 Dashboard
                </Button>
              </Link>
              <Link to="/jobs">
                <Button variant="outline" className="w-full border-[#16B8A6] text-[#16B8A6] hover:bg-[#E8F9F7]">
                  💼 Job Pool
                </Button>
              </Link>
              <Link to="/mobile">
                <Button variant="outline" className="w-full border-[#16B8A6] text-[#16B8A6] hover:bg-[#E8F9F7]">
                  📱 Mobile
                </Button>
              </Link>
              <Link to="/mobile-jobs">
                <Button variant="outline" className="w-full border-[#16B8A6] text-[#16B8A6] hover:bg-[#E8F9F7]">
                  📋 Mobile Jobs
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#16B8A6]">House Cleaning</a></li>
                <li><a href="#" className="hover:text-[#16B8A6]">Plumbing</a></li>
                <li><a href="#" className="hover:text-[#16B8A6]">Electrical</a></li>
                <li><a href="#" className="hover:text-[#16B8A6]">Gardening</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#16B8A6]">About Us</a></li>
                <li><a href="#" className="hover:text-[#16B8A6]">Careers</a></li>
                <li><a href="#" className="hover:text-[#16B8A6]">Press</a></li>
                <li><a href="#" className="hover:text-[#16B8A6]">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#16B8A6]">Help Center</a></li>
                <li><a href="#" className="hover:text-[#16B8A6]">Trust & Safety</a></li>
                <li><a href="#" className="hover:text-[#16B8A6]">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#16B8A6]">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#16B8A6] flex items-center justify-center">
                  <Home className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-[#16B8A6]">UTILE</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Simplifying homeownership with trusted, professional home services.
              </p>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 2024 UTILE Marketplace. All rights reserved.</p>
            <div className="flex gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-[#16B8A6]">Cookie Settings</a>
              <a href="#" className="hover:text-[#16B8A6]">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
