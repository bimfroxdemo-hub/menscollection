import { FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 py-20 lg:py-24">
        {/* TOP */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[6px] text-sm text-gray-500">
              Contact Us
            </p>

            <h2 className="mt-4 text-4xl md:text-6xl font-light">
              Visit
              <span className="font-semibold block">
                Shyam Fashion
              </span>
            </h2>

            <p className="mt-6 text-gray-600 leading-8 max-w-lg">
              We'd love to hear from you. Whether you're looking for the latest
              fashion collection or have any questions, feel free to contact us
              or visit our store.
            </p>

            <div className="mt-10 space-y-5">
              {/* Phone */}
              <a
                href="tel:9887689856"
                className="flex items-center gap-5 p-5 border  hover:shadow-lg transition"
              >
                <div className="w-12 h-12  bg-black text-white flex items-center justify-center">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-semibold text-lg">
                    +91 98876 89856
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/shyam_fashion_nawalgarh/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 p-5 border  hover:shadow-lg transition"
              >
                <div className="w-12 h-12  bg-pink-600 text-white flex items-center justify-center">
                  <FaInstagram />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Instagram</p>
                  <p className="font-semibold">
                    @shyam_fashion_nawalgarh
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-5 p-5 border ">
                <div className="w-12 h-12  bg-gray-900 text-white flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-semibold">
                    Nawalgarh, Rajasthan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute -inset-3 bg-gray-200 blur-3xl "></div>

            <div className="relative bg-white  shadow-2xl p-8 md:p-10">
              <h3 className="text-3xl font-light mb-8">
                Send Message
              </h3>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border  p-4 focus:outline-none focus:border-black"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border  p-4 focus:outline-none focus:border-black"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border  p-4 focus:outline-none focus:border-black"
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full border  p-4 resize-none focus:outline-none focus:border-black"
                ></textarea>

                <button className="w-full bg-black text-white py-4  hover:bg-gray-800 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="pb-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[6px] text-sm text-gray-500">
              Visit Store
            </p>

            <h2 className="mt-3 text-4xl font-light">
              Find Our Location
            </h2>
          </div>

          <div className=" overflow-hidden shadow-2xl border">
            <iframe
              src="https://www.google.com/maps?q=Nawalgarh,Rajasthan&output=embed"
              className="w-full h-[500px]"
              loading="lazy"
              title="Shyam Fashion Nawalgarh"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;