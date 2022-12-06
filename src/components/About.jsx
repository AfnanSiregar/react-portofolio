import React from 'react'
import SectionTitle from './SectionTitle'

function About() {
  return (
    <>
      <SectionTitle id="about"> About Me </SectionTitle>
      <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
        <div className='w-full md:w-6/12'>
          <p className='text-md text-gray-600 dark:text-gray-300'>
            My full name is Muzayyin Al-Afnan Siregar, you can call me Afnan or Muzayyin,
            i was born in Sipirok, South Tapanuli, North Sumatera.
            Now I live in South Jakarta City, working at PT. Indonesia Comnets Plus
          </p>
          <br />
          <p className='text-md text-gray-600 dark:text-gray-300'>
            I have spent the last 2+ years studying in lectures and trainings; I have knowledge including: HTML, CSS, Javascript, PHP, Laravel, React.js, Vue.js, MySQL, etc.
            Feel free to contact me via email at:
          </p>
          <a href="mailto:francafnan@gmail.com" className='block mt-3 text-md text-right md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-800 dark:hover:text-indigo-500'
          >francafnan@gmail.com</a>
        </div>
        <img className='w-full md:w-5/12 rounded-lg object-cover hover:animate-waving-hand'
          src={`https://cdnstatic.kurogame.net/h5_manage_dist/pgr_website2.0/assets/lucia.5e3317e4.png`}
          width="100%" height="100%" alt="Afnan Siregar" />
      </div>
    </>
  )
}

export default About