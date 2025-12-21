import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
          <a href="#" className="flex-shrink-0">
            <img src={logo} alt="Marshall Coach" className="h-8 w-auto object-contain" />
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium uppercase tracking-wide text-foreground/70 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" size="sm">
              Book Call
            </Button>
          </div>

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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full mt-4" size="md">
                Book Alignment Call
              </Button>
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
            <div className="mb-4">
              <span className="font-hand text-lg text-accent block">
                Sincerity. Authenticity. Guidance.
              </span>
            </div>
            <h1 className="mb-6">
              COACHING FOR <br/>
              PROFESSIONALS <br/>
              READY TO <span className="text-primary block">MOVE FORWARD.</span>
            </h1>
            <p className="text-base text-muted-foreground mb-8 max-w-lg">
              I'm Robert Marshall — a former VP who spent three decades helping teams grow, navigate change, and find clarity. Now I help individuals do the same.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Book Alignment Call
              </Button>
              <Button variant="secondary" size="lg">
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
    <section className="py-12 bg-black text-white border-y border-black">
      <div className={CONTAINER_CLASS}>
        <p className="text-center text-xs font-bold text-white/60 mb-6 uppercase tracking-wide">Experience leading teams at</p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {companies.map((company) => (
            <span key={company} className="text-lg md:text-xl font-bold font-heading uppercase text-white/80 hover:text-primary transition-colors">
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
    <section className="py-20 md:py-20 bg-secondary/30">
      <div className={CONTAINER_CLASS}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">Who I Help</h2>
          <p className="text-lg font-hand text-primary">
            For people ready to do the work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 border border-border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-primary text-white rounded-md flex items-center justify-center font-semibold mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold mb-3">{profile.title}</h3>
              <p className="text-sm text-muted-foreground">
                {profile.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-base font-semibold mb-4">Not sure where you fit?</p>
          <Button variant="link" className="text-primary">
            Let's talk about your unique situation →
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
    <section id="approach" className="py-20 md:py-20">
      <div className={CONTAINER_CLASS}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">What Makes My Approach <span className="text-primary">Different</span></h2>
            <p className="text-base font-medium text-foreground mb-8 border-l-4 border-primary pl-6">
              High-level leadership experience meets human-centered coaching designed to get you unstuck.
            </p>
            <div className="grid gap-4">
              {differentiators.map((item, index) => (
                <div key={index} className="flex gap-3 items-start group">
                  <div className="flex-shrink-0 w-6 h-6 border-2 border-black flex items-center justify-center mt-0.5 group-hover:bg-black group-hover:text-white transition-colors rounded-sm">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-black rounded-lg translate-x-2 translate-y-2"></div>
            <div className="relative bg-white p-8 border-2 border-black rounded-lg h-full flex flex-col justify-center">
              <h4 className="text-sm font-hand font-bold mb-4 text-accent">My Philosophy</h4>
              <blockquote className="text-lg font-semibold mb-6">
                "I've always been an <span className="text-primary">80% people</span>, <span className="text-primary">20% business</span> leader in roles that demanded the opposite."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-8 bg-black"></div>
                <span className="text-xs font-semibold uppercase tracking-wide">Robert Marshall</span>
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
    <section id="story" className="py-20 md:py-20 bg-secondary text-secondary-foreground border-y border-black">
      <div className={`${CONTAINER_CLASS} max-w-4xl`}>
        <div className="text-center mb-10">
          <h2 className="mb-6">My Story</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="space-y-6 text-foreground/80">
          <p className="text-base leading-relaxed">
            I spent three decades building a career in project management and delivery leadership, working at top agencies and later becoming a VP at Fox and The New York Times. 
          </p>
          <p className="text-base leading-relaxed">
            At the height of my career, I realized something important: the parts of my work that energized me most weren't the business—they were the people. 
          </p>
          <div className="my-8 p-6 border-l-4 border-primary bg-white rounded-md">
            <p className="text-base font-medium italic text-black m-0">
              "At 48, I was diagnosed with ADHD. It explained so much—and showed me that the systems I'd built to thrive could help others too."
            </p>
          </div>
          <p className="text-base leading-relaxed">
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
    <section className="py-20 md:py-20">
      <div className={CONTAINER_CLASS}>
        <div className="text-center mb-12">
          <h2 className="mb-4">How Coaching Works</h2>
          <p className="text-base font-hand text-muted-foreground">
            Simple. Structured. Effective.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-border rounded-lg overflow-hidden">
          {[
            {
              step: "1",
              title: "Alignment Call",
              desc: "We explore your goals, your challenges, and whether we're the right fit. (Free)"
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
            <div key={index} className={`relative p-6 ${index !== 2 ? 'border-r border-border md:border-b-0 border-b' : ''} hover:bg-muted/50 transition-colors`}>
              <div className="text-4xl font-heading font-bold text-black/10 mb-2">
                0{item.step}
              </div>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">
            Book Your Free Alignment Call
          </Button>
        </div>
      </div>
    </section>
  );
};

// Services (zCal Embed)
const Services = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.zcal.co/embed/v1/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="services" className="py-20 md:py-20 bg-black text-white">
      <div className={CONTAINER_CLASS}>
        <div className="flex flex-col items-center mb-12 gap-4 text-center">
          <h2 className="text-white">Schedule Your Time</h2>
          <p className="text-sm text-white/60 font-medium uppercase tracking-wide max-w-2xl">
            Ready to get started? Choose a time that works for you below.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto bg-white rounded-lg flex justify-center p-8 min-h-[600px]">
          <div className="zcal-inline-widget w-full">
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
      quote: "Robert asked the questions I hadn't asked myself in years.",
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
    <section id="testimonials" className="py-20 md:py-20">
      <div className={CONTAINER_CLASS}>
        <h2 className="text-center mb-12">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="relative pt-6">
              <span className="absolute top-0 left-0 text-5xl text-primary/20 font-heading font-bold leading-none">
                "
              </span>
              <p className="text-base font-semibold text-foreground leading-relaxed mb-4 relative z-10">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-6 bg-primary rounded-full"></div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
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
    <footer className="bg-secondary pt-16 pb-10 border-t border-border">
      <div className={CONTAINER_CLASS}>
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          <div className="text-left max-w-lg">
            <h2 className="mb-4">Ready to move forward?</h2>
            <p className="text-sm text-foreground/70">
              Whether you're stuck, overwhelmed, or simply ready for something new, the next step is a conversation.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <Button size="lg">
              Book Alignment Call
            </Button>
            <a href="mailto:robert@marshallcoach.com" className="text-center text-foreground/60 hover:text-black font-semibold text-xs uppercase tracking-wide transition-colors">
              Or email me directly
            </a>
          </div>
        </div>

        <div className="border-t border-border/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Marshall Coach" className="h-6 w-auto opacity-60" />
            <div className="text-xs text-foreground/50">
              <p>© {new Date().getFullYear()} Robert Marshall</p>
              <p>Certified Coach — Jay Shetty Certification School</p>
            </div>
          </div>
          <a href="#" className="text-foreground/50 hover:text-foreground text-xs font-semibold uppercase tracking-wide transition-colors">LinkedIn</a>
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
