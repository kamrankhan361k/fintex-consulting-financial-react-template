import Link from "next/link";
import Slider from "react-slick";
import dynamic from "next/dynamic";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});
import Index4Accordion from "../src/components/Index4Accordion";
import Layout from "../src/layout/Layout";
import { partnerSliderOne, testimonialSliderFour } from "../src/sliderProps";
const Index4 = () => {
  return (
    <Layout header={4} footer={4} extraBodyCls="home-four">
      <section className="banner-four p-r z-1">
        <div className="shape shape-one animate-float-x">
          <span>
            <img src="assets/images/hero/h-shape-1.png" alt="Shape" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/hero/h-shape-2.png" alt="Shape" />
          </span>
        </div>
        <div className="shape shape-three">
          <span>
            <img src="assets/images/hero/h-shape-3.png" alt="Shape" />
          </span>
        </div>
        <div className="shape shape-four animate-float-x">
          <span>
            <img src="assets/images/hero/h-shape-4.png" alt="Shape" />
          </span>
        </div>
        <div className="shape-dot shape-dot-one animate-float-y">
          <span />
        </div>
        <div className="shape-dot shape-dot-two animate-float-x">
          <span />
        </div>
        <div className="shape-dot shape-dot-three animate-float-y">
          <span />
        </div>
        <div className="shape-dot shape-dot-four animate-float-y">
          <span />
        </div>
        <div className="shape shape-blur animate-float-y">
          <span />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7">
              <div className="hero-content">
                <span className="tag-line wow fadeInUp" data-wow-delay=".3s">
                  Business Advisors
                </span>
                <h1 className="wow fadeInDown" data-wow-delay=".5s">
                  Grow Business With Great Advise
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
            <div className="col-xl-5">
              <div className="hero-img-box wow fadeInRight" data-wow-delay="1s">
                <img
                  src="assets/images/hero/hero-four-1.png"
                  alt="Hero Image"
                />
                <div className="circle-border">
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Banner Section ======*/}
      {/*====== Start Partners Section ======*/}
      <section className="partners-section pt-80">
        <div className="container">
          <div className="partner-wrapper border-bottom-1 pb-60 wow fadeInDown">
            {/*=== Partner Slider ===*/}
            <Slider {...partnerSliderOne} className="partner-slider-one">
              <div className="partner-item">
                <div className="partner-img">
                  <a href="#">
                    <img
                      src="assets/images/partners/logo-13.png"
                      alt="Partner Image"
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <a href="#">
                    <img
                      src="assets/images/partners/logo-14.png"
                      alt="Partner Image"
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <a href="#">
                    <img
                      src="assets/images/partners/logo-15.png"
                      alt="Partner Image"
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <a href="#">
                    <img
                      src="assets/images/partners/logo-16.png"
                      alt="Partner Image"
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <a href="#">
                    <img
                      src="assets/images/partners/logo-17.png"
                      alt="Partner Image"
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <a href="#">
                    <img
                      src="assets/images/partners/logo-18.png"
                      alt="Partner Image"
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <a href="#">
                    <img
                      src="assets/images/partners/logo-15.png"
                      alt="Partner Image"
                    />
                  </a>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/*====== End Partners Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="service-section-four pt-125">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center wow fadeInDown">
                <span className="sub-title">What We Offer</span>
                <h2>We Help People &amp; Small Business</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-end">
            <div className="col-xl-3 col-lg-12">
              <div className="service-item-list ml-minus-40">
                <div className="row">
                  <div className="col-xl-12 col-md-6">
                    <div className="service-item-four animate-hover-icon mb-20 wow fadeInLeft">
                      <div className="icon">
                        <i className="flaticon-friend" />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <Link legacyBehavior href="/service-details">
                            <a>Business Consulting</a>
                          </Link>
                        </h3>
                        <p>
                          On the other hand we denounce with righteous
                          indignation
                        </p>
                        <Link legacyBehavior href="/service-details">
                          <a className="btn-link">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-md-6">
                    <div className="service-item-four animate-hover-icon mb-20 wow fadeInLeft">
                      <div className="icon">
                        <i className="flaticon-profit" />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <Link legacyBehavior href="/service-details">
                            <a>Market Strategy</a>
                          </Link>
                        </h3>
                        <p>
                          On the other hand we denounce with righteous
                          indignation
                        </p>
                        <Link legacyBehavior href="/service-details">
                          <a className="btn-link">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="service-one_image-box text-center mb-20 p-r z-1 wow fadeInDown">
                <img
                  src="assets/images/service/img-7.png"
                  className="service-one-img"
                  alt="Service Image"
                />
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
              </div>
            </div>
            <div className="col-xl-3 col-lg-12">
              <div className="service-item-list mr-minus-40">
                <div className="row">
                  <div className="col-xl-12 col-md-6">
                    <div className="service-item-four animate-hover-icon mb-20 wow fadeInRight">
                      <div className="icon">
                        <i className="flaticon-problem-solving" />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <Link legacyBehavior href="/service-details">
                            <a>Problem Solving</a>
                          </Link>
                        </h3>
                        <p>
                          On the other hand we denounce with righteous
                          indignation
                        </p>
                        <Link legacyBehavior href="/service-details">
                          <a className="btn-link">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-md-6">
                    <div className="service-item-four animate-hover-icon mb-20 wow fadeInRight">
                      <div className="icon">
                        <i className="flaticon-target" />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <Link legacyBehavior href="/service-details">
                            <a>Awesome Features</a>
                          </Link>
                        </h3>
                        <p>
                          On the other hand we denounce with righteous
                          indignation
                        </p>
                        <Link legacyBehavior href="/service-details">
                          <a className="btn-link">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section-two pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-four_image-box p-r z-1">
                <img
                  src="assets/images/about/about-6.jpg"
                  className="about-img-one wow fadeInDown"
                  alt="About Image"
                />
                <img
                  src="assets/images/about/about-7.jpg"
                  className="about-img-two wow fadeInLeft"
                  alt="About Image"
                />
                <img
                  src="assets/images/about/about-8.jpg"
                  className="about-img-three wow fadeInUp"
                  alt="About Image"
                />
                <div className="shape fancy-shape-one">
                  <span />
                </div>
                <div className="shape shape-one animate-float-x">
                  <span>
                    <img src="assets/images/shape/pattern-bg-2.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-box content-box-gap pl-lg-50 wow fadeInRight">
                <div className="section-title section-title-left">
                  <span className="sub-title">About Company</span>
                  <h2>Awesome Solutions to Grow your Business</h2>
                </div>
                <p>
                  On the other hand we denounce with righteous indignation
                  dislike men who beguiled and demoralized by the charmso
                  pleasure of the moments blinded by desire that they cannesee
                  the trouble bound
                </p>
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <div className="features-item-four animate-hover-icon text-center wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-search" />
                      </div>
                      <div className="text">
                        <h4 className="title">User Research</h4>
                        <p>
                          We denounce righteous dislike men beguiled and
                          demoralized charmso
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="features-item-four animate-hover-icon text-center wow fadeInDown">
                      <div className="icon">
                        <i className="flaticon-idea-1" />
                      </div>
                      <div className="text">
                        <h4 className="title">Unique Ideas</h4>
                        <p>
                          We denounce righteous dislike men beguiled and
                          demoralized charmso
                        </p>
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
      {/*====== Start Fact section  ======*/}
      <section className="fact-section-four pt-150 p-r mb-minus-150 z-2">
        <div className="container">
          <div
            className="fact-wrapper-one p-r pt-60 pb-55 bg_cover"
            style={{ backgroundImage: "url(assets/images/bg/fact-bg-1.jpg)" }}
          >
            <div className="counter-item-white">
              <div className="icon">
                <i className="flaticon-document" />
              </div>
              <div className="text">
                <h2 className="number">
                  <Counter end={35} />k <span className="symbol">+</span>
                </h2>
                <p>Project Complate</p>
              </div>
            </div>
            <div className="counter-item-white">
              <div className="icon">
                <i className="flaticon-customers" />
              </div>
              <div className="text">
                <h2 className="number">
                  <Counter end={35} />k <span className="symbol">+</span>
                </h2>
                <p>Project Complate</p>
              </div>
            </div>
            <div className="counter-item-white">
              <div className="icon">
                <i className="flaticon-global" />
              </div>
              <div className="text">
                <h2 className="number">
                  <Counter end={35} />k <span className="symbol">+</span>
                </h2>
                <p>Project Complate</p>
              </div>
            </div>
            <div className="counter-item-white">
              <div className="icon">
                <i className="flaticon-medal" />
              </div>
              <div className="text">
                <h2 className="number">
                  <Counter end={35} />k <span className="symbol">+</span>
                </h2>
                <p>Project Complate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fact section  ======*/}
      {/*====== Start Faq section  ======*/}
      <section className="faq-section-bg light-gray-bg pt-295 pb-80 p-r z-1">
        <div
          className="pattern-bg bg_cover"
          style={{
            backgroundImage: "url(assets/images/shape/pattern-bg-1.png)",
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="faq-content-box content-box-gap mb-40 wow fadeInLeft">
                <div className="section-title section-title-left mb-25">
                  <span className="sub-title">Business Progress</span>
                  <h2>Follow The Best Trend Business Progress</h2>
                </div>
                <p>
                  On the other hand denounce righteous indignation dislike mens
                  who beguiled and demoralized charmso pleasure
                </p>
                <img
                  src="assets/images/gallery/graph-2.png"
                  alt="Graph Image"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <Index4Accordion />
            </div>
          </div>
        </div>
      </section>
      {/*====== End Faq section  ======*/}
      {/*====== Start Testimonial section  ======*/}
      <section className="testimonial-section-variable-width pt-120">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center wow fadeInDown">
                <span className="sub-title">Our Testimonials</span>
                <h2>What Our Clients Say About Us</h2>
              </div>
            </div>
          </div>
          <Slider
            {...testimonialSliderFour}
            className="testimonial-slider-four wow fadeInUp"
          >
            <div className="testimonial-item-four">
              <div className="testimonial-inner-content">
                <div className="author-thumb">
                  <img
                    src="assets/images/testimonial/thumb-5.jpg"
                    alt="Author Thumb"
                  />
                </div>
                <div className="testimonial-content">
                  <p>
                    Sed ut perspiciatis unde omnis natus errvoluptatem
                    accusantium doloremque laudantium totam rem aperiam eaque
                    abillo inventorey veritatis et architecto beatae vitae dicta
                    sunt explicabo
                  </p>
                  <h5 className="author-title">
                    David T. Williams,{" "}
                    <span className="position">Senior Designer</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="testimonial-item-four">
              <div className="testimonial-inner-content">
                <div className="author-thumb">
                  <img
                    src="assets/images/testimonial/thumb-6.jpg"
                    alt="Author Thumb"
                  />
                </div>
                <div className="testimonial-content">
                  <p>
                    Sed ut perspiciatis unde omnis natus errvoluptatem
                    accusantium doloremque laudantium totam rem aperiam eaque
                    abillo inventorey veritatis et architecto beatae vitae dicta
                    sunt explicabo
                  </p>
                  <h5 className="author-title">
                    Joseph P. Brewer,{" "}
                    <span className="position">Senior Designer</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="testimonial-item-four">
              <div className="testimonial-inner-content">
                <div className="author-thumb">
                  <img
                    src="assets/images/testimonial/thumb-5.jpg"
                    alt="Author Thumb"
                  />
                </div>
                <div className="testimonial-content">
                  <p>
                    Sed ut perspiciatis unde omnis natus errvoluptatem
                    accusantium doloremque laudantium totam rem aperiam eaque
                    abillo inventorey veritatis et architecto beatae vitae dicta
                    sunt explicabo
                  </p>
                  <h5 className="author-title">
                    David T. Williams,{" "}
                    <span className="position">Senior Designer</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="testimonial-item-four">
              <div className="testimonial-inner-content">
                <div className="author-thumb">
                  <img
                    src="assets/images/testimonial/thumb-5.jpg"
                    alt="Author Thumb"
                  />
                </div>
                <div className="testimonial-content">
                  <p>
                    Sed ut perspiciatis unde omnis natus errvoluptatem
                    accusantium doloremque laudantium totam rem aperiam eaque
                    abillo inventorey veritatis et architecto beatae vitae dicta
                    sunt explicabo
                  </p>
                  <h5 className="author-title">
                    Joseph P. Brewer,{" "}
                    <span className="position">Senior Designer</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="testimonial-item-four">
              <div className="testimonial-inner-content">
                <div className="author-thumb">
                  <img
                    src="assets/images/testimonial/thumb-5.jpg"
                    alt="Author Thumb"
                  />
                </div>
                <div className="testimonial-content">
                  <p>
                    Sed ut perspiciatis unde omnis natus errvoluptatem
                    accusantium doloremque laudantium totam rem aperiam eaque
                    abillo inventorey veritatis et architecto beatae vitae dicta
                    sunt explicabo
                  </p>
                  <h5 className="author-title">
                    Joseph P. Brewer,{" "}
                    <span className="position">Senior Designer</span>
                  </h5>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Testimonial section  ======*/}
      {/*====== Start skill section  ======*/}
      <section className="skill-section overflow-hidden pt-125 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="skill-content-box content-box-gap mb-50 pr-lg-40 wow fadeInLeft">
                <div className="section-title section-title-left">
                  <span className="sub-title">Work Together</span>
                  <h2>Have Any Project On Minds? Or Work Together</h2>
                </div>
                <p>
                  But I must explain to you how all this mistaken idea
                  denouncing plesure and praising pain was born and I will give
                  you a complete account of they system and expound the actual
                  teachings of the great
                </p>
                <div className="single-progress-bar progress-bar-one mb-40">
                  <div className="progress-title">
                    <h5>
                      Business Development <span>83%</span>
                    </h5>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar wow slideInLeft"
                      style={{ width: "83%" }}
                    />
                  </div>
                </div>
                <div className="single-progress-bar progress-bar-two mb-40">
                  <div className="progress-title">
                    <h5>
                      Marketing Strategy <span>92%</span>
                    </h5>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar wow slideInLeft"
                      style={{ width: "92%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="skill-img-box mb-50 text-lg-right text-md-center p-r z-1 wow fadeInRight">
                <img src="assets/images/gallery/skill-2.png" alt="" />
                <div className="circle-border">
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End skill section  ======*/}
      {/*====== Start Newsletter  ======*/}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-wrapper-two pt-80 pb-80 wow fadeInLeft">
            <div className="shape-svg">
              <img src="assets/images/shape/shape-10.png" alt="Shape" />
            </div>
            <div className="newsletter-image-box">
              <img
                src="assets/images/gallery/newsletter-1.jpg"
                className="newsletter-image-one"
                alt=""
              />
              <div className="circle-border">
                <span />
              </div>
            </div>
            <div className="row justify-content-xl-center">
              <div className="col-xl-6 col-lg-10">
                <div className="newsletter-content-box pl-lg-70 wow fadeInRight">
                  <div className="section-title section-title-left">
                    <span className="sub-title">Get More Updates</span>
                    <h2>Subscribe Newsletters</h2>
                  </div>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="newsletter-form"
                  >
                    <div className="form_group">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                          required=""
                        />
                      </div>
                      <div className="form_gorup">
                        <button className="main-btn btn-orange">
                          Subscribe Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index4;
