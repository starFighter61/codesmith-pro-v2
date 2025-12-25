"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Code2,
  Bug,
  RefreshCw,
  FileText,
  BookOpen,
  Shield,
  Zap,
  ArrowRight,
  Check,
  Star,
  ChevronRight,
  Play,
  Users,
  Clock,
  Layers,
  Target,
  Brain,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Trusted By */}
      <TrustedBySection />

      {/* Features Grid */}
      <FeaturesSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Demo Section */}
      <DemoSection />

      {/* Pricing Preview */}
      <PricingSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <FAQSection />

      {/* Contact/Support */}
      <ContactSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-brand-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-radial from-purple-500/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-brand-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 bg-hero-pattern opacity-50 dark:opacity-30" />

      <div className="container-lg">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span className="text-sm font-medium text-brand-600 dark:text-brand-400">
              AI-Powered Development Tools
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-slate-900 dark:text-white">Your AI</span>{" "}
            <span className="gradient-text">Pair-Programmer</span>
            <br />
            <span className="text-slate-900 dark:text-white">for Real-World Tasks</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Explain, debug, refactor, and document your code in seconds.
            Built for developers who want to ship faster and learn smarter.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/tools">
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "16px 32px",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "white",
                  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 10px 40px rgba(99, 102, 241, 0.4), 0 0 0 1px rgba(255,255,255,0.1) inset",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 20px 50px rgba(99, 102, 241, 0.5), 0 0 0 1px rgba(255,255,255,0.2) inset";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 40px rgba(99, 102, 241, 0.4), 0 0 0 1px rgba(255,255,255,0.1) inset";
                }}
              >
                🚀 Start Free — No Card Required
                <ArrowRight style={{ width: "20px", height: "20px" }} />
              </button>
            </Link>
            <Link href="/pricing">
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "16px 32px",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#6366f1",
                  background: "white",
                  borderRadius: "12px",
                  border: "2px solid #e2e8f0",
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "#6366f1";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(99, 102, 241, 0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)";
                }}
              >
                💎 View Pricing
              </button>
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-8 mt-12 pt-12 border-t border-slate-200 dark:border-slate-800"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-purple-500 border-2 border-white dark:border-slate-900"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                5,000+ developers
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                />
              ))}
              <span className="ml-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                4.9/5 rating
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Image/Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 md:mt-24 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Glow effect behind */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10 transform scale-110" />

            {/* Main demo card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50 shadow-2xl shadow-brand-500/10 bg-white dark:bg-slate-900">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-white dark:bg-slate-700 text-xs text-slate-500 dark:text-slate-400">
                    codesmith.pro/tools/explain
                  </div>
                </div>
              </div>

              {/* Content area */}
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-700">
                {/* Input */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      Input Code
                    </span>
                    <span className="text-xs px-2 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 font-medium">
                      JavaScript
                    </span>
                  </div>
                  <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm text-slate-300 overflow-x-auto">
                    <pre>{`const debounce = (fn, ms) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(
      () => fn.apply(this, args), 
      ms
    );
  };
};`}</pre>
                  </div>
                </div>

                {/* Output */}
                <div className="p-6 bg-gradient-to-br from-brand-500/5 to-purple-500/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      AI Explanation
                    </span>
                    <span className="badge-success">
                      <Check className="w-3 h-3 mr-1" />
                      Generated
                    </span>
                  </div>
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      <strong>This is a debounce function</strong> — a performance optimization technique.
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-3">
                      It delays executing a function until a specified time has passed since the last call.
                      Useful for search inputs, window resize handlers, and API calls to prevent excessive function calls.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustedBySection() {
  const brands = [
    "Startups",
    "Indie Hackers",
    "Bootcamp Grads",
    "Career Switchers",
    "Junior Devs",
    "Solo Builders",
  ];

  return (
    <section className="py-12 border-y border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container-lg">
        <p className="text-center text-sm text-slate-500 dark:text-slate-500 mb-8">
          Trusted by developers at all levels
        </p>
        <div className="flex items-center justify-center flex-wrap gap-8 md:gap-12">
          {brands.map((brand) => (
            <div
              key={brand}
              className="text-slate-400 dark:text-slate-600 font-semibold text-lg"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Explain Code",
      description:
        "Get clear, concise explanations of any code snippet. Perfect for understanding unfamiliar patterns or learning new concepts.",
      color: "from-blue-500 to-cyan-500",
      free: true,
      toolId: "explain",
    },
    {
      icon: Bug,
      title: "Debug Code",
      description:
        "Find and fix bugs with AI-powered analysis. Get root cause explanations and working solutions in seconds.",
      color: "from-red-500 to-orange-500",
      free: true,
      toolId: "debug",
    },
    {
      icon: RefreshCw,
      title: "Refactor Code",
      description:
        "Transform messy code into clean, maintainable solutions. Apply best practices automatically.",
      color: "from-green-500 to-emerald-500",
      free: true,
      toolId: "refactor",
    },
    {
      icon: Code2,
      title: "Translate Code",
      description:
        "Convert code between programming languages while preserving functionality and idioms.",
      color: "from-purple-500 to-pink-500",
      pro: true,
      toolId: "translate",
    },
    {
      icon: FileText,
      title: "Generate Docs",
      description:
        "Create comprehensive documentation with function descriptions, parameters, and usage examples.",
      color: "from-amber-500 to-yellow-500",
      free: true,
      toolId: "document",
    },
    {
      icon: Shield,
      title: "Security Review",
      description:
        "Identify vulnerabilities and security issues with severity ratings and secure alternatives.",
      color: "from-rose-500 to-red-500",
      pro: true,
      toolId: "security",
    },
    {
      icon: Zap,
      title: "Performance Analysis",
      description:
        "Discover bottlenecks and get optimization suggestions with complexity analysis.",
      color: "from-brand-500 to-purple-500",
      pro: true,
      toolId: "performance",
    },
    {
      icon: Lightbulb,
      title: "README Generator",
      description:
        "Create professional README files for your projects with all the standard sections.",
      color: "from-teal-500 to-cyan-500",
      free: true,
      toolId: "readme",
    },
  ];

  return (
    <section className="section">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge-primary mb-4">Features</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Everything you need to{" "}
            <span className="gradient-text">code smarter</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A complete toolkit of AI-powered features to help you write better code,
            fix bugs faster, and learn as you go.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              <Link href={`/tools?tool=${feature.toolId}`}>
                <div className="card card-hover h-full p-6 cursor-pointer">
                  {/* Gradient accent on hover */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                  />

                  {/* Icon */}
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg mb-4`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Badge */}
                  {feature.pro && (
                    <span className="badge-pro absolute top-4 right-4">PRO</span>
                  )}
                  {feature.free && (
                    <span className="badge-success absolute top-4 right-4">FREE</span>
                  )}

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Try it arrow */}
                  <div className="mt-4 flex items-center text-sm font-medium text-brand-600 dark:text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Try it now <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Paste Your Code",
      description:
        "Drop in any code snippet — we auto-detect the language and prepare it for analysis.",
      icon: Code2,
    },
    {
      step: "02",
      title: "Choose Your Tool",
      description:
        "Select from explain, debug, refactor, translate, or any of our powerful AI tools.",
      icon: Target,
    },
    {
      step: "03",
      title: "Get Instant Results",
      description:
        "Receive clear, actionable output in seconds. Copy, download, or save to your projects.",
      icon: Rocket,
    },
  ];

  return (
    <section className="section bg-slate-50 dark:bg-slate-900/50">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge-primary mb-4">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Simple, fast, and incredibly{" "}
            <span className="gradient-text">powerful</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            No complex setup. No learning curve. Just paste your code and get instant help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-brand-500 to-purple-500" />
              )}

              {/* Step number */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-500 to-purple-600 shadow-xl shadow-brand-500/25 mb-6">
                <step.icon className="w-10 h-10 text-white" />
                <span className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 shadow-lg text-sm font-bold text-brand-600">
                  {step.step}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section className="section">
      <div className="container-lg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge-primary mb-4">Built for Learning</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Perfect for developers who are{" "}
              <span className="gradient-text">still learning</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              CodeSmith Pro is designed for real people, not just senior engineers.
              Whether you&apos;re a bootcamp grad, career switcher, or self-taught developer,
              we help you understand code and level up your skills.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Explain Like I'm Junior mode for beginner-friendly explanations",
                "Step-by-step breakdowns that actually make sense",
                "Learn best practices while you debug and refactor",
                '"What to learn next" suggestions based on your code',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-500/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-brand-600" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/tools">
              <Button rightIcon={<ArrowRight className="w-4 h-4" />}>
                Try It Free
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-brand-500/20 to-purple-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />

            <div className="relative card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-brand-500/10">
                  <Brain className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Junior Mode Enabled
                  </h4>
                  <p className="text-sm text-slate-500">Beginner-friendly explanation</p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border-l-4 border-brand-500">
                  <p className="font-medium text-slate-900 dark:text-white mb-2">
                    🎯 Think of it like a bouncer at a club:
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    The debounce function is like a bouncer who makes people wait before
                    letting them in. If someone keeps trying to enter, the bouncer resets
                    the timer. Only when there&apos;s a pause does the person finally get in.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500">
                  <p className="font-medium text-emerald-700 dark:text-emerald-400 mb-1">
                    💡 Real-world use case:
                  </p>
                  <p className="text-emerald-600 dark:text-emerald-400/80">
                    This is commonly used in search boxes. We don&apos;t want to search on
                    every single keystroke — that would overwhelm the server!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out CodeSmith Pro",
      features: [
        "10 explanations per day",
        "5 debug requests per day",
        "5 refactoring requests per day",
        "README generation",
        "Documentation generation",
        "Session history (not saved)",
      ],
      cta: "Start Free",
      href: "/auth/signup",
      popular: false,
    },
    {
      name: "Pro",
      price: "$12",
      period: "/month",
      yearlyPrice: "$99/year",
      yearlySaving: "Save 31%",
      description: "For developers who want to ship faster",
      features: [
        "Unlimited AI requests",
        "Code translation",
        "Security analysis",
        "Performance review",
        "Saved history & projects",
        "Export as Markdown/PDF",
        "Priority processing",
        "\"Explain Like I'm Junior\" mode",
        "Custom instructions",
        "Early access to new features",
      ],
      cta: "Upgrade to Pro",
      href: "/pricing",
      popular: true,
    },
  ];

  return (
    <section className="section bg-slate-50 dark:bg-slate-900/50">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge-primary mb-4">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Simple, transparent{" "}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Start free, upgrade when you need more. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative card p-8 ${plan.popular ? "border-brand-500 border-2" : ""
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-500 to-purple-600 text-white text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-slate-500">{plan.period}</span>
                </div>
                {plan.yearlyPrice && (
                  <div className="mt-2 flex items-center justify-center gap-2">
                    <span className="text-sm text-slate-500">{plan.yearlyPrice}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-medium">
                      {plan.yearlySaving}
                    </span>
                  </div>
                )}
                <p className="text-sm text-slate-500 mt-3">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href={plan.href} className="block">
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "CodeSmith Pro has been a game-changer for my learning journey. The explanations are actually helpful, not just generic AI fluff.",
      author: "Sarah Chen",
      role: "Bootcamp Graduate",
      avatar: "SC",
    },
    {
      quote:
        "As a self-taught developer, I finally have a tool that explains code the way I need it. The Junior Mode is brilliant.",
      author: "Marcus Johnson",
      role: "Career Switcher",
      avatar: "MJ",
    },
    {
      quote:
        "I use this daily for code reviews and refactoring. It catches things I miss and suggests improvements I wouldn't think of.",
      author: "Alex Rivera",
      role: "Indie Hacker",
      avatar: "AR",
    },
  ];

  return (
    <section className="section">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge-primary mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Loved by developers{" "}
            <span className="gradient-text">worldwide</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "Is CodeSmith Pro beginner-friendly?",
      answer:
        "Absolutely! We designed CodeSmith Pro specifically for developers at all levels. Our 'Explain Like I'm Junior' mode provides extra context and analogies that make complex concepts click.",
    },
    {
      question: "What happens when I hit my free limit?",
      answer:
        "Your limits reset daily at midnight UTC. You'll see a clear counter of remaining requests, and we'll never surprise you with charges. You can always upgrade to Pro for unlimited access.",
    },
    {
      question: "Can I cancel my Pro subscription anytime?",
      answer:
        "Yes! Cancel anytime with no questions asked. You'll keep Pro access until the end of your billing period. We also offer a 14-day money-back guarantee.",
    },
    {
      question: "Is my code stored or used for training?",
      answer:
        "Your code is processed securely and never used to train AI models. Pro users can optionally save their history, but it's encrypted and only visible to you.",
    },
    {
      question: "What programming languages are supported?",
      answer:
        "CodeSmith Pro supports all major programming languages including JavaScript, TypeScript, Python, Java, C#, Go, Rust, Ruby, PHP, Swift, Kotlin, and many more. Our AI can understand and translate between these languages.",
    },
    {
      question: "How accurate is the AI analysis?",
      answer:
        "Our AI is powered by the latest GPT-4 models and provides highly accurate code analysis. However, we always recommend reviewing AI suggestions before implementing them in production code.",
    },
    {
      question: "Do you offer team or enterprise plans?",
      answer:
        "Yes! We offer team plans with shared billing, usage analytics, and admin controls. Contact our support team at support@westlacomputerexpert.tech for custom enterprise pricing.",
    },
    {
      question: "How do I get support if I have issues?",
      answer:
        "You can reach our support team by phone at (310) 850-8093 or email at support@westlacomputerexpert.tech. We're available Monday-Friday, 9am-6pm PST.",
    },
  ];

  return (
    <section id="faq" className="section bg-slate-50 dark:bg-slate-900/50">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge-primary mb-4">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Frequently asked{" "}
            <span className="gradient-text">questions</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="card p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="badge-primary mb-4">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Need help? We&apos;re here for you
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Our support team is ready to assist you with any questions about CodeSmith Pro
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Phone */}
          <motion.a
            href="tel:+13108508093"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card p-8 text-center hover:shadow-lg transition-shadow cursor-pointer group"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform">
              📞
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Call Us
            </h3>
            <p className="text-lg font-medium text-brand-600 dark:text-brand-400 mb-2">
              (310) 850-8093
            </p>
            <p className="text-sm text-slate-500">
              Mon-Fri, 9am-6pm PST
            </p>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:support@westlacomputerexpert.tech"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card p-8 text-center hover:shadow-lg transition-shadow cursor-pointer group"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform">
              ✉️
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Email Support
            </h3>
            <p className="text-base font-medium text-brand-600 dark:text-brand-400 mb-2 break-all">
              support@westlacomputerexpert.tech
            </p>
            <p className="text-sm text-slate-500">
              We respond within 24 hours
            </p>
          </motion.a>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="card p-8 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-3xl">
              ⚡
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Fast Support
            </h3>
            <p className="text-lg font-medium text-brand-600 dark:text-brand-400 mb-2">
              Priority Response
            </p>
            <p className="text-sm text-slate-500">
              Pro users get priority support
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="section">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-purple-600 to-pink-600 p-12 md:p-20 text-center"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to code smarter?
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Join thousands of developers who use CodeSmith Pro to ship faster,
              debug quicker, and learn as they build.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/tools">
                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "18px 36px",
                    fontSize: "17px",
                    fontWeight: "700",
                    color: "#6366f1",
                    background: "white",
                    borderRadius: "14px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 15px 50px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 20px 60px rgba(0, 0, 0, 0.4)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 15px 50px rgba(0, 0, 0, 0.3)";
                  }}
                >
                  🚀 Start Building Free
                  <ArrowRight style={{ width: "20px", height: "20px" }} />
                </button>
              </Link>
              <Link href="/pricing">
                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "18px 36px",
                    fontSize: "17px",
                    fontWeight: "600",
                    color: "white",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "14px",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    cursor: "pointer",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  💎 View Pricing
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
