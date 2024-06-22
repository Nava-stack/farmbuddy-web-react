import React from "react";
import "./sideBar.css";
import { IoMdSpeedometer } from "react-icons/io";
import { BsQuestionCircle } from "react-icons/bs";
import { MdOutlineSettings, MdVerified } from "react-icons/md";
import { GiFarmer, GiReceiveMoney, GiOpenedFoodCan } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { IoFishOutline } from "react-icons/io5";

import logo from "../../Assets/app-logo.png";

const SideBar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="" />
        <h2>FarmBuddy</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>
        <ul className="menuList grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">Dashboard</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BiHome className="icon" />
              <span className="smallText">Farms</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <GiFarmer className="icon" />
              <span className="smallText">Farmers</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <GiReceiveMoney className="icon" />
              <span className="smallText">Profits</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <GiOpenedFoodCan className="icon" />
              <span className="smallText">Feeds</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <FaTruck className="icon" />
              <span className="smallText">Suppliers</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <IoFishOutline className="icon" />
              <span className="smallText">Species</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdVerified className="icon" />
              <span className="smallText">Guidance</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlineSettings className="icon" />
              <span className="smallText">Settings</span>
            </a>
          </li>
        </ul>
      </div>

      {/* <div className="settingsDiv">
        <h3 className="divTitle">SETTINGS</h3>
        <ul className="menuList grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">Charts</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BiTrendingUp className="icon" />
              <span className="smallText">Trends</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">Contacts</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsCreditCard2Front className="icon" />
              <span className="smallText">Billings</span>
            </a>
          </li>
        </ul>
      </div> */}

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Help Center</h3>
          <p>
            Having trouble in Farm Buddy, please contact us for more questions.
          </p>
          <button className="btn">Go to help</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
