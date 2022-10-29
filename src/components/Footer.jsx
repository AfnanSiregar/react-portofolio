import React from 'react'

function Footer() {
  return (
    <footer className='py-1 bg-slate-800 text-center text-gray-300 rounded-t-lg'>
      <div className='flex wrap gap-10 md:gap-10 p-3 flex-row items-center justify-center'>
        <a href="https://www.instagram.com/zaynafnan06_mc/" target="_blank">
          <ion-icon name="logo-instagram" class="scale-150"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/in/muzayyin-al-afnan-siregar-18205524a/" target="_blank">
          <ion-icon name="logo-linkedin" class="scale-150"></ion-icon>
        </a>
        <a href="https://www.facebook.com/afnan.sullivan.41148" target="_blank">
          <ion-icon name="logo-facebook" class="scale-150"></ion-icon>
        </a>
      </div>
      <p className='text-xs mt-2 text-gray-300'>
        © AfnanSiregar {new Date().getFullYear()}. All rights reserved
      </p>
    </footer>
  )
}

export default Footer