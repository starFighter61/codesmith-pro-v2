"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
    Check,
    X,
    Sparkles,
    Zap,
    Shield,
    Clock,
    Users,
    HelpCircle,
    ChevronDown,
    Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PricingPage() {
    const { data: session } = useSession();
    const router = useRouter();
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckout = async () => {
        if (!session) {
            // Redirect to signup if not logged in
            router.push("/auth/signup?plan=pro");
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ priceType: billingCycle }),
            });

            const data = await response.json();

            if (data.url) {
                // Redirect to Stripe Checkout
                window.location.href = data.url;
            } else {
                alert("Error creating checkout session. Please try again.");
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Checkout error:", error);
            alert("Error creating checkout session. Please try again.");
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero */}
            <section className="container-lg text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="badge-primary mb-4">Pricing</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                        Simple, fair{" "}
                        <span className="gradient-text">pricing</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
                        Start free, upgrade when you&apos;re ready. No hidden fees, no surprises.
                        Cancel anytime.
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center gap-4 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-full">
                        <button
                            onClick={() => setBillingCycle("monthly")}
                            className={cn(
                                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
                                billingCycle === "monthly"
                                    ? "bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white"
                                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                            )}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle("yearly")}
                            className={cn(
                                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 relative",
                                billingCycle === "yearly"
                                    ? "bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white"
                                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                            )}
                        >
                            Yearly
                            <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-emerald-500 text-white text-[10px] font-bold rounded-full">
                                -31%
                            </span>
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Pricing Cards */}
            <section className="container-lg mb-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Free Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="card p-8"
                    >
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                Free
                            </h3>
                            <p className="text-slate-500 text-sm mb-6">
                                Perfect for trying out CodeSmith Pro
                            </p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-bold text-slate-900 dark:text-white">
                                    $0
                                </span>
                                <span className="text-slate-500">/forever</span>
                            </div>
                        </div>

                        {session ? (
                            <Link href="/tools">
                                <Button variant="outline" className="w-full mb-8" size="lg">
                                    Go to Tools
                                </Button>
                            </Link>
                        ) : (
                            <Link href="/auth/signup">
                                <Button variant="outline" className="w-full mb-8" size="lg">
                                    Get Started Free
                                </Button>
                            </Link>
                        )}

                        <div className="space-y-4">
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                What&apos;s included:
                            </p>
                            {[
                                "10 explanations per day",
                                "5 debug requests per day",
                                "5 refactoring per day",
                                "README generation",
                                "Documentation generation",
                                "Session-only history",
                            ].map((feature) => (
                                <div key={feature} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-slate-600 dark:text-slate-400">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                            {[
                                "Code translation",
                                "Security analysis",
                                "Performance review",
                                "Saved projects",
                            ].map((feature) => (
                                <div key={feature} className="flex items-start gap-3 opacity-50">
                                    <X className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-slate-500 line-through">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Pro Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="card p-8 border-2 border-brand-500 relative lg:-mt-4 lg:-mb-4 lg:py-12"
                    >
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-brand-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                            Most Popular
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                Pro
                            </h3>
                            <p className="text-slate-500 text-sm mb-6">
                                For developers who want to ship faster
                            </p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-bold gradient-text">
                                    ${billingCycle === "monthly" ? "12" : "8.25"}
                                </span>
                                <span className="text-slate-500">/month</span>
                            </div>
                            {billingCycle === "yearly" && (
                                <p className="text-sm text-emerald-600 mt-2">
                                    $99 billed annually (save $45)
                                </p>
                            )}
                        </div>

                        <Button
                            className="w-full mb-8"
                            size="lg"
                            onClick={handleCheckout}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <Sparkles className="w-4 h-4 mr-2" />
                                    {session
                                        ? `Subscribe to Pro - $${billingCycle === "monthly" ? "12" : "99"}/${billingCycle === "monthly" ? "mo" : "yr"}`
                                        : "Upgrade to Pro"
                                    }
                                </>
                            )}
                        </Button>

                        <div className="space-y-4">
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                Everything in Free, plus:
                            </p>
                            {[
                                "Unlimited AI requests",
                                "Code translation between languages",
                                "Security vulnerability analysis",
                                "Performance optimization review",
                                "Saved history & projects",
                                "Export as Markdown/PDF",
                                "Priority processing",
                                '"Explain Like I\'m Junior" mode',
                                "Custom instructions per project",
                                "Response tone control",
                                "Early access to new features",
                            ].map((feature) => (
                                <div key={feature} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-slate-600 dark:text-slate-400">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Team Plan (Coming Soon) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="card p-8 bg-slate-50 dark:bg-slate-800/50"
                    >
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                    Team
                                </h3>
                                <span className="px-2 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs font-medium rounded">
                                    Coming Soon
                                </span>
                            </div>
                            <p className="text-slate-500 text-sm mb-6">
                                For teams who collaborate on code
                            </p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-bold text-slate-400">
                                    $20
                                </span>
                                <span className="text-slate-400">/user/mo</span>
                            </div>
                        </div>

                        <Button variant="secondary" className="w-full mb-8" size="lg" disabled>
                            <Users className="w-4 h-4 mr-2" />
                            Join Waitlist
                        </Button>

                        <div className="space-y-4">
                            <p className="text-sm font-semibold text-slate-500 mb-2">
                                Everything in Pro, plus:
                            </p>
                            {[
                                "Team workspaces",
                                "Shared projects",
                                "Admin dashboard",
                                "Usage analytics",
                                "SSO authentication",
                                "Priority support",
                                "Custom integrations",
                            ].map((feature) => (
                                <div key={feature} className="flex items-start gap-3 opacity-60">
                                    <Check className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-slate-500">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Feature Comparison */}
            <section className="container-lg mb-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Compare Plans
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        See everything that&apos;s included in each plan
                    </p>
                </div>

                <div className="max-w-4xl mx-auto overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-200 dark:border-slate-700">
                                <th className="text-left py-4 px-4 font-medium text-slate-500">
                                    Feature
                                </th>
                                <th className="text-center py-4 px-4 font-medium text-slate-500">
                                    Free
                                </th>
                                <th className="text-center py-4 px-4 font-medium text-brand-600">
                                    Pro
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                            {[
                                { feature: "Code Explanation", free: "10/day", pro: "Unlimited" },
                                { feature: "Code Debugging", free: "5/day", pro: "Unlimited" },
                                { feature: "Code Refactoring", free: "5/day", pro: "Unlimited" },
                                { feature: "Documentation Generation", free: "5/day", pro: "Unlimited" },
                                { feature: "README Generation", free: "5/day", pro: "Unlimited" },
                                { feature: "Code Translation", free: false, pro: true },
                                { feature: "Security Analysis", free: false, pro: true },
                                { feature: "Performance Review", free: false, pro: true },
                                { feature: "Saved History", free: false, pro: true },
                                { feature: "Saved Projects", free: false, pro: "50 projects" },
                                { feature: "Export Options", free: false, pro: "MD, PDF" },
                                { feature: "Junior Mode", free: false, pro: true },
                                { feature: "Custom Instructions", free: false, pro: true },
                                { feature: "Priority Processing", free: false, pro: true },
                            ].map((row) => (
                                <tr key={row.feature}>
                                    <td className="py-4 px-4 text-sm text-slate-700 dark:text-slate-300">
                                        {row.feature}
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        {typeof row.free === "boolean" ? (
                                            row.free ? (
                                                <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                                            ) : (
                                                <X className="w-5 h-5 text-slate-300 dark:text-slate-600 mx-auto" />
                                            )
                                        ) : (
                                            <span className="text-sm text-slate-600 dark:text-slate-400">
                                                {row.free}
                                            </span>
                                        )}
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        {typeof row.pro === "boolean" ? (
                                            row.pro ? (
                                                <Check className="w-5 h-5 text-brand-500 mx-auto" />
                                            ) : (
                                                <X className="w-5 h-5 text-slate-300 dark:text-slate-600 mx-auto" />
                                            )
                                        ) : (
                                            <span className="text-sm font-medium text-slate-900 dark:text-white">
                                                {row.pro}
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Trust Signals */}
            <section className="container-lg mb-24">
                <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {[
                        {
                            icon: Shield,
                            title: "Secure & Private",
                            description: "Your code is never stored or used for training",
                        },
                        {
                            icon: Zap,
                            title: "Instant Results",
                            description: "Get AI responses in under 3 seconds",
                        },
                        {
                            icon: Clock,
                            title: "14-Day Refund",
                            description: "Not happy? Get a full refund, no questions",
                        },
                        {
                            icon: HelpCircle,
                            title: "Priority Support",
                            description: "Pro users get dedicated email support",
                        },
                    ].map((item) => (
                        <div key={item.title} className="text-center">
                            <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
                                <item.icon className="w-6 h-6 text-brand-600" />
                            </div>
                            <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                                {item.title}
                            </h3>
                            <p className="text-sm text-slate-500">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="container-lg">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {[
                        {
                            question: "Can I cancel anytime?",
                            answer:
                                "Absolutely. You can cancel your subscription at any time from your account settings. You'll continue to have Pro access until the end of your billing period, and you won't be charged again.",
                        },
                        {
                            question: "What payment methods do you accept?",
                            answer:
                                "We accept all major credit cards (Visa, Mastercard, American Express) and debit cards. All payments are processed securely through Stripe.",
                        },
                        {
                            question: "Is there a free trial for Pro?",
                            answer:
                                "We don't offer a traditional free trial, but our Free tier lets you try all the core features. Plus, we offer a 14-day money-back guarantee on Pro subscriptions if you're not satisfied.",
                        },
                        {
                            question: "What happens to my data if I downgrade?",
                            answer:
                                "If you downgrade to Free, your saved projects and history will be preserved for 30 days. You can export everything before downgrading. After 30 days, saved data is deleted, but you can always upgrade again to restore access.",
                        },
                        {
                            question: "Do you offer refunds?",
                            answer:
                                "Yes! We offer a 14-day money-back guarantee. If CodeSmith Pro isn't right for you, just email us within 14 days of purchase and we'll issue a full refund.",
                        },
                        {
                            question: "Is my code secure?",
                            answer:
                                "Your security is our priority. Code is transmitted over encrypted connections (TLS), processed in secure environments, and never stored permanently unless you explicitly save it to a project. We never use your code to train AI models.",
                        },
                    ].map((faq, index) => (
                        <div
                            key={index}
                            className="card overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-medium text-slate-900 dark:text-white">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={cn(
                                        "w-5 h-5 text-slate-400 transition-transform duration-200",
                                        openFaq === index && "rotate-180"
                                    )}
                                />
                            </button>
                            {openFaq === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="px-6 pb-6"
                                >
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
