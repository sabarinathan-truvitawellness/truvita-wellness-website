import React, { useState, useEffect } from "react";
import './header.scss';
import truvitaLogo from '../../Assets/images/common/truvita-logo.png';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true); // Header visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Last scroll position
  const [isScrolled, setIsScrolled] = useState(false); // To track if scrolled past a certain distance
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    if (window.innerWidth >= 768) {
      setIsMobileMenuOpen(false); // Close menu when switching to desktop view
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const location = useLocation();  // This gives you the current location object
  // const pathName = location.pathname;
  const pathName =  location.pathname;
  console.log("yyyyyyyyyyyyyyy",pathName)

  useEffect(() => {

    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      // Show header if scrolling up, hide if scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }

      // Add white background if scrolled past 100px
      if (currentScrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);

    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);





  return (
    <>
      {
        isMobile ? <div className={`header-container ${isVisible ? 'visible' : 'hidden'} ${isScrolled ? 'scrolled' : ''}`}>
          <div className="container-wrapper">
            <div className="flex justify-between items-center max-w-[768px] px-[20px] pt-[10px]">

              {
                isMobileMenuOpen ?
                  <div className="close-logo-container" onClick={handleMobileMenuToggle}>
                    <div className="close-logo-wrapper" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M22.8748 7.13924C22.7591 7.02336 22.6218 6.93143 22.4706 6.8687C22.3194 6.80598 22.1572 6.77369 21.9935 6.77369C21.8298 6.77369 21.6677 6.80598 21.5165 6.8687C21.3653 6.93143 21.2279 7.02336 21.1123 7.13924L14.9998 13.2392L8.88729 7.12674C8.77156 7.01102 8.63418 6.91922 8.48297 6.85659C8.33177 6.79395 8.1697 6.76172 8.00604 6.76172C7.84238 6.76172 7.68032 6.79395 7.52911 6.85659C7.37791 6.91922 7.24052 7.01102 7.12479 7.12674C7.00906 7.24247 6.91726 7.37986 6.85463 7.53107C6.792 7.68227 6.75977 7.84433 6.75977 8.00799C6.75977 8.17166 6.792 8.33372 6.85463 8.48492C6.91726 8.63613 7.00906 8.77352 7.12479 8.88924L13.2373 15.0017L7.12479 21.1142C7.00906 21.23 6.91726 21.3674 6.85463 21.5186C6.792 21.6698 6.75977 21.8318 6.75977 21.9955C6.75977 22.1592 6.792 22.3212 6.85463 22.4724C6.91726 22.6236 7.00906 22.761 7.12479 22.8767C7.24052 22.9925 7.37791 23.0843 7.52911 23.1469C7.68032 23.2095 7.84238 23.2418 8.00604 23.2418C8.1697 23.2418 8.33177 23.2095 8.48297 23.1469C8.63418 23.0843 8.77156 22.9925 8.88729 22.8767L14.9998 16.7642L21.1123 22.8767C21.228 22.9925 21.3654 23.0843 21.5166 23.1469C21.6678 23.2095 21.8299 23.2418 21.9935 23.2418C22.1572 23.2418 22.3193 23.2095 22.4705 23.1469C22.6217 23.0843 22.7591 22.9925 22.8748 22.8767C22.9905 22.761 23.0823 22.6236 23.1449 22.4724C23.2076 22.3212 23.2398 22.1592 23.2398 21.9955C23.2398 21.8318 23.2076 21.6698 23.1449 21.5186C23.0823 21.3674 22.9905 21.23 22.8748 21.1142L16.7623 15.0017L22.8748 8.88924C23.3498 8.41424 23.3498 7.61424 22.8748 7.13924Z" fill="#0DB1DB" />
                      </svg>
                    </div>
                  </div>


                  :

                  <div className="burger-logo" onClick={handleMobileMenuToggle}>
                    <div className="burger-logo-wrapper">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 26 18" fill="none">
                        <path d="M15.5 1.5H1.75M24.25 9H1.75M19.875 16.5H1.75" stroke="#0DB1DB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>
              }

              {/* Logo Section */}
              <div className="logo-container">
                <div className="logo-container-wrapper">
                  <Link to='/'>
                  <img src={truvitaLogo} alt="Logo" className="w-full" />
                  </Link>
                </div>
              </div>


              {/* Login Button Section */}
              <div className="mobile-login-link-button">
                <div className="mobile-login-button-wrapper">
                  <div className="mobile-secondary-anchor-btn flex gap-4">

                    <Link to="/" className="no-underline mobile-login-link-text">
                      SIGN IN
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            {
              isMobileMenuOpen && 
              <div className="burger-menu-container  h-[100vh]">
             
                    <div className="burger-menu-list-container-wrapper">
                      <ul className="burger-menu-list-parent">
                        {/* <li className={`${pathName === "/" ? "active" : ""} `} ><Link to={"/"}>Home </Link></li> */}
                        <li className={pathName === "/Aboutus" ? "active" : ""}><Link to={"/Aboutus"}>About Us</Link></li>
                        <li className={pathName === "/AiBooth" ? "active" : ""}><Link to={"/AiBooth"}>Ai Booth</Link></li>
                        <li className={pathName === "/AiDoctor" ? "active" : ""}><Link to={"/AiDoctor"}>Ai Doctor</Link></li>
                        <li className={pathName === "/ContactUs" ? "active" : ""}><Link to={"/ContactUs"}>Contact Us</Link></li>
                      </ul>
                    </div>
             
              </div>
            }
           
          </div>
        </div>

          :

          <div className={`header-container ${isVisible ? 'visible' : 'hidden'} ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container-wrapper py-4 px-8 max-w-[1500px] m-auto">
              <div className="flex justify-between items-center">
                {/* Logo Section */}
                <div className="logo-container">
                  <div className="logo-container-wrapper">
                  <Link to='/'>
                  <img src={truvitaLogo} alt="Logo" className="w-full" />
                  </Link>
                  </div>
                </div>

                {/* Navigation List Section */}
                <div className="list-container flex justify-center items-center">
                  <div className="list-container-wrapper">
                    <ul className="flex gap-10">
                    {/* <li className={`${pathName === "/" ? "active" : ""} `} ><Link to={"/"}>Home </Link></li> */}
                        <li className={pathName === "/Aboutus" ? "active" : ""}><Link to={"/Aboutus"}>About Us</Link></li>
                        <li className={pathName === "/AiBooth" ? "active" : ""}><Link to={"/AiBooth"}>Ai Booth</Link></li>
                        <li className={pathName === "/AiDoctor" ? "active" : ""}><Link to={"/AiDoctor"}>Ai Doctor</Link></li>
                        <li className={pathName === "/ContactUs" ? "active" : ""}><Link to={"/ContactUs"}>Contact Us</Link></li>
                    </ul>
                  </div>
                </div>

                {/* Login Button Section */}
                <div className="login-link-button">
                  <div className="login-button-wrapper">
                    <div className="secondary-anchor-btn flex gap-4 p-4">
                      <span>
                        {/* SVG Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2C11.0111 2 10.0444 2.29324 9.22215 2.84265C8.3999 3.39206 7.75904 4.17295 7.3806 5.08658C7.00216 6.00021 6.90315 7.00555 7.09607 7.97545C7.289 8.94536 7.7652 9.83627 8.46447 10.5355C9.16373 11.2348 10.0546 11.711 11.0245 11.9039C11.9945 12.0969 12.9998 11.9978 13.9134 11.6194C14.827 11.241 15.6079 10.6001 16.1573 9.77785C16.7068 8.95561 17 7.98891 17 7C17 5.67392 16.4732 4.40215 15.5355 3.46447C14.5979 2.52678 13.3261 2 12 2ZM12 10C11.4067 10 10.8266 9.82405 10.3333 9.49441C9.83994 9.16476 9.45542 8.69623 9.22836 8.14805C9.0013 7.59987 8.94189 6.99667 9.05764 6.41473C9.1734 5.83279 9.45912 5.29824 9.87868 4.87868C10.2982 4.45912 10.8328 4.1734 11.4147 4.05764C11.9967 3.94189 12.5999 4.0013 13.1481 4.22836C13.6962 4.45542 14.1648 4.83994 14.4944 5.33329C14.8241 5.82664 15 6.40666 15 7C15 7.79565 14.6839 8.55871 14.1213 9.12132C13.5587 9.68393 12.7956 10 12 10ZM21 21V20C21 18.1435 20.2625 16.363 18.9497 15.0503C17.637 13.7375 15.8565 13 14 13H10C8.14348 13 6.36301 13.7375 5.05025 15.0503C3.7375 16.363 3 18.1435 3 20V21H5V20C5 18.6739 5.52678 17.4021 6.46447 16.4645C7.40215 15.5268 8.67392 15 10 15H14C15.3261 15 16.5979 15.5268 17.5355 16.4645C18.4732 17.4021 19 18.6739 19 20V21H21Z" fill="#FFFFFF" />
                        </svg>
                      </span>
                      <Link to="/" className="no-underline login-link-text">
                        Login
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
      }
    </>
  );
};

export default Header;
