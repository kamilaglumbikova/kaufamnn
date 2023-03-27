import Image from 'next/image'
import React from 'react'

const Info = ({icon, title, subtitle, link=""}) => {
  return (
    <div className="flex border border-[#26272D] w-[296px] h-[108px] items-center gap-[12px] px-[32px]">
        <Image
        alt={title}
        src={icon}
            width={40}
            height={40}
         />
         <div className="flex flex-col">
            <div className="text-primary-gold text-[12px] leading-[22px]">{title}</div>
            <div className="font-medium">{subtitle}</div>
         </div>
    </div>
  )
}

export default Info