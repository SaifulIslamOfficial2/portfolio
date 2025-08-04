import { useEffect, useState } from "react";
import one from "../../assets/image/one.jpg";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function PortFolio() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json") // Adjust the path here to reflect the subfolder
      .then((res) => res.json())
      .then((item) => {
        setData(item.dataTow);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mx-auto  mt-20">
      <div className="mt-12 flex justify-center">
        <div>
          <p className="text-green-400 uppercase mb-2 ">
            Visit my portfolio and keep your feedback
          </p>
          <h1 className="text-slate-300 font-bold text-5xl font-titleFontFont text-center mb-8">
            My Portfolio
          </h1>
        </div>
      </div>
      {/*portfolio card section */}
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 sm:gap-8 lg:gap-12">
       {data.map((item)=>(
         <div key={item.id} className=" cursor-pointer mx-auto bg-bodyColor shadow-shadowOne rounded-md w-[350px] hover:bg-hoverbg  p-6 ">
         <div className=" transition-transform hover:scale-105 duration-300">
           <img className=" rounded object-cover" src={one} alt="" />
         </div>
         <div className="mt-3 flex  items-center justify-between">
           <span className="text-green-400 uppercase ">{item.category}</span>
           <div className="flex items-center gap-1 text-lightText">
             <FaRegHeart className="hover:text-green-400" />
            {item.number}
           </div>
         </div>
         <div className=" flex hover:text-white group  ">
           <h2 className="text-2xl mt-2 hover:text-white text-lightText font-semibold ">
            {item.title}
           </h2>
           <p className="mt-11 ">
             {" "}
             <FaArrowUpRightFromSquare className="  group-hover:opacity-100  duration-300 opacity-0" />
           </p>
         </div>
       </div>
       ))}
      </div>
    </div>
  );
}

export default PortFolio;
