"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
    User,
    Settings,
    CreditCard,
    BarChart3,
    Sparkles,
    LogOut,
    ChevronRight,
    Check,
    Crown,
    Zap,
    Code,
    FileText,
    Shield,
    Globe,
    Clock,
} from "lucide-react";

export default function DashboardPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [isPro, setIsPro] = useState(true); // TODO: Connect to actual subscription status
    const [isManaging, setIsManaging] = useState(false);

    // Handle manage subscription click
    const handleManageSubscription = async () => {
        // For demo/testing: Show info message
        // In production, this would connect to Stripe Customer Portal
        alert(
            "🎉 You're on Pro!\n\n" +
            "To manage your subscription in production:\n" +
            "• Cancel or change plan\n" +
            "• Update payment method\n" +
            "• View billing history\n\n" +
            "For now, manage subscriptions directly in Stripe Dashboard:\n" +
            "https://dashboard.stripe.com/test/subscriptions"
        );
    };

    // Redirect if not logged in
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/auth/login");
        }
    }, [status, router]);

    if (status === "loading") {
        return (
            <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f8fafc" }}>
                <div style={{ width: "40px", height: "40px", border: "3px solid #e2e8f0", borderTopColor: "#6366f1", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
                <style jsx>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    if (!session) {
        return null;
    }

    // Mock usage data
    const usageStats = {
        explanations: 47,
        debugs: 23,
        refactors: 15,
        translations: 8,
        securityScans: 12,
        performanceReviews: 5,
    };

    const totalUsage = Object.values(usageStats).reduce((a, b) => a + b, 0);

    return (
        <div style={{ minHeight: "100vh", paddingTop: "80px", backgroundColor: "#f8fafc" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>

                {/* Header */}
                <div style={{ marginBottom: "40px" }}>
                    <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                        Welcome back, {session.user?.name?.split(" ")[0] || "User"}!
                    </h1>
                    <p style={{ color: "#64748b" }}>
                        Manage your account and view your usage statistics
                    </p>
                </div>

                {/* Main Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}>

                    {/* Profile Card */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "24px"
                    }}>

                        {/* User Profile */}
                        <div style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                            padding: "32px",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px" }}>
                                {session.user?.image ? (
                                    <img
                                        src={session.user.image}
                                        alt="Profile"
                                        style={{ width: "80px", height: "80px", borderRadius: "50%", border: "4px solid #eef2ff" }}
                                    />
                                ) : (
                                    <div style={{
                                        width: "80px",
                                        height: "80px",
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}>
                                        <User style={{ width: "40px", height: "40px", color: "white" }} />
                                    </div>
                                )}
                                <div>
                                    <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#1e293b", marginBottom: "4px" }}>
                                        {session.user?.name || "User"}
                                    </h2>
                                    <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "8px" }}>
                                        {session.user?.email}
                                    </p>
                                    {isPro && (
                                        <span style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "4px",
                                            padding: "4px 12px",
                                            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                            borderRadius: "20px",
                                            color: "white",
                                            fontSize: "12px",
                                            fontWeight: "600",
                                        }}>
                                            <Crown style={{ width: "12px", height: "12px" }} />
                                            Pro Member
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "12px" }}>
                                <button
                                    onClick={() => signOut({ callbackUrl: "/" })}
                                    style={{
                                        flex: 1,
                                        padding: "12px",
                                        border: "1px solid #e2e8f0",
                                        borderRadius: "10px",
                                        backgroundColor: "white",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "8px",
                                        color: "#64748b",
                                        fontSize: "14px",
                                        fontWeight: "500",
                                    }}
                                >
                                    <LogOut style={{ width: "16px", height: "16px" }} />
                                    Sign Out
                                </button>
                            </div>
                        </div>

                        {/* Subscription Card */}
                        <div style={{
                            backgroundColor: isPro ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "white",
                            background: isPro ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "white",
                            borderRadius: "20px",
                            padding: "32px",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            color: isPro ? "white" : "#1e293b",
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                                <div style={{
                                    padding: "12px",
                                    borderRadius: "12px",
                                    backgroundColor: isPro ? "rgba(255,255,255,0.2)" : "#eef2ff",
                                }}>
                                    <CreditCard style={{ width: "24px", height: "24px", color: isPro ? "white" : "#6366f1" }} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: "18px", fontWeight: "600" }}>Subscription</h3>
                                    <p style={{ fontSize: "14px", opacity: 0.8 }}>
                                        {isPro ? "Pro Plan - Monthly" : "Free Plan"}
                                    </p>
                                </div>
                            </div>

                            {isPro ? (
                                <>
                                    <div style={{ marginBottom: "20px" }}>
                                        <p style={{ fontSize: "32px", fontWeight: "700" }}>$12<span style={{ fontSize: "16px", fontWeight: "400" }}>/month</span></p>
                                        <p style={{ fontSize: "14px", opacity: 0.8 }}>Next billing: Jan 24, 2025</p>
                                    </div>
                                    <button
                                        onClick={handleManageSubscription}
                                        disabled={isManaging}
                                        style={{
                                            width: "100%",
                                            padding: "12px",
                                            borderRadius: "10px",
                                            border: "2px solid rgba(255,255,255,0.3)",
                                            backgroundColor: "transparent",
                                            color: "white",
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            cursor: isManaging ? "wait" : "pointer",
                                            opacity: isManaging ? 0.7 : 1,
                                        }}
                                    >
                                        {isManaging ? "Loading..." : "Manage Subscription"}
                                    </button>
                                </>
                            ) : (
                                <>
                                    <div style={{ marginBottom: "20px" }}>
                                        <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "16px" }}>
                                            Unlock all Pro features
                                        </p>
                                        {["Unlimited requests", "Code translation", "Security analysis"].map((feature) => (
                                            <div key={feature} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                                                <Check style={{ width: "16px", height: "16px", color: "#22c55e" }} />
                                                <span style={{ fontSize: "14px", color: "#475569" }}>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link href="/pricing">
                                        <button
                                            style={{
                                                width: "100%",
                                                padding: "12px",
                                                borderRadius: "10px",
                                                border: "none",
                                                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                                color: "white",
                                                fontSize: "14px",
                                                fontWeight: "600",
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: "8px",
                                            }}
                                        >
                                            <Sparkles style={{ width: "16px", height: "16px" }} />
                                            Upgrade to Pro
                                        </button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Usage Statistics */}
                    <div style={{
                        backgroundColor: "white",
                        borderRadius: "20px",
                        padding: "32px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                    }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <div style={{ padding: "12px", borderRadius: "12px", backgroundColor: "#eef2ff" }}>
                                    <BarChart3 style={{ width: "24px", height: "24px", color: "#6366f1" }} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1e293b" }}>Usage This Month</h3>
                                    <p style={{ fontSize: "14px", color: "#64748b" }}>{totalUsage} total requests</p>
                                </div>
                            </div>
                            <span style={{ fontSize: "14px", color: "#64748b" }}>December 2024</span>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "16px" }}>
                            {[
                                { name: "Explanations", value: usageStats.explanations, icon: Code, color: "#3b82f6" },
                                { name: "Debug", value: usageStats.debugs, icon: Zap, color: "#f59e0b" },
                                { name: "Refactor", value: usageStats.refactors, icon: Settings, color: "#10b981" },
                                { name: "Translate", value: usageStats.translations, icon: Globe, color: "#8b5cf6" },
                                { name: "Security", value: usageStats.securityScans, icon: Shield, color: "#ef4444" },
                                { name: "Performance", value: usageStats.performanceReviews, icon: Clock, color: "#06b6d4" },
                            ].map((stat) => (
                                <div
                                    key={stat.name}
                                    style={{
                                        padding: "20px",
                                        borderRadius: "12px",
                                        backgroundColor: "#f8fafc",
                                        textAlign: "center",
                                    }}
                                >
                                    <stat.icon style={{ width: "24px", height: "24px", color: stat.color, marginBottom: "8px" }} />
                                    <p style={{ fontSize: "24px", fontWeight: "700", color: "#1e293b", marginBottom: "4px" }}>
                                        {stat.value}
                                    </p>
                                    <p style={{ fontSize: "12px", color: "#64748b" }}>{stat.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div style={{
                        backgroundColor: "white",
                        borderRadius: "20px",
                        padding: "32px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                    }}>
                        <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1e293b", marginBottom: "20px" }}>
                            Quick Actions
                        </h3>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
                            {[
                                { name: "Go to Tools", href: "/tools", icon: Code, description: "Start coding with AI" },
                                { name: "View Pricing", href: "/pricing", icon: CreditCard, description: "Compare plans" },
                                { name: "Read Docs", href: "/docs", icon: FileText, description: "Learn how to use" },
                            ].map((action) => (
                                <Link key={action.name} href={action.href}>
                                    <div
                                        style={{
                                            padding: "20px",
                                            borderRadius: "12px",
                                            border: "1px solid #e2e8f0",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "16px",
                                            transition: "all 0.2s",
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.borderColor = "#6366f1";
                                            e.currentTarget.style.backgroundColor = "#fafafe";
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.borderColor = "#e2e8f0";
                                            e.currentTarget.style.backgroundColor = "white";
                                        }}
                                    >
                                        <div style={{ padding: "10px", borderRadius: "10px", backgroundColor: "#eef2ff" }}>
                                            <action.icon style={{ width: "20px", height: "20px", color: "#6366f1" }} />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <p style={{ fontWeight: "500", color: "#1e293b", marginBottom: "2px" }}>{action.name}</p>
                                            <p style={{ fontSize: "12px", color: "#64748b" }}>{action.description}</p>
                                        </div>
                                        <ChevronRight style={{ width: "20px", height: "20px", color: "#94a3b8" }} />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
