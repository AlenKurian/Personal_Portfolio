import * as motion from "motion/react-client";

export default function About() {
  return (
    <section className="w-[90%] md:w-[80%] mx-auto mt-20 p-10 md:p-16 rounded-[2rem] glass-panel relative overflow-hidden">

      {/* Decorative Glow */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE CONTENT */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-['Outfit'] bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent inline-block">
            About Me
          </h2>

          <p className="text-lg leading-relaxed text-slate-600 dark:text-gray-300 font-light mb-6">
            Hi, I'm a <strong className="font-medium text-slate-900 dark:text-white">Full-Stack Developer</strong> passionate about building modern, responsive web applications and solving real-world problems using scalable code and AI-powered development tools.
          </p>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-gray-300 font-light">
            I have hands-on experience in developing full-stack web applications and building responsive, user-focused digital products. I enjoy working across frontend and backend development, creating scalable applications with clean design and functionality. I also leverage AI-powered development tools to improve productivity, accelerate development, and enhance user experiences. Passionate about learning new technologies, improving my skills, and building meaningful digital experiences.
          </p>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative group">
            {/* Animated Glow behind image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />

            <img
              src="/Profile.jpeg"
              alt="Profile"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

