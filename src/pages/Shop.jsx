import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
function Shop() {

  const [activeFilter, setActiveFilter] = useState("All");


  const products = [
    {
      id: 1,
      title: "Premium Cotton Shirt",
      price: 999,
      category: "Shirts",
      image:
        "https://i.pinimg.com/1200x/e6/f7/a5/e6f7a5d7a3618f63a59eaa67bd1e8aa8.jpg",
    },

    {
      id: 2,
      title: "Casual Linen Shirt",
      price: 1299,
      category: "Shirts",
      image:
        "https://i.pinimg.com/1200x/00/82/02/008202f0c319d20c5bac1db2b73bb442.jpg",
    },

    {
      id: 3,
      title: "Classic Black Shirt",
      price: 1499,
      category: "Formal",
      image:
        "https://i.pinimg.com/1200x/f1/69/1f/f1691ff43018078206e50b0d2a5d1288.jpg",
    },


    {
      id: 4,
      title: "Oversized T-Shirt",
      price: 799,
      category: "T-Shirts",
      image:
        "https://i.pinimg.com/736x/cb/34/10/cb34109d2bfbae145b560ccb622380f6.jpg",
    },


    {
      id: 5,
      title: "Men Denim Jeans",
      price: 1599,
      category: "Jeans",
      image:
        "https://i.pinimg.com/1200x/c3/61/b7/c361b74730a0c5ee499343026d5dea99.jpg",
    },


    {
      id: 6,
      title: "Wedding Kurta Set",
      price: 2199,
      category: "Kurta",
      image:
        "https://i.pinimg.com/1200x/da/29/03/da2903a9a85ff4140f5107fb9436bd52.jpg",
    },


    {
      id: 7,
      title: "Party Blazer",
      price: 2999,
      category: "Blazer",
      image:
        "https://i.pinimg.com/1200x/9b/92/3f/9b923fa581f783f5e3c61c1b3070aa27.jpg",
    },


    {
      id: 8,
      title: "Regular Fit Shirt",
      price: 1199,
      category: "Formal",
      image:
        "https://i.pinimg.com/1200x/a6/2c/e0/a62ce081d46ab816254396b966814d30.jpg",
    },
    {
      id: 9,
      title: "Classic  Shirt",
      price: 1499,
      category: "Formal",
      image:
        "https://i.pinimg.com/736x/6a/9a/63/6a9a63bfc350712811ec54ad8b8578a1.jpg",
    },
    {
      id: 10,
      title: "Regular Fit Shirt",
      price: 1199,
      category: "Formal",
      image:
        "https://i.pinimg.com/736x/a8/9a/8d/a89a8d7c97feef2378220dd91b7c459f.jpg",
    },
    {
      id: 11,
      title: "black trouser",
      price: 2199,
      category: "Night pant",
      image:
        "https://i.pinimg.com/1200x/19/1c/76/191c76bb3ade050f69a1487dc35f63e5.jpg",
    },
    {
      id: 12,
      title: "Adidas track",
      price: 2199,
      category: "Night pant",
      image:
        "https://i.pinimg.com/1200x/ca/25/10/ca25105256aefecb43d01cc0a5e0592c.jpg",
    },
    {
      id: 13,
      title: "Wedding Kurta Set",
      price: 2199,
      category: "Kurta",
      image:
        "https://i.pinimg.com/736x/73/0a/ba/730abafe0f875e77c7809d88fa28a0f7.jpg",
    },
    {
      id: 14,
      title: "Men Denim Jeans",
      price: 1599,
      category: "Jeans",
      image:
        "https://i.pinimg.com/736x/f0/d3/43/f0d343671d8a54863ef7b39787089bb2.jpg",
    },
    {
      id: 15,
      title: "Men Denim Jeans",
      price: 1599,
      category: "Jeans",
      image:
        "https://i.pinimg.com/1200x/50/a2/eb/50a2ebe9ddc05296330400fccadd3842.jpg",
    },
    {
      id: 16,
      title: "Men Denim Jeans",
      price: 1599,
      category: "Jeans",
      image:
        "https://i.pinimg.com/1200x/ad/61/1b/ad611b35aeee534bd01ab998891e4f3d.jpg",
    },
    {
      id: 17,
      title: "Oversized T-Shirt",
      price: 799,
      category: "T-Shirts",
      image:
        "https://i.pinimg.com/1200x/77/0a/08/770a08a1b127928902dd4191b2eed2d7.jpg",
    },
    {
      id: 18,
      title: " T-Shirt",
      price: 799,
      category: "T-Shirts",
      image:
        "https://i.pinimg.com/736x/45/0a/8f/450a8f9a7727f1c3ff27ede0874c17fc.jpg",
    },
    {
      id: 19,
      title: " T-Shirt",
      price: 799,
      category: "T-Shirts",
      image:
        "https://i.pinimg.com/736x/f6/eb/0d/f6eb0d329fcfc075c770aaff705cfb1b.jpg",
    },
    {
      id: 20,
      title: "Adidas track",
      price: 2199,
      category: "Night pant",
      image:
        "https://i.pinimg.com/1200x/4a/6a/30/4a6a301f982f686dfa37a6f058426203.jpg",
    },
    {
      id: 21,
      title: "Adidas track",
      price: 2199,
      category: "Night pant",
      image:
        "https://i.pinimg.com/1200x/59/b2/2f/59b22f276629abf0dc899a750c0bcc6b.jpg",
    },
     {
      id: 22,
      title: "Adidas track",
      price: 2199,
      category: "Night pant",
      image:
        "https://i.pinimg.com/736x/f1/30/84/f13084372e6ad11b77295e8c2dbc718a.jpg",
    },
        {
      id: 23,
      title: "Adidas track",
      price: 2199,
      category: "Night pant",
      image:
        "https://i.pinimg.com/1200x/ee/4b/51/ee4b51fd99d88e3d8586827439dc8908.jpg",
    },
        {
      id: 25,
      title: "Adidas track",
      price: 2199,
      category: "Night pant",
      image:
        "https://i.pinimg.com/736x/75/f6/9e/75f69eb7c438c1d6b3f98acd156a6ff8.jpg",
    },
      {
      id: 26,
      title: "Adidas track",
      price: 2199,
      category: "Night pant",
      image:
        "https://i.pinimg.com/736x/5f/14/ec/5f14eca844594def2b0c8e28667f8c07.jpg",
    },
  ];


  const filters = [
    "All",
    "Shirts",
    "T-Shirts",
    "Jeans",
    "Night pant",
    "Blazer",
    "Formal"
  ];


  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter(
        item => item.category === activeFilter
      );


  return (

    <section className="bg-[#f8f6f3] min-h-screen">


      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16">


        <p className="uppercase tracking-[5px] text-xs text-gray-500">
          Shyam Fashion
        </p>


        <h1 className="text-5xl md:text-6xl font-light mt-4">
          Men's Collection
        </h1>


        <p className="text-gray-500 mt-4 max-w-md">
          Premium men's wear collection for every occasion.
        </p>



        <div className="flex gap-3 overflow-x-auto py-10">


          {
            filters.map(filter => (

              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}

                className={`
px-6 py-3 border text-sm uppercase tracking-wider

${activeFilter === filter
                    ? "bg-black text-white border-black"
                    : "border-black/20 hover:bg-black hover:text-white"
                  }
`}
              >

                {filter}

              </button>

            ))
          }


        </div>



        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">


          {
            filteredProducts.map(item => (


              <div
                key={item.id}
                className="group"
              >


                <div className="overflow-hidden bg-gray-200">


                  <img
                    src={item.image}
                    className="w-full h-[260px] md:h-[420px] object-cover group-hover:scale-105 duration-700"
                  />


                </div>



                <div className="pt-4">

                  <div className="space-y-3">


                    {/* Name + Category */}
                    <div>

                      <h2 className="font-medium text-sm md:text-base line-clamp-1">
                        {item.title}
                      </h2>


                      <p className="text-[11px] text-gray-500 uppercase tracking-[2px] mt-1">
                        {item.category}
                      </p>

                    </div>



                    {/* Price + Button */}
                    <div className="flex items-center justify-between">


                      <p className="font-semibold text-base">
                        ₹{item.price}
                      </p>



                      <a
                        href={`https://wa.me/919887689856?text=Hello, I'm interested in ${encodeURIComponent(item.title)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="
        flex items-center gap-1.5
        border border-black
        px-3 py-2
        text-[10px]
        uppercase
        tracking-[1px]
        hover:bg-black
        hover:text-white
        transition-all
        duration-300
        rounded-sm
        "
                      >

                        <FaWhatsapp className="text-sm" />

                        Order

                      </a>


                    </div>


                  </div>


                </div>


              </div>


            ))
          }


        </div>



      </div>


    </section>

  )

}


export default Shop;