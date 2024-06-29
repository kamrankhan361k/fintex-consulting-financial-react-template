import Link from "next/link";
import Slider from "react-slick";
import dynamic from "next/dynamic";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});
import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import {
  partnerSliderOne,
  teamSliderOne,
  testimonialSliderThree,
} from "../src/sliderProps";
const About = () => {
  return (
    <Layout>
      <PageBanner pageName={"About Us"} />
      {/*====== End Breadcrumb Section ======*/}
      {/*====== Start About Section  ======*/}
      <section className="about-section-three pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {/*=== About Content Box ===*/}
              <div className="about-content-box content-box-gap mb-50 wow fadeInLeft">
                <div className="section-title section-title-left">
                  <span className="sub-title">About Company</span>
                  <h2>Help to Create Great Business Future </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque
                  abillo inventore veritatis quasi architecto beatae
                </p>
                <ul className="check-style-one mb-30">
                  <li>Reflection 2022 Desktop Wallpapers Edition</li>
                  <li>Designing A Better Infinite Scroll</li>
                  <li>Manage your business account</li>
                </ul>
                <div className="about-button">
                  <Link legacyBehavior href="/about">
                    <a className="main-btn filled-btn">Explore More Us</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              {/*=== About Image Box ===*/}
              <div className="about-two_image-box pl-lg-70 mb-50 wow fadeInRight">
                <div className="about-one-img">
                  <div className="image-overlay" />
                  <img src="assets/images/about/about-3.jpg" alt="" />
                  <div className="play-box">
                    <a
                      href="https://www.youtube.com/watch?v=TboWOSW7qCI"
                      className="video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="quote-box-four text-white">
                  <h3>Effective method for disease detection.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Fact Section ======*/}
      <section className="fact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Counter Item ===*/}
              <div className="single-counter-item-two mb-40">
                <div
                  className="text d-flex align-items-center wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h2 className="number">
                    <Counter end={358} />+
                  </h2>
                  <h5>Projects Completed in Last 5 Years</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Counter Item ===*/}
              <div className="single-counter-item-two mb-40">
                <div
                  className="text d-flex align-items-center wow fadeInUp"
                  data-wow-delay=".25s"
                >
                  <h2 className="number">
                    <Counter end={536} />+
                  </h2>
                  <h5>Happy Customers Who Trusted</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Counter Item ===*/}
              <div className="single-counter-item-two mb-40">
                <div
                  className="text d-flex align-items-center wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <h2 className="number">
                    <Counter end={963} />+
                  </h2>
                  <h5>Awards Innning For Success Projects</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fact Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section pt-90 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*=== About Image Box ===*/}
              <div className="about-three_image-box p-r mb-50">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="assets/images/gallery/img-2.jpg"
                      className="about-one-img wow fadeInUp"
                      alt="Mission Image"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/images/gallery/img-3.jpg"
                      className="about-two-img wow fadeInDown"
                      alt="Mission Image"
                    />
                  </div>
                </div>
                <div className="big-logo">
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
            <div className="col-lg-6">
              {/*=== About Content Box ===*/}
              <div className="about-content-box mb-50">
                <div className="section-title section-title-left wow fadeInDown">
                  <span className="sub-title">What’s Our Plan</span>
                  <h2>Best Investment Solutions For Growth </h2>
                </div>
                <div className="tab-content-box wow fadeInUp">
                  <ul className="nav nav-tabs mb-20">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#mission"
                      >
                        Our Mission
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#vision">
                        Our Vision
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content mb-30">
                    <div className="tab-pane fade show active" id="mission">
                      <div className="content-box">
                        <p>
                          On the other hand we denounce with righteous
                          indignation and dislike men who are so beguiled and
                          demoralized by the charmso pleasure of the moment so
                          blinded by desire that they cannesee the pain and
                          trouble that are bound to ensue{" "}
                        </p>
                        <ul className="check-style-two">
                          <li>Portfolio Diversification</li>
                          <li>Volatility Protection</li>
                          <li>Capital Protection</li>
                          <li>Inflation Protection</li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="vision">
                      <div className="content-box">
                        <p>
                          On the other hand we denounce with righteous
                          indignation and dislike men who are so beguiled and
                          demoralized by the charmso pleasure of the moment so
                          blinded by desire that they cannesee the pain and
                          trouble that are bound to ensue{" "}
                        </p>
                        <ul className="check-style-two">
                          <li>Portfolio Diversification</li>
                          <li>Volatility Protection</li>
                          <li>Capital Protection</li>
                          <li>Inflation Protection</li>
                        </ul>
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
              {/*=== Team Button ===*/}
              <div className="team-button float-lg-right mb-30 wow fadeInRight">
                <Link legacyBehavior href="/team">
                  <a className="main-btn btn-white">Get Free Consultations</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start History Section ======*/}
      <section className="history-section pt-125 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Company History</span>
                <h2>Great Company History</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/*=== History Timeline ===*/}
              <div className="history-timeline">
                <div
                  className="single-history-item mb-80 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="history-img">
                    <img
                      src="assets/images/gallery/history-1.jpg"
                      alt="history image"
                    />
                  </div>
                  <div className="history-content">
                    <h4 className="title">
                      <span className="ribbon">1993</span> We Started
                    </h4>
                    <p>
                      Sed ut perspiciatis unde omnis istey natus sit voluptatem
                      accusa loremque laudantium totam rem apereaque
                    </p>
                  </div>
                </div>
                <div
                  className="single-history-item mb-80 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="history-img">
                    <img
                      src="assets/images/gallery/history-2.jpg"
                      alt="history image"
                    />
                  </div>
                  <div className="history-content">
                    <h4 className="title">
                      <span className="ribbon">1995</span> Opening Office
                    </h4>
                    <p>
                      Sed ut perspiciatis unde omnis istey natus sit voluptatem
                      accusa loremque laudantium totam rem apereaque
                    </p>
                  </div>
                </div>
                <div
                  className="single-history-item mb-80 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="history-img">
                    <img
                      src="assets/images/gallery/history-3.jpg"
                      alt="history image"
                    />
                  </div>
                  <div className="history-content">
                    <h4 className="title">
                      <span className="ribbon">1997</span> Client Satisfaction
                    </h4>
                    <p>
                      Sed ut perspiciatis unde omnis istey natus sit voluptatem
                      accusa loremque laudantium totam rem apereaque
                    </p>
                  </div>
                </div>
                <div
                  className="single-history-item mb-80 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="history-img">
                    <img
                      src="assets/images/gallery/history-4.jpg"
                      alt="history image"
                    />
                  </div>
                  <div className="history-content">
                    <h4 className="title">
                      <span className="ribbon">2005</span>Improve Ourselve
                    </h4>
                    <p>
                      Sed ut perspiciatis unde omnis istey natus sit voluptatem
                      accusa loremque laudantium totam rem apereaque
                    </p>
                  </div>
                </div>
                <div
                  className="single-history-item mb-80 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="history-img">
                    <img
                      src="assets/images/gallery/history-5.jpg"
                      alt="history image"
                    />
                  </div>
                  <div className="history-content">
                    <h4 className="title">
                      <span className="ribbon">2010</span>Awards Winning
                    </h4>
                    <p>
                      Sed ut perspiciatis unde omnis istey natus sit voluptatem
                      accusa loremque laudantium totam rem apereaque
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Start History Section ======*/}
      {/*====== Start Partners Section ======*/}
      <section className="partners-section dark-black-bg pt-60 pb-60">
        <div className="container">
          {/*=== Partners Slider ===*/}
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
      {/*====== Start Team Section ======*/}
      <section className="team-section pt-125 pb-130">
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
          {/*=== Team Slider ===*/}
          <Slider {...teamSliderOne} className="team-slider-one">
            <div className="single-team-item mb-40 wow fadeInUp">
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
              </div>
            </div>
            <div className="single-team-item mb-40 wow fadeInUp">
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
                    <a>Christopher L. Wagners</a>
                  </Link>
                </h3>
                <p className="position">Senior Manager</p>
              </div>
            </div>
            <div className="single-team-item mb-40 wow fadeInUp">
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
              </div>
            </div>
            <div className="single-team-item mb-40 wow fadeInUp">
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
                    <a>Christopher L. Wagners</a>
                  </Link>
                </h3>
                <p className="position">Senior Manager</p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Team Section ======*/}
      {/*====== Start Feedback Section ======*/}
      <section className="testimonial-section pb-130">
        <div className="container">
          <div className="testimonial-wrapper-two light-gray-bg wow fadeInUp">
            <div className="row">
              <div className="col-lg-12">
                {/*=== Common Heading ===*/}
                <div className="section-title section-title-left border-bottom-1 mb-40 pb-20">
                  <span className="sub-title">Clients Testtimonials</span>
                  <h2>What’s Our Customer Say</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10">
                {/*=== Testimonial Slider ===*/}
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
                {/*=== Testimonial Dots ===*/}
                <div className="testimonial-dots" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Feedback Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <Newsletter />
    </Layout>
  );
};
export default About;
