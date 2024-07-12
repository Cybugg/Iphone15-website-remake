import React from 'react'
import {appleImg, bagImg, searchImg} from "@/app/utils"
import Image from 'next/image';
import {NAV_LIST} from "../../constants"

function Navbar() {

  return (
    <header className='w-full p-5 sm:px-10 flex justify-between items-center'>
        <nav className='w-full flex screen-max-width'>
            <Image src={appleImg}  alt="Apple" width={14} height={18} />
          <div className='flex flex-1 justify-center max-sm:hidden'>
          {NAV_LIST.map(nav=><div key={nav} className='px-5 text-gray hover:text-white text-sm transition-all cursor-pointer'>{nav}</div>)}
        </div>   
         <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <Image src={searchImg} alt='search' width={18} height={18} />
          <Image src={bagImg} alt='bag' width={18} height={18} />
        </div>
        </nav>
    </header>
  )
}

export default Navbar;