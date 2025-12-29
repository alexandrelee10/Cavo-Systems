import assets from '../assets/assets'

const Hero = () => {
  return (
    // Hero Container
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-20 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>
        {/* Trusted By... Container */}
        <div className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
            <img src={assets.group_profile} alt="" w-20 />
            <p className='text-xs font-medium'>Trusted by 100k+ people</p>
        </div>
        {/* Title and Caption */}
        <h1 className='font-medium text-4xl sm:text-5xl md:text-6xl xl:text-[84px] xl:leading-[95px] max-w-5xl'>Transforming bold ideas into powerful<span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'> digital solutions </span>built to inspire and perform</h1>
        <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>Creating digital experiences that feel personal, intentional, and built to connect</p>
        {/* Background Container */}
        <div className='relative isolate'>
          <img src={assets.hero_img} alt="" className='relative z-10 w-full max-w-6xl' />
          {/* Background Image */}
          <img src={assets.bgImage1} className='absolute -top-48 -right-48 h-[200px] w-[900px] sm:w-[900px] blur-2xl opacity-80 -z-10 dark:hidden' />
        </div>
        
        
    </div>
  )
}
export default Hero