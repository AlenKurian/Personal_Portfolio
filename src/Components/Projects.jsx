import React, { useState, useEffect } from "react";
import * as motion from "motion/react-client";

function ProjectModal({ project, onClose }) {
    useEffect(() => {
        const handleKey = (e) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-lg bg-white dark:bg-[#111] rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl p-8"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
                    aria-label="Close"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Project name */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 pr-8 font-['Outfit']">
                    {project.name}
                </h3>

                {/* Full description */}
                <p className="text-slate-600 dark:text-gray-300 font-light leading-relaxed mb-6">
                    {project.description}
                </p>

                {/* Tools / Stack */}
                {project.tools && project.tools.length > 0 && (
                    <div className="mb-6">
                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Tools & Technologies</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool) => (
                                <span
                                    key={tool}
                                    className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Language badge (for GitHub repos without tools array) */}
                {!project.tools && project.language && (
                    <div className="mb-6">
                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Primary Language</p>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            {project.language}
                        </span>
                    </div>
                )}

                {/* Links */}
                <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-100 dark:border-white/10">
                    {project.html_url && (
                        <a
                            href={project.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-80 transition-opacity"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </a>
                    )}
                    {/* <a
                        href={project.live_url || project.homepage || "#"}
                        target={project.live_url || project.homepage ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        onClick={(e) => {
                            if (!project.live_url && !project.homepage) e.preventDefault();
                        }}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                            project.live_url || project.homepage
                                ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:opacity-80"
                                : "bg-slate-200 dark:bg-white/5 text-slate-400 dark:text-slate-500 cursor-not-allowed"
                        }`}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                    </a> */}
                </div>
            </motion.div>
        </div>
    );
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const allProjects = [
        {
            id: "p-1",
            name: "MariTime",
            description: "AI-powered maritime document clearance platform with OCR and LLM-based document extraction. Automates port compliance validation by parsing ship manifests, bills of lading, and customs forms. Features a real-time dashboard for port agents, document status tracking, and automated rejection/approval workflows.",
            tools: ["Next.js", "PostgreSQL", "Neo4j", "OpenAI", "LLM", "Tesseract OCR", "FastAPI"],
            html_url: "https://github.com/AlenKurian/MariTime",
            live_url: "",
        },
        {
            id: "p-2",
            name: "Food Recipe App",
            description: "A responsive recipe discovery app that lets users search, browse, and save their favourite meals using a third-party meals API. Features category filtering, detailed ingredient and instruction views, and a personal saved-recipes collection stored in local storage.",
            tools: ["Angular", "Tailwind CSS", "RestAPI", "TypeScript", "MongoDB", "Express", "Node.js"],
            html_url: "https://github.com/alenkurian/food-recipe-app",
            live_url: "",
        },
        {
            id: "p-3",
            name: "HostHub",
            description: "Full-stack MERN event management platform enabling organizers to create, publish, and manage events. Includes JWT-based authentication, Stripe payment integration for ticket purchases, QR-code ticket generation and scanning, and role-based dashboards for admins and organizers.",
            tools: ["React", "MongoDB", "Express.js", "Node.js", "JavaScript", "Axios", "Stripe", "JWT", "RestAPI"],
            html_url: "https://github.com/alenkurian/HostHub",
            live_url: "",
        },
        {
            id: "p-4",
            name: "BookStore",
            description: "An online bookstore application where users can browse, search, and purchase books. Features a catalogue with filtering by genre and author, a shopping cart, and a checkout flow with order confirmation.",
            tools: ["React", "Node.js", "Express.js", "MongoDB", "Axios", "JavaScript", "RestAPI", "Tailwind CSS"],
            html_url: "https://github.com/alenkurian/bookstore",
            live_url: "",
        },
        {
            id: "p-5",
            name: "Restaurant Table Booking System",
            description: "Web-based table reservation system for restaurants, allowing customers to browse available time slots, book tables online, and receive instant email confirmations. Restaurant managers get a real-time availability dashboard to manage walk-ins and reservations.",
            tools: ["React", "Tailwind CSS", "RestAPI", "JavaScript", "Firebase"],
            html_url: "https://github.com/alenkurian/Restaurant-Table-Booking",
            live_url: "",
        },
        {
            id: "p-6",
            name: "Optivision",
            description: "Developed an e-commerce website for purchasing a wide range of eyewear products, including prescription glasses, sunglasses, and contact lenses. The platform provides users with an intuitive shopping experience through product browsing, category-based filtering, detailed product pages, and a responsive user interface. The project focuses on creating a modern, accessible, and user-friendly online store for eyewear customers.",
            tools: ["HTML", "CSS", "Bootstrap", "JavaScript"],
            html_url: "https://github.com/alenkurian/optivision",
            live_url: "",
        },
        {
            id: "p-7",
            name: "Swiggy_Clone",
            description: "Developed a responsive landing page inspired by Swiggy's homepage using modern web development technologies. The project focuses on recreating the user interface, including the navigation bar, hero section, service highlights, promotional banners, app download section, and footer. Emphasis was placed on responsive design, clean layouts, and an intuitive user experience to closely mimic the look and feel of the original platform.",
            tools: ["HTML", "CSS","Tailwind CSS", "JavaScript"],
            html_url: "https://github.com/alenkurian/swiggy_clone",
            live_url: "",
        },
    ];

    return (
        <>
            <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-16 font-['Outfit'] text-slate-900 dark:text-white"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Latest <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                        {allProjects.map((repo, idx) => (
                            <motion.div
                                key={repo.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative cursor-pointer"
                                onClick={() => setSelectedProject(repo)}
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
                                <div className="relative h-full flex flex-col p-8 bg-white dark:bg-[#0a0a0a] rounded-3xl border border-slate-200 dark:border-white/10 glass-panel">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 line-clamp-1 group-hover:text-blue-400 transition-colors">
                                        {repo.name}
                                    </h3>

                                    <p className="text-slate-600 dark:text-gray-400 font-light mb-6 flex-grow line-clamp-3">
                                        {repo.description}
                                    </p>

                                    <div className="mt-auto">
                                        {(repo.tools || repo.language) && (
                                            <div className="mb-5 flex flex-wrap gap-2">
                                                {repo.tools
                                                    ? repo.tools.slice(0, 3).map((tool) => (
                                                        <span key={tool} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                                            {tool}
                                                        </span>
                                                    ))
                                                    : (
                                                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                                            {repo.language}
                                                        </span>
                                                    )
                                                }
                                                {repo.tools && repo.tools.length > 3 && (
                                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-white/5 text-slate-400 border border-slate-200 dark:border-white/10">
                                                        +{repo.tools.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                        )}

                                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 group-hover:text-blue-500 dark:text-white dark:group-hover:text-blue-400 transition-colors">
                                            View Details
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                </div>
            </section>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </>
    );
}
