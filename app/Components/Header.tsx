"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header  className={`shadow-md z-50 transition-all duration-300 ${
        isScrolled ? "background-header-scroll" : "background-header-default"
      }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-600">
          Vegi<span className="text-gray-800">Export</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg font-medium relative">
          <Link
            href="/about"
            className={`transition ${
              isActive("/about")
                ? "text-green-600 font-semibold"
                : "hover:text-green-600"
            }`}
          >
            About
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={`transition flex items-center gap-1 ${
                ["/vegetables", "/spices", "/fruits"].includes(pathname)
                  ? "text-green-600 font-semibold"
                  : "hover:text-green-600"
              }`}
            >
              Products
              <svg
                className={`w-4 h-4 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white border rounded shadow-lg w-40 z-50">
                <Link
                  href="/vegetables"
                  className={`block px-4 py-2 ${
                    isActive("/vegetables")
                      ? "bg-green-50 text-green-600 font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Vegetables
                </Link>
                <Link
                  href="/spices"
                  className={`block px-4 py-2 ${
                    isActive("/spices")
                      ? "bg-green-50 text-green-600 font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Spices
                </Link>
                <Link
                  href="/fruits"
                  className={`block px-4 py-2 ${
                    isActive("/fruits")
                      ? "bg-green-50 text-green-600 font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Fruits
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact-us"
            className={`transition ${
              isActive("/contact-us")
                ? "text-green-600 font-semibold"
                : "hover:text-green-600"
            }`}
          >
            Contact Us
          </Link>

          {/* Admin Link */}
          <Link
            href="/admin"
            className={`px-4 py-2 rounded-lg text-sm transition ${
              isActive("/admin")
                ? "bg-green-700 text-white"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Admin
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col px-6 py-4 gap-4 text-lg">
            <Link
              href="/about"
              className={isActive("/about") ? "text-green-600 font-semibold" : ""}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            {/* Mobile Products */}
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full flex items-center justify-between hover:text-green-600 transition ${
                  ["/vegetables", "/spices", "/fruits"].includes(pathname)
                    ? "text-green-600 font-semibold"
                    : ""
                }`}
              >
                <span>Products</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  } ${
                    ["/vegetables", "/spices", "/fruits"].includes(pathname)
                      ? "text-green-600"
                      : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  <Link
                    href="/vegetables"
                    className={isActive("/vegetables") ? "text-green-600 font-semibold" : ""}
                    onClick={() => setIsOpen(false)}
                  >
                    Vegetables
                  </Link>
                  <Link
                    href="/spices"
                    className={isActive("/spices") ? "text-green-600 font-semibold" : ""}
                    onClick={() => setIsOpen(false)}
                  >
                    Spices
                  </Link>
                  <Link
                    href="/fruits"
                    className={isActive("/fruits") ? "text-green-600 font-semibold" : ""}
                    onClick={() => setIsOpen(false)}
                  >
                    Fruits
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact-us"
              className={isActive("/contact-us") ? "text-green-600 font-semibold" : ""}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>

            {/* Admin Link */}
            <Link
              href="/admin"
              className={`px-4 py-2 rounded-lg text-center ${
                isActive("/admin")
                  ? "bg-green-700 text-white"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Admin Panel
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
