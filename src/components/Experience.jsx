import { motion } from 'framer-motion';

const items = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Acme Studio',
    period: '2022 — Present',
    desc: 'Leading web experiences with React, performance optimizations, and motion design.'
  },
  {
    role: 'Product Designer / Developer',
    company: 'Pixel & Co',
    period: '2020 — 2022',
    desc: 'Shipped design systems and interactive prototypes across platforms.'
  },
  {
    role: 'Creative Technologist',
    company: 'Freelance',
    period: '2018 — 2020',
    desc: 'Built immersive websites for brands, focusing on storytelling and 3D.'
  },
];

function Experience() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Experience</h2>
        <div className="mt-10 relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500 via-fuchsia-500 to-sky-500" />
          <div className="grid md:grid-cols-2 gap-8">
            {items.map((item, idx) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative rounded-2xl border border-black/5 bg-white/60 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 ${
                  idx % 2 === 0 ? 'md:mt-8' : ''
                }`}
              >
                <div className="absolute -left-2 md:left-1/2 md:-translate-x-1/2 -top-2 h-4 w-4 rounded-full bg-white ring-2 ring-violet-500 dark:bg-neutral-900" />
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.period}</p>
                <h3 className="mt-1 text-lg font-semibold text-neutral-900 dark:text-white">{item.role}</h3>
                <p className="text-neutral-700 dark:text-neutral-300">{item.company}</p>
                <p className="mt-3 text-neutral-600 dark:text-neutral-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
