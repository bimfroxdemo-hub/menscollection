import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ShopLookSection({ looks }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = 320;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
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
            className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-lg items-center justify-center hover:bg-black hover:text-white transition"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-lg items-center justify-center hover:bg-black hover:text-white transition"
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

                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[420px] md:h-[500px] object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
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

          {/* Hide scrollbar */}
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
  );
}

export default ShopLookSection;