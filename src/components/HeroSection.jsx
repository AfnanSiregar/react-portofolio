import React from 'react'

function HeroSection() {
  return (
    <>
      <section id='hero' className='py-64'>
        <div className='flex items-center justify-center flex-col py-20'>
          <div className='text-center'>
            <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 fonts-semibold dark:text-indigo-500'>Hi, I'm Afnan. <br></br> A Programmer.</h1>
            <p className='text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300'>I'm a front-end and back-end developer with high curiosity in technology</p>
            <a href='/CV-Muzayyin Al-Afnan Siregar.pdf' target="_blank" className='inline-block px-8 py-3 border border-tranparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md'>See My CV</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection