import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./Contactus.css";
import TextInput from "../../Components/TextInput";
import Button from "../../Components/Button";
import TextArea from "../../Components/TextArea";

const Contactus = () => {
  return (
    <>
      <Navbar />
      <div className="bg">
        <div className="container d-flex justify-content-center">
          <div className="contactForm my-5">
            <h1 className="mb-1 marcellus-regular">Contact us for a demo</h1>
            <div>
              <div className="m-3"></div>
              <TextInput placeHolder="Enter Name" label="Enter Name" backgroundColor={'#EDF1FC'}/>
              <div className="d-flex flex-column flex-md-row justify-content-between gap-10">
                <TextInput placeHolder="Phone Number" label="Phone Number" backgroundColor={'#EDF1FC'} />
                <TextInput placeHolder="Enter Email" label="Enter Email" backgroundColor={'#EDF1FC'} />
              </div>
              <TextArea placeHolder="Enter Message" label="Message" backgroundColor={'#EDF1FC'}/>
              <div className="m-3"/>
              <Button btnTitle={'Submit'}/>
              <div className="m-3"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contactus;
