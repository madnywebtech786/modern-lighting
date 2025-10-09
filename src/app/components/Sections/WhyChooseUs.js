import Image from 'next/image';
import React from 'react';
import SectionDivider from '../SectionDivider';

export default function WhyChooseUs() {
  return (
    <div className='flex flex-col px-4 md:px-8 lg:px-12 2xl:px-20 py-10 dark:text-black'>
      <div className='flex flex-col gap-0 text-center' data-aos="zoom-out-up">
        <h2 className='text-base text-primary'>Why Modern Lighting Calgary!!</h2>
        <SectionDivider />
        <h3 className='text-3xl lg:text-4xl font-bold'>Modern Lights Calgary</h3>
      </div>

      <div className='flex gap-8 mt-12 flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 flex flex-col gap-3 lg:gap-0 justify-between pb-4'>
          <div className='flex gap-5 items-start' data-aos="fade-down" data-aos-delay='200'>
            <Image
              src={'/images/icons/ModernDesign.svg'}
              alt='modern design'
              width={60}
              height={60}
              className='w-24 md:w-10 lg:w-20'
            />
            <div className='flex flex-col gap-2'>
              <h3 className='text-lg lg:text-2xl font-bold'>Sleek Modern!</h3>
              <p className='text-sm'>
                Premium modern lighting for Calgary homes chandeliers, ceiling lights, island lights, wall lights. Energy-efficient LED fixtures, installation and service
              </p>
            </div>
          </div>

          <div className='flex gap-5 items-start' data-aos="fade-down" data-aos-delay='400'>
            <Image
              src={'/images/icons/Quality.svg'}
              alt='modern design'
              width={55}
              height={55}
              className='w-24 md:w-10 lg:w-20'
            />
            <div className='flex flex-col gap-2'>
              <h3 className='text-lg lg:text-2xl font-bold'>Top Quality!</h3>
              <p className='text-sm'>
                Durable, certified fixtures with manufacturer warranty ceiling lights, vanity lights and outdoor wall lights. Professional advice, fast delivery Calgary. 
              </p>
            </div>
          </div>

          <div className='flex gap-5 items-start' data-aos="fade-down" data-aos-delay='600'>
            <Image
              src={'/images/icons/Price.svg'}
              alt='modern design'
              width={55}
              height={55}
              className='w-24 md:w-10 lg:w-20'
            />
            <div className='flex flex-col gap-2'>
              <h3 className='text-lg lg:text-2xl font-bold'>Low Price!</h3>
              <p className='text-sm'>
                Competitive pricing and bulk discounts for Calgary homes & contractors chandeliers, ceiling lights, island lights. Free quotes, pickup and fast shipping.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 flex gap-6'>
          <div className='w-1/2'>
            <Image
              src={'/images/why1.png'}
              alt='modern design'
              width={500}
              height={500}
              className='h-[300px] md:h-[400px] w-full whyUsImg1'
              data-aos="zoom-in-right" 
              data-aos-delay='200'
            />{' '}
          </div>
          <div className='w-1/2 flex flex-col gap-3'>
          <Image
              src={'/images/Scandinavian3.png'}
              alt='modern design'
              width={550}
              height={550}
              className='h-[150px] md:h-[190px] w-full whyUsImg2'
              data-aos="zoom-in-up" 
              data-aos-delay='400'
            />{' '}
             <Image
              src={'/images/why3.png'}
              alt='modern design'
              width={550}
              height={550}
              className='h-[150px] md:h-[190px] w-full whyUsImg3'
              data-aos="zoom-in-down" 
              data-aos-delay='600'
            />{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
