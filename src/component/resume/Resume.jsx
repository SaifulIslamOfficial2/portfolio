import { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Interview from "./Interview";
import ResumeCard from "./ResumeCard";
import EducationQuality from "./ResumeCard";
import Skills from "./Skills";

function Resume() {
  const [educationData, setEducationData] = useState(true);
  const [skillsData, setSkillsData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [interviewData, setInterview] = useState(false);

  return (
   <section className="w-full container pt-12 mx-auto">
  <div className="mt-12 flex justify-center">
    <div className="text-center">
      <p className="text-green-400 uppercase mb-2">2+ Years of Experience</p>
      <h1 className="text-slate-300 font-bold text-5xl font-titleFont text-center mb-8">
        My Resume
      </h1>
    </div>
  </div>

  {/* Tab Navigation */}
  <div>
    <ul className="grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx-auto gap-4">
      <li
        onClick={() => {
          setEducationData(true);
          setSkillsData(false);
          setExperienceData(false);
          setInterview(false);
        }}
        className={`${
          educationData ? "border-green-400 rounded-lg" : "border-transparent"
        } text-lightText w-full h-20 bg-black bg-opacity-25 text-xl flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px]`}
      >
        Education
      </li>
      <li
        onClick={() => {
          setEducationData(false);
          setSkillsData(true);
          setExperienceData(false);
          setInterview(false);
        }}
        className={`${
          skillsData ? "border-green-400 rounded-lg" : "border-transparent"
        } text-lightText w-full h-20 bg-black bg-opacity-25 text-xl flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px]`}
      >
        Professional Skills
      </li>
      <li
        onClick={() => {
          setEducationData(false);
          setSkillsData(false);
          setExperienceData(true);
          setInterview(false);
        }}
        className={`${
          experienceData ? "border-green-400 rounded-lg" : "border-transparent"
        } text-lightText w-full h-20 bg-black bg-opacity-25 text-xl flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px]`}
      >
        Experience
      </li>
      <li
        onClick={() => {
          setEducationData(false);
          setSkillsData(false);
          setExperienceData(false);
          setInterview(true);
        }}
        className={`${
          interviewData ? "border-green-400 rounded-lg" : "border-transparent"
        } text-lightText w-full h-20 bg-black bg-opacity-25 text-xl flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px]`}
      >
        Interview
      </li>
    </ul>
  </div>

  {/* Dynamic Resume Cards */}
  <div className="py-12">
    {educationData && <Education />}
    {skillsData && <Skills />}
    {experienceData && <Experience />}
    {interviewData && <Interview />}
  </div>
</section>

  );
}

export default Resume;
