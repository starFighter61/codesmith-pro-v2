"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Sparkles, ArrowRight, PartyPopper } from "lucide-react";

export default function CheckoutSuccessPage() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // You could verify the session with Stripe here
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, [sessionId]);

    if (isLoading) {
        return (
            <div
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f8fafc",
                }}
            >
                <div style={{ textAlign: "center" }}>
                    <div
                        style={{
                            width: "60px",
                            height: "60px",
                            border: "4px solid #e2e8f0",
                            borderTopColor: "#6366f1",
                            borderRadius: "50%",
                            margin: "0 auto 20px",
                            animation: "spin 1s linear infinite",
                        }}
                    />
                    <p style={{ color: "#64748b", fontSize: "16px" }}>
                        Confirming your subscription...
                    </p>
                </div>
                <style jsx>{`
                    @keyframes spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px 20px",
                backgroundColor: "#f8fafc",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "500px",
                    backgroundColor: "white",
                    borderRadius: "24px",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
                    padding: "48px",
                    textAlign: "center",
                }}
            >
                {/* Success Icon */}
                <div
                    style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #10b981, #059669)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 24px",
                        boxShadow: "0 10px 40px rgba(16, 185, 129, 0.3)",
                    }}
                >
                    <CheckCircle2 style={{ width: "40px", height: "40px", color: "white" }} />
                </div>

                {/* Celebration */}
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎉</div>

                <h1
                    style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        color: "#1e293b",
                        marginBottom: "12px",
                    }}
                >
                    Welcome to Pro!
                </h1>

                <p
                    style={{
                        fontSize: "16px",
                        color: "#64748b",
                        lineHeight: "1.6",
                        marginBottom: "32px",
                    }}
                >
                    Your subscription is now active. You have unlimited access to all
                    CodeSmith Pro features including code translation, security analysis,
                    and performance optimization.
                </p>

                {/* Pro Badge */}
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "12px 24px",
                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                        borderRadius: "50px",
                        marginBottom: "32px",
                    }}
                >
                    <Sparkles style={{ width: "20px", height: "20px", color: "white" }} />
                    <span style={{ color: "white", fontWeight: "600", fontSize: "14px" }}>
                        CodeSmith Pro Member
                    </span>
                </div>

                {/* What's Included */}
                <div
                    style={{
                        backgroundColor: "#f8fafc",
                        borderRadius: "16px",
                        padding: "24px",
                        marginBottom: "32px",
                        textAlign: "left",
                    }}
                >
                    <h3
                        style={{
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "#1e293b",
                            marginBottom: "16px",
                        }}
                    >
                        Your Pro Features:
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        {[
                            "✅ Unlimited AI requests",
                            "✅ Code translation (10+ languages)",
                            "✅ Security vulnerability analysis",
                            "✅ Performance optimization review",
                            "✅ Priority processing",
                            "✅ Export as Markdown/PDF",
                        ].map((feature) => (
                            <span
                                key={feature}
                                style={{ fontSize: "14px", color: "#475569" }}
                            >
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
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
                            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                            borderRadius: "12px",
                            border: "none",
                            cursor: "pointer",
                            boxShadow: "0 10px 40px rgba(99, 102, 241, 0.4)",
                            transition: "all 0.3s ease",
                            width: "100%",
                            justifyContent: "center",
                        }}
                    >
                        Start Using Pro Tools
                        <ArrowRight style={{ width: "20px", height: "20px" }} />
                    </button>
                </Link>

                <p
                    style={{
                        fontSize: "13px",
                        color: "#94a3b8",
                        marginTop: "24px",
                    }}
                >
                    Receipt sent to your email. Manage subscription in account settings.
                </p>
            </div>
        </div>
    );
}
