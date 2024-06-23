// import React from "react";
// import Navbar from "../../Components/Navbar";
// import Footer from "../../Components/Footer";
// const Service = () => {
//   const servicesData = [
//     {
//       image: require("../../Images/Group.png"),
//       title: "Performance Management",
//       text: "To optimize productivity and growth through comprehensive evaluation, feedback, and goal alignment",
//     },
//     {
//       image: require("../../Images/g2.png"),
//       title: "Payroll Management",
//       text: "Efficient payroll solutions for smooth management of your workforce's Remuneration needs.",
//     },
//     {
//       image: require("../../Images/g3.png"),
//       title: "Adherence Management",
//       text: "Providing effective strategies to ensure strict adherence for optimal organizational performance.",
//     },
//     {
//       image: require("../../Images/g3.png"),
//       title: "Mobile Application",
//       text: "Empower your team with on-the-go access and productivity through our mobile application.",
//     },
//     {
//       image: require("../../Images/g4.png"),
//       title: "Notice Management",
//       text: "Effortlessly manage and distribute important notices, keeping your team informed and on track.",
//     },
//     {
//       image: require("../../Images/g5.png"),
//       title: "Travel Management",
//       text: "Effective solutions for seamless travel planning and expenses management for worldwide business travel.",
//     },
//   ];
//   return (
//     <div>
//       <Navbar />
//       <div className="bg py-5">
//       <h1
//         className="marcellus-regular text-white text-center "
//       >
//         OUR SERVICES
//       </h1>
//       <h5 className="rubik-medium  text-white text-center">
//       Your Partner for Innovative IT Solutions
//       </h5>
//         <div className=" container d-flex align-items-center justify-content-center">
//           <div className="gridContainer pt-5 d-flex">
//             {servicesData.map((card, index) => (
//               <div
//                 className="card service-card"
//                 key={index}
//                 style={{ width: "18rem" }}
//               >
//                 <div className="card-body">
//                   <div className="p-2" />
//                   <div className="d-flex justify-content-center">
//                     <img src={card.image} alt={card.title} />
//                   </div>
//                   <div className="p-2" />
//                   <h5 className="card-title text-uppercase">{card.title}</h5>
//                   <p className="card-text">{card.text}</p>
//                   <div className="p-1" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <h1
//         className="marcellus-regular text-dark text-center mt-5"
//       >
//         OUR SERVICES
//       </h1>
//       <h4 className="rubik-medium  text-secondary text-center">
//       we provide you with all the cutting edge innovations you need to be a market leader.
//       </h4>

//       <div className="container">
//         <div className="m-5" />
//         <div className="row">
//           <div className="col-6  d-flex align-items-center justify-content-center">
//             <div>
//               <h1
//                 className="marcellus-regular text-dark"
//                 style={{ fontWeight: "bold" }}
//               >
//                 Cyber Security
//               </h1>
//               <p className="marcellus-regular text-dark ">
//                 As we all are well aware that cybersecurity is of utmost
//                 importance in the current scenario. we at Treedac Innovations
//                 are dedicated to making sure that your digital data is well
//                 guarded from every conceivable online threat to your data,
//                 giving you well deserved mental peace so that you can focus on
//                 your other priorities
//               </p>
//             </div>
//           </div>
//           <div className="col-6 d-flex align-items-center justify-content-center">
//             <img src={require("../../Images/cyber.png")} />
//           </div>
//         </div>
//         <div className="m-5" />
//         <div className="row">
//           <div className="col-6  d-flex align-items-center justify-content-center">
//             <img src={require("../../Images/sd.png")} />
//           </div>
//           <div className="col-6 d-flex align-items-center justify-content-center">
//             <div>
//               <h1
//                 className="marcellus-regular text-dark"
//                 style={{ fontWeight: "bold" }}
//               >
//                 Software Development
//               </h1>
//               <p className="marcellus-regular text-dark ">
//                 In today's fast-paced digital world, software development is
//                 crucial for staying competitive. At Treedac Innovations, we
//                 specialize in creating custom software solutions that drive
//                 business growth and efficiency. Our team ensures every project
//                 is secure, reliable, and tailored to meet your specific needs,
//                 empowering you to focus on your core objectives.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="m-5" />
//         <div className="row">
//           <div className="col-6  d-flex align-items-center justify-content-center">
//             <div>
//               <h1
//                 className="marcellus-regular text-dark"
//                 style={{ fontWeight: "bold" }}
//               >
//                 Mobile App Development
//               </h1>
//               <p className="marcellus-regular text-dark ">
//                 In the mobile-first era, having a robust mobile app is
//                 essential. At Treedac Innovations, we specialize in developing
//                 custom mobile apps that enhance user engagement and streamline
//                 operations. Our expert team ensures each app is secure,
//                 user-friendly, and tailored to your specific needs, empowering
//                 you to stay ahead in a competitive market.
//               </p>
//             </div>
//           </div>
//           <div className="col-6 d-flex align-items-center justify-content-center">
//             <img src={require("../../Images/mobile.png")} />
//           </div>
//         </div>
//         <div className="m-5" />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Service;
import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./Service.css"; // Make sure to create this file for additional styling
import Slider from "../../Components/Slider";

