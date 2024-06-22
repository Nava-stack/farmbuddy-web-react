import React from "react";
import "./listing.css";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import img1 from "../../../Assets/fish1.png";
import img2 from "../../../Assets/fish2.png";
import img3 from "../../../Assets/fish3.png";
import img4 from "../../../Assets/fish4.png";
import user1 from "../../../Assets/user1.jpg";
import user2 from "../../../Assets/user2.jpg";
import user3 from "../../../Assets/user3.jpg";
import user4 from "../../../Assets/user4.jpg";
import user5 from "../../../Assets/user5.jpg";

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Lists</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img1} alt="" />
          <h3>Grand Tuna</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img2} alt="" />
          <h3>Rome Muna</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img3} alt="" />
          <h3>Salmon</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img4} alt="" />
          <h3>Golden Thilapia</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Suppliers</h3>
            <button className="btn flex">
              See All
              <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="User" />
              <img src={user2} alt="User" />
              <img src={user3} alt="User" />
              <img src={user4} alt="User" />
              <img src={user5} alt="User" />
            </div>
            <div className="cardText">
              <span>
                14,223 Plants sold <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Suppliers</h3>
            <button className="btn flex">
              See All
              <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user2} alt="User" />
              <img src={user1} alt="User" />
              <img src={user5} alt="User" />
              <img src={user4} alt="User" />
              <img src={user3} alt="User" />
            </div>
            <div className="cardText">
              <span>
                7,221 Plants sold <br />
                <small>
                  26 Sellers <span className="date">31 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
