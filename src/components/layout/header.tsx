"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, ChevronRight, LogOut, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Tools", href: "/tools" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
];

export function Header() {
    const pathname = usePathname();
    const { data: session, status } = useSession();
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm"
                    : "bg-transparent"
            )}
        >
            <nav className="container-lg">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 shadow-lg shadow-brand-500/25 group-hover:shadow-xl group-hover:shadow-brand-500/30 transition-all duration-300">
                            <Sparkles className="w-5 h-5 text-white" />
                            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <span className="text-xl font-bold">
                            <span className="text-slate-900 dark:text-white">Code</span>
                            <span className="gradient-text">Smith</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                                    pathname === item.href
                                        ? "text-brand-600 dark:text-brand-400"
                                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                                )}
                            >
                                {item.name}
                                {pathname === item.href && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-brand-500/10 rounded-lg"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        ))}
                        {/* Dashboard link - only show when logged in */}
                        {session && (
                            <Link
                                href="/dashboard"
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                                    pathname === "/dashboard"
                                        ? "text-brand-600 dark:text-brand-400"
                                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                                )}
                            >
                                Dashboard
                                {pathname === "/dashboard" && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-brand-500/10 rounded-lg"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        )}
                    </div>

                    {/* Right side actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <ThemeToggle />

                        {status === "loading" ? (
                            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
                        ) : session ? (
                            /* Logged in state */
                            <div className="flex items-center gap-3">
                                <Link href="/dashboard">
                                    <div
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 hover:bg-green-200 dark:hover:bg-green-900/50 cursor-pointer transition-colors"
                                    >
                                        {session.user?.image ? (
                                            <img
                                                src={session.user.image}
                                                alt="Profile"
                                                className="w-6 h-6 rounded-full"
                                            />
                                        ) : (
                                            <User className="w-4 h-4 text-green-600 dark:text-green-400" />
                                        )}
                                        <span className="text-sm font-medium text-green-700 dark:text-green-300">
                                            {session.user?.name?.split(' ')[0] || 'User'}
                                        </span>
                                    </div>
                                </Link>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => signOut({ callbackUrl: "/" })}
                                >
                                    <LogOut className="w-4 h-4 mr-1" />
                                    Sign Out
                                </Button>
                            </div>
                        ) : (
                            /* Logged out state */
                            <>
                                <Link href="/auth/login">
                                    <Button variant="ghost" size="sm">
                                        Sign In
                                    </Button>
                                </Link>
                                <Link href="/auth/signup">
                                    <Button size="sm" rightIcon={<ChevronRight className="w-4 h-4" />}>
                                        Get Started
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden items-center gap-3">
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>


            {/* Mobile menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            right: 0,
                            backgroundColor: "white",
                            borderBottom: "1px solid #e2e8f0",
                            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                        }}
                        className="md:hidden dark:!bg-slate-900 dark:!border-slate-700"
                    >
                        <div style={{ padding: "20px 24px" }}>
                            {/* Navigation Links */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "16px" }}>
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        style={{
                                            display: "block",
                                            padding: "12px 16px",
                                            borderRadius: "10px",
                                            fontSize: "15px",
                                            fontWeight: "500",
                                            color: pathname === item.href ? "#6366f1" : "#475569",
                                            backgroundColor: pathname === item.href ? "#eef2ff" : "transparent",
                                            textDecoration: "none",
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* User section */}
                            <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "16px" }}>
                                {session ? (
                                    <>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "12px",
                                                padding: "12px 16px",
                                                marginBottom: "12px",
                                                backgroundColor: "#f0fdf4",
                                                borderRadius: "10px",
                                            }}
                                        >
                                            {session.user?.image ? (
                                                <img
                                                    src={session.user.image}
                                                    alt="Profile"
                                                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                                                />
                                            ) : (
                                                <User style={{ width: "24px", height: "24px", color: "#16a34a" }} />
                                            )}
                                            <div>
                                                <p style={{ fontWeight: "600", color: "#15803d", fontSize: "14px" }}>
                                                    {session.user?.name || "User"}
                                                </p>
                                                <p style={{ fontSize: "12px", color: "#16a34a" }}>
                                                    {session.user?.email}
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                                signOut({ callbackUrl: "/" });
                                            }}
                                            style={{
                                                width: "100%",
                                                padding: "12px 16px",
                                                borderRadius: "10px",
                                                border: "1px solid #e2e8f0",
                                                backgroundColor: "white",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: "8px",
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                color: "#475569",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <LogOut style={{ width: "16px", height: "16px" }} />
                                            Sign Out
                                        </button>
                                    </>
                                ) : (
                                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                        <Link
                                            href="/auth/login"
                                            onClick={() => setMobileMenuOpen(false)}
                                            style={{
                                                display: "block",
                                                width: "100%",
                                                padding: "12px 16px",
                                                borderRadius: "10px",
                                                border: "1px solid #e2e8f0",
                                                backgroundColor: "white",
                                                textAlign: "center",
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                color: "#475569",
                                                textDecoration: "none",
                                            }}
                                        >
                                            Sign In
                                        </Link>
                                        <Link
                                            href="/auth/signup"
                                            onClick={() => setMobileMenuOpen(false)}
                                            style={{
                                                display: "block",
                                                width: "100%",
                                                padding: "12px 16px",
                                                borderRadius: "10px",
                                                border: "none",
                                                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                                textAlign: "center",
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                color: "white",
                                                textDecoration: "none",
                                            }}
                                        >
                                            Get Started Free
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

