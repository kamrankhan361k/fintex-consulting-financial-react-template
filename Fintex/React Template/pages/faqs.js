import PageBanner from "../src/components/PageBanner";
import SimpleFaq from "../src/components/SimpleFaq";
import Layout from "../src/layout/Layout";
const Faqs = () => {
  return (
    <Layout>
      <PageBanner pageName={"Faqs"} />
      <section className="faq-section pt-130 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*=== Faq content box ===*/}
              <div className="faq-one_content-box mb-50">
                <div className="section-title section-title-left mb-50 wow fadeInDown">
                  <span className="sub-title">Faqs</span>
                  <h2>Have Any Questions ? Question &amp; Answer</h2>
                </div>
                <div
                  className="faq-accordion-two mb-50 wow fadeInUp"
                  id="accordionOne"
                >
                  <SimpleFaq />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Faq Image Box ===*/}
              <div className="faq-two_image-box p-r z-1 ml-lg-70 mb-50 wow fadeInRight">
                <img
                  src="assets/images/gallery/faq-2.jpg"
                  className="faq-one-img"
                  alt="Faq Image"
                />
                <img
                  src="assets/images/gallery/faq-3.jpg"
                  className="faq-two-img"
                  alt="Faq Image"
                />
                <img
                  src="assets/images/gallery/faq-4.jpg"
                  className="faq-three-img"
                  alt="Faq Image"
                />
                <div className="fintex-logo">
                  <img
                    src="assets/images/logo/big-logo-1.png"
                    alt="Fintext Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Faqs Section ======*/}
      {/*====== Start Faqs Section ======*/}
      <section className="faq-section pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Have any Questions</span>
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {/*=== Single Faq Card ===*/}
              <div className="single-faq-card mb-30 wow fadeInUp">
                <div className="text">
                  <h5 className="title">
                    <span className="number">01.</span>Unicode UTF Character Set
                    Ultimate Guide ?
                  </h5>
                  <p>
                    On the other hand denounce with righteous indignation
                    dislikesy men who are so beguiled and demoralized the charms
                    of pleasure moments so blinded by desire that they foresee
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              {/*=== Single Faq Card ===*/}
              <div className="single-faq-card mb-30 wow fadeInUp">
                <div className="text">
                  <h5 className="title">
                    <span className="number">02.</span>HTML Newsletter Without
                    Losing Your Mind?
                  </h5>
                  <p>
                    On the other hand denounce with righteous indignation
                    dislikesy men who are so beguiled and demoralized the charms
                    of pleasure moments so blinded by desire that they foresee
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              {/*=== Single Faq Card ===*/}
              <div className="single-faq-card mb-30 wow fadeInUp">
                <div className="text">
                  <h5 className="title">
                    <span className="number">03.</span>Ethical Practical
                    Getting-Started Guide ?
                  </h5>
                  <p>
                    On the other hand denounce with righteous indignation
                    dislikesy men who are so beguiled and demoralized the charms
                    of pleasure moments so blinded by desire that they foresee
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              {/*=== Single Faq Card ===*/}
              <div className="single-faq-card mb-30 wow fadeInUp">
                <div className="text">
                  <h5 className="title">
                    <span className="number">04.</span>Comprehensive Wireframing
                    Prototyping ?
                  </h5>
                  <p>
                    On the other hand denounce with righteous indignation
                    dislikesy men who are so beguiled and demoralized the charms
                    of pleasure moments so blinded by desire that they foresee
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              {/*=== Single Faq Card ===*/}
              <div className="single-faq-card mb-30 wow fadeInUp">
                <div className="text">
                  <h5 className="title">
                    <span className="number">05.</span>Replacing jQuery Build
                    Step Necessary ?
                  </h5>
                  <p>
                    On the other hand denounce with righteous indignation
                    dislikesy men who are so beguiled and demoralized the charms
                    of pleasure moments so blinded by desire that they foresee
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              {/*=== Single Faq Card ===*/}
              <div className="single-faq-card mb-30 wow fadeInUp">
                <div className="text">
                  <h5 className="title">
                    <span className="number">06.</span>Universal Principles
                    Experience Design ?
                  </h5>
                  <p>
                    On the other hand denounce with righteous indignation
                    dislikesy men who are so beguiled and demoralized the charms
                    of pleasure moments so blinded by desire that they foresee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Faqs Section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="contact-section-two p-r z-1">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-6">
              {/*=== Contact Form Box ===*/}
              <div className="contact-two_form-box wow fadeInDown">
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
        {/*=== Map Box ===*/}
        <div className="map-box">
          <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
        </div>
      </section>
      {/*====== End Contact Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <section className="newsletter-section black-bg pt-50 pb-30">
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
export default Faqs;
