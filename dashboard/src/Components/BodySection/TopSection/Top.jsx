import React from "react";
import "./top.css";
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle2 } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";

import admin from "../../../Assets/user3.jpg";
import img2 from "../../../Assets/Farmer.png";
import video from "../../../Assets/video3.mp4";

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to FarmBuddy</h1>
          <p>Hello Nava, Welcome back!</p>
        </div>
        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <BiSearchAlt className="icon" />
        </div>
        <div className="adminDiv flex">
          <TbMessageCircle2 className="icon" />
          <IoMdNotificationsOutline className="icon" />
          <div className="adminImage">
            <img src={admin} alt="Admin" />
          </div>
        </div>
      </div>
      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Make Small Scale Farming Greatful</h1>
          <p>
            The Srilanka's First Small scale farming industry today with animal
            farming!
          </p>
          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Suppliers</button>
          </div>
          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Status</h1>

              <div className="flex">
                <span>
                  Today <br />
                  <small>4 Orders</small>
                </span>
                <span>
                  This Month <br />
                  <small>127 Orders</small>
                </span>
              </div>

              <span className="flex link">
                Go to my orders
                <BsArrowRightShort className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              <img src={img2} alt="img appear" />
            </div>

            {/* We shall use this card later */}
            <div className="sideBarCard">
              <BsQuestionCircle className="icon" />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <h3>Help Center</h3>
                <p>
                  Having trouble in Farm Buddy, please contact us for more
                  questions.
                </p>
                <button className="btn">Go to help</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
