"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { studioConfig } from "@/config/studio";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/Button";
import { Sun, Moon, Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ResumeModal } from "@/components/ResumeModal";

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
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
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

    // Immediately update active section pill
    setActiveSection(sectionId);

    // Close mobile menu drawer
    setMobileMenuOpen(false);

    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      return;
    }

    // Defer scroll calculation by 1 frame to ensure DOM layout / menu collapse is calculated smoothly
    requestAnimationFrame(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[var(--bg-primary)] border-b border-[var(--border-strong)] py-3"
            : "bg-[var(--bg-primary)]/90 border-b border-[var(--border-subtle)] py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* BRAND / LOGO */}
          <Link
            href="/#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="group flex items-center gap-3 cursor-pointer"
          >
            <div className="w-8 h-8 bg-[var(--text-primary)] text-[var(--bg-primary)] flex items-center justify-center font-mono font-bold text-xs tracking-tighter group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-200">
              AS
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg md:text-xl tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors uppercase">
                Aakash
              </span>
            </div>
          </Link>

          {/* DESKTOP TABS */}
          <nav className="hidden md:flex items-center gap-1 border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 p-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id && pathname === "/";
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={cn(
                    "relative px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer select-none",
                    isActive
                      ? "text-[var(--bg-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-[var(--text-primary)] -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* RIGHT SIDE ACTION BUTTONS */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 border border-[var(--border-subtle)] hover:border-[var(--border-strong)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:text-[var(--accent)] transition-all cursor-pointer"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </motion.button>

            {/* Resume Button */}
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setResumeModalOpen(true)}
              className="gap-1.5 shadow-sm border-[var(--border-subtle)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-xs"
            >
              <FileText size={14} />
              <span>Resume</span>
            </Button>

            {/* Contact Button */}
            <Button href="/contact" variant="primary" size="sm" className="gap-1.5 shadow-sm text-xs">
              <span>Contact</span>
              <ArrowUpRight size={14} />
            </Button>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setResumeModalOpen(true)}
              aria-label="View Resume"
              className="p-2 rounded-full border border-[var(--border-subtle)] text-[var(--text-primary)] bg-[var(--bg-card)]"
            >
              <FileText size={16} />
            </button>

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
                <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2">
                  <Button
                    variant="secondary"
                    size="md"
                    className="w-full justify-between"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setResumeModalOpen(true);
                    }}
                  >
                    <span>Get Resume</span>
                    <FileText size={16} />
                  </Button>

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

      {/* RESUME MODAL */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </>
  );
};
