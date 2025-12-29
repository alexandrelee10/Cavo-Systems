import React from 'react'
// Reusable title and description
export const Title = ({title, desc}: {title: any, desc: any}) => {
  return (
    <div>
        <h2 className='flex flex-col items-center text-center font-medium text-3xl sm:text-5xl sm:text-5xl gap-4'>
            {title}
        </h2>
        <p className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>
            {desc}
        </p>
    </div>
  )
}
