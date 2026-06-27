import { FaInstagram, FaPhoneAlt } from "react-icons/fa";

function About() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      {/* ================= HERO ================= */}
      <div className="max-w-7xl mx-auto px-5 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src="https://i.pinimg.com/1200x/a5/bf/f6/a5bff6a3e928341f7c8c5e884adf6d8c.jpg"
            alt="Shyam Fashion"
            className="w-full h-[450px] md:h-[650px] object-cover rounded-lg shadow-2xl"
          />

          <div className="absolute bottom-5 left-5 bg-black text-white px-6 py-3 rounded-lg shadow-lg">
            <p className="text-sm uppercase tracking-widest">
              Trusted Fashion Store
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="uppercase tracking-[6px] text-sm text-gray-500">
            About Us
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-light leading-tight">
            Welcome To
            <span className="font-semibold block">
              Shyam Fashion Nawalgarh
            </span>
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Shyam Fashion Nawalgarh is your trusted destination for premium
            men's fashion. We offer a wide collection of stylish shirts,
            t-shirts, jeans, trousers, casual wear and seasonal collections.
            Our goal is to provide the latest fashion trends with premium
            quality, comfort and affordable pricing.
          </p>

          {/* Contact */}
          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-xl text-black" />
              <a
                href="tel:9887689856"
                className="text-lg font-medium hover:underline"
              >
                +91 98876 89856
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaInstagram className="text-2xl text-pink-600" />

              <a
                href="https://www.instagram.com/shyam_fashion_nawalgarh/"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium hover:text-pink-600 transition"
              >
                @shyam_fashion_nawalgarh
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FEATURES ================= */}

      <div className="grid md:grid-cols-2">
        <div className="bg-black text-white flex items-center justify-center px-10 py-20">
          <div className="max-w-md">
            <h2 className="text-4xl font-light mb-5">
              Latest Fashion Collection
            </h2>

            <p className="text-gray-400 leading-8">
              Explore stylish shirts, jeans, t-shirts, casual wear and premium
              fashion for every occasion. Stay updated with the latest trends.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 flex items-center justify-center px-10 py-20">
          <div className="max-w-md">
            <h2 className="text-4xl font-light mb-5">
              Premium Quality
            </h2>

            <p className="text-gray-600 leading-8">
              Every product is selected with quality, comfort and style in
              mind so you always get the best shopping experience.
            </p>
          </div>
        </div>
      </div>

      {/* ================= STATS ================= */}

      <div className="max-w-7xl mx-auto py-20 px-5 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center border-b">
        <div>
          <h3 className="text-5xl font-light">1000+</h3>
          <p className="text-gray-500 mt-2">
            Happy Customers
          </p>
        </div>

        <div>
          <h3 className="text-5xl font-light">500+</h3>
          <p className="text-gray-500 mt-2">
            Fashion Products
          </p>
        </div>

        <div>
          <h3 className="text-5xl font-light">100%</h3>
          <p className="text-gray-500 mt-2">
            Quality Products
          </p>
        </div>

        <div>
          <h3 className="text-5xl font-light">5★</h3>
          <p className="text-gray-500 mt-2">
            Customer Rating
          </p>
        </div>
      </div>

      {/* ================= CTA ================= */}

      <div className="py-24 text-center px-5">
        <h2 className="text-4xl md:text-5xl font-light">
          Visit Shyam Fashion Nawalgarh
        </h2>

        <p className="mt-5 text-gray-500 max-w-xl mx-auto">
          Discover the latest men's fashion collection with premium quality and
          affordable prices. Follow us on Instagram for daily updates and new
          arrivals.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a
            href="https://www.instagram.com/shyam_fashion_nawalgarh/"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            Follow Instagram
          </a>

          <a
            href="tel:9887689856"
            className="px-8 py-3 border border-black rounded hover:bg-black hover:text-white transition"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;