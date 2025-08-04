import ResumeCard from "./ResumeCard"
import { motion } from "framer-motion"  

function Experience() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:2}}} className=" w-full flex gap-8">
    <div>
      <div>
        <span className="text-green-400 "> 2024 - 2025</span>
        <h2 className="text-slate-300 font-bold text-4xl">
        Job Experience
        </h2>
      </div>
      <div className=" w-full h-[800px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-8 items-center mt-8  ">
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
      </div>
    </div>

    <div>
      <div>
        <span className="text-green-400 "> 2020 - 2025</span>
        <h2 className="text-slate-300 font-bold text-4xl">
        Trainer Experience
        </h2>
      </div>
      <div className=" w-full h-[800px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-8 items-center mt-8  ">
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
      </div>
    </div>
    </motion.div>
  )
}

export default Experience