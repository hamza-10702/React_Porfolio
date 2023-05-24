import React from 'react'
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const Education = ({ data }) => {

  console.log(data)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col  mdl:flex-row lgl:flex-row  lg:flex-row xl:flex-row  gap-10 lg:gap-20 lgl:gap-20 xl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-designColor border-opacity-30 flex flex-col gap-10">
          {data?.education && data?.education?.map((item) => {
            return (
              <ResumeCard
                title={item?.degree}
                subTitle={item?.institute}
                result={item?.grade}
                des={item?.about}
              />
            )
          })

          }
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-designColor border-opacity-30 flex flex-col gap-10">
         
        {data?.experience && data?.experience?.map((item) => {
            return (
              <ExperienceCard
              position={item?.position}
              company={item?.company}
              experienceTime={item?.experienceTime}
              about={item?.about}
              technology={item?.Technology}
              project={item?.Project}
              />
            )
          })

          }
         
          {/* <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          /> */}

        </div>
      </div>
    </motion.div>
  );
}

export default Education