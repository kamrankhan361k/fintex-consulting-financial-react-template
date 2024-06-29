import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import ProgressBar from "../src/components/ProgressBar";
import SimpleFaq from "../src/components/SimpleFaq";
import Layout from "../src/layout/Layout";
const TeamDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Single Team"} />
      <section className="team-details-section pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*=== Team Image Box ===*/}
              <div className="team-one_image-box ml-lg-3 mb-50 wow fadeInLeft">
                <img
                  src="assets/images/team/team-single-1.jpg"
                  alt="Team Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Team Content Box ===*/}
              <div className="team-one_content-box mb-50 ml-lg-70 wow fadeInRight">
                <h2>
                  <span className="thin">Hello Guys i’m </span>
                  Daniel S. Marvin
                </h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium totam rem aperiaaque abillo
                  inventore veritatis quasi architecto beatae vitae dicta
                  explicabo nemo enim ipsam voluptatem quia.
                </p>
                <ul className="check-style-one mb-50">
                  <li>Reflection 2022 Desktop Wallpapers Edition</li>
                  <li>Designing A Better Infinite Scroll</li>
                </ul>
                <div className="skill-wrap-one text-white">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-skill-item d-flex align-items-center mb-30">
                        <ProgressBar value={85} color="#f94d1c" />
                        <div className="text">
                          <h3 className="title">Financial Investment</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-skill-item d-flex align-items-center mb-30">
                        <ProgressBar value={67} color="#f94d1c" />
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
        </div>
      </section>
      {/*====== End Team Details Section ======*/}
      {/*====== Start Faq Section ======*/}
      <section className="faq-section pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
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
            <div className="col-xl-6">
              {/*=== Faq image box ===*/}
              <div className="faq-one_image-box ml-lg-70 p-r mb-50">
                <div className="image-overlay" />
                <img src="assets/images/gallery/faq-5.jpg" alt="Faq Image" />
                <div className="play-content text-center">
                  <a
                    href="https://www.youtube.com/watch?v=TboWOSW7qCI"
                    className="video-popup"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Faq Section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="contact-section p-r pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              {/*=== Map content Box ===*/}
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
              {/*=== Contact Form box ===*/}
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
export default TeamDetails;
