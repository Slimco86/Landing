import React from 'react'
import { MultiBallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { frameworks, languages } from '../constants'





// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {languages.map((technology,index) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas key = {technology.name+"ball"} icon={technology.icon}/>
//         </div>
//       ))}
//     </div>
    
//   )
// }

const Tech = () => {
  const icons = languages.map((l)=>(l.icon))
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      <MultiBallCanvas key = {"languages"} icons={icons}/>
    </div>
    
  )
}
export const Frameworks = () => {
  const icons = frameworks.map((l)=>(l.icon))
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      <MultiBallCanvas key = {"frameworks"} icons={icons}/>
    </div>
    
  )
}

// export const Frameworks = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {frameworks.map((technology,index) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas key = {technology.name+"ball"} icon={technology.icon}/>
//         </div>
//       ))}
//     </div>
    
//   )
// }



export default SectionWrapper(Tech)