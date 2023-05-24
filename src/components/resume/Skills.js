import React from 'react'
import { motion } from 'framer-motion';

const Skills = ({data}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-row lgl:flex-row gap-10 lgl:gap-20"
    >
      

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          {/* <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2> */}
        </div>
        <div className="grid grid-cols-1 lgl:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">

          {
            data?.skills?.map((skill)=>{
              return (
                <div className="overflow-x-hidden" key={skill.id}>
                <p className="text-sm uppercase font-medium">{skill.name}</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "0%", opacity: 0 }}
                    animate={{ x: `-${(100-Number(skill?.level)).toString()}%`, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className= {`w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`} 
                    // ${skill?.level}%
                    
                 >
                    <span className="absolute -top-7 right-0">{
                      `${skill.level}%`
                    }</span>
                  </motion.span>
                </span>
              </div>
              )
            })
          }
         
         
        </div>
      </div>
    </motion.div>
  );
}

export default Skills