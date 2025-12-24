"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex items-center gap-1 p-1 rounded-full bg-slate-100 dark:bg-slate-800">
                <div className="w-8 h-8 rounded-full animate-pulse bg-slate-200 dark:bg-slate-700" />
                <div className="w-8 h-8 rounded-full animate-pulse bg-slate-200 dark:bg-slate-700" />
            </div>
        );
    }

    return (
        <div className="flex items-center gap-1 p-1 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <button
                onClick={() => setTheme("light")}
                className={cn(
                    "p-2 rounded-full transition-all duration-200",
                    theme === "light"
                        ? "bg-white dark:bg-slate-700 shadow-sm text-amber-500"
                        : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                )}
                aria-label="Light mode"
            >
                <Sun className="h-4 w-4" />
            </button>
            <button
                onClick={() => setTheme("dark")}
                className={cn(
                    "p-2 rounded-full transition-all duration-200",
                    theme === "dark"
                        ? "bg-white dark:bg-slate-700 shadow-sm text-brand-500"
                        : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                )}
                aria-label="Dark mode"
            >
                <Moon className="h-4 w-4" />
            </button>
        </div>
    );
}
