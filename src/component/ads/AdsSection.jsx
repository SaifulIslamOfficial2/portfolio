import awerd from "../../assets/image/awerd.jpg";
import sectionbg from "../../assets/image/sectionbg.jpg";
function AdsSection() {
  return (
    <section
      className="mt-12 gap-8 rounded-sm p-8 items-center lg:grid grid-cols-2 container mx-auto  "
      style={{ backgroundImage: `url(${sectionbg})` }}
    >
      <div className="flex  justify-center items-center">
        <img className="  object-cover rounded-md" src={awerd} alt="awerd" />
      </div>
      <div>
        <div className="bg-black bg-opacity-20 mt-12 lg:mt-0 hover:bg-opacity-30 duration-300 rounded-lg p-12 shadow-lg">
          <h1 className="text-white text-1xl font-bold mb-5">
            🏆 Proud Achievement: A Milestone in My Journey!
          </h1>
          <p className="text-slate-300 mb-5">
            "I am honored to receive this recognition! This award is a testament
            to my dedication and passion for technology. As a MERN Stack
            Developer, I specialize in MongoDB, Express.js, React.js, and
            Node.js, building scalable and efficient web applications. This
            achievement motivates me to push my limits and continue delivering
            innovative solutions. Excited for what’s ahead!"
          </p>
          <button className="bg-green-400 text-white py-2 px-8 rounded-md">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

export default AdsSection;
