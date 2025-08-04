import { IoMdMenu } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import {
  FaBusinessTime,
  FaCode,
  FaBullhorn,
  FaFolderOpen,
} from "react-icons/fa";


function FeaturesCard() {
  const [data, setData] = useState(null);

  // icon
  const iconMap = {
    FaBusinessTime: <FaBusinessTime className="text-green-400 w-8 h-8" />,
    FaCode: <FaCode className="text-green-400 w-8 h-8" />,
    FaBullhorn: <FaBullhorn className="text-green-400 w-8 h-8" />,
    FaFolderOpen: <FaFolderOpen className="text-green-400 w-8 h-8" />,
  };

  // data fetching
  useEffect(() => {
    fetch("/data.json") // Adjust the path here to reflect the subfolder
      .then((res) => res.json())
      .then((item) => {
        setData(item.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 sm:gap-8 lg:gap-10 ">
    {/* Card */}
    {data ? (
      data.map((item) => (
        <div
          key={item.id}
          className="bg-bodyColor shadow-shadowOne rounded-md w-[90%] sm:w-[300px] lg:w-[350px] min-h-[320px] md:min-h-[300px] sm:min-h-[280px]  hover:bg-[#1c1e26] p-4 hover:text-white relative group mx-auto"
        >
          <div className="hover:translate-y-[-20px] duration-300 mt-8">
            {/* Menu Icon */}
            <span className="">
              {iconMap[item.icon]}
            </span>
  
            {/* Card Content */}
            <div className="mt-5">
              <h1 className="text-xl sm:text-2xl lg:text-3xl text-lightText font-semibold mb-3">
                {item.title}
              </h1>
              <p className="mb-5 text-sm sm:text-base lg:text-xl text-lightText">
                {item.dis}
              </p>
            </div>
  
            {/* Arrow Icon */}
            <div className="absolute text-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <FaArrowRightLong className="text-green-400 w-6 h-6 sm:w-8 sm:h-8" />
            </div>
          </div>
        </div>
      ))
    ) : (
      <p>Loading.........</p>
    )}
  </div>
  
  );
}

export default FeaturesCard;
