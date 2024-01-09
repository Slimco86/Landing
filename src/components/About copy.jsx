import { portrait } from "../assets"
import { SectionWrapper } from "../hoc"
import { facts } from "../constants"
import { fadeIn, textVariant} from "../utils/motion"
import { motion }  from "framer-motion"
import { Tilt } from "react-tilt"
import Tech from "./Tech"



const FactCard = ({index, title, fact_text, img}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index *0.5, 0.75)}>
      <Tilt
        options={{max:15,speed:100, scale:1.05}}
        className= "p-5 rounded-2xl min-h-[600px] sm:w-[360px] w-full backdrop-blur-sm bg-black/40 shadow-red-800/70 shadow-lg ring-2 ring-white/5">
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
        className= "isolate  w-full p-5 rounded-2xl  bg-black/40 shadow-xl shadow-red-800/70 backdrop-blur-sm ring-2 ring-white/10">
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
  const about = "my name is Eugene. I am a passionate researcher, explorer and advanturer. "+
  "I always starve for new experiences and seek more knowledge. This is what have " +
  "been driving me through my life and made my entire journey so far. I traveled around "+
  "the world, lived in three countries and did research in several fields, "+ 
  "starting from physics and neurobiology ending up with artificial inteligence " +
  "and music theory. In my work I combine the collected knowledge from all these " +
  "domains, to solve industrial and engineering problems realted to AI, automation and robotics, "+
  "to improve the current state of integrity assesment of global energy system. "+
  "Apart from my professional activity I am also enthusiastic about photography, "+
   "music and a range of sport activities such as cycling, snowboarding "+ 
   "and bodybuilding. Last, but not the least, competitive video gaming has been "+
   "with me since my early school years. Here are some facts about me:"
    return (
      <>
      <motion.div className="mt-10 flex lg:flex-row flex-col gap-6" variants={textVariant()}>
        <div className="w-[30%] flex ">
          <img src={portrait} alt="portrait" className="w-full h-full object-cover rounded-3xl"/>
        </div>
        <div className="flex w-full">
          <Card title="Hello," fact_text={about}/>
        </div> 
      </motion.div>
      
      <div className="carousel my-10 mx-auto mt-10 flex flex-wrap gap-7">
        {facts.map((facts,index) =>(
          <FactCard key ={'project-'+index} index= {index} {...facts} />
        ))}
      </div>

      <motion.div className="mt-10" variants={textVariant()}>
        <div className="flex text-center">
          <Card title="Core Activity" fact_text={about}/>
        </div>
        <Tech/> 
      </motion.div>

      <motion.div className="mt-10" variants={textVariant()}>
        <div className="flex text-center">
          <Card title="Frameworks" fact_text={about}/>
        </div>
        <Tech/> 
      </motion.div>
      
      </>
    )
}

export default SectionWrapper(About,"About")