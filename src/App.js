import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Project from "./components/project/Projects";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import firebase from "./config/firebase"
import { getDatabase, ref, onValue} from "firebase/database";


function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    getDataFromFirebase()
  }, [])


  const getDataFromFirebase = () => {

    const db = getDatabase();
    const starCountRef = ref(db);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      
      if(data !== null) {
        setData(data);
        console.log(data);
      }
     
    });

    
  }

  return (
    <div className="w-full h-auto bg-bodyColor  text-lightText">
        <Navbar />
      <div className="max-w-screen-2xl mx-auto px-16 ">
        <Banner data = {data?.banner} />
        <Features data = {data?.features} />
        <Project data = {data?.project} />
        <Resume data = {data?.resume} />
        <Contact data = {data} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
