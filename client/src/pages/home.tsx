import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
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
    <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img src={logo} alt="Marshall Coach" className="h-10 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="rounded-full font-semibold" size="lg">
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
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <Button className="w-full rounded-full" size="lg">
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
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              Coaching for Professionals Ready to <span className="text-primary">Move Forward</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              I'm Robert Marshall — a former VP who spent three decades helping teams grow, navigate change, and find clarity. Now I help individuals do the same.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" className="text-lg px-8 rounded-full shadow-lg shadow-primary/20">
                Book Your Free Alignment Call
              </Button>
              <Button variant="outline" size="xl" className="text-lg px-8 rounded-full bg-background/50">
                Contact via Email
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-secondary/20">
              <img 
                src={robertPhoto} 
                alt="Robert Marshall" 
                className="w-full h-auto object-cover aspect-[4/5] md:aspect-square lg:aspect-[4/5]"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-full h-full bg-primary/5 rounded-3xl -z-10 transform rotate-6"></div>
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
    <section className="py-10 bg-muted/50 border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">Experience leading teams at</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {companies.map((company) => (
            <span key={company} className="text-xl md:text-2xl font-bold font-heading text-foreground/40 hover:text-foreground/80 transition-colors cursor-default">
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
      title: "High-Functioning ADHD Adults",
      description: "For those navigating overwhelm, procrastination, or the basics no one teaches, we build systems that work for your brain."
    },
    {
      title: "Career Transitioners",
      description: "Whether voluntary or involuntary, I help you regain momentum, structure your search, and stay grounded."
    }
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Help</h2>
          <p className="text-lg text-muted-foreground">
            My coaching is designed for people who are ready to do the work but need a partner to help them see the way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-1 bg-primary mb-6 rounded-full"></div>
              <h3 className="text-xl font-bold mb-4 font-heading">{profile.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {profile.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg mb-4 font-medium">Not sure where you fit?</p>
          <Button variant="link" className="text-primary text-lg p-0 h-auto font-semibold">
            Let's talk about your unique situation <span aria-hidden="true">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

// Approach / Differentiators
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
    <section id="approach" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Makes My Approach Different</h2>
            <p className="text-lg text-muted-foreground mb-8">
              High-level leadership experience meets human-centered coaching designed to get you unstuck.
            </p>
            <div className="space-y-4">
              {differentiators.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/20 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-card p-8 md:p-12 rounded-3xl shadow-xl border border-border/50">
              <h3 className="text-2xl font-heading font-bold mb-6 text-primary">My Philosophy</h3>
              <blockquote className="text-xl md:text-2xl italic text-muted-foreground leading-relaxed mb-6">
                "I've always been an 80% people, 20% business leader in roles that demanded the opposite."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-border"></div>
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Robert Marshall</span>
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
    <section id="story" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My Story</h2>
        </div>
        <div className="prose prose-lg prose-slate mx-auto text-muted-foreground">
          <p className="mb-6">
            I spent three decades building a career in project management and delivery leadership, working at top agencies and later becoming a VP at Fox and The New York Times. 
          </p>
          <p className="mb-6">
            At the height of my career, I realized something important: the parts of my work that energized me most weren’t the business—they were the people. I’ve always been an 80% people, 20% business leader in roles that demanded the opposite.
          </p>
          <p className="mb-6">
            At the same time, I was diagnosed with ADHD at 48. It explained so much—and showed me that the systems I’d built to thrive could help others too.
          </p>
          <p>
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
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How Coaching Works</h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            A simple, structured process to move you from stuck to action.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/20"></div>

          {[
            {
              step: "01",
              title: "Alignment Call",
              desc: "We explore your goals, your challenges, and whether we’re the right fit. (Free, 30–45 min)"
            },
            {
              step: "02",
              title: "Set Clear Goals",
              desc: "Together we create a structured, measurable plan tailored to your needs."
            },
            {
              step: "03",
              title: "Bi-Weekly Coaching",
              desc: "Every two weeks, we track progress, uncover new insights, and adjust as needed."
            }
          ].map((item, index) => (
            <div key={index} className="relative z-10">
              <div className="w-24 h-24 bg-white text-primary rounded-full flex items-center justify-center text-3xl font-bold mb-6 mx-auto shadow-lg border-4 border-primary/50">
                {item.step}
              </div>
              <div className="text-center px-4">
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-primary-foreground/80 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="xl" variant="secondary" className="text-primary font-bold rounded-full px-8 shadow-lg">
            Book Your Free Alignment Call
          </Button>
        </div>
      </div>
    </section>
  );
};

// Services
const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services & Pricing</h2>
          <p className="text-muted-foreground text-lg">Transparent pricing. No hidden fees.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-heading mb-2">Six-Session Package</h3>
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Best Value</span>
              </div>
              <p className="text-muted-foreground mb-8 h-20">
                Pay for five, get six. Ideal for job seekers or anyone navigating major change. Use within three months.
              </p>
              <Button className="w-full rounded-full" size="lg">Get Started</Button>
            </CardContent>
          </Card>

          <Card className="border border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-heading mb-2">Individual Sessions</h3>
                <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Flexible</span>
              </div>
              <p className="text-muted-foreground mb-8 h-20">
                Flexible, ongoing support for clarity, leadership development, or personal growth.
              </p>
              <Button variant="outline" className="w-full rounded-full" size="lg">Book a Session</Button>
            </CardContent>
          </Card>
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
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-card p-8 rounded-xl shadow-sm border border-border/50 relative">
              <span className="absolute top-4 left-4 text-6xl text-primary/10 font-serif leading-none">"</span>
              <p className="text-lg text-foreground/80 italic mb-6 relative z-10 pt-4">
                {t.quote}
              </p>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                — {t.author}
              </p>
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
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to move forward?</h2>
            <p className="text-background/70 text-lg">
              Whether you’re stuck, overwhelmed, or simply ready for something new,<br className="hidden md:block" /> the next step is a conversation.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Button size="xl" className="rounded-full bg-white text-foreground hover:bg-white/90 px-8">
              Book Your Free Alignment Call
            </Button>
            <a href="mailto:robert@marshallcoach.com" className="text-center text-background/60 hover:text-white transition-colors">
              Or email me directly
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Marshall Coach" className="h-8 w-auto brightness-0 invert opacity-80" />
            <div className="text-sm text-background/60">
              <p>© {new Date().getFullYear()} Robert Marshall</p>
              <p>Certified Coach — Jay Shetty Certification School</p>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-background/60 hover:text-white transition-colors">LinkedIn</a>
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
