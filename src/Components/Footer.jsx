import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/cb_logo.svg";
import Facebook from "../Assets/Footer/facebook.svg";
import Twitter from "../Assets/Footer/twitter.svg";
import Youtube from "../Assets/Footer/youtube.svg";
import Pinterest from "../Assets/Footer/pinterest.svg";
import Globe from "../Assets/Footer/globe.svg";
import Android from "../Assets/Footer/android.svg";
import Apple from "../Assets/Footer/apple.svg";

function Footer() {
  return (
    <div className="bg-emerald-600 text-white p-5">
      <div className="bg-emerald-600 text-white flex justify-around items-center p-5">
        <img src={Logo} className="w-40" alt="cb_logo" />
        <div className="flex flex-col gap-1">
          <p className="font-bold">MOBILE SITE & APPS</p>
          <NavLink to="/" className="flex items-center gap-1">
            <img src={Globe} alt="globe" className="h-5" /> <p>m.cricbuzz.com</p>
          </NavLink>
          <NavLink to="/"  className="flex items-center gap-1">
          <img src={Android} alt="androidlogo" className="h-5" /> <p>Android</p>
          </NavLink>
          <NavLink to="/" className="flex items-center gap-1">
            <img src={Apple} alt="ioslogo" className="h-5" /> <p>iOS</p>
          </NavLink>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold">FOLLOW US ON</p>
          <NavLink to="www.facebook.com" className="flex items-center gap-1">
            <img src={Facebook} alt="fblogo" className="h-5" /> <p>facebook</p>
          </NavLink>
          <NavLink to="www.twitter.com"  className="flex items-center gap-1">
          <img src={Twitter} alt="twitterlogo" className="h-5" /> <p>twitter</p>
          </NavLink>
          <NavLink to="www.youtube.com" className="flex items-center gap-1">
            <img src={Youtube} alt="ytlogo" className="h-5" /> <p>youtube</p>
          </NavLink>
          <NavLink to="www.pinterest.com"  className="flex items-center gap-1">
          <img src={Pinterest} alt="twitterlogo" className="h-5" /> <p>pinterest</p>
          </NavLink>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">COMPANY</p>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/advertise">Advertise</NavLink>
          <NavLink to="/privacypolicy">Privacy Policy</NavLink>
          <NavLink to="/terms">Terms</NavLink>
          <NavLink to="/tvads">Cricbuzz TV Ads</NavLink>
        </div>
      </div>
      <p className="mx-auto w-fit">
        &copy; 2023 Cricbuzz.com, Times Internet Limited. All rights reserved |
        The Times of India | Navbharat Times
      </p>
    </div>
  );
}

export default Footer;
