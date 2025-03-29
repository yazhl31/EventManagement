import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      

      <div className="logo">
        <img src="/LOGO.jpg" alt=" Logo" />
      </div>

      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="hero" spy={true} smooth={true} duration={500}  offset={-80}>
            HOME
          </Link>
          <Link to="services" spy={true} smooth={true} duration={500} offset={-80}>
            SERVICES
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500} offset={-70}>
            ABOUT
          </Link>
          
          <Link to="gallery" spy={true} smooth={true} duration={500} offset={-150}>
            GALLERY
          </Link>

          <Link to="contact" spy={true} smooth={true} duration={500} offset={-100}>
            CONTACT
          </Link>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;