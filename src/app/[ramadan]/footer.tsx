import React from 'react'
import BrandLogo from "./BrandLogo";
export default function Footer() {
  return (
    <div className='w-full flex items-center gap-4 justify-center'>
      <BrandLogo className="fill-border size-28"/>
      <div className='flex items-start flex-col'>
        <p className='font-bold text-2xl text-border'>Ilmi Kitab Ghar</p>
        <div className='text-sm flex justify-between flex-col'>
          <p className='text-border font-bold'>Abu Bakar</p>
          <p className='text-border font-bold'>Ph: 03006540942</p>
        </div>
      </div>
    </div>
  )
}
