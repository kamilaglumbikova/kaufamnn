import Image from 'next/image'
import React from 'react'

const Contactitem = ({urlImg, position,name,language,phone,email}) => {
  return (
    <div className="flex bg-[#18191E] gap-[16px] p-[32px]">
        <div>
            <Image 
                src={urlImg}
                height={100}
                width={100}
                alt={name}
            />
        </div>
        <div>
            <span className="text-primary-gold uppercase">{position}</span>
            <div className="flex gap-[16px] items-center">
                <span className="font-playfair text-[20px] leading-[26.66px] font-medium">{name}</span>
                <span className="flex gap-[4px]">
                    {language.map((lang, index) => (
                        <Image 
                        key={index}
                        src={`/assets/flag-${lang}.svg`}
                        width={16}
                        height={16}
                        alt={lang}
                    />
                    ))}
                </span>
            </div>
            <div className="flex gap-[8px] mt-[6px]">
                <Image 
                    src="/assets/phone.svg"
                    width={20}
                    height={20}
                    alt="phone"
                />
                <span>{phone}</span>
            </div>
            <div className="flex gap-[8px] mt-[8px]">
                <Image 
                    src="/assets/envelope.svg"
                    width={20}
                    height={20}
                    alt="envelope"
                />
                <span>{email}</span>
            </div>
        </div>
    </div>
  )
}

export default Contactitem