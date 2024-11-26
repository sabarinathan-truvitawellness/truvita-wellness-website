import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import truvitaLogo from '../../Assets/images/common/truvita-logo.png';
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import {
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import './footer.scss';
import appleBadge from "../../Assets/images/home/app-store.png";
import playStore from '../../Assets/images/home/play-store.png';
import { Link } from 'react-router-dom';

const Footer = () => {

  const onChangeHandler = (value: string) => {
    return null;
  };

  const submitNewsLetter = () => {
    return null;
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* TruVita Wellness Section */}
        <div className="footer-section contact-info">
          <div className="footer-logo">
            <Link to={"/"}>
            <img src={truvitaLogo} alt="TruVita Logo" className="logo" />
            </Link>
          </div>
          <h3 className="footer-heading">Contact</h3>
          <p className="footer-contact">
            <span className="footer-icon"><MdOutlineMail /></span>
            <a href="mailto:truvitawellness@gmail.com" className="footer-link">hello@truvitawellness.com</a>
          </p>
          <p className="footer-contact">
            <span className="footer-icon"><FaPhone /></span>
            <a href="tel:+4065550120" className="footer-link">(323) 998 - 2424</a>
          </p>
          <h3 className="footer-heading">Address</h3>
          <p className="footer-address">17350 State Hwy 249, Ste 220, Houston,<br></br> Texas 77064 US</p>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
                        <li className={"footer-link"}><Link to={"/Aboutus"}>About Us</Link></li>
                        <li className={"footer-link"}><Link to={"/AiBooth"}>Ai Booth</Link></li>
                        <li className={"footer-link"}><Link to={"/AiDoctor"}>Ai Doctor</Link></li>
                        <li className={"footer-link"}><Link to={"/ContactUs"}>Contact Us</Link></li>  
          </ul>
        </div>

        {/* Terms & Policy Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Legal</h3>
          <ul className="footer-links ">
            <li><a href="#" className="footer-link">Terms & Conditions</a></li>
            <li><a href="#" className="footer-link">Privacy Policy</a></li>
            {/* <li><a href="#" className="footer-link">FAQs</a></li> */}
          </ul>
        </div>

        {/* Newsletter and Social Media */}
        <div className="footer-section newsletter-section">
          <h3 className="footer-heading">Join Our Newsletter</h3>
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel htmlFor="newsletter" required>Enter Your Email</InputLabel>
            <OutlinedInput
              type="text"
              onChange={(e) => onChangeHandler(e.target.value)}
              className="input-newsletter"
              endAdornment={
                <InputAdornment position="end">
                  <button onClick={submitNewsLetter} className="newsletter-submit">Submit</button>
                </InputAdornment>
              }
              label="News Letter"
              required
            />
          </FormControl>
          <h3 className="footer-heading follow-us">Follow Us</h3>
          <div className="footer-social-icons">
            <a href="#" className="footer-link"><FaFacebookF size={20} /></a>
            <a href="#" className="footer-link"><FaInstagram size={20} /></a>
            <a href="#" className="footer-link"><FaXTwitter size={20} /></a>
          </div>
        </div>

        <div className='footer-section-privacy-container'>
          <div className='footer-section-link-img'>
            <img src={playStore} alt=''  className={'max-w-[100%]'}/>
          </div>
          <div className='footer-section-link-img'>
            <img src={appleBadge} alt=''  className={'max-w-[100%]'}/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
