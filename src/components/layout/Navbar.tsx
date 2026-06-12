"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Search,
  ChevronDown,
} from "lucide-react";

import { navigation } from "../../data/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
              <span className="text-white font-bold">
                J
              </span>
            </div>

            <span className="text-3xl font-bold">
              Jetpack
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-1 text-gray-700 hover:text-black transition"
              >
                {item.name}

                {item.hasDropdown && (
                  <ChevronDown size={16} />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-6">

            <button>
              <Search
                size={20}
                className="text-gray-700"
              />
            </button>

            <Link
              href="/login"
              className="text-gray-700 hover:text-black"
            >
              Log in
            </Link>

            <Link
              href="/signup"
              className="px-6 py-3 border border-black rounded-lg font-medium hover:bg-black hover:text-white transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            className="lg:hidden"
          >
            {mobileMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">

          <div className="px-6 py-5 flex flex-col gap-5">

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="flex items-center justify-between text-gray-700"
              >
                {item.name}

                {item.hasDropdown && (
                  <ChevronDown size={16} />
                )}
              </Link>
            ))}

            <hr />

            <Link
              href="/login"
              className="text-gray-700"
            >
              Log in
            </Link>

            <Link
              href="/signup"
              className="w-full text-center px-5 py-3 rounded-lg bg-black text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}