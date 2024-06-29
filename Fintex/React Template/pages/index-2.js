import Link from "next/link";
import Slider from "react-slick";
import Index2Accordion from "../src/components/Index2Accordion";
import PartnerSlider2 from "../src/components/PartnerSlider2";
import ProgressBar from "../src/components/ProgressBar";
import LatestServices from "../src/components/slider/LatestServices";
import Layout from "../src/layout/Layout";
import {
  heroSliderOne,
  projectsSliderTwo,
  testimonialSliderThree,
} from "../src/sliderProps";
const Index = () => {
  return (
    <Layout header={2} footer={2} extraBodyCls="home-two">
      {/*====== Start Hero Section ======*/}
      <section className="banner-two">
        {/*=== Hero Slider ===*/}
        <Slider {...heroSliderOne} className="hero-slider-one">
          {/*=== Single Slider ===*/}
          <div className="single-slider">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero-two-slider-1.jpg)",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-10">
                  {/*=== Hero Content ===*/}
                  <div className="hero-content text-white">
                    <span
                      className="shape-bg"
                      data-animation="fadeInLeft"
                      data-delay=".8s"
                    />
                    <span
                      className="tag-line"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      Business Agency
                    </span>
                    <h1 data-animation="fadeInDown" data-delay=".6s">
                      Investment Solutions
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInUp"
                      data-delay=".8s"
                    >
                      <Link legacyBehavior href="/about">
                        <a className="main-btn btn-white">Explore More</a>
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
          </div>
          {/*=== Single Slider ===*/}
          <div className="single-slider">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero-two-slider-2.jpg)",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-10">
                  {/*=== Hero Content ===*/}
                  <div className="hero-content text-white">
                    <span
                      className="shape-bg"
                      data-animation="fadeInLeft"
                      data-delay=".8s"
                    />
                    <span
                      className="tag-line"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      Business Agency
                    </span>
                    <h1 data-animation="fadeInDown" data-delay=".6s">
                      Digital Business Solutions
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInUp"
                      data-delay=".8s"
                    >
                      <Link legacyBehavior href="/about">
                        <a className="main-btn btn-white">Explore More</a>
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
          </div>
          {/*=== Single Slider ===*/}
          <div className="single-slider">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero-two-slider-3.jpg)",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-10">
                  {/*=== Hero Content ===*/}
                  <div className="hero-content text-white">
                    <span
                      className="shape-bg"
                      data-animation="fadeInLeft"
                      data-delay=".8s"
                    />
                    <span
                      className="tag-line"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      Business Agency
                    </span>
                    <h1 data-animation="fadeInDown" data-delay=".6s">
                      Investment Solutions
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInUp"
                      data-delay=".8s"
                    >
                      <Link legacyBehavior href="/about">
                        <a className="main-btn btn-white">Explore More</a>
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
          </div>
        </Slider>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Features  Section ======*/}
      <section className="features-section pt-130 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">What We Offer</span>
                <h2>We Help People &amp; Small Business</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              {/*=== Features Item ===*/}
              <div
                className="features-item-two mb-30 d-flex align-items-center wow fadeInUp"
                data-wow-delay=".2s"
              >
                <span className="number">01.</span>
                <div className="icon">
                  <i className="flaticon-pie-chart-1" />
                </div>
                <div className="text">
                  <h3 className="title">Direct Involvement in Assets</h3>
                </div>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {/*=== Features Item ===*/}
              <div
                className="features-item-two mb-30 d-flex align-items-center wow fadeInUp"
                data-wow-delay=".3s"
              >
                <span className="number">02.</span>
                <div className="icon">
                  <i className="flaticon-pie-chart-1" />
                </div>
                <div className="text">
                  <h3 className="title">Rich Experience and Wide Expertise</h3>
                </div>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {/*=== Features Item ===*/}
              <div
                className="features-item-two mb-30 d-flex align-items-center wow fadeInUp"
                data-wow-delay=".4s"
              >
                <span className="number">03.</span>
                <div className="icon">
                  <i className="flaticon-pie-chart-1" />
                </div>
                <div className="text">
                  <h3 className="title">Openness and Transparency Solutions</h3>
                </div>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {/*=== Features Item ===*/}
              <div
                className="features-item-two mb-30 d-flex align-items-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span className="number">04.</span>
                <div className="icon">
                  <i className="flaticon-pie-chart-1" />
                </div>
                <div className="text">
                  <h3 className="title">
                    Co-investments Solutions and Planning
                  </h3>
                </div>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-area pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*=== About Image Box ===*/}
              <div className="about-five_image-box mb-30">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="assets/images/about/about-4.jpg"
                      className="about-img-one mb-20 wow fadeInUp"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/images/about/about-5.jpg"
                      className="about-img-two mb-20 wow fadeInDown"
                      alt=""
                    />
                  </div>
                </div>
                <div className="big-logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img src="assets/images/logo/big-logo-3.jpg" alt="" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== About Content Box ===*/}
              <div className="about-two_content-box content-box-gap mb-50 wow fadeInRight">
                <div className="section-title section-title-left">
                  <span className="sub-title">About Company</span>
                  <h2>Best Investment Solutions For Growth </h2>
                </div>
                <p>
                  On the other hand we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charmso
                  pleasure of the moment so blinded by desire that they cannesee
                  the pain and trouble that are bound to ensue{" "}
                </p>
                <ul className="check-style-two">
                  <li>Portfolio Diversification</li>
                  <li>Capital Protection</li>
                  <li>Volatility Protection</li>
                  <li>Inflation Protection</li>
                </ul>
                <div className="avatar-box d-flex">
                  <div className="thumb">
                    <img src="assets/images/about/avatar-1.jpg" alt="" />
                  </div>
                  <div className="text">
                    <img src="assets/images/about/sign.png" alt="" />
                    <h6>CEO &amp; Founder</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Utility Section ======*/}
      <section className="utility-section">
        <div className="container">
          {/*====== CTA Section ======*/}
          <div className="cta-section-two pt-50 pb-30">
            <div className="row align-items-center">
              <div className="col-lg-7">
                {/*=== Common Heading ===*/}
                <div className="section-title text-white wow fadeInLeft">
                  <h2>
                    Get Free <span>Consultations!</span> We’re Ready to Work
                    Together
                  </h2>
                </div>
              </div>
              <div className="col-lg-5">
                {/*=== CTA Button ===*/}
                <div className="cta-button float-lg-right wow fadeInRight">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn btn-red">Get Free Consultations</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/*====== Service Section ======*/}
          <div className="service-section-two pt-125 pb-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                  {/*=== Common Heading ===*/}
                  <div className="section-title section-title-white text-center mb-60 wow fadeInDown">
                    <span className="sub-title">Latest Services</span>
                    <h2>Amazing Investment Solutions</h2>
                  </div>
                </div>
              </div>
              {/*=== Service Slider ===*/}
              <LatestServices />
            </div>
          </div>
          {/*====== Fact Section ======*/}
          <div className="fact-section-two pt-50 pb-15">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  {/*=== Single Counter Item ===*/}
                  <div
                    className="single-counter-item-two mb-40 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="text d-flex align-items-center">
                      <h2 className="number">
                        <span className="count">358</span>+
                      </h2>
                      <h5>Projects Completed in Last 5 Years</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  {/*=== Single Counter Item ===*/}
                  <div
                    className="single-counter-item-two mb-40 wow fadeInUp"
                    data-wow-delay=".25s"
                  >
                    <div className="text d-flex align-items-center">
                      <h2 className="number">
                        <span className="count">536</span>+
                      </h2>
                      <h5>Happy Customers Who Trusted</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  {/*=== Single Counter Item ===*/}
                  <div
                    className="single-counter-item-two mb-40 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="text d-flex align-items-center">
                      <h2 className="number">
                        <span className="count">963</span>+
                      </h2>
                      <h5>Awards Innning For Success Projects</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Utility Section ======*/}
      {/*====== Start Advantage Section ======*/}
      <section
        className="advantage-section bg_cover pt-285 pb-130"
        style={{ backgroundImage: "url(assets/images/bg/advantage-bg.jpg)" }}
      >
        <div className="container">
          {/*====== Skill Section ======*/}
          <div className="skill-area">
            <div className="row align-items-end">
              <div className="col-lg-5">
                {/*=== Common Heading ===*/}
                <div className="section-title section-title-left mb-50 wow fadeInLeft">
                  <span className="sub-title">Advantages</span>
                  <h2>Best Solutions for Your Growth</h2>
                </div>
              </div>
              <div className="col-lg-7">
                {/*=== Single Content Box ===*/}
                <div className="skill-content-box wow fadeInRight">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-skill-item d-flex align-items-center mb-60">
                        <ProgressBar value={85} color="#0dceb5" />
                        <div className="text">
                          <h3 className="title">Business Consulting</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-skill-item d-flex align-items-center mb-60">
                        <ProgressBar value={67} color="#0dceb5" />
                        <div className="text">
                          <h3 className="title">Financial Investment</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== FAQ Section ======*/}
          <div className="faq-area">
            <div className="row">
              <div className="col-lg-12">
                {/*=== Faq Accordion ===*/}
                <Index2Accordion />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Start Advantage Section ======*/}
      {/*====== Start Projects Section ======*/}
      <section className="project-section pt-125">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Latest Project &amp; Case</span>
                <h2>Let’s Looks Our Global Projects</h2>
              </div>
            </div>
          </div>
          {/*=== Projects Slider ===*/}
          <Slider {...projectsSliderTwo} className="projects-slider-two">
            {/*=== Project Item ===*/}
            <div className="project-item-two mb-50 wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-6.jpg"
                  alt="project image"
                />
              </div>
              <div className="project-content">
                <h3 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Working Space</a>
                  </Link>
                </h3>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            {/*=== Project Item ===*/}
            <div className="project-item-two mb-50 wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-7.jpg"
                  alt="project image"
                />
              </div>
              <div className="project-content">
                <h3 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Team Meeting</a>
                  </Link>
                </h3>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            {/*=== Project Item ===*/}
            <div className="project-item-two mb-50 wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-8.jpg"
                  alt="project image"
                />
              </div>
              <div className="project-content">
                <h3 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Investment Solutions</a>
                  </Link>
                </h3>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            {/*=== Project Item ===*/}
            <div className="project-item-two mb-50 wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-7.jpg"
                  alt="project image"
                />
              </div>
              <div className="project-content">
                <h3 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Team Meeting</a>
                  </Link>
                </h3>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Projects Section ======*/}
      {/*====== Start Team Section ======*/}
      <section className="team-section pt-125 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Meet Our Team</span>
                <h2>Experience Team Members</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Team Item ===*/}
              <div
                className="single-team-item-two text-center mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="img-holder">
                  <img src="assets/images/team/team-4.jpg" alt="Team Image" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/team-details">
                      <a>Robert Simmons</a>
                    </Link>
                  </h3>
                  <p className="posiiton">Business Consultant</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Team Item ===*/}
              <div
                className="single-team-item-two text-center mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="img-holder">
                  <img src="assets/images/team/team-5.jpg" alt="Team Image" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="team-details">
                      Richard G. Wong
                    </Link>
                  </h3>
                  <p className="posiiton">Senior Manager</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Team Item ===*/}
              <div
                className="single-team-item-two text-center mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="img-holder">
                  <img src="assets/images/team/team-6.jpg" alt="Team Image" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="team-details">
                      Bruce J. Jordan
                    </Link>
                  </h3>
                  <p className="posiiton">Web Developer</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Team Item ===*/}
              <div
                className="single-team-item-two text-center mb-40 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="img-holder">
                  <img src="assets/images/team/team-7.jpg" alt="Team Image" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="team-details">
                      Frank M. Holleran
                    </Link>
                  </h3>
                  <p className="posiiton">Junior Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Team Section ======*/}
      {/*====== Start Feedback Section ======*/}
      <section className="testimonial-section-two pb-130">
        <div className="container">
          {/*=== Testimonial Wrapper ===*/}
          <div className="testimonial-wrapper-two dark-black-bg wow fadeInUp">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title section-title-white section-title-left border-bottom-1 mb-40 pb-20">
                  <span className="sub-title">Clients Testtimonials</span>
                  <h2>What’s Our Customer Say</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10">
                <Slider
                  {...testimonialSliderThree}
                  className="testimonial-slider-three"
                >
                  <div className="testimonial-item-two d-flex">
                    <div className="quote">
                      <i className="flaticon-left-quote-1" />
                    </div>
                    <div className="testimonial-content">
                      <ul className="ratings">
                        <li>
                          <span className="title">Good Quality</span>
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment so
                        blinded by desire that they cannot foresee the pain and
                        trouble that are bound ensue and equal blame belongs to
                        those who fail in their duty through weakness.
                      </p>
                      <div className="author-thumb-title d-flex">
                        <div className="author-thumb">
                          <img
                            src="assets/images/testimonial/thumb-2.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h4>Ronald B. Griffin</h4>
                          <p className="position">Business Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item-two d-flex">
                    <div className="quote">
                      <i className="flaticon-left-quote-1" />
                    </div>
                    <div className="testimonial-content">
                      <ul className="ratings">
                        <li>
                          <span className="title">Good Quality</span>
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment so
                        blinded by desire that they cannot foresee the pain and
                        trouble that are bound ensue and equal blame belongs to
                        those who fail in their duty through weakness.
                      </p>
                      <div className="author-thumb-title d-flex">
                        <div className="author-thumb">
                          <img
                            src="assets/images/testimonial/thumb-3.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h4>Ronald B. Griffin</h4>
                          <p className="position">Business Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item-two d-flex">
                    <div className="quote">
                      <i className="flaticon-left-quote-1" />
                    </div>
                    <div className="testimonial-content">
                      <ul className="ratings">
                        <li>
                          <span className="title">Good Quality</span>
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment so
                        blinded by desire that they cannot foresee the pain and
                        trouble that are bound ensue and equal blame belongs to
                        those who fail in their duty through weakness.
                      </p>
                      <div className="author-thumb-title d-flex">
                        <div className="author-thumb">
                          <img
                            src="assets/images/testimonial/thumb-1.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h4>Ronald B. Griffin</h4>
                          <p className="position">Business Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item-two d-flex">
                    <div className="quote">
                      <i className="flaticon-left-quote-1" />
                    </div>
                    <div className="testimonial-content">
                      <ul className="ratings">
                        <li>
                          <span className="title">Good Quality</span>
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment so
                        blinded by desire that they cannot foresee the pain and
                        trouble that are bound ensue and equal blame belongs to
                        those who fail in their duty through weakness.
                      </p>
                      <div className="author-thumb-title d-flex">
                        <div className="author-thumb">
                          <img
                            src="assets/images/testimonial/thumb-1.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h4>Ronald B. Griffin</h4>
                          <p className="position">Business Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="col-lg-2">
                <div className="testimonial-dots" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Feedback Section ======*/}
      {/*====== Start Blog Section ======*/}
      <section className="blog-section pb-70 p-r z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
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
          <div className="row">
            <div className="col-lg-12">
              {/*=== Blog Button ===*/}
              <div
                className="blog-button text-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                <Link legacyBehavior href="/blog-listing">
                  <a className="main-btn filled-btn">View More News</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Blog Section ======*/}
      {/*====== Start Partners Section ======*/}
      <section className="partners-area pt-60 pb-60">
        <div className="container">
          <PartnerSlider2 />
        </div>
      </section>
      {/*====== End Partners Section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="contact-section p-r pt-60 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              {/*=== Map Content Box ===*/}
              <div className="map-one_content-box mb-50 wow fadeInDown">
                <div className="section-title section-title-left mb-50">
                  <span className="sub-title">Get In Touch</span>
                  <h2>Ready to Get Free Consultations ?</h2>
                </div>
                <div className="map-box">
                  <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              {/*=== Contact Form Box ===*/}
              <div className="contact-two_form-box mb-50 wow fadeInUp">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Full Name"
                          name="name"
                          required=""
                        />
                        <i className="far fa-user" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Phone Number"
                          name="phone"
                          required=""
                        />
                        <i className="fal fa-mobile-alt" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                          required=""
                        />
                        <i className="far fa-envelope-open-text" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Subject"
                          name="subject"
                          required=""
                        />
                        <i className="far fa-engine-warning" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          className="form_control"
                          placeholder="Write Message........."
                          name="message"
                          defaultValue={""}
                        />
                        <i className="far fa-pencil" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_checkbox">
                        <input type="checkbox" name="checkbox" id="check1" />
                        <label htmlFo r="check1">
                          <span>
                            I Agree with the service and terms and conditions
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <button className="main-btn btn-red">
                          Get Consultation
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
      {/*====== End Contact Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <section className="newsletter-section bg-color-two pt-50 pb-45">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-12">
              {/*=== Common Heading ===*/}
              <div className="section-title section-title-white wow fadeInLeft">
                <h2>Subscribe Our Newsletter to Get More Updates</h2>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12">
              {/*=== Newsletter Form ===*/}
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
                          id="check2"
                          defaultChecked=""
                        />
                        <label htmlFor="check2">
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
export default Index;
