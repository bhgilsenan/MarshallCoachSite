import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Assets
import robertPhoto from "@assets/DSC03021_1763602437938.jpg";
import logo from "@assets/MarshallCoach LINE_LOGO_1763602433182.png";

// Shared container class for consistent margins
const CONTAINER_CLASS = "container mx-auto px-6 md:px-12 xl:px-[120px] max-w-[1800px]";

// Navigation Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#story" },
    { name: "Approach", href: "#approach" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border h-16">
      <div className={`${CONTAINER_CLASS} h-full`}>
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img src={logo} alt="Marshall Coach" className="h-8 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium uppercase tracking-widest text-foreground/70 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="rounded-none font-bold uppercase tracking-widest" size="sm">
              Book Alignment Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-6 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-lg font-heading font-bold uppercase text-foreground hover:bg-secondary rounded-none"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <Button className="w-full rounded-none font-bold uppercase" size="lg">
                  Book Alignment Call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className={`${CONTAINER_CLASS} py-8 md:py-0`}>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4 inline-block relative">
               <span className="font-hand text-sm md:text-base text-accent rotate-[-4deg] block">
                 Sincerity. Authenticity. Guidance.
               </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-[0.95] mb-6 uppercase tracking-tighter">
              COACHING FOR <br/>
              PROFESSIONALS <br/>
              READY TO <span className="text-primary block">MOVE FORWARD.</span>
            </h1>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-lg font-medium">
              I'm Robert Marshall — a former VP who spent three decades helping teams grow, navigate change, and find clarity. Now I help individuals do the same.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-none font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all border-2 border-black">
                Book Alignment Call
              </Button>
              <Button variant="outline" size="lg" className="rounded-none border-2 border-black font-bold uppercase tracking-widest hover:bg-secondary transition-colors">
                Contact via Email
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center h-full w-full"
          >
            <div className="relative w-full max-w-[400px] lg:max-w-[480px]">
              {/* Geometric shapes inspired by the logo colors */}
              <div className="absolute top-6 right-6 w-full h-full border-4 border-primary -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary -z-20"></div>
              
              <div className="relative z-10 border-4 border-black bg-white p-2">
                <img 
                  src={robertPhoto} 
                  alt="Robert Marshall" 
                  className="w-full h-auto object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Credibility Strip
const CredibilityStrip = () => {
  const companies = ["AKQA", "Razorfish", "R/GA", "Fox", "The New York Times"];
  
  return (
    <section className="py-12 md:py-16 bg-black text-white border-y border-black">
      <div className={CONTAINER_CLASS}>
        <p className="text-center text-sm font-bold text-white/60 mb-6 uppercase tracking-[0.2em]">Experience leading teams at</p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12">
          {companies.map((company) => (
            <span key={company} className="text-lg md:text-xl font-bold font-heading uppercase tracking-tighter text-white/80 hover:text-primary transition-colors cursor-default">
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// Who I Help
const WhoIHelp = () => {
  const profiles = [
    {
      title: "Mid-to-Late Career Professionals",
      description: "If you feel stuck, plateaued, or unsure how to reach the next level, we create a path forward."
    },
    {
      title: "Career Transitioners",
      description: "Whether voluntary or involuntary, I help you regain momentum, structure your search, and stay grounded."
    },
    {
      title: "High-Functioning ADHD Adults",
      description: "For those navigating overwhelm, procrastination, or the basics no one teaches, we build systems that work for your brain."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-secondary/30">
      <div className={CONTAINER_CLASS}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Who I Help</h2>
          <p className="text-base font-hand text-primary rotate-[-1deg]">
            For people ready to do the work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 lg:p-8 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_0px_var(--color-primary)] transition-all"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary mb-5 flex items-center justify-center text-white font-bold text-lg lg:text-xl">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold mb-3 font-heading uppercase leading-none">{profile.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-medium text-sm">
                {profile.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl mb-4 font-heading font-bold uppercase">Not sure where you fit?</p>
          <Button variant="link" className="text-primary text-base p-0 h-auto font-hand font-bold hover:no-underline rotate-[-2deg] hover:rotate-0 transition-transform">
            Let's talk about your unique situation <span aria-hidden="true" className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

// Approach / Differentiators
const Approach = () => {
  const differentiators = [
    "People-first leadership style (30+ years)",
    "VP-level experience (Fox, NYT)",
    "Deep listening & pattern recognition",
    "Clear, actionable goal-setting",
    "ADHD-informed coaching",
    "Warm, direct, judgment-free support"
  ];

  return (
    <section id="approach" className="py-12 md:py-20">
      <div className={CONTAINER_CLASS}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase leading-none">What Makes My Approach <span className="text-primary">Different</span></h2>
            <p className="text-base font-medium text-foreground mb-8 border-l-4 border-primary pl-6">
              High-level leadership experience meets human-centered coaching designed to get you unstuck.
            </p>
            <div className="grid gap-3 lg:gap-4">
              {differentiators.map((item, index) => (
                <div key={index} className="flex gap-4 items-center group">
                  <div className="flex-shrink-0 w-6 h-6 border-2 border-black flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-wide text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-black transform translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4"></div>
            <div className="relative bg-white p-8 lg:p-12 border-2 border-black h-full flex flex-col justify-center">
              <h3 className="text-base font-hand font-bold mb-4 lg:mb-6 text-accent rotate-[-2deg] origin-left">My Philosophy</h3>
              <blockquote className="text-2xl md:text-3xl font-heading font-bold uppercase leading-tight mb-6 lg:mb-8">
                "I've always been an <span className="text-primary">80% people</span>, <span className="text-primary">20% business</span> leader in roles that demanded the opposite."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-1 w-12 bg-black"></div>
                <span className="text-sm font-bold uppercase tracking-widest">Robert Marshall</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Story
const Story = () => {
  return (
    <section id="story" className="py-12 md:py-20 bg-secondary text-secondary-foreground border-y border-black">
      <div className={`${CONTAINER_CLASS} max-w-4xl`}>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">My Story</h2>
          <div className="w-24 h-2 bg-primary mx-auto"></div>
        </div>
        <div className="prose prose-lg prose-neutral mx-auto text-foreground/80 font-medium">
          <p className="mb-6 text-lg lg:text-xl leading-relaxed">
            I spent three decades building a career in project management and delivery leadership, working at top agencies and later becoming a VP at Fox and The New York Times. 
          </p>
          <p className="mb-6 text-lg lg:text-xl leading-relaxed">
            At the height of my career, I realized something important: the parts of my work that energized me most weren’t the business—they were the people. 
          </p>
          <div className="my-10 p-6 lg:p-8 border-l-8 border-primary bg-white">
            <p className="text-xl lg:text-2xl font-bold italic text-black m-0">
              "At 48, I was diagnosed with ADHD. It explained so much—and showed me that the systems I’d built to thrive could help others too."
            </p>
          </div>
          <p className="text-lg lg:text-xl leading-relaxed">
            I transitioned into coaching at my peak, trained through the Jay Shetty Certification School, and now dedicate my work to helping people grow, get unstuck, and move toward what they truly want next.
          </p>
        </div>
      </div>
    </section>
  );
};

// How It Works
const Process = () => {
  return (
    <section className="py-20 md:py-28">
      <div className={CONTAINER_CLASS}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase">How Coaching Works</h2>
          <p className="text-lg lg:text-xl font-hand text-muted-foreground rotate-2">
            Simple. Structured. Effective.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 relative">
          {[
            {
              step: "1",
              title: "Alignment Call",
              desc: "We explore your goals, your challenges, and whether we’re the right fit. (Free)"
            },
            {
              step: "2",
              title: "Set Clear Goals",
              desc: "Together we create a structured, measurable plan tailored to your needs."
            },
            {
              step: "3",
              title: "Bi-Weekly Coaching",
              desc: "Every two weeks, we track progress, uncover new insights, and adjust as needed."
            }
          ].map((item, index) => (
            <div key={index} className={`relative p-6 lg:p-8 border-black ${index !== 2 ? 'md:border-r-2 border-b-2 md:border-b-0' : ''} hover:bg-secondary/20 transition-colors group`}>
              <div className="text-5xl lg:text-6xl font-heading font-bold text-black/10 mb-4 group-hover:text-primary/20 transition-colors">
                0{item.step}
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 font-heading uppercase">{item.title}</h3>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="xl" className="text-base lg:text-lg px-10 py-6 rounded-none font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all border-2 border-black bg-primary text-white hover:bg-primary/90">
            Book Your Free Alignment Call
          </Button>
        </div>
      </div>
    </section>
  );
};

// Services (Now zCal Embed)
const Services = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.zcal.co/embed/v1/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Optional: Clean up the script if needed, but usually embed scripts 
      // are global and checking existence before appending is safer, 
      // but for this simple case, we just append.
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="services" className="py-20 md:py-28 bg-black text-white">
      <div className={CONTAINER_CLASS}>
        <div className="flex flex-col items-center mb-12 gap-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 uppercase">Schedule Your Time</h2>
          <p className="text-white/60 text-base lg:text-lg font-medium uppercase tracking-widest max-w-2xl">
            Ready to get started? Choose a time that works for you below.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto bg-white rounded-none border-2 border-white/20 flex justify-center p-8 min-h-[600px]">
           <div className="zcal-inline-widget w-full h-full">
             <a href="https://zcal.co/i/724OIZf0" className="hidden">Discovery call - Schedule a meeting</a>
           </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Robert asked the questions I hadn’t asked myself in years.",
      author: "Senior Manager"
    },
    {
      quote: "I left every session with clarity and an actionable next step.",
      author: "Product Lead"
    },
    {
      quote: "I landed a new role in eight weeks after struggling for over a year.",
      author: "Client in Transition"
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className={CONTAINER_CLASS}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 uppercase">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, index) => (
            <div key={index} className="relative pt-8">
              <span className="absolute top-0 left-0 text-7xl lg:text-8xl text-primary/20 font-heading font-bold leading-none -translate-y-4">“</span>
              <p className="text-lg lg:text-2xl text-foreground font-bold font-heading leading-tight mb-6 relative z-10">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                 <div className="h-px w-8 bg-primary"></div>
                 <p className="text-xs lg:text-sm font-bold text-muted-foreground uppercase tracking-widest">
                  {t.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-secondary pt-20 pb-10 border-t-2 border-black">
      <div className={CONTAINER_CLASS}>
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="text-left mb-10 md:mb-0 max-w-xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase leading-[0.9]">Ready to <br/>move forward?</h2>
            <p className="text-foreground/70 text-lg lg:text-xl font-medium">
              Whether you’re stuck, overwhelmed, or simply ready for something new, the next step is a conversation.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <Button size="xl" className="rounded-none bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg lg:text-xl font-bold uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Book Alignment Call
            </Button>
            <a href="mailto:robert@marshallcoach.com" className="text-center text-foreground/60 hover:text-black font-bold uppercase tracking-widest text-xs transition-colors mt-4">
              Or email me directly
            </a>
          </div>
        </div>

        <div className="border-t-2 border-black/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <img src={logo} alt="Marshall Coach" className="h-6 lg:h-8 w-auto opacity-80 mix-blend-multiply" />
            <div className="text-xs font-bold uppercase tracking-widest text-foreground/50">
              <p>© {new Date().getFullYear()} Robert Marshall</p>
              <p>Certified Coach — Jay Shetty Certification School</p>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-foreground/50 hover:text-black font-bold uppercase tracking-widest text-xs transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <CredibilityStrip />
        <WhoIHelp />
        <Approach />
        <Story />
        <Process />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
