import React from "react";
import "./activity.css";
import { BsArrowRightShort } from "react-icons/bs";

import cus1 from "../../../Assets/user1.jpg";
import cus2 from "../../../Assets/user2.jpg";
import cus3 from "../../../Assets/user3.jpg";
import cus4 from "../../../Assets/user4.jpg";

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>
      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={cus1} alt="Customer" />
          <div className="customerDetails">
            <span className="name">Kumar</span>
            <small>Ordered a new item</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={cus2} alt="Customer" />
          <div className="customerDetails">
            <span className="name">Raj</span>
            <small>Ordered a new item</small>
          </div>
          <div className="duration">5 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={cus3} alt="Customer" />
          <div className="customerDetails">
            <span className="name">Suresh</span>
            <small>Ordered a new item</small>
          </div>
          <div className="duration">8 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={cus4} alt="Customer" />
          <div className="customerDetails">
            <span className="name">Amal</span>
            <small>Ordered a new item</small>
          </div>
          <div className="duration">10 min ago</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
