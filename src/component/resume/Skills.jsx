import ResumeCard from "./ResumeCard"
import { motion } from "framer-motion"

function Skills() {
  return (
  <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, transition: { duration: 1 } }}
  className="w-full flex flex-col md:flex-row gap-8"
>
  {/* Design Skill */}
  <div className="w-full md:w-1/2">
    <div>
      <span className="text-green-400">Features</span>
      <h2 className="text-slate-300 font-bold text-4xl">Design Skill</h2>
    </div>
    <div className="w-full mt-8">
      {/* Skill Item */}
      {[
        { name: "FIGMA", percent: "100%", width: "w-full" },
        { name: "PHOTOSHOT", percent: "80%", width: "w-[80%]" },
        { name: "DESIGN", percent: "90%", width: "w-[90%]" },
      ].map((skill, index) => (
        <div key={index} className="mt-3">
          <p className="text-lightText font-medium">{skill.name}</p>
          <span className="w-full h-2 inline-flex bg-black opacity-50 rounded-md mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`bg-gradient-to-r from-lime-300 to-green-300 h-full ${skill.width} rounded-lg shadow-lg relative`}
            >
              <span className="text-white absolute -top-9 right-0">{skill.percent}</span>
            </motion.span>
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Development Skill */}
  <div className="w-full md:w-1/2">
    <div>
      <span className="text-green-400">Features</span>
      <h2 className="text-slate-300 font-bold text-4xl">Development Skill</h2>
    </div>
    <div className="w-full mt-8">
      {[
        { name: "HTML", percent: "100%", width: "w-full" },
        { name: "CSS", percent: "90%", width: "w-[90%]" },
        { name: "JAVASCRIPT", percent: "70%", width: "w-[70%]" },
        { name: "REACT", percent: "80%", width: "w-[80%]" },
        { name: "TAILWINDCSS", percent: "75%", width: "w-[75%]" },
        { name: "GITHUB", percent: "70%", width: "w-[70%]" },
      ].map((skill, index) => (
        <div key={index} className="mt-3">
          <p className="text-lightText font-medium uppercase">{skill.name}</p>
          <span className="w-full h-2 inline-flex bg-black opacity-50 rounded-md mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`bg-gradient-to-r from-lime-300 to-green-300 h-full ${skill.width} rounded-lg shadow-lg relative`}
            >
              <span className="text-white absolute -top-9 right-0">{skill.percent}</span>
            </motion.span>
          </span>
        </div>
      ))}
    </div>
  </div>
</motion.div>

  )
}

export default Skills