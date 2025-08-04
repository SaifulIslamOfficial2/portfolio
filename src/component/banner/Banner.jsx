import { FaFacebookF, FaInstagram, FaLinkedinIn,FaReact, FaGithub} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import figma from "../../assets/image/figma.png"
import {  useTypewriter } from 'react-simple-typewriter'
import { BiPointer } from "react-icons/bi";
import saif from "../../assets/image/saif.jpg"


function Banner() {

// typewriter
const [text] = useTypewriter({
    words : ['  Frontend Developer.!',"Developer." ,'UI Designer'],
    loop:true,
    cursor: BiPointer,
    typeSpeed:30,
    deleteSpeed:12,
    delaySpeed:1000,
  })

  return (
    <div className="flex flex-col lg:flex-row container mx-auto items-center mt-12 gap-10 lg-gap-0  mb-20">
      <div className=" w-full  lg:w-1/2">
        <div>
          <p className=" text-green-400 font-light   text-1xl  font-bodyFont mb-5 uppercase ">
            Welcome to my world
          </p>
          <h1 className=" text-white font-titleFont text-4xl font-bold line-clamp-4 mb-5 ">
            Hi, I’m <span className=" text-green-400 ">SAIFUL ISLAM</span>
            <br /> a {text}
          </h1>
          <p className="leading-normal text-slate-300 hover:text-white mb-12  ">
            I am a skilled frontend developer specializing in HTML, CSS,
            JavaScript, and frameworks like React. I create responsive,
            user-friendly, and visually appealing websites with a focus on
            performance and usability. Passionate about clean code and
            innovation, I bring ideas to life with precision and creativity.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg-gap-0 justify-between">
          <div>
            <h3 className="uppercase text-white mb-3">find with me</h3>
            <div className="flex gap-3">
              <Link to={"https://www.facebook.com/mdsaifulislambd2"} className="p-3 transition-transform hover:bg-[#1c1e26]  hover:scale-110 decoration-300  rounded bg-bodyColor shadow-shadowOne">
                {" "}
                <FaFacebookF className="text-green-400" />
              </Link>
              <Link className="p-3 transition-transform  hover:scale-110 decoration-300 hover:bg-[#1c1e26]   rounded bg-bodyColor shadow-shadowOne">
                <FaInstagram className="text-green-400" />
              </Link>
              <Link to={"https://www.linkedin.com/in/saifulislamofficial2/"} className="p-3 transition-transform hover:bg-[#1c1e26]  hover:scale-110 decoration-300  rounded bg-bodyColor shadow-shadowOne">
                <FaLinkedinIn className="text-green-400" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="uppercase text-white mb-3 ">
            best skill on</h3>
            <div className="flex gap-3">
              <Link className="p-3 transition-transform  hover:scale-110 decoration-300 hover:bg-[#1c1e26]  rounded bg-bodyColor shadow-shadowOne">
                {" "}
                <FaReact className="text-green-400" />
              </Link>
              <Link className="p-3 transition-transform  hover:scale-110 decoration-300 hover:bg-[#1c1e26]   rounded bg-bodyColor shadow-shadowOne">
                <RiTailwindCssFill className="text-green-400" />
              </Link>
              <Link className="p-2 transition-transform  hover:scale-110 decoration-300 hover:bg-[#1c1e26]  rounded bg-bodyColor shadow-shadowOne">
               <img src={figma} alt="" />
              </Link>
              <Link to={"https://github.com/SaifulIslamOfficial2"} className="p-3 hover:bg-[#1c1e26]  transition-transform  hover:scale-110 decoration-300  rounded bg-bodyColor shadow-shadowOne">
                <FaGithub className="text-green-400" />
              </Link>
            </div>

          </div>
        </div>
      </div>
      {/* image section */}
      <div className=" justify-center lg:justify-end flex  w-full  lg:w-1/2 ">
      <div className="w-[350px] h-[400px] flex items-center  p-4  bg-bodyColor shadow-shadowOne ">
        <img className=" object-cover " src={saif} alt="saif-shakib" />
      </div>
      </div>
    </div>
  );
}

export default Banner; 
