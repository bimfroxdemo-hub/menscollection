import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[999999] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f5f5f5_0%,#ffffff_70%)]"></div>

      <div className="relative text-center">

        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src={logo}
            alt="Logo"
            className="w-40 md:w-48 object-contain animate-[float_3s_ease-in-out_infinite]"
          />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-light tracking-[10px] text-black">
          PREMIUM COLLECTION
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-gray-500 tracking-[5px] uppercase text-xs">
          Girls • Boys Wear
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <span className="w-10 h-px bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-black"></span>
          <span className="w-10 h-px bg-gray-300"></span>
        </div>

        {/* Loading Bar */}
        <div className="mt-8 w-56 h-[2px] bg-gray-200 rounded-full overflow-hidden mx-auto">
          <div className="loading-bar h-full bg-black"></div>
        </div>

      </div>

      <style>{`
        .loading-bar{
          animation: loading 2s ease-in-out infinite;
        }

        @keyframes loading{
          0%{
            width:0%;
          }
          50%{
            width:70%;
          }
          100%{
            width:100%;
          }
        }

        @keyframes float{
          0%,100%{
            transform:translateY(0px);
          }
          50%{
            transform:translateY(-8px);
          }
        }
      `}</style>

    </div>
  );
}

export default Loader;