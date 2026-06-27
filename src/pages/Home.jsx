import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Women from "../components/women"

function Home() {
  const items = [
    {
      name: "Shirts",
      img1: "https://i.pinimg.com/1200x/7f/95/6f/7f956f373a6f8f1f2dc73c61f89baa57.jpg",
      img2: "https://i.pinimg.com/736x/52/0b/33/520b33e12f1313a262809029d21ce17a.jpg"
    },
    {
      name: "t-shirts",
      img1: "https://i.pinimg.com/1200x/22/c0/4c/22c04cacd93051d66b5be962f56478c0.jpg",
      img2: "https://i.pinimg.com/736x/65/23/ee/6523ee8fadb6b077849049d5eed87e0e.jpg"
    },
    {
      name: "Casual Wear",
      img1: "https://i.pinimg.com/736x/00/6a/dd/006add1535b0511d15470ca73efaf070.jpg",
      img2: "https://i.pinimg.com/1200x/a0/c9/f2/a0c9f20c84f3a301726ff6ada9b6137c.jpg"
    },
    {
      name: "casual summer outfit",
      img1: "https://i.pinimg.com/736x/99/4b/db/994bdbb80991b9e0a11d44ce32fc2744.jpg",
      img2: "https://i.pinimg.com/736x/46/c5/9b/46c59b2046adfb8eb8426a1153e0e1ff.jpg"
    }
  ];
  const looks = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/ea/cf/84/eacf8477aaf13c65dd935d057350d3b1.jpg",
      title: " Men’s Olive Green Cargo Pants",
      price: "Starting ₹1,499",
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/0d/6e/30/0d6e302353f17652688056e54cc65257.jpg",
      title: "Street Style",
      price: "Starting ₹1,899",
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/08/be/38/08be38f516fe57cb5fe2622d51eaedf8.jpg",
      title: "Summer Collection",
      price: "Starting ₹1,299",
    },
    {
      id: 4,
      image: "https://i.pinimg.com/736x/a0/83/23/a08323d5ef1c513bd6bd0f1b67117aba.jpg",
      title: "Formal Look",
      price: "Starting ₹2,199",
    },
    {
      id: 5,
      image: "https://i.pinimg.com/736x/3c/b7/be/3cb7beaba89da65a76d83a3ab77746b8.jpg",
      title: "streetwear Look",
      price: "Starting ₹2,199",
    },
    {
      id: 6,
      image: "https://i.pinimg.com/736x/97/8b/a3/978ba385575f2dfe09cdcc6d8e86adbb.jpg",
      title: "Formal Look",
      price: "Starting ₹2,199",
    },
    {
      id: 7,
      image: "https://i.pinimg.com/736x/ec/e7/2a/ece72aabf237f9d80f4ee601f9abaa4f.jpg",
      title: "office Look",
      price: "Starting ₹2,199",
    },
    {
      id: 8,
      image: "https://i.pinimg.com/1200x/32/57/0b/32570b0e2c4a23f3c63356221f4d5c8c.jpg",
      title: "classy Look",
      price: "Starting ₹2,199",
    },
  ];
  const categories = [
    {
      id: 1,
      name: "T-Shirts",
      image:
        "https://i.pinimg.com/1200x/e3/03/60/e30360ea47e508ee17aa9deece1546d7.jpg",
    },
    {
      id: 2,
      name: "Shirts",
      image:
        "https://i.pinimg.com/736x/15/2e/0c/152e0c4770d8b73dc663a8b877fdc718.jpg",
    },
    {
      id: 3,
      name: "Jeans",
      image:
        "https://i.pinimg.com/736x/44/c9/71/44c971642ea05c6d69f7e30a6ede822e.jpg",
    },
    {
      id: 4,
      name: "Jackets",
      image:
        "https://i.pinimg.com/736x/14/e5/48/14e548cc6b88e1c7c13dcef58ed3fde9.jpg",
    },

  ];
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const width = 380;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* HERO SECTION */}
      <Hero />

  <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-10">
          <div>
            <p className="uppercase tracking-[5px] text-gray-500 text-sm">
              Latest Collection
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mt-3">
              SHOP THE LOOK
            </h2>

            <p className="text-gray-500 mt-4 max-w-xl">
              Discover complete men's outfits curated for every occasion.
            </p>
          </div>

          <Link
            to="/shop"
            className="mt-6 lg:mt-0 bg-black text-white px-8 py-3 hover:bg-neutral-800 transition"
          >
            Shop Collection
          </Link>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-lg flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-lg flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards */}
         <div
  ref={scrollRef}
  className="
    flex gap-6 overflow-x-auto scroll-smooth
    snap-x snap-mandatory
    px-2
  "
  style={{
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  }}
>
            {looks.map((item) => (
              <div
  key={item.id}
  className="
    min-w-[85%] 
    sm:min-w-[70%] 
    md:min-w-[340px] 
    lg:min-w-[380px]
    bg-white shadow-md flex-shrink-0
    snap-center
  "
>
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[500px] object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>

                  <p className="text-gray-500 mt-2">{item.price}</p>

                  <Link
                    to="/shop"
                    className="inline-block mt-5 border border-black px-6 py-3 hover:bg-black hover:text-white transition"
                  >
                    Shop Look
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Hide Scrollbar */}
          <style>
            {`
              div::-webkit-scrollbar{
                display:none;
              }
            `}
          </style>
        </div>
      </div>
    </section>
     <Women />
     
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          {/* Heading */}
          <div className="text-center mb-14">
            <p className="uppercase tracking-[5px] text-gray-500 text-sm">
              Shop By Category
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-light">
              Featured Categories
            </h2>
          </div>

          {/* Categories */}
          <div
            className="
        flex
        gap-5
        overflow-x-auto
        md:grid
        md:grid-cols-4
        md:gap-8
      "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {categories.map((item) => (
              <div
                key={item.id}
                className="group flex-none w-[170px] md:w-auto text-center cursor-pointer"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full aspect-[3/4] object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Name */}
                <h3 className="mt-4 text-lg font-medium tracking-wide">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Hide Scrollbar */}
          <style>
            {`
        div::-webkit-scrollbar {
          display: none;
        }
      `}
          </style>
          
        </div>
      </section>
      <section className="w-full bg-[#f3f3f3] py-20 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">

          {/* LEFT IMAGE */}
          <div className="relative">

            <img
              src="https://i.pinimg.com/736x/43/b7/76/43b776a9b24fbf4f58cd81f88f07b84b.jpg"
              alt="Mens Collection"
              className="w-full max-h-[550px] object-cover"
            />

            {/* SOFT OVERLAY */}
            <div className="absolute inset-0 bg-black/10 "></div>

          </div>

          {/* RIGHT CONTENT */}
          <div>

            <p className="uppercase tracking-[6px] text-sm text-gray-500">
              Category Collection
            </p>

            <h2 className="text-5xl md:text-6xl font-light mt-5 leading-tight">
              Men’s Fashion <br />
              Essentials
            </h2>

            <p className="text-gray-500 mt-6 max-w-md leading-relaxed">
              Explore premium shirts, suits, casual wear and ethnic collections designed for modern lifestyle.
            </p>

            {/* CATEGORY BUTTONS */}
            <div className="flex flex-wrap gap-3 mt-8">

              <button className="px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
                Shirts
              </button>

              <button className="px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
                Suits
              </button>

              <button className="px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
                Casual
              </button>

              <button className="px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
                Ethnic
              </button>

            </div>

            {/* CTA */}
            <button className="mt-10 px-7 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              View All Collection
            </button>

          </div>

        </div>

      </section>

      {/* CATEGORY SECTION */}
      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">


          {/* TITLE */}

          <div className="mb-14 flex justify-between items-end">

            <div>

              <p className="
