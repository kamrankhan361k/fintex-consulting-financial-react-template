import Link from "next/link";
import Slider from "react-slick";
import dynamic from "next/dynamic";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});
import FeedbackSectionChart from "../src/components/FeedbackSectionChart";
import SimpleFaq from "../src/components/SimpleFaq";
import LatestServices from "../src/components/slider/LatestServices";
import Layout from "../src/layout/Layout";
import { partnerSliderOne, projectsSliderOne } from "../src/sliderProps";

const OnePageIndex = () => {
  const singleMenus = [
    { name: "Home", href: "onepage-home" },
    { name: "About", href: "onepage-about" },
    { name: "Services", href: "onepage-service" },
    { name: "Project", href: "onepage-project" },
    { name: "Team", href: "onepage-team" },
    { name: "News", href: "onepage-blog" },
  ];

  return (
    <Layout singleMenus={singleMenus}>
      {/*====== Start Hero Section ======*/}
      <section
        id="onepage-home"
        className="banner-one bg_cover p-r z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-bg-1.jpg)" }}
      >
        <div className="shape shape-one">
          <span>
            <img src="assets/images/hero/hero-one_shape-1.png" alt="" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/hero/circel.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-10">
              {/*=== Hero Content ===*/}
              <div className="hero-content text-white">
                <span className="tag-line wow fadeInDown" data-wow-delay=".5s">
                  Business Agency
                </span>
                <h1 className="wow fadeInUp" data-wow-delay=".7s">
                  We Provide Digital Business Solutions
                </h1>
                <div className="hero-button wow fadeInUp" data-wow-delay=".9s">
                  <Link legacyBehavior href="/about">
                    <a className="main-btn btn-red">Explore More</a>
                  </Link>
                  <Link legacyBehavior href="/services">
                    <a className="main-btn filled-btn filled-white">
                      Our Services
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section-one pt-125 pb-70" id="onepage-about">
        <div className="shape shape-one">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="293px"
              height="849px"
            >
              <path
                fillRule="evenodd"
                fill="rgb(250, 250, 250)"
                d="M292.858,848.283 L45.529,527.037 L183.238,230.105 L0.311,0.959 L292.858,0.959 L292.858,848.283 Z"
              />
            </svg>
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*=== About Content Box ===*/}
              <div className="about-content-box content-box-gap wow fadeInLeft mb-50">
                <div className="section-title section-title-left">
                  <span className="sub-title">About Company</span>
                  <h2>Help to Create Great Business Future </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque
                  abillo inventore veritatis quasi architecto beatae vitae dicta
                  sunt explicabo nemo enim ipsam voluptatem quia.
                </p>
                <Link legacyBehavior href="/about">
                  <a className="btn-link">Learn More Us</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Quote Box One ===*/}
              <div className="quote-box-one ml-lg-70 mb-50">
                <h2>Effective method for disease detection.</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section p-r z-1 pb-85">
        <div className="shape shape-one">
          <span />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              {/*=== FEatures Image Box ===*/}
              <div className="features-one_img-box mb-50">
                <img
                  src="assets/images/features/img-1.jpg"
                  className="features-img-one wow fadeInDown"
                  alt="Features Image"
                />
                <img
                  src="assets/images/features/img-2.jpg"
                  className="features-img-two wow fadeInUp"
                  alt="Features Image"
                />
                <div className="quote-box-two wow fadeInLeft">
                  <h3>Work Hard to Success</h3>
                </div>
                <div className="big-logo wow fadeInRight">
                  <Link legacyBehavior href="/">
                    <a>
                      <img
                        src="assets/images/logo/big-logo-1.png"
                        alt="Site logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {/*=== Features Content Box ===*/}
              <div className="features-one_content-box pl-lg-70 mb-10">
                <div className="section-title section-title-left mb-35 wow fadeInDown">
                  <span className="sub-title">What We Do ?</span>
                  <h2>Easy Way to Success Your Business</h2>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    {/*=== Features Item ===*/}
                    <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-stats" />
                      </div>
                      <div className="text">
                        <h4 className="title">Strategy and Innovation</h4>
                        <p>Natus error sit volupte atem accusa dolore</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/*=== Features Item ===*/}
                    <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-support" />
                      </div>
                      <div className="text">
                        <h4 className="title">Quality Insure Compliance</h4>
                        <p>Natus error sit volupte atem accusa dolore</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/*=== Features Item ===*/}
                    <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-digital-strategy" />
                      </div>
                      <div className="text">
                        <h4 className="title">Sales &amp; Market Research</h4>
                        <p>Natus error sit volupte atem accusa dolore</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/*=== Features Item ===*/}
                    <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-data" />
                      </div>
                      <div className="text">
                        <h4 className="title">Data Analytics Solutions</h4>
                        <p>Natus error sit volupte atem accusa dolore</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Service Section ======*/}
      <section
        id="onepage-service"
        className="service-section bg_cover pt-125 p-r z-1 pb-150"
        style={{ backgroundImage: "url(assets/images/bg/service-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center text-white mb-60 wow fadeInDown">
                <span className="sub-title">Latest Services</span>
                <h2>Amazing Business Services</h2>
              </div>
            </div>
          </div>
          {/*=== Service Slider ===*/}
          <LatestServices />
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Fact Section ======*/}
      <section className="fact-section p-r z-1 pt-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-12">
              {/*=== Fact image box ===*/}
              <div className="fact-img_one-box text-right pr-lg-70 mb-50">
                <div className="quote-box-three text-left wow fadeInLeft z-1">
                  <h3>
                    We Have 25 Years Of Experience in Business Consulting
                    Services
                  </h3>
                  <div className="author-thumb-title d-flex align-items-center">
                    <div className="author-thumb">
                      <img
                        src="assets/images/author-1.jpg"
                        alt="Author Image"
                      />
                    </div>
                    <div className="author-title">
                      <h4 className="title">Joseh G. Coleman</h4>
                      <p className="position">CEO &amp; Founder</p>
                    </div>
                  </div>
                </div>
                <img
                  src="assets/images/gallery/img-1.jpg"
                  className="wow fadeInDown"
                  alt="Fact image"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-12">
              {/*=== Fact content Box ===*/}
              <div className="fact-one_content-box mb-10">
                <div className="section-title section-title-left wow fadeInDown">
                  <span className="sub-title">Who We Are</span>
                  <h2>We’re Committed to Creating Change</h2>
                </div>
                <p className="wow fadeInUp">
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium totam rem apereaque abillo
                  inventore veritatis quasi architecto beatae
                </p>
                <div className="single-counter-item d-flex align-items-center mb-40 wow fadeInDown">
                  <div className="icon">
                    <a href="#">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <div className="text d-flex justify-content-between align-items-center">
                    <h2 className="number">
                      <Counter end={2359} />
                    </h2>
                    <h5>Projects Completed in Last 5 Years</h5>
                  </div>
                </div>
                <div className="single-counter-item d-flex align-items-center mb-40 wow fadeInDown">
                  <div className="icon">
                    <a href="#">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <div className="text d-flex justify-content-between">
                    <h2 className="number">
                      <Counter end={5368} />
                    </h2>
                    <h5>Happy Global Customers Who Trusted Us</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fact Section ======*/}
      {/*====== Start Project Section ======*/}
      <section className="project-section pt-75 pb-100" id="onepage-project">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Latest Project &amp; Case</span>
                <h2>Let’s Looks Our Global Projects</h2>
              </div>
            </div>
          </div>
          {/*=== Project Slider ===*/}
          <Slider {...projectsSliderOne} className="projects-slider-one">
            {/*=== Project Item ===*/}
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-1.jpg"
                  alt="Project Image"
                />
                <div className="project-hover">
                  <div className="hover-content d-flex">
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <div className="icon">
                      <i className="flaticon-finance" />
                    </div>
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Financial Management</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Project Item ===*/}
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-2.jpg"
                  alt="Project Image"
                />
                <div className="project-hover">
                  <div className="hover-content d-flex">
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <div className="icon d-flex">
                      <i className="flaticon-finance" />
                    </div>
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Financial Management</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Project Item ===*/}
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-3.jpg"
                  alt="Project Image"
                />
                <div className="project-hover">
                  <div className="hover-content d-flex">
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <div className="icon">
                      <i className="flaticon-finance" />
                    </div>
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Financial Management</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Project Item ===*/}
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-4.jpg"
                  alt="Project Image"
                />
                <div className="project-hover">
                  <div className="hover-content d-flex">
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <div className="icon">
                      <i className="flaticon-finance" />
                    </div>
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Financial Management</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Project Item ===*/}
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-5.jpg"
                  alt="Project Image"
                />
                <div className="project-hover">
                  <div className="hover-content d-flex">
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <div className="icon">
                      <i className="flaticon-finance" />
                    </div>
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Financial Management</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Project Item ===*/}
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-2.jpg"
                  alt="Project Image"
                />
                <div className="project-hover">
                  <div className="hover-content d-flex">
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <div className="icon">
                      <i className="flaticon-finance" />
                    </div>
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Financial Management</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Project Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section
        className="cta-section bg_cover p-r z-1 pt-70 pb-50"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/*=== Common Heading ===*/}
              <div className="section-title text-white mb-30 wow fadeInLeft">
                <h2>Get Free Consultations! We’re Ready to Work Together</h2>
              </div>
            </div>
            <div className="col-lg-5">
              {/*=== CTA Button ===*/}
              <div className="cta-button float-lg-right mb-30 wow fadeInRight">
                <Link legacyBehavior href="/team">
                  <a className="main-btn btn-white">Get Free Consultations</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Team Section ======*/}
      <section className="team-section pt-125 pb-80" id="onepage-team">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Meet Our Team</span>
                <h2>Experience Team Members</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Team Item ===*/}
              <div
                className="single-team-item mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="img-holder">
                  <img src="assets/images/team/team-1.jpg" alt="Team Image" />
                  <svg
                    className="team-shape"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="213px"
                    height="80px"
                  >
                    <path d="M212.734,79.031 L132.079,12.251 L57.530,49.433 L-0.001,0.042 L-0.001,79.031 L212.734,79.031 Z" />
                  </svg>
                  <span className="share-btn">
                    <i className="far fa-share-alt" />
                  </span>
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
                <div className="text text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/team-details">
                      <a>Robert C. Simmons</a>
                    </Link>
                  </h3>
                  <p className="position">Business Consultant</p>
                  <p className="mail">
                    <i className="far fa-envelope" />
                    <a href="mailto:infomebusniess@gmail.com">
                      infomebusniess@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Team Item ===*/}
              <div
                className="single-team-item mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="img-holder">
                  <img src="assets/images/team/team-2.jpg" alt="Team Image" />
                  <svg
                    className="team-shape"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="213px"
                    height="80px"
                  >
                    <path d="M212.734,79.031 L132.079,12.251 L57.530,49.433 L-0.001,0.042 L-0.001,79.031 L212.734,79.031 Z" />
                  </svg>
                  <span className="share-btn">
                    <i className="far fa-share-alt" />
                  </span>
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
                <div className="text text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/team-details">
                      <a>Christopher L. Wagner</a>
                    </Link>
                  </h3>
                  <p className="position">Senior Manager</p>
                  <p className="mail">
                    <i className="far fa-envelope" />
                    <a href="mailto:infomebusniess@gmail.com">
                      infomebusniess@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Team Item ===*/}
              <div
                className="single-team-item mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="img-holder">
                  <img src="assets/images/team/team-3.jpg" alt="Team Image" />
                  <svg
                    className="team-shape"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="213px"
                    height="80px"
                  >
                    <path d="M212.734,79.031 L132.079,12.251 L57.530,49.433 L-0.001,0.042 L-0.001,79.031 L212.734,79.031 Z" />
                  </svg>
                  <span className="share-btn">
                    <i className="far fa-share-alt" />
                  </span>
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
                <div className="text text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/team-details">
                      <a>Lawrence C. Dickerson</a>
                    </Link>
                  </h3>
                  <p className="position">Financial Consultant</p>
                  <p className="mail">
                    <i className="far fa-envelope" />
                    <a href="mailto:infomebusniess@gmail.com">
                      infomebusniess@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Team Section ======*/}
      {/*====== Start Feedback Section ======*/}
      <section className="feedback-section p-r z-2 pb-130">
        <FeedbackSectionChart />
      </section>
      {/*====== End Feedback Section ======*/}
      {/*====== Start FAQ Section ======*/}
      <section className="faq-section mb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*=== Faq Content Box ===*/}
              <div className="faq-one_content-box mb-50 wow fadeInLeft">
                <div className="section-title section-title-left">
                  <span className="sub-title">Faqs</span>
                  <h2>Have Any Questions ? Question &amp; Answer</h2>
                </div>
                <blockquote>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium totam aperiam
                </blockquote>
                <ul className="check-style-one">
                  <li>Reflection 2022 Desktop Wallpapers Edition</li>
                  <li>Designing A Better Infinite Scroll</li>
                </ul>
                <div className="faq-button">
                  <a href="#" className="main-btn filled-btn">
                    Explore More Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="faq-accordion-one mb-50 wow fadeInRight"
                id="accordionOne"
              >
                <SimpleFaq />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End FAQ Section ======*/}
      {/*====== Start Partners Section ======*/}
      <section className="partners-section dark-black-bg pt-60 pb-60">
        <div className="container">
          {/*=== Partner Slider ===*/}
          <Slider {...partnerSliderOne} className="partner-slider-one">
            <div className="partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partners/logo-1.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partners/logo-2.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partners/logo-3.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partners/logo-4.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partners/logo-5.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partners/logo-6.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partners/logo-3.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Partners Section ======*/}
      {/*====== Start Blog Section ======*/}
      <section className="blog-section pt-120 pb-90 p-r z-1" id="onepage-blog">
        <svg
          className="shape shape-one"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="770px"
          height="287px"
        >
          <path
            fillRule="evenodd"
            opacity="0.039"
            fill="rgb(13, 18, 28)"
            d="M769.184,286.494 L477.558,45.033 L208.005,179.475 L-0.013,0.888 L-0.013,286.494 L769.184,286.494 Z"
          />
        </svg>
        <div className="shape shape-two">
          <span />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Article &amp; News</span>
                <h2>Get Every Single News &amp; Blog</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/*=== Blog Post Item ===*/}
              <div
                className="blog-post-item-one mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="post-thumbnail">
                  <img src="assets/images/blog/img-1.jpg" alt="Blog Image" />
                  <span className="post-date">
                    <a href="#">
                      25<span>Mar</span>
                    </a>
                  </span>
                </div>
                <div className="entry-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <a href="#">Business</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a href="#">Comments (05)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link legacyBehavior href="/blog-details">
                      <a>Guide To Newly Supporte Modern CSS Psedo</a>
                    </Link>
                  </h3>
                  <p>
                    Sit amet consectetur adipiscing elseds do eiusmod tempor
                    incididunt
                  </p>
                  <Link legacyBehavior href="/blog-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/*=== Blog Post Item ===*/}
              <div
                className="blog-post-item-one mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="post-thumbnail">
                  <img src="assets/images/blog/img-2.jpg" alt="Blog Image" />
                  <span className="post-date">
                    <a href="#">
                      25<span>Mar</span>
                    </a>
                  </span>
                </div>
                <div className="entry-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <a href="#">Business</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a href="#">Comments (05)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link legacyBehavior href="/blog-details">
                      <a>DevTools Debugging Tips Shortcuts Chrome</a>
                    </Link>
                  </h3>
                  <p>
                    Sit amet consectetur adipiscing elseds do eiusmod tempor
                    incididunt
                  </p>
                  <Link legacyBehavior href="/blog-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/*=== Blog Post Item ===*/}
              <div
                className="blog-post-item-one mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="post-thumbnail">
                  <img src="assets/images/blog/img-3.jpg" alt="Blog Image" />
                  <span className="post-date">
                    <a href="#">
                      25<span>Mar</span>
                    </a>
                  </span>
                </div>
                <div className="entry-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <a href="#">Business</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a href="#">Comments (05)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link legacyBehavior href="/blog-details">
                      <a>Guide To Newly Supporte Modern CSS Psedo</a>
                    </Link>
                  </h3>
                  <p>
                    Sit amet consectetur adipiscing elseds do eiusmod tempor
                    incididunt
                  </p>
                  <Link legacyBehavior href="/blog-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Blog Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <section className="newsletter-section black-bg pt-50 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-12">
              {/*=== Common Heading ===*/}
              <div className="section-title section-title-white wow fadeInLeft">
                <h2>Subscribe Our Newsletter to Get More Updates</h2>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12">
              {/*=== Newsletter Item ===*/}
              <div className="newsletter-from wow fadeInRight">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Enter Email Address"
                          name="email"
                        />
                        <i className="far fa-envelope" />
                      </div>
                      <div className="form_checkbox">
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="check1"
                          defaultChecked=""
                        />
                        <label htmlFor="check1">
                          <span>
                            I agree to the <a href="#"> Privacy Policy</a>.
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-button float-lg-right">
                        <button className="main-btn btn-red">
                          Subscribe Now
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
export default OnePageIndex;
