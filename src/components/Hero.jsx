import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const banners = [
    "https://i.pinimg.com/1200x/e8/7e/1e/e87e1e822c4ceae59a9e0516da754baa.jpg", // Girls
    "https://i.pinimg.com/736x/04/2d/b2/042db2e03c4531daf3b83c336de60e96.jpg", // Boys
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-black overflow-hidden">
      {banners.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Banner ${index + 1}`}
          className={`absolute inset-0 w-full h-auto block transition-opacity duration-700 ${
            current === index ? "opacity-100 relative" : "opacity-0"
          }`}
        />
      ))}

     
    </section>
  );
}

export default Hero;