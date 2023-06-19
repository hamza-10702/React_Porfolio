import React, { useState } from "react";
import Title from "../Title/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";
import { allTabs } from "../../Data/data";

const Resume = ({ data }) => {
  // const [currentTab, setCurrentTab] = useState("Education");

  // const handleTabChange = (tab) => {
  //   setCurrentTab(tab);
  // };

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="1 YEARS OF EXPERIENCE" des="My Resume" />
      </div>

      <Education data={data} />
      <Skills data={data} />
    </section>
  );
};

export default Resume;
