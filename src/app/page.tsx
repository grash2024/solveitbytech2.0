"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Globe,
  Smartphone,
  Video,
  Search,
  Plane,
  Palette,
  ShoppingCart,
  Code,
  Menu,
  X,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Zap,
  Target,
} from "lucide-react";

// --- Navigation Component ---
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
        <div
  className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
  onClick={() => scrollToSection("#home")}
>
  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center overflow-hidden">
    <img
      src="/logo.png"
      alt="SolveitByTech Logo"
      className="w-full h-full object-contain"
    />
  </div>

  <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
    SolveitByTech
  </span>
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-90"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-[500px] opacity-100 pb-6"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-3 px-4 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-4">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// --- Hero Section ---
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-background to-teal-50 dark:from-emerald-950/20 dark:via-background dark:to-teal-950/20 -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="text-center">
          <Badge
            variant="outline"
            className="mb-6 px-4 py-1.5 text-xs md:text-sm border-emerald-200 text-emerald-700 bg-emerald-50/50"
          >
            🚀 Transforming Ideas into Digital Solutions
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
            We Build Digital <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 px-4">
            Your trusted tech partner for websites, mobile apps, video editing,
            SEO, and comprehensive digital growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-6">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-6 text-lg"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-8 py-6 text-lg"
              onClick={() =>
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Our Services
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { value: "50+", label: "Projects" },
              { value: "30+", label: "Clients" },
              { value: "5+", label: "Years" },
              { value: "100%", label: "Quality" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-background/40 backdrop-blur-sm border border-emerald-100/20 shadow-sm"
              >
                <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- About Section ---
function AboutSection() {
  const partners = [
    { name: "Rajath Shetty", role: "Co-Founder & Full-Stack Lead", image: "R" },
    { name: "Sanjay N", role: "Co-Founder & UI/UX Director", image: "S" },
    { name: "Sushanth Shetty", role: "Full-Stack Developer", image: "S" },
    { name: "Shakthi Shetty", role: "UI/UX Designer", image: "S" },
    { name: "Raksha Shetty", role: "SEO Specialist", image: "R" },
    { name: "Shrujan Kumar", role: "Mobile Developer", image: "S" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Team
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Meet Our <span className="text-emerald-600">Experts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            A diverse team of passionate technologists dedicated to solving
            complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-none bg-background/80"
            >
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-2xl font-bold text-white mb-4 group-hover:scale-105 transition-transform">
                  {partner.image}
                </div>
                <CardTitle className="text-lg">{partner.name}</CardTitle>
                <CardDescription className="text-emerald-600 font-medium">
                  {partner.role}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Services Section ---
function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      desc: "Modern, responsive sites built with Next.js & React.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      desc: "Native-feel iOS and Android apps using React Native.",
    },
    {
      icon: Video,
      title: "Video Editing",
      desc: "Professional post-production for brands and creators.",
    },
    {
      icon: Search,
      title: "SEO Services",
      desc: "Data-driven strategies to rank you on the first page.",
    },
    {
      icon: Plane,
      title: "Drone Mapping",
      desc: "Advanced 3D photogrammetry and aerial surveys.",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      desc: "Stunning visual identities and marketing collateral.",
    },
  ];

  return (
    <section id="services" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Comprehensive <span className="text-emerald-600">Solutions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:border-emerald-500/50 transition-colors shadow-sm"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-2">
                  <service.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {service.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Projects Section ---
function ProjectsSection() {
  const projects = [
    {
      title: "Sreeyans Developers",
      cat: "Real Estate",
      tech: ["Next.js", "MongoDB"],
      status: "Live",
    },
    {
      title: "Fitness Pro",
      cat: "Mobile App",
      tech: ["React Native", "Firebase"],
      status: "Live",
    },
    {
      title: "Zenith SEO",
      cat: "Digital Marketing",
      tech: ["Analytics", "SEO"],
      status: "Ongoing",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-emerald-600">Work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-md group"
            >
              <div className="h-40 bg-gradient-to-br from-emerald-500 to-teal-600 p-6 flex items-end relative">
                <Badge className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-md">
                  {project.status}
                </Badge>
                <h3 className="text-white font-bold text-xl">
                  {project.title}
                </h3>
              </div>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  {project.cat}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="text-[10px] uppercase font-bold tracking-wider"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailTo = "info.solveitbytech@gmail.com";
    const subject = encodeURIComponent(`Inquiry: ${formData.subject}`);

    // Constructing a clean body for the email
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`,
    );

    // This opens the user's email client (Gmail app, Outlook, etc.)
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      val: "info.solveitbytech@gmail.com",
      href: "mailto:info.solveitbytech@gmail.com",
    },
    {
      icon: Phone,
      label: "Call",
      val: "+91 8073665236",
      href: "tel:+918073665236",
    },
    {
      icon: MapPin,
      label: "Location",
      val: "India | Serving Worldwide",
      href: "https://www.google.com/maps",
    },
  ];

  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's <span className="text-emerald-600">Connect</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Have a project in mind? We'd love to hear about it.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-emerald-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 transition-colors">
                    <item.icon className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-muted-foreground tracking-widest">
                      {item.label}
                    </p>
                    <p className="font-medium text-sm md:text-base break-all group-hover:text-emerald-700 transition-colors">
                      {item.val}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <Card className="shadow-2xl border-none">
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="h-12 bg-muted/30"
                  />
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="h-12 bg-muted/30"
                  />
                </div>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="h-12 bg-muted/30"
                />
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                  className="min-h-[150px] bg-muted/30"
                />
                <Button
                  type="submit"
                  className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-lg"
                >
                  Send Email
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-muted/50 border-t py-12">
      <div className="max-w-7xl mx-auto px-4 text-center sm:text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 sm:col-span-2">
            <span className="text-xl font-bold text-emerald-600 block mb-4">
              SolveitByTech
            </span>
            <p className="text-muted-foreground max-w-sm mx-auto sm:mx-0">
              Empowering businesses with cutting-edge digital infrastructure and
              creative solutions.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-emerald-600"
                >
                  Home
                </button>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-600">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-600">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Details</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:info.solveitbytech@gmail.com"
                  className="hover:text-emerald-600"
                >
                  info.solveitbytech@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917019658931" className="hover:text-emerald-600">
                  +91 7019658931
                </a>
              </li>
              <li>India | Worldwide</li>
            </ul>
          </div>
        </div>
        <Separator className="mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} SolveitByTech. All rights reserved.
          </p>
          <p>Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}
function FloatingControls() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/917019658931"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce"
      >
        <svg className="w-7 h-7 text-white fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Scroll to Top */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-background border shadow-xl rounded-full flex items-center justify-center hover:bg-muted transition-colors"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}

// --- Main Page Component ---
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <FloatingControls />
    </main>
  );
}
