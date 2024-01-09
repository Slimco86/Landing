import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { Projects } from "../constants"
import { fadeIn, textVariant} from "../utils/motion"
import { motion }  from "framer-motion"
import { styles } from "../styles"
import { Tilt } from "react-tilt"


const ProjectCard = ({index, title, description, tags, logo, source_code_link,}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index *0.5, 0.75)}>
      <Tilt
        options={{max:25,speed:200, scale:1.05}}
        className= "backdrop-blur-sm bg-black/40 shadow-red-800/70 shadow-lg ring-2 ring-white/5 min-h-[800px] p-5 rounded-2xl sm:w-[360px] w-full ">
        <div className="relative w-full h-[230px]">
          <img src={logo} alt={title} className="w-full h-full object-cover rounded-2xl"/>
          <div className="absolute inset-0 flex justify-end m-3 card-img-hover">
            <div onClick={()=>window.open(source_code_link,'_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img src={github} alt = "github" className="w-1/2 h-1/2 objec-contain"/>
            </div>
          </div>
        </div>
        <div className="mt-5 text-secondary text-[14px]">
          <h3 className="text-white font-bold text-[24px]">
            {title}
          </h3>
          <p className="mt-2">
            {description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 bottom-3">
          {tags.map((tag) => (
            <p key = {tag.name} className={tag.color + " text-14px"}>
              #{tag.name}
            </p>
          ))}

        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {

    return (
      <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p 
          variants={fadeIn("","",0.1,1)}
          className="mt-1 text-white text-[17px] max-w-3xl leading-[35px]"
        >
          All the projects presented here are purely
          exploratory works done during learning, at that time, new
          groundbreaking technologies and concepts. All together, they 
          form the path of my development as a scientist, 
          computer vision engineer and software developer. 
          Unfortunately, most of the real work, which has a real impact
          on world and business, are not presented here due to NDA. 
        </motion.p>
      </div>
      <div className="mt-4 flex flex-wrap gap-7">
        {Projects.map((project,index) =>(
          <ProjectCard key ={'project-'+index} index= {index} {...project} />
        ))}
      </div>
      </>
    )
}

export default SectionWrapper(Works,"Projects")
