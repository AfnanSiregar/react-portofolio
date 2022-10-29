import React from 'react'

function ServiceItem({ title, icon, description }) {
  return (
    <div className='bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-4 z-[1] transition p-5 rounded-md'>
      <div className='text-gray-800 dark:text-gray-300 w-6 h-6 mb-3'>
        {icon}
      </div>
      <h1 className='font-semibold text-lg text-gray-600 dark:text-gray-200 mb-1'>{title}</h1>
      <p className='text-md text-gray-600 dark:text-gray-300'>{description}</p>
    </div>
  )
}

export default ServiceItem