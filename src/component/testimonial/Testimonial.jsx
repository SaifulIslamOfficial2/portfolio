import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testi from "../../assets/image/testi.jpg";
import quote from "../../assets/image/quote.png";

// Custom Arrow Components
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute -top-2 right-20 bg-gray-800 hover:bg-green-500 shadow-shadowOne text-white p-3 rounded-full cursor-pointer transition z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute -top-2 right-5 bg-gray-800 hover:bg-green-500 shadow-shadowOne text-white p-3 rounded-full cursor-pointer transition z-10"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
}

// Testimonial Component
function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
   <section className="max-w-4xl mx-auto px-4">
  {/* Section Title */}
  <div className="mt-12 flex justify-center">
    <div className="text-center">
      <p className="text-green-400 uppercase mb-2">What Clients Say</p>
      <h1 className="text-slate-300 font-bold text-4xl sm:text-5xl text-center mb-8">
        Testimonial
      </h1>
    </div>
  </div>

  {/* Slider Container */}
  <div className="relative">
    <Slider {...settings}>
      {/* Slide 1 */}
      <div className="w-full">
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8 h-auto lg:h-[450px]">
          {/* Left Content */}
          <div className="glass shadow-shadowOne w-full lg:w-[40%] h-auto lg:h-full p-6 sm:p-8 rounded flex flex-col items-center justify-center text-center">
            <img
              src={testi}
              alt="testimonial"
              className="object-cover w-48 sm:w-60 rounded mb-4"
            />
            <div>
              <p className="uppercase text-green-400 font-medium">
                bound - trolola
              </p>
              <p className="uppercase text-lightText font-semibold text-xl sm:text-2xl mt-1">
                Md Saiful Islam
              </p>
              <p className="text-slate-500 text-sm sm:text-base">Web Developer</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[60%] h-auto lg:h-full flex flex-col justify-center">
            <div className="flex justify-start sm:justify-between items-center mb-4">
              <img className="w-12 sm:w-16" src={quote} alt="quote" />
            </div>
            <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-6 sm:p-10 shadow-lg">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-black pb-4">
                  <div>
                    <h3 className="text-lightText font-semibold text-xl sm:text-2xl">
                      Web App Development
                    </h3>
                    <p className="text-slate-500 text-sm">
                      Upwork - Mar 4, 2016 - Aug 30, 2021
                    </p>
                  </div>
                  <div className="flex gap-1 text-amber-400 mt-2 sm:mt-0">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}
                  </div>
                </div>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                  Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac
                  dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet
                  sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac
                  dolor aliquam sodales phasellus smauris.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 (placeholder for now) */}
      <div>
        <h3 className="text-white text-center">Slide 2</h3>
      </div>
    </Slider>
  </div>
</section>

  );
}

export default Testimonial;
