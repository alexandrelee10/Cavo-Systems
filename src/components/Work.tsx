import React from 'react'
import assets from '../assets/assets'
import { Title } from './Title'

export const Work = () => {
    // Data for cards
    const workData = [
        {
            title: 'Mobile app development',
            description: 'Building reliable, high-performance mobile applications with clean architecture and a focus on real-world usability.',
            image: assets.work_mobile_app
        },
        {
            title: 'Dashboard management',
            description: 'We help you execute your plan and deliver results',
            image: assets.work_dashboard_management
        },
        {
            title: 'Fitness app promotion',
            description: 'We help you create a marketing strategy that drives results.',
            image: assets.work_mobile_app
        },
    ]
    return (
    // Work Container
    <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        {/* Title for cards */}
        <Title title='Our Latest Work!' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>
        {/* Cards Container */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
            {
                workData.map((work, index) => (
                    // Card
                    <div key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                        <img src={work.image} alt="" className='w-full rounded-xl' />
                        <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                        <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
