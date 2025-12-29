
import assets from '../assets/assets'
import { ServiceCard } from './ServiceCard'
import { Title } from './Title'

export const Services = () => {
    // Services Block
    const servicesData = [
        // Web Development
        {
            title: 'Web Development',
            description: "We transform bold ideas into high-performance web experiences designed to connect and convert.",
            icon: assets.content_icon
        },
        {
            title: 'Digital Strategy',
            description: "Helping shape ideas into clear digital roadmaps that align design, technology, and business goals.",
            icon: assets.marketing_icon
        },
        {
            title: 'Creative Direction',
            description: "Guiding the visual and experiential direction of digital projects from concept to execution.",
            icon: assets.ads_icon
        },
        {
            title: 'Social Media',
            description: "We help you build a strong social media presence and engage with your audience.",
            icon: assets.social_icon
        }
    ]
    return (
        <div id='services' className='flex flex-col relative items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
            <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />
            <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward'/>
            <div className='flex flex-col md:grid grid-cols-2'>
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service}/>
                ))}
            </div>
        </div>
    
  )
}
