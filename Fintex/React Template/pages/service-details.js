import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import FintexAccordion from "../src/components/FintexAccordion";
import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const ServiceDetails = () => {
  const faqsData = [
    { title: "How to Getting Started your Business" },
    { title: "What is Business & Financial Relationship ?" },
    { title: "What is Importance of Co-working ?" },
    { title: "Useful Front-End Boilerplates And Starter Kits" },
    { title: "How to Getting Started your Business" },
    { title: "What is Business & Financial Relationship ?" },
    { title: "What is Importance of Co-working ?" },
    { title: "Useful Front-End Boilerplates And Starter Kits" },
    { title: "Inside The WordPress Toolbar" },
  ];
  const [active, setActive] = useState(`event-0`);
  return (
    <Layout>
      <PageBanner pageName={"Service Details"} />
      <section className="solution-section pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*=== Solution Content Box ===*/}
              <div className="solution-one_content-box mr-lg-100 mb-50">
                <div className="section-title section-title-left mb-30 wow fadeInDown">
                  <span className="sub-title">Our Solutions</span>
                  <h2>Effective Method for Business Solution</h2>
                </div>
                <div className="features-item-three animate-hover-icon d-flex mb-20 wow fadeInUp">
                  <div className="icon">
                    <i className="far fa-bullseye-arrow" />
                  </div>
                  <div className="text">
                    <h4 className="title">Target Audience</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natusey voluptatem
                      accusantium doloremque
                    </p>
                  </div>
                </div>
                <div className="features-item-three animate-hover-icon d-flex mb-20 wow fadeInUp">
                  <div className="icon">
                    <i className="far fa-shield-check" />
                  </div>
                  <div className="text">
                    <h4 className="title">Best Performance</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natusey voluptatem
                      accusantium doloremque
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Solution Image Box ===*/}
              <div className="solution-one_image-box p-r mb-50">
                <img
                  src="assets/images/gallery/solution-1.jpg"
                  className="solution-img-one wow fadeInRight"
                  alt=""
                />
                <img
                  src="assets/images/gallery/solution-2.jpg"
                  className="solution-img-two wow fadeInLeft"
                  alt=""
                />
                <div className="company-card text-center wow fadeInUp">
                  <h5 className="title">Company Yearly Graph</h5>
                  <img src="assets/images/gallery/graph.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Solution Section ======*/}
      {/*====== Start Management Section ======*/}
      <section className="management-section pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/*=== Management Image Box ===*/}
              <div className="management-one_img-box mb-50 wow fadeInLeft">
                <img
                  src="assets/images/gallery/img-4.jpg"
                  alt="management image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Management content box ===*/}
              <div className="management-one_content-box content-box-gap mb-50 ml-lg-40 wow fadeInRight">
                <div className="section-title section-title-left mb-25">
                  <span className="sub-title">Management Systems</span>
                  <h2>Management Business Control Accounting</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque
                  abillo inventore veritatis quasi architecto beatae
                </p>
                <ul className="check-style-three mb-25">
                  <li>Professional Business Agency</li>
                  <li>Experience Team Members</li>
                </ul>
                <div className="management-button">
                  <Link legacyBehavior href="/about">
                    <a className="main-btn filled-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Management Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="service-section-four light-gray-bg pt-80 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Latest Services</span>
                <h2>Amazing Business Services to Grow your Business</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6 col-sm-12">
              {/*=== Service Item ===*/}
              <div
                className="service-item-two animate-hover-icon text-center mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="flaticon-career" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Business Solution</a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis undees omnis iste natussit luptatem
                    accsantiue doloreue
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              {/*=== Service Item ===*/}
              <div
                className="service-item-two animate-hover-icon text-center mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <i className="flaticon-profits-1" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Investment Planning</a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis undees omnis iste natussit luptatem
                    accsantiue doloreue
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              {/*=== Service Item ===*/}
              <div
                className="service-item-two animate-hover-icon text-center mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <i className="flaticon-debit-card" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Digital Banking</a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis undees omnis iste natussit luptatem
                    accsantiue doloreue
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              {/*=== Service Item ===*/}
              <div
                className="service-item-two animate-hover-icon text-center mb-40 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon">
                  <i className="flaticon-money" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Financial Solution</a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis undees omnis iste natussit luptatem
                    accsantiue doloreue
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Optimization Section ======*/}
      <section className="optimization-section pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              {/*=== Optimization Content Box ===*/}
              <div className="optimization-one_content-box content-box-gap mb-50 wow fadeInLeft">
                <div className="section-title section-title-left">
                  <span className="sub-title">Optimization</span>
                  <h2>Best Optimize your Financial Operation.</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque
                  abillo inventore veritatis quasi architecto beatae
                </p>
                <ul className="check-style-three">
                  <li>Business Solutions For Experts</li>
                  <li>Awards Winning Agency</li>
                  <li>Digital Banking Solutions</li>
                  <li>Finanacial Solutions</li>
                </ul>
                <div className="optimization-button">
                  <Link legacyBehavior href="/service-details">
                    <a className="main-btn btn-red">Explore More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              {/*=== Optimization Image Box ===*/}
              <div className="optimization-one_image-box text-lg-right mb-50 wow fadeInRight">
                <img
                  src="assets/images/gallery/optimization-1.jpg"
                  className="optimization-img-one"
                  alt="optimization image"
                />
                <div className="big-logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img
                        src="assets/images/logo/big-logo-2.png"
                        alt="Site Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Optimization Section ======*/}
      {/*====== Start Faq Section ======*/}
      <section className="faq-section light-gray-bg pt-125 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Asked Questions</span>
                <h2>Have Any Questions On Minds!</h2>
              </div>
            </div>
          </div>
          {/*=== Faq Accordion ===*/}
          <div className="faq-accordion-two wow fadeInUp" id="accordionOne">
            <Accordion defaultActiveKey={active}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="accordion mb-50">
                    {faqsData.map(
                      (faq, i) =>
                        i <= 3 && (
                          <FintexAccordion
                            key={i}
                            active={active}
                            onClick={() => setActive(`event-${i}`)}
                            title={faq.title}
                            eventName={`event-${i}`}
                          />
                        )
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="accordion mb-50">
                    {faqsData.map(
                      (faq, i) =>
                        i > 3 && (
                          <FintexAccordion
                            key={i}
                            active={active}
                            onClick={() => setActive(`event-${i}`)}
                            title={faq.title}
                            eventName={`event-${i}`}
                          />
                        )
                    )}
                  </div>
                </div>
              </div>
            </Accordion>
          </div>
        </div>
      </section>
      {/*====== End Faq Section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="contact-section p-r pt-125 pb-80">
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
                        <label htmlFor="check1">
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
      <Newsletter />
    </Layout>
  );
};
export default ServiceDetails;
