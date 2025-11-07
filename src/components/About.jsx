import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const skills = [
  'JavaScript / TypeScript',
  'React / Next.js',
  'Node.js / APIs',
  'UI/UX & Motion',
  'Testing & QA',
  'Performance & SEO',
];

function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="aspect-square rounded-2xl bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-sky-500/20 p-[2px]"
        >
          <div className="h-full w-full rounded-2xl bg-white/60 p-1 dark:bg-neutral-900/60">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
              alt="Portrait"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">About Me</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
            I’m a creative technologist who blends code and design to build delightful, high-performance interfaces. 
            I love prototyping interactions, exploring 3D on the web, and crafting accessible experiences that feel alive.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((s) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 rounded-xl border border-black/5 bg-white/60 p-3 backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
              >
                <CheckCircle2 className="h-5 w-5 text-violet-500" />
                <span className="text-sm text-neutral-800 dark:text-neutral-200">{s}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
