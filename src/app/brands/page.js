import React from 'react'
import BrandsSection from '../components/Sections/BrandsSection'

export default function page() {
  return (
       <div>
      <div className='flex items-center justify-center py-40 aboutUs text-white'>
        <h2 className='text-5xl font-semibold'>Brands</h2>
      </div>
      <div className='pt-10 px-10 flex flex-col gap-10'>
        <BrandsSection />
      </div>
    </div>
  )
}
