import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-5 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-semibold tracking-wide">
            SHYAM FASHION
          </h2>

          <p className="mt-5 text-gray-400 leading-7 text-sm">
            Shyam Fashion Nawalgarh is your trusted destination for premium
            men's fashion. Discover stylish shirts, t-shirts, jeans, casual
            wear and the latest fashion collection at affordable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-medium mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/shop" className="hover:text-white transition">
                Shop
              </Link>
            </li>

            <li>
              <Link to="/collection" className="hover:text-white transition">
                Collection
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-medium mb-5">
            Categories
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Shirts</li>
            <li>T-Shirts</li>
            <li>Jeans</li>
            <li>Casual Wear</li>
            <li>New Arrivals</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-medium mb-5">
            Contact Us
          </h3>

          <div className="space-y-5 text-gray-400">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-white" />
              <span>Nawalgarh, Rajasthan</span>
            </div>

            <a
              href="tel:9887689856"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <FaPhoneAlt className="text-white" />
              <span>+91 98876 89856</span>
            </a>

            <a
              href="https://www.instagram.com/shyam_fashion_nawalgarh/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-pink-400 transition"
            >
              <FaInstagram className="text-pink-500 text-lg" />
              <span>@shyam_fashion_nawalgarh</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 <span className="text-white">Shyam Fashion Nawalgarh</span>.
            All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed & Developed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;