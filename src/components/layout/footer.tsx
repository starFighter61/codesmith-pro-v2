"use client";

import Link from "next/link";
import { Sparkles, Github, Twitter } from "lucide-react";

const footerLinks = {
    product: [
        { name: "Features", href: "/#features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Tools", href: "/tools" },
        { name: "Docs", href: "/docs" },
    ],
    resources: [
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/docs/api" },
        { name: "Blog", href: "/blog" },
        { name: "Examples", href: "/examples" },
    ],
    company: [
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy", href: "/legal/privacy" },
        { name: "Terms", href: "/legal/terms" },
    ],
};

export function Footer() {
    return (
        <footer
            style={{
                position: "relative",
                borderTop: "1px solid #e2e8f0",
                backgroundColor: "#ffffff",
            }}
        >
            {/* Subtle gradient overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(to right, rgba(99, 102, 241, 0.03), transparent, rgba(139, 92, 246, 0.03))",
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 24px",
                    position: "relative",
                }}
            >
                {/* Main footer content */}
                <div style={{ padding: "48px 0" }}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "2fr 1fr 1fr 1fr 1.5fr",
                            gap: "40px",
                        }}
                    >
                        {/* Brand column */}
                        <div>
                            <Link
                                href="/"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    textDecoration: "none",
                                }}
                            >
                                <div
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "10px",
                                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        boxShadow: "0 4px 12px rgba(99, 102, 241, 0.25)",
                                    }}
                                >
                                    <Sparkles style={{ width: "20px", height: "20px", color: "white" }} />
                                </div>
                                <span style={{ fontSize: "20px", fontWeight: "700" }}>
                                    <span style={{ color: "#1e293b" }}>Code</span>
                                    <span style={{ color: "#6366f1" }}>Smith</span>
                                </span>
                            </Link>
                            <p
                                style={{
                                    marginTop: "16px",
                                    fontSize: "14px",
                                    color: "#475569",
                                    maxWidth: "260px",
                                    lineHeight: "1.7",
                                }}
                            >
                                Your AI pair-programmer for real-world development tasks. Ship faster, learn smarter.
                            </p>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "20px" }}>
                                <a
                                    href="https://twitter.com/codesmithpro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        padding: "10px",
                                        borderRadius: "8px",
                                        color: "#475569",
                                        backgroundColor: "#f1f5f9",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        textDecoration: "none",
                                    }}
                                >
                                    <Twitter style={{ width: "18px", height: "18px" }} />
                                </a>
                                <a
                                    href="https://github.com/codesmithpro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        padding: "10px",
                                        borderRadius: "8px",
                                        color: "#475569",
                                        backgroundColor: "#f1f5f9",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        textDecoration: "none",
                                    }}
                                >
                                    <Github style={{ width: "18px", height: "18px" }} />
                                </a>
                            </div>
                        </div>

                        {/* Product */}
                        <div>
                            <h4
                                style={{
                                    fontWeight: "600",
                                    color: "#1e293b",
                                    marginBottom: "16px",
                                    fontSize: "14px",
                                }}
                            >
                                Product
                            </h4>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {footerLinks.product.map((link) => (
                                    <li key={link.name} style={{ marginBottom: "10px" }}>
                                        <Link
                                            href={link.href}
                                            style={{
                                                fontSize: "14px",
                                                color: "#475569",
                                                textDecoration: "none",
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4
                                style={{
                                    fontWeight: "600",
                                    color: "#1e293b",
                                    marginBottom: "16px",
                                    fontSize: "14px",
                                }}
                            >
                                Resources
                            </h4>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {footerLinks.resources.map((link) => (
                                    <li key={link.name} style={{ marginBottom: "10px" }}>
                                        <Link
                                            href={link.href}
                                            style={{
                                                fontSize: "14px",
                                                color: "#475569",
                                                textDecoration: "none",
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4
                                style={{
                                    fontWeight: "600",
                                    color: "#1e293b",
                                    marginBottom: "16px",
                                    fontSize: "14px",
                                }}
                            >
                                Company
                            </h4>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {footerLinks.company.map((link) => (
                                    <li key={link.name} style={{ marginBottom: "10px" }}>
                                        <Link
                                            href={link.href}
                                            style={{
                                                fontSize: "14px",
                                                color: "#475569",
                                                textDecoration: "none",
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Customer Support */}
                        <div>
                            <h4
                                style={{
                                    fontWeight: "600",
                                    color: "#1e293b",
                                    marginBottom: "16px",
                                    fontSize: "14px",
                                }}
                            >
                                Support
                            </h4>
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                <a
                                    href="tel:+13108508093"
                                    style={{
                                        fontSize: "14px",
                                        color: "#475569",
                                        textDecoration: "none",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                    }}
                                >
                                    📞 (310) 850-8093
                                </a>
                                <a
                                    href="mailto:support@westlacomputerexpert.tech"
                                    style={{
                                        fontSize: "14px",
                                        color: "#475569",
                                        textDecoration: "none",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                    }}
                                >
                                    ✉️ support@westlacomputerexpert.tech
                                </a>
                                <p style={{ fontSize: "13px", color: "#64748b", marginTop: "8px", lineHeight: "1.5" }}>
                                    Available Mon-Fri<br />9am - 6pm PST
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        padding: "20px 0",
                        borderTop: "1px solid #e2e8f0",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                    }}
                >
                    <p style={{ fontSize: "13px", color: "#64748b", margin: 0 }}>
                        © {new Date().getFullYear()} CodeSmith Pro. All rights reserved.
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                        <Link
                            href="/legal/privacy"
                            style={{
                                fontSize: "13px",
                                color: "#64748b",
                                textDecoration: "none",
                            }}
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/legal/terms"
                            style={{
                                fontSize: "13px",
                                color: "#64748b",
                                textDecoration: "none",
                            }}
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
