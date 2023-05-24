import React from 'react'
import Title from '../Title/Title'
import { featuresData } from '../../Data/data'
import Card from './Card'

const Features = ({data}) => {


  return (
    <section id='features'
      className='w-full py-20 border-b-[1px] border-b-black'
    >
      <div className="flex justify-center items-center text-center ">
       
      <Title title="Features" des="What I Do" />
      </div>

      <div className=' grid justify-items-center items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-20 '>
        {data?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>

    </section>
  )
}

export default Features