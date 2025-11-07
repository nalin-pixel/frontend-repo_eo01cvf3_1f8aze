import { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onBlur = (e) => setTouched({ ...touched, [e.target.name]: true });

  const errors = {
    name: form.name.trim().length < 2 ? 'Please enter your name' : '',
    email: /[^@\s]+@[^@\s]+\.[^@\s]+/.test(form.email) ? '' : 'Enter a valid email',
    message: form.message.trim().length < 10 ? 'Tell me a bit more' : '',
  };

  const hasErrors = Object.values(errors).some(Boolean);

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!hasErrors) {
      setSent(true);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Let’s connect</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">
            Have a project in mind or just want to say hi? Drop a message— I’ll get back within 24 hours.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="mailto:you@example.com" className="text-sm text-violet-600 hover:underline">you@example.com</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm text-violet-600 hover:underline">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm text-violet-600 hover:underline">GitHub</a>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-black/5 bg-white/60 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
        >
          {sent ? (
            <div className="text-center py-10">
              <p className="text-lg font-semibold text-neutral-900 dark:text-white">Thanks! Your message has been sent.</p>
              <p className="text-neutral-600 dark:text-neutral-400">I’ll reach out shortly.</p>
            </div>
          ) : (
            <>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm text-neutral-700 dark:text-neutral-300">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={`mt-1 w-full rounded-lg border bg-transparent px-3 py-2 outline-none transition placeholder:text-neutral-400 dark:placeholder:text-neutral-500 ${
                      touched.name && errors.name
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-black/10 focus:border-violet-500 dark:border-white/10'
                    }`}
                    placeholder="Your name"
                  />
                  {touched.name && errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm text-neutral-700 dark:text-neutral-300">Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={`mt-1 w-full rounded-lg border bg-transparent px-3 py-2 outline-none transition placeholder:text-neutral-400 dark:placeholder:text-neutral-500 ${
                      touched.email && errors.email
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-black/10 focus:border-violet-500 dark:border-white/10'
                    }`}
                    placeholder="you@example.com"
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm text-neutral-700 dark:text-neutral-300">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    onBlur={onBlur}
                    rows={5}
                    className={`mt-1 w-full rounded-lg border bg-transparent px-3 py-2 outline-none transition placeholder:text-neutral-400 dark:placeholder:text-neutral-500 ${
                      touched.message && errors.message
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-black/10 focus:border-violet-500 dark:border-white/10'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {touched.message && errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-sky-500 px-5 py-2.5 text-white shadow-md shadow-violet-600/20 transition hover:brightness-110"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
