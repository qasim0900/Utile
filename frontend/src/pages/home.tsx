import React from 'react';
import { Typography, Grid, Card, CardContent, Button, Box, Container, Avatar, Rating, IconButton } from '@mui/material';
import { Wrench, Car, Home as HomeIcon, CheckCircle, ShieldCheck, Zap, ArrowRight, Star } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  name: string;
  icon: LucideIcon;
  description: string;
  color: string;
  price: string;
}

const services: Service[] = [
  { name: 'Plumbing', icon: Wrench, description: 'Leaking pipes or new installations, we handle it all.', color: 'text-blue-600', price: 'Starts from $49' },
  { name: 'Mechanic', icon: Car, description: 'Roadside assistance and scheduled maintenance.', color: 'text-orange-600', price: 'Starts from $79' },
  { name: 'Cleaning', icon: HomeIcon, description: 'Sparkling clean homes and offices, every time.', color: 'text-green-600', price: 'Starts from $35' },
];

const Feature = ({ icon: Icon, title, desc }: { icon: LucideIcon, title: string, desc: string }) => (
  <Box className="flex items-start space-x-4">
    <Box className="bg-blue-100 p-2 rounded-lg text-blue-600">
      <Icon size={24} />
    </Box>
    <Box>
      <Typography variant="subtitle1" className="font-bold text-slate-900">{title}</Typography>
      <Typography variant="body2" className="text-slate-500">{desc}</Typography>
    </Box>
  </Box>
);

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <Card className="hover:shadow-2xl transition-all duration-500 border border-slate-100 bg-white rounded-3xl h-full flex flex-col group overflow-hidden">
    <Box className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
    <CardContent className="p-8 flex-grow flex flex-col">
      <Box className={`${service.color} mb-6 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-500`}>
        <service.icon size={32} />
      </Box>
      <Typography variant="h5" className="font-bold mb-2 tracking-tight text-slate-900">{service.name}</Typography>
      <Box className="flex items-center mb-4 space-x-1">
        <Rating value={4.8} readOnly size="small" precision={0.1} />
        <Typography variant="caption" className="text-slate-400 font-bold">(120+ Reviews)</Typography>
      </Box>
      <Typography variant="body2" className="text-slate-500 mb-6 leading-relaxed">
        {service.description}
      </Typography>
      <Box className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
        <Typography variant="subtitle2" className="font-black text-blue-600">{service.price}</Typography>
        <IconButton size="small" className="bg-slate-900 text-white hover:bg-blue-600 transition-colors">
          <ArrowRight size={18} />
        </IconButton>
      </Box>
    </CardContent>
  </Card>
);

const Home = () => {
  return (
    <Box className="bg-slate-50/50">
      <Container maxWidth="lg" className="py-12 md:py-20">
        {/* Hero Section */}
        <Grid container spacing={8} className="items-center mb-24">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 mb-6">
              <Zap size={16} className="fill-current" />
              <Typography variant="caption" className="font-black uppercase tracking-widest">Premium Marketplace</Typography>
            </Box>
            <Typography variant="h1" className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
              Expert Services, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Instantly Booked.</span>
            </Typography>
            <Typography variant="h6" className="text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
              We connect you with verified local professionals for all your home and office needs. Guaranteed quality at transparent prices.
            </Typography>
            <Box className="flex flex-wrap gap-4 mb-12">
              <Button variant="contained" size="large" className="bg-slate-900 hover:bg-blue-600 px-10 py-4 rounded-2xl shadow-xl shadow-slate-200 capitalize font-black text-lg">
                Find a Pro
              </Button>
              <Button variant="text" size="large" className="text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-2xl capitalize font-bold flex items-center space-x-2">
                <span>See how it works</span>
                <ArrowRight size={20} />
              </Button>
            </Box>
            <Box className="flex items-center space-x-6">
              <Box className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="border-4 border-white w-12 h-12" />
                ))}
              </Box>
              <Box>
                <Box className="flex items-center text-amber-500">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} className="fill-current" />)}
                </Box>
                <Typography variant="caption" className="text-slate-500 font-bold">Trusted by 10k+ customers</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} className="hidden md:block">
            <Box className="relative">
              <Box className="absolute -top-12 -left-12 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl" />
              <Box className="absolute -bottom-12 -right-12 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl" />
              <Box className="relative rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=1000" alt="Professional at work" className="w-full h-[600px] object-cover" />
                <Box className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-xl">
                  <Box className="flex items-center justify-between">
                    <Box>
                      <Typography variant="subtitle2" className="font-bold text-slate-900">John Miller</Typography>
                      <Typography variant="caption" className="text-blue-600 font-bold">Verified Master Plumber</Typography>
                    </Box>
                    <Box className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Online</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Categories Section */}
        <Box className="mb-24">
          <Box className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <Box>
              <Typography variant="h3" className="font-black text-slate-900 mb-4 tracking-tight">Our Expert Categories</Typography>
              <Typography variant="body1" className="text-slate-500 max-w-xl">Choose from our wide range of professional services, each performed by vetted and background-checked experts.</Typography>
            </Box>
            <Button variant="outlined" className="rounded-xl border-2 font-black py-3 px-8 text-slate-900 border-slate-200 hover:border-slate-900 capitalize">
              Explore All Categories
            </Button>
          </Box>
          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid key={service.name} size={{ xs: 12, sm: 6, md: 4 }}>
                <ServiceCard service={service} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Why Choose Us */}
        <Box className="bg-slate-900 text-white rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          <Box className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
          <Grid container spacing={12} className="relative z-10 items-center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h3" className="font-black mb-8 leading-tight tracking-tight">Why thousands trust <span className="text-blue-400">UTILE</span></Typography>
              <Box className="space-y-10 text-white">
                <Feature icon={ShieldCheck} title="Vetted Professionals" desc="Every pro undergoes a rigorous 5-step background check and skill assessment." />
                <Feature icon={CheckCircle} title="Happiness Guarantee" desc="Not satisfied with the result? We'll make it right or give you your money back." />
                <Feature icon={Zap} title="Instant Booking" desc="No more back-and-forth calls. See prices and book instantly on your schedule." />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
                <Typography variant="h6" className="font-bold mb-8 flex items-center space-x-3">
                  <Star className="text-amber-400 fill-current" />
                  <span>Latest Customer Feedback</span>
                </Typography>
                <Box className="space-y-6">
                  {[1, 2].map((i) => (
                    <Box key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5">
                      <Box className="flex items-center space-x-4 mb-4">
                        <Avatar src={`https://i.pravatar.cc/100?img=${i+20}`} />
                        <Box>
                          <Typography variant="subtitle2" className="font-bold">Sarah Jenkins</Typography>
                          <Typography variant="caption" className="text-slate-400">House Cleaning Service</Typography>
                        </Box>
                      </Box>
                      <Typography variant="body2" className="text-slate-300 italic leading-relaxed">
                        "The booking process was incredibly smooth. My cleaner arrived exactly on time and did an amazing job. Highly recommended!"
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
