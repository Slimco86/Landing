import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component,idName) => function HOC(){
    return(
        <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        key = {idName}
        viewport={{once:true,amount:0.2}}
        className={styles.padding+' max-w-10xl mx-auto relative z-auto'}>
            <Component/>
        </motion.section>
    )
}

export default SectionWrapper

