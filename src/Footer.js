import React from 'react'
import './Footer.css';
import {BsFillSendFill} from 'react-icons/bs'
import {FaLinkedin,FaFacebookSquare,FaTwitter} from 'react-icons/fa'
import {FaYoutube,FaInstagram} from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="flex-box">
          <div className="senchola  text-start">
           <h5 className=''>Senchola</h5>
           <p>we help ambitious scale throuch our exclusive global <br /> network of freelance talent,outsourcing services and <br /> market insights.join senchola to accelarate scale your <br /> business growth</p>
          </div>
          <div className=" text-start usecase">
            <h6>Use case</h6>
            <p>UI design</p>
            <p>UX design</p>
            <p>ux design</p>
            <p>UX design</p>
            <p>Prototyping</p>

          </div>
          <div className=" text-start usecase">
            <h6>Expore</h6>
            <p>Figma</p>
            <p>Customers</p>
            <p>Why I love Figma</p>
            <p>Figma</p>
            <p>Why I Love Figma</p>
          </div>
          <div className="connect ">
            <p>Connect with senchola technologies</p>
            <div className="mail">
                <input type="email" placeholder='Email' />
                <button><BsFillSendFill/></button>
            </div>

            <div className="socialLinks">
            <span><FaLinkedin/></span>
            <span><FaYoutube/></span>
            <span><FaFacebookSquare/></span>
            <span><FaInstagram/></span>
            <span><FaTwitter/></span>
         </div>
          </div>
        

        </div>
        
        <p className='text-center mt-2 mb-0 text-capitalize copyrights'>all copyrights reserved &copy; 2023 senchola technologies solution</p>
    </div>
  )
}

export default Footer;