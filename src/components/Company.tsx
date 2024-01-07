import Image from 'next/image'
import React from 'react'

const Company = () => {
  return (
    <>
        <div className='mt-[111px]  mb-[200px] relative'> 
            <div className='ml-[283px] w-[300px] h-[301] z-30 absolute'>
                <Image src='/assets/logo.png' width={300} height={301} alt='logo' />
            </div>
            <div className='absolute mb-[200px]'>
            <div className='mt-[152px] ml-[203px] pt-[37px] relative'>
                <div className='bg-rotate-box rounded-[75px] rotate-[-2.4deg] z-10 w-[989px] h-[227px] absolute'>
                    <div className='flex pt-[83px] pl-[514px] gap-[30px]'>
                        <Image className='' src='/assets/tweet_button.png' width={71.17} height={51.42} alt="tweet logo" />
                        <p className='rotate-[2.4deg] font-Vazirmatn font-[700] text-[50px]'>capitech.nepal</p>
                    </div>
                </div>
                <div className='bg-box rounded-[75px] z-0 w-[1046px] h-[199px] absolute'></div>
            </div>
            </div>
        </div>

    </>
  )
}

export default Company