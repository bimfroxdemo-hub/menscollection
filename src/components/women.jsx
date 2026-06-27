import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from "react-icons/fa";

function WomenSection() {
   const categories = [
    { title: "Short Kurti", img: "https://i.pinimg.com/736x/25/23/3f/25233fa420b2dab0c1c8c82de71f3c6c.jpg" },
    { title: "Short Kurti", img: "https://i.pinimg.com/736x/5d/69/9c/5d699cd02996a6a447c2c7ee1c8fcc5d.jpg" },
    { title: "Top", img: "https://i.pinimg.com/1200x/02/96/bb/0296bbf54ba6b568d9d3dd0e7d00ec9a.jpg" },
    { title: "Top", img: "https://i.pinimg.com/736x/e4/59/5f/e4595f536ba2a014c7dfdfc5b928e7e0.jpg" },
    { title: "Top", img: "https://i.pinimg.com/736x/a8/92/b1/a892b1dccef0331043ef244cae2bfd8d.jpg" },
    { title: "Night Wear", img: "https://i.pinimg.com/736x/fa/12/f1/fa12f1845a30ab20805c94c13f8b4bd4.jpg" },
    { title: "Night Wear", img: "https://i.pinimg.com/1200x/87/aa/4d/87aa4d6747b45ccc374b5dd713fd18c8.jpg" },
    { title: "Night Wear", img: "https://i.pinimg.com/1200x/21/f4/22/21f4220ae0913d458bf7f035813ebafb.jpg" },
    { title: "Night Wear", img: "https://i.pinimg.com/1200x/87/1a/5b/871a5b0e4ad9cf144762b48cc777a0eb.jpg" },
    { title: "Co-ord Set", img: "https://i.pinimg.com/736x/fa/13/f6/fa13f62f4919b86cb2361f9a7f811b41.jpg" },
    { title: "Co-ord Set", img: "https://i.pinimg.com/736x/f6/eb/e0/f6ebe05a8c0dd0a76df80656895e839d.jpg" },
    { title: "Top", img: "https://i.pinimg.com/1200x/81/64/99/8164993ccdafe520662abbdc29c5cba6.jpg" },
    { title: "Top", img: "https://i.pinimg.com/1200x/a5/87/d6/a587d632451595c313c0d940b3cfe9fc.jpg" }
  ];

  const [index, setIndex] = useState(0);
  const [active, setActive] = useState("All");

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const filtered =
    active === "All"
      ? categories
      : categories.filter((item) => item.title === active);

  const handleFilter = (item) => {
    setActive(item);
    setIndex(0);
  };

  // MOBILE vs DESKTOP SLIDES
  const isMobile = window.innerWidth < 768;
  const itemsPerView = isMobile ? 1 : 2;

  const maxIndex = Math.max(0, filtered.length - itemsPerView);

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;

    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-5 relative">

        {/* FILTER */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {["All", "Short Kurti", "Top", "Night Wear", "Co-ord Set"].map(
            (item, i) => (
              <button
                key={i}
                onClick={() => handleFilter(item)}
                className={`px-5 py-2 border text-sm transition ${
                  active === item
                    ? "bg-white text-black"
                    : "text-white border-white hover:bg-white hover:text-black"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (isMobile ? 100 : 50)}%)`,
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {filtered.map((item, i) => (
              <div
                key={i}
                className="min-w-full md:min-w-[50%] relative bg-white group"
              >
                <img
                  src={item.img}
                  className="w-full h-[520px] md:h-[600px] object-contain bg-white group-hover:scale-105 transition duration-500"
                />

                <div className="absolute bottom-0 w-full bg-black/80 text-white p-5 flex justify-between items-center">
                  <h3 className="text-2xl">{item.title}</h3>

                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    className="border border-white px-4 py-2 flex items-center gap-2 text-xs hover:bg-white hover:text-black transition"
                  >
                    <FaWhatsapp /> Order
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ARROWS */}
        <button
          onClick={prev}
          className="absolute left-2 top-[55%] bg-white text-black p-4 shadow-xl hover:bg-black hover:text-white transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-[55%] bg-white text-black p-4 shadow-xl hover:bg-black hover:text-white transition"
        >
          <FaChevronRight />
        </button>

      </div>
    </section>
  );
}

export default WomenSection;