import * as motion from "motion/react-client";

export default function Contact() {
    return (
        <section id="contact" className="py-32 text-center relative max-w-4xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass-panel p-12 md:p-20 rounded-[3rem] relative overflow-hidden"
            >
                {/* Decorative Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-40 bg-blue-500/20 blur-[80px] rounded-full" />

                <h2 className="text-4xl md:text-6xl font-bold mb-6 font-['Outfit'] text-slate-900 dark:text-white relative z-10">
                    Let's Build Something <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent italic">Together</span>
                </h2>

                <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 mb-12 font-light max-w-2xl mx-auto relative z-10">
                    Feel free to reach out if you're looking for a developer, have a question, or simply want to connect.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                    <a
                        href="mailto:alenkurian23@gmail.com"
                        className="w-full sm:w-auto px-8 py-4 bg-white text-black dark:bg-white/10 dark:text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all text-center group"
                    >
                        Say Hello 👋
                    </a>

                    <div className="flex gap-4">
                        <a
                            href="https://wa.me/+918943503267"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full bg-white border border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300 hover:text-green-500 hover:-translate-y-1 transition-all dark:bg-white/10 dark:border-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:border-white/20 dark:hover:text-green-400"
                            aria-label="WhatsApp"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.89-4.443 9.89-9.89 0-5.446-4.44-9.888-9.888-9.888-5.45 0-9.89 4.444-9.89 9.889 0 1.956.555 3.824 1.56 5.453l-1.108 4.053 4.144-1.209zm8.307-7.469c-.443-.223-2.628-1.298-3.036-1.448-.408-.15-.705-.223-1.003.223-.298.448-1.149 1.448-1.408 1.747-.259.298-.518.335-.961.112-2.316-1.161-3.666-2.029-5.111-4.144-.213-.312.215-.295.642-1.15.111-.223.056-.418-.056-.642-.111-.223-.997-2.404-1.365-3.292-.358-.858-.724-.741-1.003-.754-.259-.011-.556-.013-.853-.013-.298 0-.782.112-1.19.556-.408.448-1.56 1.527-1.56 3.725 0 2.198 1.597 4.321 1.82 4.62.223.298 3.15 4.814 7.633 6.748 1.067.461 1.9.739 2.548.946 1.07.34 2.045.292 2.818.176 1.054-.158 2.628-1.075 2.998-2.112.37-1.037.37-1.924.259-2.112-.111-.188-.408-.298-.851-.521z"/></svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/alen-kurian-joseph/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full bg-white border border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300 hover:text-blue-500 hover:-translate-y-1 transition-all dark:bg-white/10 dark:border-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:border-white/20 dark:hover:text-blue-400"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                        <a
                            href="https://github.com/alenkurian"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full bg-white border border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300 hover:-translate-y-1 transition-all dark:bg-white/10 dark:border-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:border-white/20"
                            aria-label="GitHub"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
