import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as motion from "motion/react-client";
import { Switch } from "@mui/material";

export default function Navbar({ themeMode, onToggleTheme }) {
    const location = useLocation();

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/portfolio" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto mt-6 rounded-full glass-panel sticky top-6 z-50 p-3 px-6"
        >
            <div className="flex items-center justify-between">
                {/* Left Side Logo / Title */}
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-['Rubik_Moonrocks'] tracking-wide">
                    Portfolio
                </span>

                {/* Right Side Navigation Links */}
                <div className="flex items-center gap-3">
                    <div className="flex gap-1 md:gap-2">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.href;
                            return (
                                <Link
                                    key={link.label}
                                    to={link.href}
                                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${isActive
                                        ? "text-slate-900 dark:text-white"
                                        : "text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute inset-0 bg-slate-200 dark:bg-white/10 rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.label}</span>
                                </Link>
                            );
                        })}
                    </div>

                    <Switch
                        checked={themeMode === "dark"}
                        onChange={onToggleTheme}
                        size="small"
                        inputProps={{ "aria-label": "Toggle dark mode" }}
                    />
                </div>
            </div>
        </motion.nav>
    );
}
