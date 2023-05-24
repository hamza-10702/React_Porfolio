import React, { useState } from 'react'
import Title from '../Title/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from "./Experience"
import { allTabs } from '../../Data/data'


const Resume = ({data}) => {

  const [currentTab, setCurrentTab] = useState("Education");

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  }


  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="1 YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <li
            className={`${currentTab === "Education" ? "border-designColor rounded-lg" : "border-transparent"
              } resumeLi`}

            onClick={() => { handleTabChange("Education") }}

          >
            Education & Professional Experience
          </li>
          <li

            className={`${currentTab === "Professional Skills" ? "border-designColor rounded-lg" : "border-transparent"
              } resumeLi`}

            onClick={() => { handleTabChange("Professional Skills") }}
          >
            Professional Skills
          </li>
          
         
        </ul>
      </div>
      {currentTab === "Education" && <Education data = {data} />}
      {currentTab === "Professional Skills" && <Skills data = {data}/>}
     
      {/* {currentTab === "Achievements" && <Achievement />}  */}
    </section>
  )
}

export default Resume