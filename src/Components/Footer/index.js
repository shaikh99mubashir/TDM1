import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import TextInput from "../TextInput";
import Button from "../Button";

const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="m-5" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 col-lg-2">
            <p className="text-white rubik-regular" style={{ fontSize: 18 }}>
              Company
            </p>
            <ul className="arrow-list">
              <li>Our Services</li>
              <li>About us</li>
              <li>Our Clients</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <p className="text-white rubik-regular" style={{ fontSize: 18 }}>
              Services
            </p>
            <ul className="arrow-list">
              <li>Performance Management</li>
              <li>Payroll Management</li>
              <li>Adherence</li>
              <li>Mobile Application</li>
              <li>Notice Management</li>
              <li>Travel Management</li>
            </ul>
          </div>
          <div className="col-12 col-md-5 col-lg-3">
            <p className="text-white rubik-regular" style={{ fontSize: 18 }}>
              Get Started
            </p>
            <ul className="icon-list">
              <li className="icon-map">
                Jln Campana Wangi No 22, Jakarta -Indonesia
              </li>
              <li className="icon-email">hello@yourdomain.tld</li>
              <li className="icon-contact">+(62)21 2002-2012</li>
            </ul>
          </div>
          <div className="col-12 col-lg-4">
            <p className="text-white rubik-regular" style={{ fontSize: 18 }}>
              Latest News
            </p>
            <ul className="news-list text-white">
              <li>
                <i className="fas fa-envelope-open-text"></i> Want Your Team
                Members to Produce More? Stop Making Them Work Overtime
                <br />
                <span>
                  <i className="fas fa-calendar-alt"></i> 10 Dec 2021
                </span>
              </li>
              <li>
                <i className="fas fa-newspaper"></i> What Is The Difference
                Between Leadership and Management?
                <br />
                <span>
                  <i className="fas fa-calendar-alt"></i> 10 Dec 2021
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="m-4" />
      <div className="text-white container border-top border-bottom border-secondary">
        <div className="m-5" />
        <div className="row">
          <div className="col-12 col-lg-8 mb-3 mb-lg-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </div>
          <div className="col-12 col-lg-4 d-flex align-items-center" style={{ gap: 10 }}>
            <TextInput placeHolder="Enter Email" />
            <Button btnTitle="SUBSCRIBE" />
          </div>
        </div>
        <div className="m-5" />
      </div>
      <div className="m-5" />
      <p className="text-center text-white">
        Copyright © 2024 Treedac Innovations, All rights reserved.
      </p>
      <div className="m-4" />
    </div>
  );
};

export default Footer;
