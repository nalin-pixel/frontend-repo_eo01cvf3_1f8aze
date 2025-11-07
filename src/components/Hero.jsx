import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white dark:from-neutral-950/70 dark:via-neutral-950/40 dark:to-neutral-950" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
        >
          Hi, I’m <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">Your Name</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300"
        >
          Creative Developer & Designer crafting playful, performant digital experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-white shadow-lg shadow-neutral-900/20 transition hover:translate-y-[-2px] hover:shadow-xl dark:bg-white dark:text-neutral-900"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-neutral-300/70 px-5 py-2.5 text-neutral-800 backdrop-blur-sm transition hover:bg-white/60 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
