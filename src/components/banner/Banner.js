import React, { useState } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { BsGithub } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaLinkedin , FaGoogle} from 'react-icons/fa'
import bannerImage from '../../assets/images/Programming-amico.png'
const Banner = ({ data }) => {

    const [error, setError] = useState("")

    const [text] = useTypewriter({
        words: ["React Js Developer", "Frontend Developer", "Programmer"],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000
    })


    const downloadResume = () => {
        try {
            if (data?.resumeLink) {
                window.open(data?.resumeLink)
            }
        } catch (e) {
            setError(e)
        }
    }

    return (
        <section id='home' className=' w-full h-auto flex  pb-10 flex-col lg:flex-row lgl:flex-row xl:flex-row  border-b-[1px] border-b-gray-600'>

            <div className='w-full lgl:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col gap-14 pt-20'>
                <div className='flex flex-col gap-4'>
                    <h4 className='text-lg font-normal uppercase'>
                        WELCOME
                    </h4>
                    <h1 className='text-5xl font-bold text-white '>
                        Hi, I'm {" "}
                        <span className='text-designColor capitalize'>
                            Hafiz Hamza
                        </span>
                    </h1>
                    <h2 className='text-4xl font-bold text-white'>
                        a <span>{text}</span>
                        <Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor='#ff014f'

                        />
                    </h2>
                    <p className='text-base font-bodyfont leading-6 tracking-wide'>

                        {data?.about ? data.about : `I am a highly motivated and detail-oriented Web Developer with 11 months of experience in developing web applications using the MERN stack. I have a passion for developing high-quality and responsive web applications using React, Node, and other cutting-edge web technologies.`

                        }

                    </p>
                </div>

                <div className='flex gap-10 flex-col  lgl:flex-row lg:flex-row mdl:flex-row xl:flex-row xl:gap-0 lgl:gap-0 justify-between '>
                    <div >
                        <h2 className='uppercase text-sm lgl:text-base xl:text-base font-titleFont mb-4'>Find me in</h2>
                        <div className='flex gap-4'>
                            <span className='bannerIcon' >
                            <a href={`mailto:${data?.contact[0]?.contactLink}`}><FaGoogle /></a>
                                
                            </span>
                            <span className='bannerIcon'>
                            <a href={`${data?.contact[1]?.contactLink}`}><FaLinkedin /></a>
                                
                            </span>
                            <span className='bannerIcon'>
                            <a href={`${data?.contact[2]?.contactLink}`}><BsGithub /></a>
                                
                            </span>
                           
                        </div>
                    </div>
                    <div >
                        <h2 className='uppercase text-sm lgl:text-base xl:text-base font-titleFont mb-4'>Here is my Resume</h2>
                        <button className='text-base font-titleFont  p-5 downloadButton' type="button" onClick={downloadResume}> Download CV</button>
                    </div>
                </div>
            </div>
            <div className='hidden xl:block lgl:block  lg:block w-1/2 flex justify-center items-center relative'>
                <img
                    className=' w-[600px] h-[600px] z-10 ml-auto'
                    src={data?.bannerImage ? data?.bannerImage : bannerImage} alt="Image" />


            </div>
            {error && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                    {error}
                </p>
            )}


        </section>
    )
}

export default Banner