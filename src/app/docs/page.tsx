"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    BookOpen,
    Code2,
    Lightbulb,
    Rocket,
    Search,
    ChevronRight,
    FileText,
    Zap,
    Shield,
    Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
    {
        title: "Getting Started",
        icon: Rocket,
        description: "Learn the basics of CodeSmith Pro",
        articles: [
            { title: "Quick Start Guide", slug: "quick-start" },
            { title: "Your First Tool", slug: "first-tool" },
            { title: "Understanding Outputs", slug: "outputs" },
            { title: "Account Setup", slug: "account" },
        ],
    },
    {
        title: "Core Tools",
        icon: Code2,
        description: "Master each AI-powered tool",
        articles: [
            { title: "Explain Tool", slug: "explain" },
            { title: "Debug Tool", slug: "debug" },
            { title: "Refactor Tool", slug: "refactor" },
            { title: "Document Tool", slug: "document" },
            { title: "README Generator", slug: "readme" },
        ],
    },
    {
        title: "Pro Features",
        icon: Zap,
        description: "Unlock advanced capabilities",
        articles: [
            { title: "Code Translation", slug: "translate" },
            { title: "Security Analysis", slug: "security" },
            { title: "Performance Review", slug: "performance" },
            { title: "Junior Mode", slug: "junior-mode" },
        ],
    },
    {
        title: "Projects & History",
        icon: FileText,
        description: "Manage your work",
        articles: [
            { title: "Creating Projects", slug: "projects" },
            { title: "Managing History", slug: "history" },
            { title: "Exporting Results", slug: "export" },
            { title: "Custom Instructions", slug: "instructions" },
        ],
    },
];

export default function DocsPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero */}
            <section className="container-lg mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <span className="badge-primary mb-4">Documentation</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Learn to use{" "}
                        <span className="gradient-text">CodeSmith Pro</span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                        Everything you need to get the most out of your AI coding assistant
                    </p>

                    {/* Search */}
                    <div className="relative max-w-xl mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search documentation..."
                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Quick Links */}
            <section className="container-lg mb-16">
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {[
                        {
                            icon: Rocket,
                            title: "Quick Start",
                            description: "Get up and running in 5 minutes",
                            href: "/docs/quick-start",
                        },
                        {
                            icon: Lightbulb,
                            title: "Best Practices",
                            description: "Tips for better AI responses",
                            href: "/docs/best-practices",
                        },
                        {
                            icon: Terminal,
                            title: "API Reference",
                            description: "For advanced integrations",
                            href: "/docs/api",
                            badge: "Coming Soon",
                        },
                    ].map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className="card card-hover p-6 group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-brand-500/10 group-hover:bg-brand-500 transition-colors">
                                    <link.icon className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-semibold text-slate-900 dark:text-white">
                                            {link.title}
                                        </h3>
                                        {link.badge && (
                                            <span className="px-2 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs rounded">
                                                {link.badge}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-slate-500">{link.description}</p>
                                </div>
                                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Categories */}
            <section className="container-lg">
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="card p-6"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-brand-500/10">
                                    <category.icon className="w-5 h-5 text-brand-600" />
                                </div>
                                <div>
                                    <h2 className="font-semibold text-slate-900 dark:text-white">
                                        {category.title}
                                    </h2>
                                    <p className="text-sm text-slate-500">{category.description}</p>
                                </div>
                            </div>
                            <ul className="space-y-2">
                                {category.articles.map((article) => (
                                    <li key={article.slug}>
                                        <Link
                                            href={`/docs/${article.slug}`}
                                            className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                                        >
                                            <BookOpen className="w-4 h-4" />
                                            {article.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Help CTA */}
            <section className="container-lg mt-20">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="card p-8 bg-gradient-to-br from-brand-500/5 to-purple-500/5">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            Still have questions?
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            Can&apos;t find what you&apos;re looking for? Reach out to our support team.
                        </p>
                        <Link href="/contact">
                            <Button>Contact Support</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
