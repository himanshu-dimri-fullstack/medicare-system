import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

const CommonIcons = () => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919810857534";
    const message = `Hi,

I would like to enquire about your products/services.

Please share:
• Product details & pricing  
• Available options  
• Delivery timeline  

Looking forward to your response. Thanks!`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleGmailRedirect = () => {
    const email = "info@medicaresystem.in";
    const subject = "Enquiry";
    const body = `Hi,

I would like to enquire about your products/services.`;

    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(url, "_blank");
  };
  return (
    <div className='z-99 fixed right-0 bottom-10 flex justify-center items-center w-12 bg-white border border-[#ccc] shadow-lg'>
      <ul className='py-3 '>
        <li className='rounded text-xl p-2 text-[#1c9d36] font-bold hover:bg-[#1c9d36] hover:text-white' onClick={handleWhatsAppRedirect}>
          <FaWhatsapp className='stroke-[10.5]' />
        </li>
        <li className='rounded text-xl p-2 text-red-500 font-bold hover:bg-red-500 hover:text-white' onClick={handleGmailRedirect}>
          <SiGmail className='stroke-[1.5]' />
        </li>
        {/* <li className='rounded text-xl p-2 hover:bg-[#1c9d36] hover:text-white'> <a
          href="https://www.instagram.com/medicaresystemrgkak?utm_source=qr&igsh=MTJoZnZ0eGFtOGducA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a></li> */}
      </ul>
    </div>
  )
}

export default CommonIcons