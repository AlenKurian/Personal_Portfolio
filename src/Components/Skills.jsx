import * as motion from "motion/react-client";

export default function Skills() {
    const skills = [
        "React.js",
        "Next.js",
        "Redux",
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "Neo4j",
        "LLM's",
        "Tesseract",
        "Python",
        "Firebase",
        "REST APIs",
        "JavaScript",
        "TypeScript",
        "Bootstrap",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Git & GitHub",
        "AI-Assisted Development"
    ];

    const rows = [];
    for (let i = 0; i < skills.length; i += 7) rows.push(skills.slice(i, i + 7));

    return (
        <section className="py-24 text-center relative max-w-5xl mx-auto">
            <motion.h2
                className="text-4xl md:text-5xl font-bold mb-12 font-['Outfit'] text-slate-900 dark:text-white"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                My <span className="text-blue-400">Skills</span>
            </motion.h2>

            <motion.div
                className="flex flex-col gap-4 md:gap-6 items-center px-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                    visible: { transition: { staggerChildren: 0.08 } }
                }}
            >
                {rows.map((row, rowIdx) => (
                    <div key={rowIdx} className="flex flex-wrap justify-center gap-4 md:gap-6">
                        {row.map((s) => (
                            <motion.div
                                key={s}
                                variants={{
                                    hidden: { opacity: 0, y: 20, scale: 0.8 },
                                    visible: { opacity: 1, y: 0, scale: 1 }
                                }}
                                transition={{ type: "spring", stiffness: 100 }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -5,
                                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
                                }}
                                className="px-6 py-3 md:px-8 md:py-4 rounded-full font-medium text-sm md:text-base glass-panel bg-white border-slate-200 text-slate-700 cursor-default transition-colors hover:bg-slate-100 dark:bg-white/5 dark:border-white/10 dark:text-gray-200 dark:hover:bg-white/10"
                            >
                                {s}
                            </motion.div>
                        ))}
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
