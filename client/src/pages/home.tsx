import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronRight, Menu, X, ArrowRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

// Assets
import robertPhoto from "@assets/DSC03021_1763602437938.jpg";
import logo from "@assets/MarshallCoach LINE_LOGO_1763602433182.png";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#story" },
    { name: "Approach", href: "#approach" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 group">
            <img 
              src={logo} 
              alt="Marshall Coach" 
              className="h-8 md:h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80" 
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <Button className="rounded-full font-medium px-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5">
              Book Alignment Call
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2 hover:bg-secondary rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-0 bg-background z-40 pt-24 px-6"
          >
            <div className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-heading font-medium text-foreground hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8">
                <Button className="w-full rounded-full text-lg py-6" size="lg">
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

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 -z-10 opacity-50"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div 
            className="lg:col-span-7 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-[1.05] tracking-tight mb-8">
              Coaching for Professionals <br className="hidden md:block" />
              Ready to <span className="text-primary relative inline-block">
                Move Forward
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent fill-current -z-10 opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" strokeWidth="0" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl font-light">
              I'm Robert Marshall — a former VP who spent three decades helping teams grow, navigate change, and find clarity. Now I help individuals do the same.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Button size="xl" className="rounded-full text-lg px-10 h-16 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                Book Your Free Alignment Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl" className="rounded-full text-lg px-8 h-16 border-2 bg-transparent hover:bg-secondary/50">
                Contact via Email
              </Button>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            className="lg:col-span-5 relative"
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] aspect-[4/5] lg:aspect-[3/4]">
              <img 
                src={robertPhoto} 
                alt="Robert Marshall" 
                className="w-full h-full object-cover"
              />
              {/* Glass Card Overlay */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                <p className="font-serif italic text-lg text-foreground mb-2">"80% people, 20% business."</p>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Robert Marshall</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CredibilityStrip = () => {
  const companies = ["AKQA", "Razorfish", "R/GA", "Fox", "The New York Times"];
  return (
    <section className="py-12 border-y border-black/5 bg-white/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-8">
          Experience leading teams at
        </p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 md:gap-x-24 opacity-50 grayscale mix-blend-multiply">
          {companies.map((company) => (
            <span key={company} className="text-xl md:text-2xl font-heading font-bold text-foreground/80">
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhoIHelp = () => {
  const profiles = [
    {
      title: "Mid-to-Late Career Professionals",
      desc: "If you feel stuck, plateaued, or unsure how to reach the next level, we create a path forward.",
      icon: "🏔️"
    },
    {
      title: "High-Functioning ADHD Adults & Early-Career Professionals",
      desc: "For those navigating overwhelm, procrastination, or the basics no one teaches, we build systems that work for your brain.",
      icon: "⚡"
    },
    {
      title: "Career Transitioners",
      desc: "Whether voluntary or involuntary, I help you regain momentum, structure your search, and stay grounded.",
      icon: "compass"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
              Who I Help
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              My coaching is designed for people who are ready to do the work but need a partner to help them see the way.
            </p>
          </div>
          <Button variant="ghost" className="text-primary font-semibold text-lg hover:bg-primary/5 -ml-4 md:ml-0">
            Not sure where you fit? Let's talk. <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[2rem] bg-secondary/30 border border-transparent hover:border-primary/10 hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform duration-500">
                {p.icon === "compass" ? "🧭" : p.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Approach = () => {
  const differentiators = [
    "A people-first leadership style developed over 30 years across three countries.",
    "VP-level experience managing teams of 40–60 at Fox and The New York Times.",
    "Deep listening that picks up what you say, what you mean, and what you’ve stopped asking yourself.",
    "Clear, actionable goal-setting so you always know your next step.",
    "ADHD-informed coaching based on lived experience.",
    "Warm, direct, judgment-free support."
  ];

  return (
    <section id="approach" className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              What Makes My Approach Different
            </h2>
            <p className="text-xl text-white/80 mb-10 font-light">
              High-level leadership experience meets human-centered coaching designed to get you unstuck.
            </p>
            
            <div className="space-y-6">
              {differentiators.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-white/80 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
             <div className="bg-white/5 backdrop-blur-lg p-10 md:p-14 rounded-[2.5rem] border border-white/10">
               <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
               <div className="prose prose-invert prose-lg">
                 <p className="text-white/70">
                   I spent three decades building a career in project management and delivery leadership, working at top agencies and later becoming a VP at Fox and The New York Times. At the height of my career, I realized something important: the parts of my work that energized me most weren’t the business—they were the people. I’ve always been an 80% people, 20% business leader in roles that demanded the opposite.
                 </p>
                 <p className="text-white/70 mt-4">
                   At the same time, I was diagnosed with ADHD at 48. It explained so much—and showed me that the systems I’d built to thrive could help others too.
                 </p>
                 <p className="text-white/70 mt-4">
                   I transitioned into coaching at my peak, trained through the Jay Shetty Certification School, and now dedicate my work to helping people grow, get unstuck, and move toward what they truly want next.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">How Coaching Works</h2>
          <p className="text-xl text-muted-foreground">
            A simple, structured process to move you from stuck to action.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Alignment Call (Free, 30–45 minutes)",
              desc: "We explore your goals, your challenges, and whether we’re the right fit."
            },
            {
              step: "02",
              title: "Set Clear, Doable Goals",
              desc: "Together we create a structured, measurable plan tailored to your needs."
            },
            {
              step: "03",
              title: "Bi-Weekly Coaching for Momentum",
              desc: "Every two weeks, we track progress, uncover new insights, and adjust as needed."
            }
          ].map((item, index) => (
            <div key={index} className="relative group">
              <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-border/50 h-full hover:shadow-lg transition-shadow duration-300">
                <span className="block text-6xl font-bold text-black/5 mb-6 group-hover:text-primary/10 transition-colors">
                  {item.step}
                </span>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button size="xl" className="rounded-full text-lg px-10 h-16 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
            Book Your Free Alignment Call
          </Button>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Services & Pricing</h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Transparent pricing. No hidden fees.
            </p>
          </div>

          <div className="space-y-6">
            {/* Featured Card */}
            <div className="p-8 md:p-10 rounded-[2rem] bg-primary text-primary-foreground shadow-2xl shadow-primary/20 relative overflow-hidden">
              <h3 className="text-2xl font-bold mb-2">Six-Session Package (Pay for Five)</h3>
              <p className="text-primary-foreground/80 mb-8 text-lg">Ideal for job seekers or anyone navigating major change. Use within three months.</p>
              <Button className="w-full bg-white text-primary hover:bg-white/90 rounded-full h-14 text-lg font-semibold shadow-none border-0">
                Get Started
              </Button>
            </div>

            {/* Standard Card */}
            <div className="p-8 md:p-10 rounded-[2rem] bg-white border border-border shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Individual Sessions</h3>
              <p className="text-muted-foreground mb-8 text-lg">Flexible, ongoing support for clarity, leadership development, or personal growth.</p>
              <Button variant="outline" className="w-full rounded-full h-14 text-lg border-2 hover:bg-secondary">
                Book a Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight uppercase text-muted-foreground text-sm">What Clients Say</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              q: "Robert asked the questions I hadn’t asked myself in years.",
              a: "Senior Manager"
            },
            {
              q: "I left every session with clarity and an actionable next step.",
              a: "Product Lead"
            },
            {
              q: "I landed a new role in eight weeks after struggling for over a year.",
              a: "Client in Transition"
            }
          ].map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-black/5">
              <div className="mb-6 text-primary">
                {[1,2,3,4,5].map(star => (
                  <span key={star} className="text-lg">★</span>
                ))}
              </div>
              <p className="text-xl font-serif italic text-foreground/90 mb-8 leading-relaxed">"{t.q}"</p>
              <div>
                <p className="font-bold text-foreground"> — {t.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-2xl font-bold text-white">Robert Marshall</h3>
            </div>
            <p className="text-background/60 text-lg leading-relaxed mb-2">
              Certified Coach — Jay Shetty Certification School
            </p>
            <p className="text-background/60 text-lg leading-relaxed mb-8">
              Whether you’re stuck, overwhelmed, or simply ready for something new, the next step is a conversation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/40 hover:text-white transition-colors">LinkedIn</a>
              <a href="mailto:robert@marshallcoach.com" className="text-background/40 hover:text-white transition-colors">Email</a>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 items-start md:items-end">
            <Button size="xl" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg">
              Book Your Free Alignment Call
            </Button>
            <p className="text-sm text-background/30">
              © {new Date().getFullYear()} Robert Marshall Coaching. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <CredibilityStrip />
        <WhoIHelp />
        <Approach />
        <Process />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
