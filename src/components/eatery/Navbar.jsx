import React, { useState } from "react";
import { BsFillTelephoneFill, BsFillClockFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { GrFacebook } from "react-icons/gr";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import * as Scroll from "react-scroll";

import EateryLogo from "../../images/eaterylogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  let SmoothLink = Scroll.Link;
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="w-full h-auto font-poppins text-sm flex flex-col space-y-0">
      {/* top navbar */}
      <div className="w-full h-12 bg-primary-eateryBrown text-white flex items-center px-4">
        <div className="w-full xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-lg h-full mx-auto flex items-center lg:justify-between justify-center">
          {/* right side */}
          <div className="items-center xl:space-x-12 lg:space-x-8 hidden lg:flex">
            {/* one icon */}
            <div className="flex items-center space-x-2">
              <BsFillTelephoneFill className="h-5 w-5" />
              <p>845-398-1454</p>
            </div>

            {/* one icon */}
            <div className="flex items-center space-x-2">
              <MdLocationOn className="h-6 w-6" />
              <p>135 East Erie St. Blauvelt, NY 10913</p>
            </div>

            {/* one icon */}
            <div className="flex items-center space-x-2">
              <BsFillClockFill className="h-5 w-5" />
              <p>7am to 10pm</p>
            </div>
          </div>

          {/* left side */}
          <div className="flex items-center xl:space-x-4 lg:space-x-2 space-x-4">
            <a
              href="https://www.facebook.com/baileyssmokehouse/"
              rel="noreferrer"
              target="_blank"
            >
              <GrFacebook className="h-4 w-4 lg:h-6 lg:w-6" />
            </a>
            <a
              href="https://twitter.com/baileysblauvelt"
              rel="noreferrer"
              target="_blank"
            >
              <FaTwitterSquare className="h-5 w-5 lg:h-7 lg:w-7" />
            </a>
            <a
              href="https://www.instagram.com/baileysmokehouse/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillInstagram className="h-5 w-5 lg:h-8 lg:w-8" />
            </a>
          </div>
        </div>
      </div>

      {/* main navbar */}
      <div className="h-20 lg:h-32 px-4">
        <div className="w-full xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-lg h-full mx-auto flex items-center justify-between ">
          {/* logo */}
          <Link to="/eatery">
            <img
              src={EateryLogo}
              className="h-24 w-24 lg:h-36 lg:w-36 object-contain"
              alt=""
            />
          </Link>

          {/* links */}
          <div className="lg:flex items-center xl:space-x-14 lg:space-x-8 font-semibold text-lg hidden text-primary-eateryBrown/80">
            <SmoothLink
              to="about"
              className="hover:text-primary-eateryBrown duration-200 cursor-pointer"
              spy={true}
              smooth={true}
              duration={500}
            >
              About Us
            </SmoothLink>
            <SmoothLink
              className="hover:text-primary-eateryBrown duration-200 cursor-pointer"
              to="events"
              spy={true}
              smooth={true}
              duration={500}
            >
              Events
            </SmoothLink>
            <SmoothLink
              className="hover:text-primary-eateryBrown duration-200 cursor-pointer"
              to="menus"
              spy={true}
              smooth={true}
              duration={500}
            >
              Menus
            </SmoothLink>
            <SmoothLink
              className="hover:text-primary-eateryBrown duration-200 cursor-pointer"
              to="gallery"
              spy={true}
              smooth={true}
              duration={500}
            >
              Gallery
            </SmoothLink>
            <SmoothLink
              className="hover:text-primary-eateryBrown duration-200 cursor-pointer"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact Us
            </SmoothLink>
          </div>

          {/* mobile toggler */}
          <div className="block lg:hidden">
            <FiMenu
              className="h-8 w-8 cursor-pointer fill-current text-primary-eateryBrown"
              onClick={(prev) => setOpenMenu(!prev)}
            />
          </div>

          {/* Mobile navigation */}
          {openMenu && (
            <div className="absolute left-0 top-0 md:hidden min-h-screen w-full bg-red-200 z-[10000]"></div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
