import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png"
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
 <header className="bg-white sticky top-0 z-10">

      {/* TOP STRIP */}
      <div className="text-center text-[11px] tracking-[3px] py-2 bg-black text-white">
        FREE SHIPPING ABOVE ₹999 • NEW COLLECTION 2026
      </div>

      {/* MAIN NAV */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LEFT MENU (DESKTOP) */}
        <nav className="hidden md:flex gap-8 text-sm font-light tracking-wide">

          <Link className="hover:text-black text-gray-600 transition" to="/">Home</Link>
          <Link className="hover:text-black text-gray-600 transition" to="/shop">MenCollection</Link>
          <Link className="hover:text-black text-gray-600 transition" to="/collection">WomenCollection</Link>

        </nav>

        {/* CENTER BRAND */}
     <div className="w-full flex items-center justify-center">
  <img
    src={logo}
    alt="Shyam Fashion"
    className="h-14 md:h-14 lg:h-18 w-auto object-contain"
  />
</div>

        {/* RIGHT MENU (DESKTOP) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-light">

          <Link className="hover:text-black text-gray-600 transition" to="/about">
            About
          </Link>

          <Link className="hover:text-black text-gray-600 transition" to="/contact">
            Contact
          </Link>

          <Link
            to="/cart"
            className="relative px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition"
          >
            Cart
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] px-1.5 py-0.5">
              0
            </span>
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl text-black"
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-sm">

          <Link onClick={() => setMobileOpen(false)} to="/">Home</Link>
          <Link onClick={() => setMobileOpen(false)} to="/shop">Shop</Link>
          <Link onClick={() => setMobileOpen(false)} to="/collection">Women Collection</Link>
          <Link onClick={() => setMobileOpen(false)} to="/about">About</Link>
          <Link onClick={() => setMobileOpen(false)} to="/contact">Contact</Link>

          <Link
            onClick={() => setMobileOpen(false)}
            to="/cart"
            className="border border-black px-4 py-2 text-center"
          >
            Cart (0)
          </Link>

        </div>
      )}

    </header>
  );
}

export default Navbar;