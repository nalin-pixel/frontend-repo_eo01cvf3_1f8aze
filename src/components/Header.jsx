import { useEffect, useState } from 'react';
import { Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';

function Header({ theme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        isScrolled
          ? 'backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" onClick={handleNavClick('home')} className="font-semibold tracking-tight text-neutral-900 dark:text-white">
          <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">Creative</span>
          <span className="ml-1">Portfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={handleNavClick(n.id)}
              className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="mailto:you@example.com" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="Email">
            <Mail className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="GitHub">
            <Github className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
          </a>
          <button
            onClick={onToggleTheme}
            className="ml-1 p-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-neutral-700" />
            )}
          </button>
        </div>
      </div>
      <div className="md:hidden px-4 pb-3 flex gap-4">
        {navItems.map((n) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            onClick={handleNavClick(n.id)}
            className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            {n.label}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;
