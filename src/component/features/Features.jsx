import FeaturesCard from "./FeaturesCard"


function Features() {
  return (
    <div className="container  mx-auto pt-12">
        <div className="mb-8">
            <span className="text-green-400 "> Features</span>
            <h2 className="text-slate-300 font-bold text-4xl">What I Do</h2>
        </div>

        <div>
            <FeaturesCard/>
        </div>
    </div>
  )
}

export default Features