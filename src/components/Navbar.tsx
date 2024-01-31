import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="w-[1240px] h-[100px] ml-[100px] flex gap-[14px] pl-[90px] pt-3">
      <Image className='pb-[23px]' src="/assets/logo-no-background.png" width={200} height={63} alt="Picture of the company" />
      <h1 className="ml-[50px] pt-[18px] pb-[37px] font-Vazirmatn font-medium text-[18px] leading-[34.38px]">"Deciphering Words, Unraveling Knowledge – Your Gateway to Lexical Mastery with CipherDefine!"</h1>
    </div>
  )
}

export default Navbar