import React from 'react'
import './Contact.css'
import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si"

export default function Contact() {
  return (
    <>
    <div className='container contact' id="contact">
      <h1>CONTACT ME</h1>
      <div className='contact-icon' data-aos="zoom-in-up" data-aos-duration='1000'>
        <a href='https://www.gmail.com' target='-blank' className='items'>
          <FaInstagram className='icons' />
        </a>
        <a href='https://www.gmail.com' target='-blank' className='items'>
          <CiFacebook className='icons' />
        </a>
        <a href='https://www.gmail.com' target='-blank' className='items'>
          <CiLinkedin className='icons' />
        </a>
        <a href='https://www.gmail.com' target='-blank' className='items'>
          <FaSquareXTwitter className='icons'/>
        </a>
        <a href='https://www.gmail.com' target='-blank' className='items'>
          <FaGithubSquare className='icons'/>
        </a>
        <a href='https://www.gmail.com' target='-blank' className='items'>
          <SiGmail className='icons'/>
        </a>
      </div>
    </div>
    </>
  )
}
