import { portrait } from "../assets"
import { SectionWrapper } from "../hoc"
import { facts } from "../constants"
import { fadeIn, textVariant} from "../utils/motion"
import { motion }  from "framer-motion"
import { Tilt } from "react-tilt"
import Tech from "./Tech"
import { Frameworks} from "./Tech"
import { about_text, core_text, framework_text } from "../constants"
import { Suspense } from "react"



const FactCard = ({index, title, fact_text, img}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index *0.5, 0.75)}>
      <Tilt
        options={{max:15,speed:100, scale:1.05}}
        className= "p-5 rounded-2xl min-h-[530px] sm:w-[500px] min-w-[300px] w-full backdrop-blur-sm bg-black/40 shadow-red-800/70 shadow-lg ring-2 ring-white/5">
        <div className="relative w-full h-[230px]">
          <img src={img} alt={"fact-img"+index} className="w-full h-full object-cover rounded-2xl"/>
        </div>
        <div className="mt-5 text-secondary text-[14px]">
          <h3 className="text-white font-bold text-[24px]">
            {title}
          </h3>
          <p className="mt-2 ">
            {fact_text}
          </p>
        </div>
      </Tilt>
    </motion.div>
  )
}
/*"bg-transparent p-5 rounded-2xl sm:w-[765px] w-full "*/
const Card = ({index, title, fact_text, img}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index *0.5, 0.75)}>
      <Tilt
        options={{max:25,speed:100, scale:1.05}}
        className= "isolate w-full h-full p-5 rounded-2xl  bg-black/40 shadow-xl shadow-red-800/70 backdrop-blur-sm ring-2 ring-white/10">
        <div className="mt-5 text-secondary text-[14px]">
          <h3 className="text-white font-bold text-[24px]">
            {title}
          </h3>
          <p className="mt-2 text-white">
            {fact_text}
          </p>
        </div>
      </Tilt>
    </motion.div>
  )
}



const About = () => {
    return (
      <>
      <motion.div className="mt-10 flex lg:flex-row flex-col gap-6" variants={textVariant()}>
        <div className="w-[30%] flex">
          <img src={portrait} alt="portrait" className="w-full h-full object-cover rounded-3xl"/>
        </div>
        <div className="flex w-full">
          <Card title="Hello," fact_text={about_text}/>
        </div> 
      </motion.div>
      
      <div className="my-10 flex flex-wrap w-full justify-between items-center h-full gap-5">
        {facts.map((facts,index) =>(
          <FactCard key ={'project-'+index} index= {index} {...facts} />
        ))}
      </div>

      <motion.div className="mt-10" variants={textVariant()}>
        <div className="flex text-center">
          <Card title="Core Activity" fact_text={core_text}/>
        </div>
        <Suspense>
          <Tech/>
        </Suspense> 
      </motion.div>

      <motion.div className="mt-10" variants={textVariant()}>
        <div className="flex text-center">
          <Card title="Frameworks" fact_text={framework_text}/>
        </div>
        <Suspense>
            <Frameworks/>
        </Suspense> 
      </motion.div>
     
      </>
    )
}

export default SectionWrapper(About,"About")