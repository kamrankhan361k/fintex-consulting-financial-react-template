import Link from "next/link";
import Slider from "react-slick";
import Layout from "../src/layout/Layout";
import {
  partnerSliderOne,
  projectsSliderTwo,
  testimonialSliderThree,
} from "../src/sliderProps";
const Index5 = () => {
  return (
    <Layout header={5} footer={5} extraBodyCls="home-five">
      <section className="banner-five p-r z-1">
        <div className="pattern-shape">
          <img src="assets/images/shape/pattern-3.png" alt="Pattern Shape" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero-content">
                <span className="tag-line wow fadeInUp" data-wow-delay=".3s">
                  Marketing Agency
                </span>
                <h1 className="wow fadeInDown" data-wow-delay=".5s">
                  We’re Quality Digital Marketing Agency
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".7s">
                  Sed ut perspiciat omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperia inventore
                  veritatis quasi architecto beatae
                </p>
                <div
                  className="hero-button wow fadeInDown"
                  data-wow-delay=".9s"
                >
                  <Link legacyBehavior href="/about">
                    <a className="main-btn btn-orange">Explore More</a>
                  </Link>
                  <a
                    href="https://www.youtube.com/watch?v=TboWOSW7qCI"
                    className="hero-video-popup video-popup"
                  >
                    <i className="fas fa-play" />
                    <span>How IT Works</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-img-box p-r z-1">
                <img
                  src="assets/images/hero/hero-five-1.png"
                  className="wow fadeInRight"
                  data-wow-delay=".5s"
                  alt="Hero Image"
                />
                <div
                  className="shape square-shape wow fadeInRight"
                  data-wow-delay="1s"
                />
                <div className="shape border-circle" />
                <div className="shape dot-shape1 animate-float-x" />
                <div className="shape dot-shape2 animate-float-y" />
                <div className="shape dot-shape3 animate-float-x" />
                <div className="shape dot-shape4 animate-float-y" />
                <div
                  className="features-fancy-box wow fadeInLeft animate-float-y"
                  data-wow-delay=".3s"
                >
                  <h5>Marketing Strategy</h5>
                  <div className="fancy-circle">
                    <span className="span1" />
                    <span className="span2" />
                    <span className="span3" />
                  </div>
                  <ul>
                    <li>
                      <i className="fas fa-check-square" />
                      85% Business Growth
                    </li>
                    <li>
                      <i className="fas fa-check-square" />
                      76% Marketing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Banner Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section-five p-r z-1 pb-100">
        <div className="svg-shape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              fillRule="evenodd"
              d="M0.000,70.000 C0.000,70.000 73.639,41.416 99.000,31.000 C124.361,20.584 184.801,-12.677 273.000,5.999 C295.491,10.706 345.395,21.222 404.000,68.999 C462.605,116.777 512.689,168.782 565.000,170.000 C576.687,169.078 608.529,162.221 628.000,137.000 C649.123,113.016 688.397,54.613 779.000,82.000 C786.908,85.000 836.518,97.513 907.000,176.000 C931.894,202.535 1013.315,298.251 1097.000,263.999 C1114.699,255.845 1134.897,244.234 1149.000,233.999 C1163.103,223.765 1196.091,198.955 1205.000,193.000 C1213.909,187.044 1296.854,117.568 1455.000,172.999 C1469.420,178.837 1507.670,193.177 1563.000,234.999 C1585.635,248.514 1630.685,286.249 1708.000,279.999 C1717.915,278.737 1755.379,272.022 1786.000,243.000 C1816.621,213.978 1838.252,183.133 1852.000,165.999 C1865.747,148.866 1893.054,117.132 1920.000,107.000 C1920.396,134.705 1920.000,1050.999 1920.000,1050.999 L0.000,1050.999 L0.000,70.000 Z"
            />
          </svg>
        </div>
        <div className="container">
          <div className="partner-wrapper-one pt-80 pb-80 wow fadeInDown">
            {/*=== Partner Slider ===*/}
            <Slider {...partnerSliderOne} className="partner-slider-one">
              <div className="partner-item">
                <div className="partner-img">
                  <a href="#">
                    <img
                      src="assets/images/partners/logo-19.png"
                      alt="Partner Image"
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <a href="#">
                    <img
                      src="assets/images/partners/logo-20.png"
                      alt="Partner Image"
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <a href="#">
                    <img
                      src="assets/images/partners/logo-21.png"
                      alt="Partner Image"
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <a href="#">
                    <img
                      src="assets/images/partners/logo-22.png"
                      alt="Partner Image"
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <a href="#">
                    <img
                      src="assets/images/partners/logo-23.png"
                      alt="Partner Image"
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <a href="#">
                    <img
                      src="assets/images/partners/logo-24.png"
                      alt="Partner Image"
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <a href="#">
                    <img
                      src="assets/images/partners/logo-23.png"
                      alt="Partner Image"
                    />
                  </a>
                </div>
              </div>
            </Slider>
          </div>
          <div className="about-wrapper pt-130">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-seven_image-box mb-50 p-r z-1 text-center mr-lg-70">
                  <img
                    src="assets/images/about/about-9.png"
                    className="about-img-one wow fadeInLeft"
                    alt="About Image"
                  />
                  <img
                    src="assets/images/about/avatar-2.png"
                    className="about-img-two wow fadeInUp animate-float-y"
                    alt="About Image"
                  />
                  <div className="shape shape-border1">
                    <span />
                  </div>
                  <div className="shape shape-border2 wow fadeInLeft animate-float-x">
                    <span />
                  </div>
                  <div className="shape dot-shape1 animate-float-x">
                    <span />
                  </div>
                  <div className="shape dot-shape2 animate-float-y">
                    <span />
                  </div>
                  <div className="shape dot-shape3 animate-float-x">
                    <span />
                  </div>
                  <div className="shape dot-shape4 animate-float-y">
                    <span />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content-box content-box-gap mb-50">
                  <div className="section-title section-title-left wow fadeInDown">
                    <span className="sub-title">Who We Are</span>
                    <h2>Marketing For Growth Business Strategy</h2>
                  </div>
                  <p>
                    On the other hand we denounce with righteous indignation
                    dislike men who beguiled and demoralized by the charmso
                    pleasure of the moments blinded by desire that they cannesee
                    the trouble bound
                  </p>
                  <div className="about-wrap-box wow fadeInUp">
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <div className="about-box-item">
                          <div className="icon">
                            <i
                              className="flaticon-target-1"
                              style={{ color: "#fb5850" }}
                            />
                          </div>
                          <div className="text">
                            <h5>356+ Team Members</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="about-box-item">
                          <div className="icon">
                            <i
                              className="flaticon-customer-service"
                              style={{ color: "#007eff" }}
                            />
                          </div>
                          <div className="text">
                            <h5>100% Clients Saticfaction</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="about-box-item">
                          <div className="icon">
                            <i
                              className="flaticon-food"
                              style={{ color: "#48bb0f" }}
                            />
                          </div>
                          <div className="text">
                            <h5>853+ Cup OF Coffee</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section-two pt-115">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">What We Offer</span>
                <h2>Amazing Services to Help People &amp; Small Business</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div className="features-item-five animate-hover-icon mb-40 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-friend" style={{ color: "#fb5850" }} />
                </div>
                <div className="text">
                  <h5 className="title">Pro Consulting</h5>
                  <p>On the other hand denoune with righteo indignation</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div className="features-item-five animate-hover-icon mb-40 wow fadeInUp">
                <div className="icon">
                  <i
                    className="flaticon-problem-solving"
                    style={{ color: "#007ff4" }}
                  />
                </div>
                <div className="text">
                  <h5 className="title">Pro Consulting</h5>
                  <p>On the other hand denoune with righteo indignation</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div className="features-item-five animate-hover-icon mb-40 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-profit" style={{ color: "#48bb0f" }} />
                </div>
                <div className="text">
                  <h5 className="title">Marketing Strategy</h5>
                  <p>On the other hand denoune with righteo indignation</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div className="features-item-five animate-hover-icon mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-target" style={{ color: "#0fbbb4" }} />
                </div>
                <div className="text">
                  <h5 className="title">Business Goals</h5>
                  <p>On the other hand denoune with righteo indignation</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Benefits Section ======*/}
      <section className="benefits-section pt-85">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="benefits-content-box content-box-gap wow fadeInLeft mb-50">
                <div className="section-title section-title-left">
                  <span className="sub-title">How to Benefits</span>
                  <h2>Advantages Of Starting Your Own Business</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accutium doloremque laudantium totam rem aperiam eaque quae
                  abillo inventore veritatis et quasi architecto beatae vitae
                  dicta explicabo
                </p>
                <ul className="check-style-two">
                  <li>Best Agency For Grow your Business</li>
                  <li>Marketing Strategy Guide</li>
                  <li>Benefits For SEO &amp; Marketing</li>
                </ul>
                <Link legacyBehavior href="/about">
                  <a className="main-btn btn-orange">Get Started Us</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="benefits-image-box p-r z-1 mb-50">
                <img
                  src="assets/images/gallery/benefit-1.jpg"
                  className="benefit-img-one wow fadeInDown animate-float-x"
                  alt="Image"
                />
                <img
                  src="assets/images/gallery/benefit-2.jpg"
                  className="benefit-img-two wow fadeInLeft animate-float-y"
                  alt="Image"
                />
                <img
                  src="assets/images/gallery/benefit-3.jpg"
                  className="benefit-img-three wow fadeInUp animate-float-y"
                  alt="Image"
                />
                <div className="shape circle-shape">
                  <span />
                </div>
                <div className="shape border-circle">
                  <span />
                </div>
                <div className="dot-shape dot-shape1 animate-float-x">
                  <span />
                </div>
                <div className="dot-shape dot-shape2 animate-float-y">
                  <span />
                </div>
                <div className="dot-shape dot-shape3 animate-float-x">
                  <span />
                </div>
                <div className="dot-shape dot-shape4 animate-float-y">
                  <span />
                </div>
                <div className="dot-shape dot-shape5 animate-float-x">
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Benefits Section ======*/}
      {/*====== Start Project Section ======*/}
      <section className="project-section pt-75 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Latest Works</span>
                <h2>Take a Look Our Recent Works</h2>
              </div>
            </div>
          </div>
          <Slider
            {...projectsSliderTwo}
            className="projects-slider-two wow fadeInUp"
          >
            <div className="project-item-five mb-60">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-29.jpg"
                  alt="Project Image"
                />
              </div>
              <div className="project-content text-center">
                <h3 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Idea &amp; Planning</a>
                  </Link>
                </h3>
              </div>
            </div>
            <div className="project-item-five mb-60">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-30.jpg"
                  alt="Project Image"
                />
              </div>
              <div className="project-content text-center">
                <h3 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Business Strategy</a>
                  </Link>
                </h3>
              </div>
            </div>
            <div className="project-item-five mb-60">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-31.jpg"
                  alt="Project Image"
                />
              </div>
              <div className="project-content text-center">
                <h3 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Virtual Reality</a>
                  </Link>
                </h3>
              </div>
            </div>
            <div className="project-item-five mb-60">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-30.jpg"
                  alt="Project Image"
                />
              </div>
              <div className="project-content text-center">
                <h3 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Business Strategy</a>
                  </Link>
                </h3>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Project Section ======*/}
      {/*====== Start Team Section ======*/}
      <section className="team-section bg-color-three pt-125 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Team Member</span>
                <h2>Experience Team Member</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div className="single-team-item-three mb-40 wow fadeInDown">
                <div className="img-holder">
                  <img
                    src="assets/images/team/team-14.jpg"
                    alt="Member Image"
                  />
                  <div className="social-box">
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/team-details">
                      <a>Robert C. Simmons</a>
                    </Link>
                  </h3>
                  <p className="position">SR Manager</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div className="single-team-item-three mb-40 wow fadeInUp">
                <div className="img-holder">
                  <img
                    src="assets/images/team/team-15.jpg"
                    alt="Member Image"
                  />
                  <div className="social-box">
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/team-details">
                      <a>Christ L. Wagner</a>
                    </Link>
                  </h3>
                  <p className="position">Web Manager</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div className="single-team-item-three mb-40 wow fadeInDown">
                <div className="img-holder">
                  <img
                    src="assets/images/team/team-16.jpg"
                    alt="Member Image"
                  />
                  <div className="social-box">
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/team-details">
                      <a>Stephen J. Daniels</a>
                    </Link>
                  </h3>
                  <p className="position">Junior Engineer</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div className="single-team-item-three mb-40 wow fadeInUp">
                <div className="img-holder">
                  <img
                    src="assets/images/team/team-17.jpg"
                    alt="Member Image"
                  />
                  <div className="social-box">
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/team-details">
                      <a>Joseph H. Jones</a>
                    </Link>
                  </h3>
                  <p className="position">SR Developer</p>
                </div>
              </div>
            </div>
          </div>
          {/*====== End Team  ======*/}
          {/*====== Start Process  ======*/}
          <div className="process-section pt-90">
            <div className="row">
              <div className="col-lg-6">
                <div className="process-image-box p-r z-1">
                  <img
                    src="assets/images/gallery/process-1.jpg"
                    className="process-img-one wow fadeInLeft"
                    alt="Process Image"
                  />
                  <img
                    src="assets/images/gallery/process-2.jpg"
                    className="process-img-two wow fadeInDown animate-float-y"
                    alt="Process Image"
                  />
                  <div className="shape border-circle1">
                    <span />
                  </div>
                  <div className="shape border-circle2 wow fadeInLeft animate-float-x">
                    <span />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="process-content-box pl-lg-30">
                  <div className="section-title section-title-left mb-40 wow fadeInDown">
                    <span className="sub-title">Business Process</span>
                    <h2>Easy Way Build Success your Business Plan</h2>
                  </div>
                  <ul>
                    <li className="process-left-item animate-hover-icon d-flex mb-20 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-problem-solving" />
                      </div>
                      <div className="text">
                        <h4 className="title">Project Research</h4>
                        <p>
                          Sed perspiciatis unde omnis accutium doloremque
                          laudantium totam aperiam eaque quaed
                        </p>
                      </div>
                    </li>
                    <li className="process-left-item animate-hover-icon d-flex mb-20 wow fadeInDown">
                      <div className="icon">
                        <i className="flaticon-problem-solving" />
                      </div>
                      <div className="text">
                        <h4 className="title">Project Wireframe</h4>
                        <p>
                          Quis autem vel eum iure reprehenderit voluptatey velit
                          esse quam molestiae consequaturd
                        </p>
                      </div>
                    </li>
                    <li className="process-left-item animate-hover-icon d-flex mb-20 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-problem-solving" />
                      </div>
                      <div className="text">
                        <h4 className="title">Project Design &amp; Testing</h4>
                        <p>
                          On the other hand denounce righteous indigntion
                          dislike beguiled and demoralized charms
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Team Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      <section className="testimonial-section pt-125 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Our Testimonials</span>
                <h2>What Our Clients Say About Us</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <Slider
                {...testimonialSliderThree}
                className="testimonial-slider-three wow fadeInUp"
              >
                <div className="testimonial-item-five">
                  <div className="row align-items-lg-center">
                    <div className="col-lg-5">
                      <div className="testimonial-img">
                        <img
                          src="assets/images/testimonial/img-1.jpg"
                          alt="Testimonial image"
                        />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="testimonial-content">
                        <img
                          src="assets/images/testimonial/company-logo.png"
                          alt="company logo"
                          className="company-logo"
                        />
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremq dantiume totam rem
                          aperiam eaque quae ab ventore tatis architecto beatae
                          vitae dicta sunt explic nemo enim spsam voluptatem
                          quia voluptas
                        </p>
                        <div className="author-title">
                          <h4>David T. Williams, </h4>
                          <p className="position">Senior Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item-five">
                  <div className="row align-items-lg-center">
                    <div className="col-lg-5">
                      <div className="testimonial-img">
                        <img
                          src="assets/images/testimonial/img-1.jpg"
                          alt="Testimonial image"
                        />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="testimonial-content">
                        <img
                          src="assets/images/testimonial/company-logo.png"
                          alt="company logo"
                          className="company-logo"
                        />
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremq dantiume totam rem
                          aperiam eaque quae ab ventore tatis architecto beatae
                          vitae dicta sunt explic nemo enim spsam voluptatem
                          quia voluptas
                        </p>
                        <div className="author-title">
                          <h4>David T. Williams, </h4>
                          <p className="position">Senior Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item-five">
                  <div className="row align-items-lg-center">
                    <div className="col-lg-5">
                      <div className="testimonial-img">
                        <img
                          src="assets/images/testimonial/img-1.jpg"
                          alt="Testimonial image"
                        />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="testimonial-content">
                        <img
                          src="assets/images/testimonial/company-logo.png"
                          alt="company logo"
                          className="company-logo"
                        />
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremq dantiume totam rem
                          aperiam eaque quae ab ventore tatis architecto beatae
                          vitae dicta sunt explic nemo enim spsam voluptatem
                          quia voluptas
                        </p>
                        <div className="author-title">
                          <h4>David T. Williams, </h4>
                          <p className="position">Senior Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="col-lg-12">
              <div className="testimonial-dots testimonial-dots-green text-center mt-85" />
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="contact-section-three dark-blue-bg p-r z-1 pt-80">
        <div
          className="pattern-bg bg_cover"
          style={{
            backgroundImage: "url(assets/images/shape/pattern-bg-1.png)",
          }}
        />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-content-box content-box-gap text-white wow fadeInLeftmb-50">
                <div className="section-title section-title-left">
                  <span className="sub-title">Need Any Helps</span>
                  <h2>Feel Free to Contact Us! We’re Ready to Help Business</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis natus voluptatem accutium
                  doloremque laudantium totam rem aperiam eaque
                </p>
                <img
                  src="assets/images/contact/img-2.jpg"
                  alt="Contact Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-three_form-box wow fadeInRight">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form_group">
                        <label>Full Name</label>
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Joshua E. Skelton"
                          name="name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          className="form_control"
                          placeholder="support@gmail.com"
                          name="email"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <label>Write Message</label>
                        <textarea
                          className="form_control"
                          placeholder="I would like to"
                          name="message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <button className="main-btn btn-green">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index5;