const Service = () => {
  const servicesData = [
    {
      image: require("../../Images/Group.png"),
      title: "Performance Management",
      text: "To optimize productivity and growth through comprehensive evaluation, feedback, and goal alignment",
    },
    {
      image: require("../../Images/g2.png"),
      title: "Payroll Management",
      text: "Efficient payroll solutions for smooth management of your workforce's Remuneration needs.",
    },
    {
      image: require("../../Images/g3.png"),
      title: "Adherence Management",
      text: "Providing effective strategies to ensure strict adherence for optimal organizational performance.",
    },
    {
      image: require("../../Images/g3.png"),
      title: "Mobile Application",
      text: "Empower your team with on-the-go access and productivity through our mobile application.",
    },
    {
      image: require("../../Images/g4.png"),
      title: "Notice Management",
      text: "Effortlessly manage and distribute important notices, keeping your team informed and on track.",
    },
    {
      image: require("../../Images/g5.png"),
      title: "Travel Management",
      text: "Effective solutions for seamless travel planning and expenses management for worldwide business travel.",
    },
  ];
  const servicesData2 = [
    {
      image: require("../../Images/sd4.png"),
      title: "Mobile App Development",
      text: "Tailored mobile applications that improve efficiency and streamline your business processes.",
    },
    {
      image: require("../../Images/sd3.png"),
      title: "Software development",
      text: "Efficient payroll solutions for smooth management of your workforce's Remuneration needs.",
    },
    {
      image: require("../../Images/sd1.png"),
      title: "Cyber Security",
      text: "We offer advanced defense strategies and proactive solutions to safeguard your digital database effectively.",
    },
    {
      image: require("../../Images/sd2.png"),
      title: "IT Desktop Solutions",
      text: "We deliver adaptable and prompt IT Desktop Solutions to boost productivity and efficiency",
    },
    {
      image: require("../../Images/sd5.png"),
      title: "Web Designing",
      text: "We Design innovative and smart web based layouts to spotlight your online presence",
    },
   
  ];

  
  return (
    <div>
      <Navbar />
      <div className="bg py-5">
        <h1 className="marcellus-regular text-white text-center">
          OUR SERVICES
        </h1>
        <h5 className="rubik-medium text-white text-center">
          Your Partner for Innovative IT Solutions
        </h5>
        <div className="container d-flex justify-content-center">
          <div className="row pt-5 justify-content-center">
            {servicesData.map((card, index) => (
              <div className="col-12 col-sm-6 col-lg-4 mb-4" key={index}>
                <div className="card service-card h-100">
                  <div className="card-body d-flex flex-column align-items-center text-center">
                    <img src={card.image} alt={card.title} className="mb-3" />
                    <h5 className="card-title text-uppercase">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="marcellus-regular text-dark text-center mt-5">
          OUR SERVICES
        </h1>
        <h4 className="rubik-medium text-secondary text-center">
          We provide you with all the cutting edge innovations you need to be a
          market leader.
        </h4>
        <div className="m-5" />



        <div className="m-5" />
          <Slider servicesData2={servicesData2}/>
            
        <div className="row align-items-center mb-5">
          <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
            <div>
              <h1
                className="marcellus-regular text-dark"
                style={{ fontWeight: "bold" }}
              >
                Cyber Security
              </h1>
              <p className="marcellus-regular text-dark">
                As we all are well aware that cybersecurity is of utmost
                importance in the current scenario. We at Treedac Innovations
                are dedicated to making sure that your digital data is well
                guarded from every conceivable online threat to your data,
                giving you well deserved mental peace so that you can focus on
                your other priorities.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img
              src={require("../../Images/cyber.png")}
              className="img-fluid"
              alt="Cyber Security"
            />
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-12 col-md-6 order-md-2 d-flex justify-content-center mb-4 mb-md-0">
            <div>
              <h1
                className="marcellus-regular text-dark"
                style={{ fontWeight: "bold" }}
              >
                Software Development
              </h1>
              <p className="marcellus-regular text-dark">
                In today's fast-paced digital world, software development is
                crucial for staying competitive. At Treedac Innovations, we
                specialize in creating custom software solutions that drive
                business growth and efficiency. Our team ensures every project
                is secure, reliable, and tailored to meet your specific needs,
                empowering you to focus on your core objectives.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 order-md-1 d-flex justify-content-center">
            <img
              src={require("../../Images/sd.png")}
              className="img-fluid"
              alt="Software Development"
            />
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
            <div>
              <h1
                className="marcellus-regular text-dark"
                style={{ fontWeight: "bold" }}
              >
                Mobile App Development
              </h1>
              <p className="marcellus-regular text-dark">
                In the mobile-first era, having a robust mobile app is
                essential. At Treedac Innovations, we specialize in developing
                custom mobile apps that enhance user engagement and streamline
                operations. Our expert team ensures each app is secure,
                user-friendly, and tailored to your specific needs, empowering
                you to stay ahead in a competitive market.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img
              src={require("../../Images/mobile.png")}
              className="img-fluid"
              alt="Mobile App Development"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Service;
