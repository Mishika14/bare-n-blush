import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg =
    scrolled || !isHome
      ? "bg-background/95 shadow-sm backdrop-blur-md"
      : "bg-transparent";

  const textColor = "text-foreground";

  const links = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      {/* Main Container */}
      <div className="flex w-full items-center justify-between pl-2 pr-4 py-4 sm:pl-3 sm:pr-6 md:pl-4 md:pr-8 lg:pl-6 lg:pr-12">

        {/* LEFT: Logo + Brand */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3"
          aria-label="Bare & Blush home"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm sm:h-12 sm:w-12">
            <img
              src={'/src/assets/logo.svg'}
              alt='Bare & Blush'
              className='h-full w-full object-contain p-1'
            />
          </div>

          <span
            className={`font-heading hidden text-3xl font-extrabold tracking-wide sm:inline ${textColor}`}
          >
            Bare & Blush
          </span>
        </Link>

        {/* CENTER/RIGHT: Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-body text-[15px] tracking-widest uppercase transition-all duration-200 hover:text-cta md:text-base ${textColor
                } ${location.pathname === l.to
                  ? "border-b-2 border-cta pb-0.5"
                  : ""
                }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* RIGHT: Cart + Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Cart Icon */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className={`relative flex items-center justify-center rounded-full p-2 transition-colors hover:bg-primary/10 ${textColor}`}
            aria-label="Open cart"
          >
            <ShoppingBag size={24} strokeWidth={1.75} />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {totalItems > 9 ? '9+' : totalItems}
              </span>
            )}
          </button>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className={`md:hidden ${textColor}`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={28} strokeWidth={1.75} />
            ) : (
              <Menu size={28} strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background/98 px-6 pb-6 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              className="font-body block py-3.5 text-base tracking-widest uppercase text-foreground transition-colors hover:text-cta"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;