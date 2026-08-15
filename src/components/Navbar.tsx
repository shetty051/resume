"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { studioConfig } from "@/config/studio";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/Button";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "education", label: "Education", href: "#education" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "ai", label: "AI", href: "#ai" },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  // Scroll detection & Active section observer
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section intersection detection
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(NAV_ITEMS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (pathname !== "/") {
      // If on child page like /contact or /projects/1, route to home with hash
      router.push(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[var(--bg-primary)]/85 backdrop-blur-xl border-b border-[var(--border-subtle)] shadow-[var(--shadow-soft)] py-3"
          : "bg-[var(--bg-primary)]/60 backdrop-blur-md border-b border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* BRAND / LOGO */}
        <Link
          href="/#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="group flex items-center gap-3 cursor-pointer"
        >
          <div className="w-9 h-9 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] flex items-center justify-center font-black text-sm tracking-tighter group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300 shadow-sm">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-serif italic font-bold text-xl md:text-2xl tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              {studioConfig.name}
            </span>
          </div>
        </Link>

        {/* DESKTOP TABS */}
        <nav className="hidden md:flex items-center gap-1 bg-[var(--bg-secondary)]/70 p-1.5 rounded-full border border-[var(--border-subtle)] backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id && pathname === "/";
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={cn(
                  "relative px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 rounded-full cursor-pointer select-none",
                  isActive
                    ? "text-[var(--bg-primary)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-[var(--text-primary)] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* RIGHT SIDE ACTION BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          {/* Dark / Light Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-full border border-[var(--border-subtle)] hover:border-[var(--border-strong)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:text-[var(--accent)] transition-all cursor-pointer shadow-sm"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </motion.button>

          {/* Contact Button */}
          <Button href="/contact" variant="primary" size="sm" className="gap-1.5 shadow-sm">
            <span>Contact</span>
            <ArrowUpRight size={14} />
          </Button>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-[var(--border-subtle)] text-[var(--text-primary)] bg-[var(--bg-card)]"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[var(--text-primary)] rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/95 backdrop-blur-xl px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id && pathname === "/";
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={cn(
                      "text-sm font-semibold uppercase tracking-widest py-2.5 px-4 rounded-xl transition-all flex items-center justify-between",
                      isActive
                        ? "bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  className="w-full justify-between"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Initiate Contact</span>
                  <ArrowUpRight size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
