"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Text color classes based on scroll position
  const textColorClass = isScrolled ? "text-foreground" : "text-white";
  const linkHoverClass = isScrolled
    ? "hover:text-primary"
    : "hover:text-primary/90";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className={cn(
              "text-xl font-bold font-playfair transition-colors",
              textColorClass
            )}
          >
            Biyom Jung Rana
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className={cn(
                "transition-colors",
                textColorClass,
                linkHoverClass
              )}
            >
              About
            </Link>
            <Link
              href="#measurements"
              className={cn(
                "transition-colors",
                textColorClass,
                linkHoverClass
              )}
            >
              Measurements
            </Link>
            <Link
              href="#brands"
              className={cn(
                "transition-colors",
                textColorClass,
                linkHoverClass
              )}
            >
              Brands
            </Link>
            <Link
              href="#achievements"
              className={cn(
                "transition-colors",
                textColorClass,
                linkHoverClass
              )}
            >
              Achievements
            </Link>
            <Link
              href="#runways"
              className={cn(
                "transition-colors",
                textColorClass,
                linkHoverClass
              )}
            >
              Runways
            </Link>
            <Link
              href="#gallery"
              className={cn(
                "transition-colors",
                textColorClass,
                linkHoverClass
              )}
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className={cn(
                "transition-colors",
                textColorClass,
                linkHoverClass
              )}
            >
              Contact
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={isScrolled ? "" : "text-white hover:text-white/90"}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={cn(
                "mr-2",
                isScrolled ? "" : "text-white hover:text-white/90"
              )}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className={isScrolled ? "" : "text-white hover:text-white/90"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-4 bg-background/95 backdrop-blur-md flex flex-col space-y-4">
          <Link
            href="#about"
            className="py-2 hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="#measurements"
            className="py-2 hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Measurements
          </Link>
          <Link
            href="#brands"
            className="py-2 hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Brands
          </Link>
          <Link
            href="#achievements"
            className="py-2 hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Achievements
          </Link>
          <Link
            href="#runways"
            className="py-2 hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Runways
          </Link>
          <Link
            href="#gallery"
            className="py-2 hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Gallery
          </Link>
          <Link
            href="#contact"
            className="py-2 hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