text-xs
tracking-[5px]
uppercase
text-gray-400
">
                Explore
              </p>


              <h2 className="
text-5xl
font-light
text-black
mt-3
">
                Shop by Category
              </h2>


            </div>


            <p className="
hidden md:block
text-gray-500
">
              Discover latest styles
            </p>


          </div>







          {/* GRID */}

          <div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-7
">





            {items.map((item, i) => (


              <motion.div

                key={i}

                initial={{
                  opacity: 0,
                  y: 40
                }}

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                transition={{
                  delay: i * 0.15
                }}

                className="
group
relative
overflow-hidden
bg-gray-100
cursor-pointer
"

              >





                {/* IMAGE 1 */}

                <img

                  src={item.img1}

                  className="
h-[520px]
w-full
object-cover
transition
duration-700
group-hover:scale-110
"

                />







                {/* HOVER IMAGE */}

                <img

                  src={item.img2}

                  className="
absolute
inset-0
h-[520px]
w-full
object-cover
opacity-0
group-hover:opacity-100
transition
duration-700
group-hover:scale-105
"

                />








                {/* DARK OVERLAY */}

                <div className="
absolute
inset-0
bg-gradient-to-t
from-black/70
via-transparent
opacity-70
">

                </div>









                {/* TEXT */}


                <div className="
absolute
bottom-0
left-0
w-full
p-6
text-white
">


                  <p className="
text-xs
uppercase
tracking-[4px]
opacity-80
">

                    Collection

                  </p>



                  <h3 className="
text-2xl
font-light
mt-2
group-hover:tracking-widest
transition-all
">

                    {item.name}

                  </h3>




                  <button className="
mt-4
border
border-white
px-5
py-2
text-xs
uppercase
hover:bg-white
hover:text-black
transition
">

                    Shop Now

                  </button>



                </div>







                {/* BORDER */}

                <div className="
absolute
inset-0
border
border-transparent
group-hover:border-black/20
transition
">

                </div>





              </motion.div>



            ))}





          </div>






        </div>

      </section>
     
      {/* FEATURED PRODUCTS */}
      <section className="py-24 px-6 bg- overflow-hidden">

        {/* HEADER */}
        <div className="max-w-7xl mx-auto text-center mb-20">

          <p className="uppercase tracking-[6px] text-sm text-gray-500">
            MenStyle Editorial
          </p>

          <h2 className="text-5xl md:text-6xl font-light mt-4 leading-tight">
            Discover Modern <br /> Menswear
          </h2>

        </div>

        {/* EDITORIAL GRID */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="group">

            <div className="relative overflow-hidden  h-[520px]">

              <img
                src="https://i.pinimg.com/736x/ea/cf/84/eacf8477aaf13c65dd935d057350d3b1.jpg"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

            </div>

            <div className="mt-6">

              <p className="uppercase tracking-[4px] text-xs text-gray-500">
                Collection 01
              </p>

              <h3 className="text-3xl font-light mt-2">
                Street Essentials
              </h3>

              <p className="text-gray-500 mt-3 leading-relaxed">
                Contemporary fits crafted for everyday luxury and comfort.
              </p>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="group md:mt-20">

            <div className="relative overflow-hidden  h-[520px]">

              <img
                src="https://i.pinimg.com/736x/3c/60/5f/3c605fbf9369ca878b3264b9fc88d023.jpg"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

            </div>

            <div className="mt-6">

              <p className="uppercase tracking-[4px] text-xs text-gray-500">
                Collection 02
              </p>

              <h3 className="text-3xl font-light mt-2">
                Tailored Looks
              </h3>

              <p className="text-gray-500 mt-3 leading-relaxed">
                Premium silhouettes designed with timeless elegance.
              </p>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="group">

            <div className="relative overflow-hidden  h-[520px]">

              <img
                src="https://i.pinimg.com/736x/1d/1e/5d/1d1e5d292cc167cf536ae2430820245e.jpg"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

            </div>

            <div className="mt-6">

              <p className="uppercase tracking-[4px] text-xs text-gray-500">
                Collection 03
              </p>

              <h3 className="text-3xl font-light mt-2">
                Modern Classics
              </h3>

              <p className="text-gray-500 mt-3 leading-relaxed">
                Minimal fashion pieces inspired by luxury street culture.
              </p>

            </div>

          </div>

        </div>

      </section>

      

      <section className="py-28 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">

            <div>

              <p className="uppercase tracking-[5px] text-sm text-gray-500">
                Why Choose Us
              </p>

              <h2 className="text-5xl md:text-6xl font-light mt-4 leading-tight">
                Designed For <br />
                Everyday Luxury
              </h2>

            </div>

            <p className="max-w-md text-gray-500 leading-relaxed">
              Modern menswear crafted with premium fabrics, timeless silhouettes,
              and attention to every detail.
            </p>

          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 border-t border-gray-200">

            {/* ITEM 1 */}
            <div className="group py-14 pr-8 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-black transition duration-500">

              <div className="px-2">

                <span className="text-sm tracking-[4px] text-gray-400 group-hover:text-gray-500 transition">
                  01
                </span>

                <h3 className="text-3xl font-light mt-6 group-hover:text-white transition">
                  Premium Fabrics
                </h3>

                <p className="text-gray-500 mt-5 leading-relaxed group-hover:text-gray-300 transition">
                  High-quality materials selected for comfort, durability, and luxury feel.
                </p>

              </div>

            </div>

            {/* ITEM 2 */}
            <div className="group py-14 px-8 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-black transition duration-500">

              <div>

                <span className="text-sm tracking-[4px] text-gray-400 group-hover:text-gray-500 transition">
                  02
                </span>

                <h3 className="text-3xl font-light mt-6 group-hover:text-white transition">
                  Modern Fit
                </h3>

                <p className="text-gray-500 mt-5 leading-relaxed group-hover:text-gray-300 transition">
                  Tailored silhouettes inspired by luxury streetwear and timeless fashion.
                </p>

              </div>

            </div>

            {/* ITEM 3 */}
            <div className="group py-14 pl-8 hover:bg-black transition duration-500">

              <div>

                <span className="text-sm tracking-[4px] text-gray-400 group-hover:text-gray-500 transition">
                  03
                </span>

                <h3 className="text-3xl font-light mt-6 group-hover:text-white transition">
                  Fast Shipping
                </h3>

                <p className="text-gray-500 mt-5 leading-relaxed group-hover:text-gray-300 transition">
                  Reliable delivery experience with secure packaging across India.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

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
    </>
  );
}

export default Home;