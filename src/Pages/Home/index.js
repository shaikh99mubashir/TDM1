import React from "react";
import Navbar from "../../Components/Navbar";
import "./Home.css";
import LogoSlider from "../../Components/LogoSlider";
import Footer from "../../Components/Footer";
const Home = () => {
  const cardsData = [
    {
      image: require("../../Images/moto.png"),
      title: "MOTO",
      text: "To Innovate and Provide cutting edge solutions in ever changing work dynamics",
      hoverText:
        "Our motto is to provide such solutions which are cutting edge and constantly changing in the fast paced work dynamics. By constantly adopting to the ever changing work scenarios and upgrading our services our clients will always be one step ahead in overcoming day to day challenges which in turn will help in maintaining optimal work efficiency.",
    },
    {
      image: require("../../Images/mission.png"),
      title: "Mission",
      text: "To Innovate and Provide cutting edge solutions in ever changing work dynamics",
      hoverText:
        "our mission is to provide cutting edge and state of the art enterprise management software to all types of industrial and service based clients, no matter what is the size of their work force and operational budget restrictions this will help small business grow and large businesses maintain their optimal performance and growth",
    },
    {
      image: require("../../Images/vision.png"),
      title: "Vision",
      text: "To Innovate and Provide cutting edge solutions in ever changing work dynamics",
      hoverText:
        "our vision is to innovate newer ways and methods which will in turn be Trend Setters in enterprise management software. By constantly evolving and adopting to newer work challenges and scenarios we will make sure that our valued cliental are always one step ahead in current fast paced work enviroment",
    },
  ];
  const servicesData = [
    {
      image: require("../../Images/card5.png"),
      title: "Performance Management",
      text: "To optimize productivity and growth through comprehensive evaluation, feedback, and goal alignment",
    },
    {
      image: require("../../Images/card2.png"),
      title: "Payroll Management",
      text: "Efficient payroll solutions for smooth management of your workforce's Remuneration needs.",
    },
    {
      image: require("../../Images/card4.png"),
      title: "Adherence Management",
      text: "Providing effective strategies to ensure strict adherence for optimal organizational performance.",
    },
    {
      image: require("../../Images/card6.png"),
      title: "Mobile Application",
      text: "Empower your team with on-the-go access and productivity through our mobile application.",
    },
    {
      image: require("../../Images/card3.png"),
      title: "Notice Management",
      text: "Effortlessly manage and distribute important notices, keeping your team informed and on track.",
    },
    {
      image: require("../../Images/card1.png"),
      title: "Travel Management",
      text: "Effective solutions for seamless travel planning and expenses management for worldwide business travel.",
    },
  ];
  const servicesData2 = [
    {
      image: require("../../Images/c7.png"),
      title: "Detailed Employee Profile Management",
    },
    {
      image: require("../../Images/c8.png"),
      title: "Optimizing productivity With Synchronized Work force Management",
    },
  ];

  return (
    <div>
      <Navbar />
      <img
        src={require("../../Images/banner.png")}
        alt={"bg"}
        style={{ width: "100%" }}
      />
      {/* <div style={{ position: "absolute", bottom: 100, left: 490 }}>
        <button className="bg-white rounded-1 fw-bold px-5 py-2 border-0">
          Demo
        </button>
      </div> */}
      <div className="bannerbg ">
        <div className="w-100 blurred-background"></div>
        <div className="py-5 ">
          <p
            className="text-center text-white rubik-medium"
            style={{ fontWeight: "bold" }}
          >
            OUR CULTURE hello
          </p>
          <h1 className="text-center text-white">
            For entrepreneurs, by entrepreneurs.
          </h1>
          <p className="text-center text-white rubik-regular">
            Empowering the visionaries who dare to blaze their own trail,
            crafting solutions for those who walk the entrepreneurial path.
          </p>
          <p className="text-center text-white rubik-regular">
            "Enterprising cutting edge solutions to make entrepreneurs achieve
            their vision" - <strong>Treedac Innovations</strong>
          </p>
        </div>
      </div>
      <div style={{ backgroundColor: "#E7E7FF" }}>
        <div className="w-100 blurred-background-logoSlider"></div>
        <p className="text-center rubik-medium mb-4">
          Thank's to our Partners :
        </p>
        <LogoSlider />
        <div className="w-100 blurred-background"></div>
      </div>
      <div className="">
        <div className="p-5" />
        <div className="gridContainer d-flex">
          {cardsData.map((card, index) => (
            <div
              className="card cardBg border-0"
              key={index}
              style={{ width: "18rem" }}
            >
              <div className="card-body cardData">
                <div className="p-2" />
                <div className="d-flex justify-content-center align-items-center">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="p-2" />
                <h5 className="card-title text-center text-uppercase">
                  {card.title}
                </h5>
                <p className="card-text text-center">{card.text}</p>
                <div className="p-1" />
              </div>

              <div className="card-body hover-text">
                <div className="d-flex justify-content-center align-items-center text-center pt-5">
                  <p className="">{card.hoverText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3" />
      </div>
      {/* <div className="p-5 my-0 mt-5 d-flex flex-row">
        <div className="pt-5 mt-5" style={{ width: "80%" }}>
          <p
            className="rubik-medium text-dark font-weight-bold"
            style={{ fontWeight: "bold" }}
          >
            OUR SERVICES
          </p>
          <h1 className="marcellus-regular text-dark">
            Innovative, Customized and Flexible solutions to Grow your business
          </h1>
          <div className="gridContainer justify-content-start pt-5 d-flex">
            {servicesData.map((card, index) => (
              <div
                className="card cardBg border-0"
                key={index}
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <div className="p-2" />
                  <div className="">
                    <img src={card.image} alt={card.title} />
                  </div>
                  <div className="p-2" />
                  <h5 className="card-title text-uppercase">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                  <div className="p-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: "20%" }}>
          <div className="gridContainer  d-flex">
            {servicesData2.map((card, index) => (
              <div
                className="card cardBg bg-light mb-5 border-0"
                key={index}
                style={{ width: "18rem" }}
              >
                <div className="card-body bg-light">
                  <div className="p-2" />

                  <img src={card.image} alt={card.title} />

                  <div className="p-4" />
                  <h5
                    className="marcellus-regular text-uppercase"
                    style={{ fontSize: "28px" }}
                  >
                    {card.title}
                  </h5>
                  <div className="p-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-lg-9 mb-5">
            <p className="rubik-medium text-dark font-weight-bold">
              OUR SERVICES
            </p>
            <h1 className="marcellus-regular text-dark">
              Innovative, Customized and Flexible solutions to Grow your
              business
            </h1>
            <div className="row pt-5">
              {servicesData.map((card, index) => (
                <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                  <div className="card cardBg border-0 h-100">
                    <div className="card-body">
                      <div className="p-2" />
                      <div className="text-center">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="img-fluid"
                        />
                      </div>
                      <div className="p-2" />
                      <h5 className="card-title text-uppercase">
                        {card.title}
                      </h5>
                      <p className="card-text">{card.text}</p>
                      <div className="p-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="row">
              {servicesData2.map((card, index) => (
                <div className="col-12 mb-5" key={index}>
                  <div className="card cardBg bg-light border-0 h-100">
                    <div className="card-body bg-light">
                      <div className="p-2" />
                      <div className="text-center">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="img-fluid"
                        />
                      </div>
                      <div className="p-4" />
                      <h5
                        className="marcellus-regular text-uppercase"
                        style={{ fontSize: "28px" }}
                      >
                        {card.title}
                      </h5>
                      <div className="p-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
