import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"
import {styles} from "../styles"
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'



const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "", email: "", message: ""
  })
  const [loading,setLoading] = useState(false)
  const handleChange = (e) => {
    const {name,value} = e.target
    setForm({...form, [name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send("service_m8js2oa",
                 "template_fkmaj2c",
                 {from_name:form.name,
                 to_name:"Ievgen",
                 from_email:form.email,
                 to_email:"slimco86@gmail.com",
                 message:form.message},
                 "fy1QOu1fzkF_NVV4h").then(()=>{
                  setLoading(false)
                  alert("Thank you for your message. I will get back to you as soon as possible.")
                  
                  setForm({name:"",email:"",message:""})
                 },(error)=>{setLoading(false)
                            console.log(error)
                          alert("Something went wrong.")
                        })
  }

  return (
    <div className='mt-8 xl:flex-row flex-col-reverse flex gap-10 xl:max-h-[750px]'>
      <motion.div variants={slideIn("left","tween",0.2,1)}
        className='flex-[0.6] backdrop-blur-sm bg-black/40 shadow-red-800/70 shadow-lg ring-2 ring-white/5 p-8 rounded-2xl'>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form ref={formRef}
            onSubmit={handleSubmit}
            className='mt-2 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your name:</span>
              <input type="text"
                     name='name'
                     value={form.name}
                     onChange={handleChange}
                     placeholder='Name'
                     className='bg-tertiary py-4 px-6
                      placeholder:text-secondary text-white rounded-lg outline-none
                      border-none font-medium'/>
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Email:</span>
              <input type="email"
                     name='email'
                     value={form.email}
                     onChange={handleChange}
                     placeholder='Email'
                     className='bg-tertiary py-4 px-6
                      placeholder:text-secondary text-white rounded-lg outline-none
                      border-none font-medium'/>
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Message:</span>
              <textarea rows="7" 
                     name='message'
                     value={form.message}
                     onChange={handleChange}
                     placeholder=''
                     className='bg-tertiary py-4 px-6
                      placeholder:text-secondary text-white rounded-lg outline-none
                      border-none font-medium'/>
            </label>
            <button type='submit' className='bg-tertiary py-3 px-8 
              outline-none w-fit text-white 
              font-bold shadow-md shadow-primary rounded-xl'>
              {loading ? 'Sending...' : "Send"}
            </button>
          </form>
      </motion.div>

      {/*<motion.div variants={slideIn("right","tween",0.2,1)}
        className='xl:flex-2 xl:h-auto md:h-[550px] h-[350px]'>
          <EarthCanvas/>
  </motion.div>*/}
    </div>
  )
}

export default SectionWrapper(Contact,"contact")