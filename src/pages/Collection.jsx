import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";


function Collection() {


  const [filter, setFilter] = useState("All");



  const data = [

    {
      id: 1,
      title: "Short Kurti",
      category: "Short Kurti",
      desc: "Elegant Daily Wear",
      image: "https://i.pinimg.com/736x/07/26/48/0726485d8874f7a60a219b1a3568a629.jpg"
    },
    {
      id: 2,
      title: "Short Kurti",
      category: "Short Kurti",
      desc: "Elegant Daily Wear",
      image: "https://i.pinimg.com/736x/be/26/81/be268197187b6242534de359a007627b.jpg"
    },
       {
      id: 3,
      title: "Short Kurti",
      category: "Short Kurti",
      desc: "Elegant Daily Wear",
      image: "https://i.pinimg.com/736x/97/57/48/9757482c1ca4577e4200a486587f48cb.jpg"
    },
        {
      id: 4,
      title: "Short Kurti",
      category: "Short Kurti",
      desc: "Elegant Daily Wear",
      image: "https://i.pinimg.com/736x/ca/0f/c7/ca0fc7892366526a959c57e4ddd14dec.jpg"
    },
         {
      id: 5,
      title: "Short Kurti",
      category: "Short Kurti",
      desc: "Elegant Daily Wear",
      image: "https://i.pinimg.com/736x/65/0d/a7/650da72c812d064dcf7648788eb3c693.jpg"
    },
       {
      id: 6,
      title: "Short Kurti",
      category: "Short Kurti",
      desc: "Elegant Daily Wear",
      image: "https://i.pinimg.com/736x/70/ef/10/70ef109e0561c229c046aa4afd5848a4.jpg"
    },
    {
      id: 7,
      title: "Co-ord Set",
      category: "Co-ord Set",
      desc: "Modern Style",
      image: "https://i.pinimg.com/736x/84/20/4b/84204b2e83ca3c9df228009831fad486.jpg"
    },
    {
      id: 8,
      title: "Co-ord Set",
      category: "Co-ord Set",
      desc: "Modern Style",
      image: "https://i.pinimg.com/736x/05/2c/e0/052ce066dd2db7ec43226deefc1ba1fb.jpg"
    },
 {
      id: 9,
      title: "Co-ord Set",
      category: "Co-ord Set",
      desc: "Modern Style",
      image: "https://i.pinimg.com/1200x/ee/0d/7f/ee0d7f3373f1e5dd4ff7d9e49815147a.jpg"
    },
    {
      id: 10,
      title: "Co-ord Set",
      category: "Co-ord Set",
      desc: "Modern Style",
      image: "https://i.pinimg.com/736x/e7/37/87/e73787814166b3d9504f21009d6155d2.jpg"
    },
      {
      id: 11,
      title: "Co-ord Set",
      category: "Co-ord Set",
      desc: "Modern Style",
      image: "https://i.pinimg.com/736x/10/8f/c1/108fc1f87ca7343b297d14633147c719.jpg"
    },
     {
      id: 12,
      title: "Co-ord Set",
      category: "Co-ord Set",
      desc: "Modern Style",
      image: "https://i.pinimg.com/736x/d9/b0/e2/d9b0e220db4dd35221bdf242567ee33c.jpg"
    },
    {
      id: 13,
      title: "Nightwear",
      category: "Nightwear",
      desc: "Soft Collection",
      image: "https://i.pinimg.com/736x/0d/91/f4/0d91f43c6e4f679697e54786e3433dd7.jpg"
    },
   {
      id: 14,
      title: "Nightwear",
      category: "Nightwear",
      desc: "Soft Collection",
      image: "https://i.pinimg.com/1200x/74/8a/c3/748ac303b4c7573770b1f91c9b302734.jpg"
    },
      {
      id: 15,
      title: "Nightwear",
      category: "Nightwear",
      desc: "Soft Collection",
      image: "https://i.pinimg.com/1200x/8f/2a/df/8f2adfdffc85af2dac230a73dc6dd516.jpg"
    },
    {
      id: 16,
      title: "Nightwear",
      category: "Nightwear",
      desc: "Soft Collection",
      image: "https://i.pinimg.com/736x/87/ca/15/87ca150697fce70d238658cbea959031.jpg"
    },
     {
      id: 17,
      title: "Nightwear",
      category: "Nightwear",
      desc: "Soft Collection",
      image: "https://i.pinimg.com/1200x/13/84/f0/1384f00eac2a12100f0ac6b8929feca7.jpg"
    },
      {
      id: 18,
      title: "Nightwear",
      category: "Nightwear",
      desc: "Soft Collection",
      image: "https://i.pinimg.com/1200x/45/32/21/453221eea72dcfde330b0d9e25b79ad9.jpg"
    }
  ];





  const products =
    filter === "All"
      ?
      data
      :
      data.filter(
        item => item.category === filter
      );






  return (

   <section className="bg-white py-20 px-5">

<div className="max-w-7xl mx-auto">


{/* Heading */}

<div className="mb-12 text-center">

<p className="
uppercase
tracking-[5px]
text-xs
text-gray-400
">
Women Collection
</p>


<h2 className="
text-5xl
font-light
text-black
mt-3
">
Fashion Edit
</h2>

</div>





{/* FILTER */}

<div className="
flex
justify-center
gap-4
flex-wrap
mb-14
">


{
["All","Short Kurti","Co-ord Set","Nightwear"]
.map((x,index)=>(


<button

key={index}

onClick={()=>setFilter(x)}

className={`
px-7
py-2
border
text-sm
tracking-wide
transition-all
duration-300

${
filter===x
?
"bg-black text-white"
:
"border-black text-black hover:bg-black hover:text-white"
}

`}

>

{x}

</button>


))

}


</div>







{/* PRODUCTS */}

<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-10
">





{
products.map((item,i)=>(


<div

key={`${item.id}-${i}`}

className="
group
bg-white
border
border-gray-200
overflow-hidden
hover:shadow-xl
transition
duration-500
"

>





{/* IMAGE */}

<div className="
bg-[#f7f7f7]
h-[520px]
flex
items-center
justify-center
overflow-hidden
">


<img

src={item.image}

className="
w-full
h-full
object-contain
group-hover:scale-105
transition
duration-700
"

/>


</div>








{/* DETAILS */}

<div className="
p-5
flex
justify-between
items-center
gap-4
">


<div>


<h3 className="
text-xl
font-medium
text-black
">

{item.title}

</h3>



<p className="
text-sm
text-gray-500
mt-2
">

{item.desc || item.category}

</p>


</div>







<a

href={`https://wa.me/919887689856?text=Hello I want ${encodeURIComponent(item.title)}`}

target="_blank"

rel="noreferrer"

className="
border
border-black
px-4
py-2
text-xs
uppercase
flex
items-center
gap-2
hover:bg-black
hover:text-white
transition
"

>


<FaWhatsapp/>

Order


</a>



</div>




</div>


))

}





</div>






</div>

</section>


  )

}


export default Collection;