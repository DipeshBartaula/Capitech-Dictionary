import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="w-[1240px] h-[100px] ml-[100px] flex gap-[14px] pl-[90px] pt-3">
        <Image className='pb-[23px]' src="/assets/logo.png" width={63} height={63} alt="Picture of the company" />
        <h1 className="pt-[18px] pb-[37px] font-Vazirmatn font-medium text-[22px] leading-[34.38px]">Capitech Dictionary</h1>
    </div>
  )
}

export default Navbar