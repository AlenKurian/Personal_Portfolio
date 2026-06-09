import React from "react";
import { Button } from "@mui/material";
import * as motion from "motion/react-client";
import TextType from "./TextType";
import Shuffle from "./Shuffle";


export default function Hero() {
    const title = "Hi, I'm Alen Kurian Joseph";

    const handleAnimationComplete = () => {
        console.log("Subtitle letters animation complete");
    };

    return (
        <section
            className="w-[90%] md:w-[80%] lg:w-[70%] h-[85vh] mx-auto mt-8 rounded-[2rem] relative overflow-hidden flex flex-col justify-center items-center text-center glass-panel"
        >
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            {/* <motion.img
                src="/profile.jpg"
                alt=""
                className="w-40 h-40 mx-auto rounded-full shadow-lg mb-6 object-cover"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            /> */}

            <motion.h1
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 flex justify-center gap-1 whitespace-nowrap cursor-pointer font-['Outfit']"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
                {title.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        className="text-slate-900 dark:text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.25)]"
                        variants={{
                            hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        whileHover={{
                            y: -15,
                            scale: 1.1,
                            color: "#60a5fa", // blue-400
                            textShadow: "0px 0px 20px rgba(96, 165, 250, 0.8)",
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.h1>

            <Shuffle
                text="Full Stack Developer"
                shuffleDirection="right"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={true}
                className="text-xl md:text-3xl font-semibold text-slate-800 dark:text-white mb-12 text-center"
                style={{ cursor: "pointer" }}
            />

            <div className="max-w-3xl px-6 md:px-10 text-base md:text-lg mb-12 text-slate-600 dark:text-gray-300 text-center leading-relaxed font-light">
                <TextType
                    text={[
                        "Passionate Full-Stack Developer building responsive, scalable, and modern web applications. Focused on creating clean UI, robust backend systems, optimized performance, and real-world digital experiences. Skilled in developing end-to-end solutions using modern web technologies, databases, APIs, and AI-assisted development workflows."
                    ]}
                    typingSpeed={40}
                    pauseDuration={1500}
                    deletingSpeed={0}
                    loop={false}
                    showCursor={true}
                    cursorCharacter="|"
                />
            </div>

            <motion.div
                className="flex justify-center gap-6 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                <a
                    href="/Alen_Fullstack_Resume.pdf"
                    download
                    className="group relative px-8 py-4 bg-white text-black dark:bg-white/10 dark:text-white font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Download Resume</span>
                    <svg className="w-5 h-5 relative z-10 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </a>

                <a
                    href="#projects"
                    className="px-8 py-4 bg-transparent border border-slate-300 text-slate-800 dark:border-white/20 dark:text-white font-semibold rounded-full transition-all hover:bg-slate-100 hover:border-slate-400 dark:hover:bg-white/10 active:scale-95 flex items-center gap-2"
                >
                    View Work
                </a>
            </motion.div>
        </section>
    );
}
