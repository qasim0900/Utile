import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, CheckCircle2, Star, ShieldCheck, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import heroImage from "@assets/Home___Landing_Page_(Desktop)_1771201403510.jpg"; 

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-lg">
              <span className="relative top-[1px]">U</span>
            </div>
            <span className="text-xl font-bold text-primary tracking-tight">UTILE</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Explore Services</a>
            <a href="#" className="hover:text-primary transition-colors">How it Works</a>
            <a href="#" className="hover:text-primary transition-colors">Safety</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/provider">
              <span className="text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer">Become a Pro</span>
            </Link>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">Login</Button>
            <Button className="bg-primary hover:bg-primary/90 rounded-full px-6">Sign Up</Button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t p-4 space-y-4 bg-white">
            <a href="#" className="block py-2 text-sm font-medium">Explore Services</a>
            <a href="#" className="block py-2 text-sm font-medium">How it Works</a>
            <a href="#" className="block py-2 text-sm font-medium">Safety</a>
            <div className="pt-4 border-t flex flex-col gap-2">
              <Link href="/provider">
                <Button variant="outline" className="w-full justify-start">Become a Pro</Button>
              </Link>
              <Button variant="ghost" className="w-full justify-start">Login</Button>
              <Button className="w-full">Sign Up</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-accent/30 to-white">
        <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
          <div className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-xs font-semibold text-primary mb-6 shadow-sm">
            <ShieldCheck className="mr-1 h-3.5 w-3.5" />
            Trusted by 10,000+ homeowners
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 max-w-4xl mx-auto">
            Your home, <span className="text-primary">simplified.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Book vetted, high-quality professionals for everything from cleaning to repairs. Done right the first time.
          </p>

          <div className="max-w-3xl mx-auto bg-white p-2 rounded-2xl shadow-xl border border-border/50 flex flex-col md:flex-row gap-2">
            <div className="relative flex-1 flex items-center px-4 h-12 md:h-14">
              <Search className="h-5 w-5 text-muted-foreground mr-3" />
              <input 
                type="text" 
                placeholder="What do you need help with?" 
                className="w-full bg-transparent outline-none text-base placeholder:text-muted-foreground/70"
              />
            </div>
            <div className="relative md:w-48 flex items-center px-4 border-t md:border-t-0 md:border-l border-border h-12 md:h-14">
              <MapPin className="h-5 w-5 text-muted-foreground mr-3" />
              <input 
                type="text" 
                placeholder="Zip Code" 
                defaultValue="Anywhere"
                className="w-full bg-transparent outline-none text-base text-muted-foreground"
              />
            </div>
            <Button size="lg" className="h-12 md:h-14 rounded-xl px-8 text-base font-medium shadow-lg hover:shadow-xl transition-all">
              Find Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="font-medium">Popular:</span>
            <button className="hover:text-primary underline decoration-dotted">AC Repair</button>
            <button className="hover:text-primary underline decoration-dotted">Kitchen Deep Clean</button>
            <button className="hover:text-primary underline decoration-dotted">Wall Painting</button>
            <button className="hover:text-primary underline decoration-dotted">House Moving</button>
          </div>
        </div>
        
        {/* Abstract shapes/blobs background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-y bg-white/50 backdrop-blur-sm py-8">
        <div className="container px-4 mx-auto flex flex-wrap justify-center md:justify-between gap-8 text-sm md:text-base font-medium text-muted-foreground/80">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span>Verified Professionals</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            <span>4.8/5 Service Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span>Happiness Guarantee</span>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-24 container px-4 md:px-6 mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Popular Services</h2>
            <p className="text-muted-foreground">The most booked services in your neighborhood this month.</p>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/5 hidden md:flex">
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Deep Home Cleaning", price: "89", image: "https://images.unsplash.com/photo-1581578731117-104f2a417954?w=800&q=80" },
            { title: "Expert Plumbing", price: "120", image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80" },
            { title: "Electrical Maintenance", price: "110", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80" },
            { title: "Garden Landscaping", price: "75", image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80" }
          ].map((service, i) => (
            <div key={i} className="group relative bg-white rounded-2xl border overflow-hidden hover:shadow-lg transition-all cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-bold text-primary uppercase tracking-wide">
                  Top Rated
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">Professional & Vetted Pros</p>
                <div className="flex justify-between items-center border-t pt-4">
                  <span className="text-xs text-muted-foreground font-medium uppercase">Starting from</span>
                  <span className="text-lg font-bold text-primary">${service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full">View All Services</Button>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Getting things done is easy</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
            We've redesigned home maintenance to be as simple as ordering coffee. Just three steps to a better home.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { 
                step: "1", 
                title: "Search & Compare", 
                desc: "Browse hundreds of vetted pros with upfront pricing and real customer reviews.",
                icon: Search
              },
              { 
                step: "2", 
                title: "Book Instantly", 
                desc: "Pick a schedule that works for you. Securely book and pay online in under 60 seconds.",
                icon: CheckCircle2
              },
              { 
                step: "3", 
                title: "Relax & Enjoy", 
                desc: "Your pro arrives on time and gets it done. Your payment is held until the job is finished.",
                icon: Star
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center text-primary">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container px-4 md:px-6 mx-auto">
        <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-bottom-left"></div>
          
          <div className="relative z-10 px-8 py-16 md:p-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to simplify your home life?
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Download the UTILE app or sign up today to get $20 off your first booking. Experience home care the modern way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 h-14 rounded-full">
                Create Free Account
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white font-medium px-8 h-14 rounded-full">
                Contact Support
              </Button>
            </div>
            
            <div className="mt-12 flex justify-center gap-8 md:gap-16 text-white/90">
              <div className="text-center">
                <div className="font-bold text-2xl md:text-3xl">4.9/5</div>
                <div className="text-xs uppercase tracking-wider opacity-70">App Store</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl md:text-3xl">1M+</div>
                <div className="text-xs uppercase tracking-wider opacity-70">Bookings Made</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl md:text-3xl">25k+</div>
                <div className="text-xs uppercase tracking-wider opacity-70">Vetted Pros</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2 pr-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-lg">
                  <span className="relative top-[1px]">U</span>
                </div>
                <span className="text-xl font-bold text-primary tracking-tight">UTILE</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
                Connecting homeowners with trusted, professional service providers for a stress-free home maintenance experience.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Services</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">House Cleaning</a></li>
                <li><a href="#" className="hover:text-primary">Plumbing</a></li>
                <li><a href="#" className="hover:text-primary">Electrical</a></li>
                <li><a href="#" className="hover:text-primary">Gardening</a></li>
                <li><a href="#" className="hover:text-primary">Moving</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">About Us</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
                <li><a href="#" className="hover:text-primary">Press</a></li>
                <li><a href="#" className="hover:text-primary">Safety</a></li>
                <li><a href="#" className="hover:text-primary">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Support</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Help Center</a></li>
                <li><a href="#" className="hover:text-primary">Trust & Safety</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
            <p>© 2026 UTILE Marketplace Inc. All rights reserved.</p>
            <div className="flex items-center gap-1 mt-4 md:mt-0">
              <span>Made with</span>
              <span className="font-bold text-foreground">Replit</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
