
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='mainBg h-[60px] flex px-1 lg:px-4 items-center justify-between'>
      
      {/* logo */}
      <div className='uppercase cursor-pointer text-sm lg:text-lg'>

      <span className='text-black
      bg-white
      pl-2
      rounded-l-xl
      hover:bg-black
      hover:text-white
      '>illahi</span>

      <span className='
      text-white
      bg-black
      pr-2
      rounded-r-xl
      hover:bg-white
      hover:text-black
      '
      >bux</span>

      </div>

      {/* Menu Buttons */}

      <div className='flex gap-1 lg:gap-4 text-sm lg:text-xl'>

      <Link className='
      bg-blue-800
      p-1 rounded
      text-white
      hover:bg-blue-900
      ' href={'/'}>Home</Link>

      <Link className='
      bg-blue-800
      p-1 rounded
      text-white
      hover:bg-blue-900'
      href={'/'}>About</Link>

      <Link className='
      bg-blue-800
      p-1 rounded
      text-white
      hover:bg-blue-900'
      href={'/todo'}>Todo</Link>

      </div>

      {/* login button */}
      <div className='flex gap-1 lg:gap-4 lg:text-xl text-sm'>

      <button className='
      bg-orange-400
      p-1 rounded
      text-white
      hover:bg-orange-500
      '>Sign In</button>

      <button className='
      bg-orange-400
      p-1 rounded
      text-white
      hover:bg-orange-500
      '>Sign Up</button>

      </div>

    </div>
  )
}

export default Navbar