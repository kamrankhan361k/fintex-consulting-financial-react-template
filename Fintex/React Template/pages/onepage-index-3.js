import Link from "next/link";
import Slider from "react-slick";
import dynamic from "next/dynamic";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});
import Layout from "../src/layout/Layout";
import { testimonialSliderThree } from "../src/sliderProps";
const OnePageIndex3 = () => {
  const singleMenus = [
    { name: "Home", href: "onepage-home" },
    { name: "About", href: "onepage-about" },
    { name: "Services", href: "onepage-service" },
    { name: "Features", href: "onepage-features" },
    { name: "Testimonial", href: "onepage-testimonial" },
  ];
  return (
    <Layout
      header={3}
      footer={3}
      extraBodyCls="home-three-dark"
      singleMenus={singleMenus}
    >
      <section className="banner-three p-r z-1" id="onepage-home">
        <div className="shape shape-one animate-float-x">
          <span>
            <img src="assets/images/shape/shape-5.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-two animate-float-y">
          <span>
            <img src="assets/images/shape/shape-6.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-three animate-float-y">
          <span>
            <img src="assets/images/shape/shape-7.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-four animate-float-y">
          <span>
            <img src="assets/images/shape/shape-8.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-five">
          <span />
        </div>
        <div className="shape shape-six">
          <span>
            <img src="assets/images/shape/shape-9.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="wow fadeInUp" data-wow-delay=".5s">
                  Most secure &amp; transparent bank ever
                </h1>
                <p className="wow fadeInDown" data-wow-delay=".7s">
                  Sit amet consectetur adipiscing sed eiusmod temporse
                  incididunt ut labore et dolore magna aliqua
                </p>
                <div className="hero-button wow fadeInUp" data-wow-delay=".9s">
                  <a href="#" className="main-btn btn-blue">
                    14th Days Free Trial
                  </a>
                  <a href="#" className="main-btn filled-btn filled-white">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="hero-img-box wow fadeInRight"
                data-wow-delay=".10s"
              >
                <img
                  src="assets/images/hero/hero-three-one.png"
                  className="hero-img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Banner Section ======*/}
      {/*====== Start Fact Section ======*/}
      <section className="fact-section-three p-r z-1 pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="author-rating-box-two mb-40 wow fadeInUp">
                <ul className="rating">
                  <li>
                    <span>Quality</span>
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
                <h5>Manage Your Banking With Fintex Us</h5>
                <div className="author-thumb-title d-flex align-items-center">
                  <div className="author-thumb">
                    <img
                      src="assets/images/testimonial/thumb-4.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h5>Ronald B. Griffin</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="fact-wrapper ml-lg-55">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="single-counter-item-three text-center mb-40 wow fadeInDown">
                      <div className="text">
                        <h2 className="number">
                          <span className="currency">$</span>
                          <Counter end={963} />k
                        </h2>
                        <h5>Total Active Users</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="single-counter-item-three text-center mb-40 wow fadeInUp">
                      <div className="text">
                        <h2 className="number">
                          <span className="currency">$</span>
                          <Counter end={963} />m
                        </h2>
                        <h5>Total Transactions</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="single-counter-item-three text-center mb-40 wow fadeInDown">
                      <div className="text">
                        <h2 className="number">
                          <Counter end={963} />+
                        </h2>
                        <h5>Registered Countries</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fact Section ======*/}
      {/*====== Start About section ======*/}
      <section className="about-section pt-90 pb-80" id="onepage-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-six_image-box p-r z-1 mb-50 wow fadeInLeft">
                <div className="shape shape-one">
                  <span />
                </div>
                <img
                  src="assets/images/gallery/card-1.png"
                  className="about-img-one"
                  alt=""
                />
                <img
                  src="assets/images/gallery/card-price.png"
                  className="about-img-two animate-float-y"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-box content-box-gap mb-50 wow fadeInRight">
                <div className="section-title text-white wow fadeInDown">
                  <h2>Easily manage your finance for daily needs</h2>
                </div>
                <p>
                  On the other hand we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment so blinded by desire, that they
                  cannot foresee the pain and trouble that are bound to ensue
                </p>
                <Link legacyBehavior href="/about">
                  <a className="main-btn btn-blue">Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About section ======*/}
      {/*====== Start Features section ======*/}
      <section className="features-section-two pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="features-content-box content-box-gap mb-50 wow fadeInLeft">
                <div className="section-title text-white wow fadeInDown">
                  <h2>Trusted Payment Services for your transactions</h2>
                </div>
                <p>
                  On the other hand we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure the moment so blinded by desire, that they cannot
                  foresee
                </p>
                <ul className="check-style-one">
                  <li>Reflection 2022 Desktop Wallpapers Edition</li>
                  <li>Designing A Better Infinite Scroll</li>
                </ul>
                <Link legacyBehavior href="/about">
                  <a className="main-btn filled-btn filled-white">Learn More</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-two_img-box p-r z-1 mb-50 wow fadeInRight">
                <div className="shape shape-one">
                  <span />
                </div>
                <img src="assets/images/gallery/card-2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features section ======*/}
      {/*====== Start Service section ======*/}
      <section className="service-section pb-50" id="onepage-service">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-white text-center mb-110 wow fadeInDown">
                <span className="sub-title">Our Services</span>
                <h2>Amazing Service For Digital Banking Transaction</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-item-three animate-hover-icon text-center mb-80 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-user" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Checking Accounts.</a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis istees natus error sit
                    voluptatem accusantium doloremque laudantie totam
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="btn-link">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-item-three animate-hover-icon text-center mb-80 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-finance-1" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Savings Accounts</a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis istees natus error sit
                    voluptatem accusantium doloremque laudantie totam
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="btn-link">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-item-three animate-hover-icon text-center mb-80 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-credit" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Debit &amp; Credit Cards</a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis istees natus error sit
                    voluptatem accusantium doloremque laudantie totam
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="btn-link">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-item-three animate-hover-icon text-center mb-80 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-insurance" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Insurance &amp; Banking</a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis istees natus error sit
                    voluptatem accusantium doloremque laudantie totam
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="btn-link">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-item-three animate-hover-icon text-center mb-80 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-personal-wealth" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Wealth Management</a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis istees natus error sit
                    voluptatem accusantium doloremque laudantie totam
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="btn-link">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-item-three animate-hover-icon text-center mb-80 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-database" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Transaction Reports</a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis istees natus error sit
                    voluptatem accusantium doloremque laudantie totam
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="btn-link">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service section ======*/}
      {/*====== Start Features section ======*/}
      <section className="features-section-two" id="onepage-features">
        <div className="container">
          <div className="features-wrapper wow fadeInDown">
            <div className="row">
              <div className="col-lg-5">
                <div className="features-two_img-box p-r z-1 mb-50">
                  <div className="shape shape-one">
                    <span />
                  </div>
                  <img
                    src="assets/images/gallery/card-3.png"
                    alt="Mobile Mockup"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="features-content-box content-box-gap mb-20">
                  <div className="section-title text-white wow fadeInDown">
                    <h2>
                      Save Money to Organize and Determine Priority Future
                    </h2>
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusanlorem que laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="features-item-left-box text-white mb-30 wow fadeInUp">
                        <div className="icon">
                          <i className="flaticon-money-transfer" />
                        </div>
                        <div className="text">
                          <h4 className="title">Separating Money</h4>
                          <p>
                            Denounce with righte indige nation and dislike men
                            demor charms pleasure moment
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="features-item-left-box text-white mb-30 wow fadeInUp">
                        <div className="icon">
                          <i className="flaticon-ringing" />
                        </div>
                        <div className="text">
                          <h4 className="title">Instant Notification</h4>
                          <p>
                            Denounce with righte indige nation and dislike men
                            demor charms pleasure moment
                          </p>
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
      {/*====== End Features section ======*/}
      {/*====== Start Testimonial section ======*/}
      <section
        className="testimonial-section pt-130 pb-80"
        id="onepage-testimonial"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="testimonial-wrapper-three mr-lg-70 mb-50 wow fadeInLeft">
                <div className="section-title text-white">
                  <h2>What Our Client’s Say About Us</h2>
                </div>
                <Slider
                  {...testimonialSliderThree}
                  className="testimonial-slider-three mb-60"
                >
                  <div className="testimonial-item-three">
                    <div className="testimonial-content">
                      <p>
                        On the other hand we denounce with righteous indignation
                        and dislike men who are so beguiledc and demoralized by
                        the charms of pleasure of the moment so blinded by
                        desire foresee
                      </p>
                      <div className="author-rating-box d-flex align-items-center justify-content-between flex-wrap">
                        <div className="author-thumb-title d-flex align-items-center">
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
                        <div className="author-rating">
                          <h6>Good Quality</h6>
                          <ul className="rating">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item-three">
                    <div className="testimonial-content">
                      <p>
                        On the other hand we denounce with righteous indignation
                        and dislike men who are so beguiledc and demoralized by
                        the charms of pleasure of the moment so blinded by
                        desire foresee
                      </p>
                      <div className="author-rating-box d-flex align-items-center justify-content-between flex-wrap">
                        <div className="author-thumb-title d-flex align-items-center">
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
                        <div className="author-rating">
                          <h6>Good Quality</h6>
                          <ul className="rating">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item-three">
                    <div className="testimonial-content">
                      <p>
                        On the other hand we denounce with righteous indignation
                        and dislike men who are so beguiledc and demoralized by
                        the charms of pleasure of the moment so blinded by
                        desire foresee
                      </p>
                      <div className="author-rating-box d-flex align-items-center justify-content-between flex-wrap">
                        <div className="author-thumb-title d-flex align-items-center">
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
                        <div className="author-rating">
                          <h6>Good Quality</h6>
                          <ul className="rating">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
                <div className="testimonial-dots" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="map-img-box p-r z-1 mb-50 wow fadeInRight">
                <img src="assets/images/gallery/map-2.png" alt="" />
                <div className="thumb-marker">
                  <img
                    src="assets/images/testimonial/marker-thumb.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial section ======*/}
      {/*====== Start Newsletter section ======*/}
      <section className="newsletter-seciton">
        <div className="container">
          <div className="newsletter-wrapper-one pt-70 pb-70 wow fadeInDown">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section-title text-center text-white mb-50">
                  <h2>Subscribe Our Newsletter to Get More Updates</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="newsletter-from-two">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <span className="input-box">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="User Name"
                          name="name"
                        />
                        <i className="far fa-user" />
                      </span>
                      <span className="input-box">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                        />
                        <i className="far fa-envelope" />
                      </span>
                      <div className="form-btn">
                        <button className="main-btn btn-blue">Subscribe</button>
                      </div>
                    </div>
                    <div className="form_checkbox_two text-center mt-30">
                      <input
                        type="checkbox"
                        name="checkbox"
                        id="check1"
                        defaultChecked=""
                      />
                      <label htmlFor="check1">
                        <span>
                          Subscribe to be the first to hear about upcoming
                          fintech services!
                        </span>
                      </label>
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
export default OnePageIndex3;
