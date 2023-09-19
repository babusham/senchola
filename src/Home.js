import React from "react";
import "./Home.css";
import firstImg from "./assets/guy-lesson 2.png";
import colFirstImg from "./assets/Rectangle 18.png";
import colSecondImg from "./assets/Rectangle 19.png";
import colThirdImg from "./assets/Rectangle 20.png";
import colFourthImg from "./assets/unsplash_0Zx1bDv5BNY.png";
import { BiBookReader } from "react-icons/bi";
import { RiPriceTag3Line } from "react-icons/ri";
import { LiaCertificateSolid } from "react-icons/lia";
import { ImBooks } from "react-icons/im";
import { BsChatDots } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { MdPlayArrow } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";
import { PiCodeSimpleFill } from "react-icons/pi";
import { HiSpeakerphone } from "react-icons/hi";
import { HiCreditCard } from "react-icons/hi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Container, Row, Col, Button } from "react-bootstrap";
import leftPostImg from "./assets/Rectangle 4584.png";
import profile1 from "./assets/profileImg1.png";
import profile2 from "./assets/profileImg2.png";
import profile3 from "./assets/profileImg3.jpg";
import profile4 from "./assets/profileImg4.png";
import Footer from "./Footer";


function Home() {
  return (
    <div>
      <Container>
        <span className="b1 text-success">
          <HiOutlineBookOpen />
        </span>
        <span className="b2 text-success">
          <HiOutlineBookOpen />
        </span>
        <span className="b3 text-success">
          <HiOutlineBookOpen />
        </span>
        
        <div className="mt-5">
          <Row className="Home_top">
            
            <Col md={6} style={{ marginTop: "150px" }} className="left_content">
              <span className="round_orenge"></span>

              <h2 className="fw-bolder">Build Your Career with Senchola</h2>
              <p className="lf_para mt-3">
                Welcome to Lagos High School where raising self
                <br />
                reliant and god-fearing children is our goal
              </p>
              <Button className="btn mt-2 bg-success">LEARN MORE</Button>
              <span className="round_pink"></span>
            </Col>
            
            <span style={{ width: "70px" }} className="round_green1"></span>
            <span
              style={{ width: "620px" }}
              className="round_lightOrange"
            ></span>

            
            <Col md={6} className="right_img">
              <img
                src={firstImg}
                alt=""
                className="img-fluid mt-5 w-50"
                height="500px"
              />
            </Col>
          </Row>
        </div>

        
        <div>
          <h3
            style={{ marginTop: "100px" }}
            className="fw-bold text-center text-success"
          >
            EXPLORE OUR PROGRAM
          </h3>
          <div
            style={{ gap: "120px", marginLeft: "60px" }}
            className="explore_pr row row-cols-4 mt-5"
          >
            
            <Col
              md={3}
              className="explore_content d-flex flex-column align-items-center"
            >
              <div className="explore_icons text-success">
                <BiBookReader style={{ marginLeft: "25%", marginTop: "20%" }} />
              </div>

              <h6 className="fw-bolder mt-3">Programs</h6>
              <p style={{ width: "400px", marginTop: "15px" }} className="text-center">
                We offer junior and senior
                <br />
                secondary school programs...
              </p>
              <p className="text-success fw-semibold">SEE MORE &gt;</p>
            </Col>
            
            <Col
              md={3}
              className="explore_content d-flex flex-column align-items-center"
            >
              <div className="explore_icons text-success">
                <RiPriceTag3Line
                  style={{ marginLeft: "25%", marginTop: "20%" }}
                />
              </div>

              <h6 className="fw-bolder mt-3">Pricing</h6>
              <p style={{ width: "400px", marginTop: "15px" }} className=" text-center">
                Our price differ for various classes
                <br />
                and also based on if students are...
              </p>
              <p className="text-success fw-semibold">SEE MORE &gt;</p>
            </Col>

            
            <Col
              md={3}
              className="explore_content d-flex flex-column align-items-center"
            >
              <div className="explore_icons text-success">
                <LiaCertificateSolid
                  style={{ marginLeft: "25%", marginTop: "20%" }}
                />
              </div>

              <h6 className="fw-bolder mt-3">Certifications</h6>
              <p style={{ width: "400px", marginTop: "15px" }} className="text-center">
                Upon leaving the junior secondary,
                <br />
                our student obtain the junior...
              </p>
              <p className="text-success fw-semibold">SEE MORE &gt;</p>
            </Col>
          </div>
        </div>
      </Container>

      
      <div
        style={{ marginTop: "250px", height: "583px" }}
        className="third_page"
      >
        <Container>
          
          <span className="b4 text-success">
            <HiOutlineBookOpen />
          </span>
          <span className="b5 text-success">
            <HiOutlineBookOpen />
          </span>
          <span className="b6 text-success">
            <HiOutlineBookOpen />
          </span>
          <span className="b7 text-success">
            <HiOutlineBookOpen />
          </span>
          <span className="b8 text-success">
            <HiOutlineBookOpen />
          </span>
          <span className="b9 text-success">
            <HiOutlineBookOpen />
          </span>
        
          
          <Row className="d-flex  align-items-center">
            <Col style={{ marginBottom: "100px" }}>
              <h3 className="fw-semibold">
                Expert Talent with <br />
                Curated Resources <br />& Support
              </h3>
              <p>
                We have the best facilities to ensure that
                <br />
                students have the best experience while
                <br />
                learning.We believe that practicals helps in <br />
                fast learning
              </p>
              <Button
                style={{ marginLeft: "0px", border: "none", width: "150px" }}
                className="Home_third_btn bg-success "
              >
                SEE MORE
              </Button>
            </Col>
           
            <Col md={6} className="four_cards row row-cols-2 right content">
              <Col
                md={6}
                style={{ width: "50%", marginTop: "83px" }}
                className="firstC_col"
              >
                
                <div className="small_box bg-success">
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      position: "relative",
                      top: "25px",
                      left: "25px",
                    }}
                    className=" text-success"
                  >
                    <ImBooks
                      className="circle"
                      style={{
                        marginLeft: "22%",
                        marginTop: "20%",
                        fontSize: "60px",
                      }}
                    />
                  </div>
                  <h6 className="text-white mt-5 ms-4">Good Infrastructure</h6>
                  <p
                    style={{ fontSize: "10px", color: "white" }}
                    className="text-light mt-3 ms-4"
                  >
                    Lorem ipsum dolor sit amet <br />
                    consectetur. Vivamus arcu sit viverra <br />
                    iaculis non lectus. Ultrices pretium eget
                    <br />
                    posuere eget
                  </p>
                </div>
                
                <div className="small_box  bg-light ">
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: "rgb(157, 216, 210)",
                      borderRadius: "50%",
                      position: "relative",
                      top: "25px",
                      left: "25px",
                    }}
                    className=" text-success"
                  >
                    <MdBusinessCenter
                      style={{
                        marginLeft: "26%",
                        marginTop: "25%",
                        fontSize: "48px",
                      }}
                    />
                  </div>
                  <h6 className="text-dark mt-5 ms-4 fw-semibold ">Business</h6>
                  <p
                    style={{ fontSize: "10px", color: "black" }}
                    className="mt-3 ms-4"
                  >
                    Lorem ipsum dolor sit amet consectetur. Vivamus arcu sit
                    viverra iaculis non lectus. Ultrices pretium eget posuere
                    eget
                  </p>
                </div>
              </Col>

              <Col
                md={6}
                style={{ marginTop: "-154px" }}
                className="secondC_col"
              >
                
                <div className="small_box bg-light">
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: "rgb(251, 231, 98)",
                      borderRadius: "50%",
                      position: "relative",
                      top: "25px",
                      left: "25px",
                    }}
                    className=" text-success"
                  >
                    <MdOutlineComputer
                      style={{
                        marginLeft: "22%",
                        marginTop: "25%",
                        fontSize: "55px",
                      }}
                    />
                  </div>
                  <h6 className="text-dark mt-5 ms-4 fw-semibold">
                    Best Support Team
                  </h6>
                  <p
                    style={{ fontSize: "10px ", color: "black" }}
                    className="mt-3 ms-4"
                  >
                    Lorem ipsum dolor sit amet <br />
                    consectetur. Vivamus arcu sit viverra <br />
                    iaculis non lectus. Ultrices pretium eget
                    <br />
                    posuere eget
                  </p>
                </div>
                <div className="small_box bg-light">
                  
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: "rgb(109, 154, 196)",
                      borderRadius: "50%",
                      position: "relative",
                      top: "25px",
                      left: "25px",
                    }}
                    className=" text-light"
                  >
                    <BsChatDots
                      style={{
                        marginLeft: "22%",
                        marginTop: "20%",
                        fontSize: "57px",
                      }}
                    />
                  </div>
                  <h6 className="text-dark fw-semibold mt-5 ms-4">
                    Senchola Managed
                  </h6>
                  <p
                    style={{ fontSize: "10px", color: "black" }}
                    className="mt-3 ms-4"
                  >
                    Lorem ipsum dolor sit amet <br />
                    consectetur. Vivamus arcu sit viverra <br />
                    iaculis non lectus. Ultrices pretium eget
                    <br />
                    posuere eget
                  </p>
                </div>
              </Col>
            </Col>
          </Row>
        </Container>

        
        <Container style={{ marginLeft: "8rem" }}>
          <span style={{ width: "85px" }} className="light_orange2"></span>
          <span className="light_blue2"></span>
          <Row className="d-flex justify-content-center align-items-center  mt-5">
            <Col md={6}>
              <div style={{ position: "relative" }} className="">
                <img
                  style={{
                    width: "370px",
                    height: "420px",
                  }}
                  src={leftPostImg}
                  alt=""
                ></img>
                <div
                  style={{
                    width: "170px",
                    height: "150px",
                    position: "absolute",
                    top: "205px",
                    left: "260px",
                    border: "none",
                    borderRadius: "10px",
                    backdropFilter: "blur(5px)",
                    boxShadow: "0 3px 8px rgb(0 0 0 / 0.5)",
                  }}
                >
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "rgb(255, 249, 233)",
                      borderRadius: "50%",
                    }}
                    className="mt-3 ms-3 "
                  >
                    <HiCreditCard
                      style={{ color: "rgb(255, 185, 1)" }}
                      className="ms-2 mt-1 "
                    />
                    <div
                      style={{
                        fontSize: "8px",
                        marginLeft: "40px",
                        marginTop: "-25px",
                      }}
                    >
                      <p style={{ whiteSpace: "nowrap" }}>5 Courses</p>
                      <h6
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          marginTop: "-15px",
                        }}
                        className="fw-bolder"
                      >
                        UI/UX Design
                      </h6>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "rgb(252, 239, 255)",
                      borderRadius: "50%",
                    }}
                    className="mt-3 ms-3 "
                  >
                    <PiCodeSimpleFill
                      style={{ color: "rgb(161, 63, 184)" }}
                      className="ms-2 mt-1 "
                    />
                    <div
                      style={{
                        fontSize: "8px",
                        marginLeft: "40px",
                        marginTop: "-25px",
                      }}
                    >
                      <p style={{ whiteSpace: "nowrap" }}>10 Courses</p>
                      <h6
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          marginTop: "-15px",
                        }}
                        className="fw-bolder"
                      >
                        Developement
                      </h6>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "rgb(236, 234, 255)",
                      borderRadius: "50%",
                    }}
                    className="mt-3 ms-3 "
                  >
                    <HiSpeakerphone
                      style={{ color: "rgb(93, 81, 229)" }}
                      className="ms-2 mt-1 "
                    />
                    <div
                      style={{
                        fontSize: "8px",
                        marginLeft: "40px",
                        marginTop: "-25px",
                      }}
                    >
                      <p style={{ whiteSpace: "nowrap" }}>4 Courses</p>
                      <h6
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          marginTop: "-15px",
                        }}
                        className="fw-bolder"
                      >
                        Marketing
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <h4 className=" fw-bolder">
                Learn without limits and spread knowledge.
              </h4>
              <p className="mt-4">
                Build new skills for that "this is my year" feeling with ourses,
                certificates, and degrees from world-class company like
                Senchola.
              </p>

              <Row className="mt-4 ">
                <button
                  style={{ width: "150px", border: "none" }}
                  className="bg-success text-light p-3  rounded-5 "
                >
                  See courses
                </button>
                <div
                  style={{
                    width: "35px",
                    height: "35px",
                    border: "none",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    boxShadow: "0 3px 5px rgb(0 0 0 / 0.5)",
                  }}
                  className="bg-light ms-5 mt-2"
                >
                  <MdPlayArrow
                    style={{ marginLeft: "-2px" }}
                    className="text-success  mt-2"
                  />
                </div>
                <p
                  style={{ marginLeft: "230px", marginTop: "-43px" }}
                  className=" fw-semibold "
                >
                  Watch Video
                </p>
              </Row>
              <p className="mt-5">Recent engagement</p>
              <Row>
                <div className="d-flex">
                  <h3 className="fw-bolder">200+</h3>
                  <p className="ms-2 mt-2">Students</p>
                  <h3 className="fw-bolder ms-5">6+</h3>
                  <p className="ms-2 mt-2">Courses</p>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
        <span className="light_orange3"></span>
        <span className="light_green1"></span>
        
        <Container style={{ marginTop: "100px" }}>
          <div>
            <h3 className="text-success fw-semibold text-center">
              OUR GALLERY
            </h3>
          </div>
          <Row style={{ marginTop: "60px" }}>
            <Col>
              <img
                style={{ height: "380px", width: "400px" }}
                src={colFirstImg}
                alt=""
              ></img>
            </Col>
            <Col>
              <Row style={{ height: "180px" }} className="">
                <img src={colSecondImg} alt=""></img>
              </Row>
              <Row style={{ height: "180px" }} className="mt-4  ">
                <img src={colThirdImg} alt=""></img>
              </Row>
            </Col>
            <Col>
              <img
                style={{ height: "380px", width: "400px" }}
                src={colFourthImg}
                alt=""
              ></img>
            </Col>
          </Row>
        </Container>

        
        <Container className="pb-5">
          <span className="light_orange4"></span>
          <span className="light_voilet "></span>

          <h3
            style={{ marginTop: "100px", letterSpacing: "2px" }}
            className="text-success fw-semibold text-center"
          >
            TESTIMONIALS
          </h3>
          <p style={{ fontSize: "13px" }} className="text-center fw-bold ">
            What people say about us
          </p>
          <Row style={{ marginTop: "60px" }}>
            <Col className="fifth_boxes">
              <div className="mt-3 ms-3">
                <div style={{ color: "rgb(255, 213, 95)" }}>
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
                <p className="text-dark mt-2 box_para">
                  Lorem ipsum dolor sit amet consectetur. Proin pellentesque
                  adipiscing auctor ipsum consequat egestas. Volutpat quam
                  tortor facilisis vel id ipsum commodo
                </p>
                <img
                  style={{ width: "50px" }}
                  src={profile1}
                  alt=""
                  className=" mt-1 rounded-5"
                ></img>
                <span className="ms-3 fw-semibold">Alman Kesan</span>
                <div
                  style={{
                    marginLeft: "66px",
                    marginTop: "-20px",
                    fontSize: "10px",
                    paddingTop: "10px"
                  }}
                >
                  UI/UX Desiner
                </div>
              </div>
            </Col>
            <Col className="fifth_boxes">
              <div className="mt-3 ms-3">
                <div style={{ color: "rgb(255, 213, 95)" }}>
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
                <p className=" mt-2 box_para ">
                  Lorem ipsum dolor sit amet consectetur. Proin pellentesque
                  adipiscing auctor ipsum consequat egestas. Volutpat quam
                  tortor facilisis vel id ipsum commodo
                </p>
                <img
                  style={{ width: "50px" }}
                  src={profile2}
                  alt=""
                  className=" mt-1 rounded-5"
                ></img>
                <span className="ms-3 fw-semibold">Elveny Petun</span>
                <div
                  style={{
                    marginLeft: "66px",
                    marginTop: "-20px",
                    fontSize: "10px",
                    paddingTop: "10px"
                  }}
                >
                  Web Developer
                </div>
              </div>
            </Col>
            <Col className="fifth_boxes">
              <div className="mt-3 ms-3">
                <div style={{ color: "rgb(255, 213, 95)" }}>
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
                <p className=" mt-2 box_para">
                  Lorem ipsum dolor sit amet consectetur. Proin pellentesque
                  adipiscing auctor ipsum consequat egestas. Volutpat quam
                  tortor facilisis vel id ipsum commodo
                </p>
                <img
                  style={{ width: "50px" }}
                  src={profile3}
                  alt=""
                  className=" mt-1 rounded-5"
                ></img>
                <span className="ms-3 fw-semibold">Janney Jacksen</span>
                <div
                  style={{
                    marginLeft: "66px",
                    marginTop: "-20px",
                    fontSize: "10px",
                    paddingTop: "10px"
                  }}
                >
                  App Developer
                </div>
              </div>
            </Col>
            <Col className="fifth_boxes">
              <div className="mt-3 ms-3">
                <div style={{ color: "rgb(255, 213, 95)" }}>
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
                <p className=" mt-2 box_para">
                  Lorem ipsum dolor sit amet consectetur. Proin pellentesque
                  adipiscing auctor ipsum consequat egestas. Volutpat quam
                  tortor facilisis vel id ipsum commodo
                </p>
                <img
                  style={{ width: "50px" }}
                  src={profile4}
                  alt=""
                  className=" mt-1 rounded-5"
                ></img>
                <span className="ms-3 fw-semibold">Klessen Amy</span>
                <div
                  style={{
                    marginLeft: "70px",
                    marginTop: "-20px",
                    fontSize: "10px",
                    paddingTop: "10px"
                  }}
                >
                  Flutter Developer
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;