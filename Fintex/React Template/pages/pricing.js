import Link from "next/link";
import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const Pricing = () => {
  return (
    <Layout>
      <PageBanner pageName={"Pricing Package"} />
      <section className="pricing-section pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-75">
                <span className="sub-title">Our Pricing Package</span>
                <h2>Amazing Pricing Package</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              {/*=== Pricing Item ===*/}
              <div className="pricing-item-one mb-60 wow fadeInUp">
                <span className="save">Save 100%</span>
                <div className="pricing-header text-center pb-35">
                  <span className="plan">Free Plan</span>
                  <h2 className="price">
                    <span className="currency">$</span>0
                    <span className="sm">.00</span>
                  </h2>
                </div>
                <div className="pricing-body">
                  <ul className="pricing-list">
                    <li className="check">Free Consultations</li>
                    <li className="check">Business Planning</li>
                    <li className="check">Investment Process</li>
                    <li className="uncheck">Market Research</li>
                    <li className="uncheck">Online Support</li>
                  </ul>
                  <Link legacyBehavior href="/pricing">
                    <a className="main-btn btn-black">Start Package</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              {/*=== Pricing Item ===*/}
              <div className="pricing-item-one mb-60 wow fadeInUp">
                <span className="save">Save 25%</span>
                <div className="pricing-header text-center pb-35">
                  <span className="plan">Regular Plan</span>
                  <h2 className="price">
                    <span className="currency">$</span>48
                    <span className="sm">.00</span>
                  </h2>
                </div>
                <div className="pricing-body">
                  <ul className="pricing-list">
                    <li className="check">Free Consultations</li>
                    <li className="check">Business Planning</li>
                    <li className="check">Investment Process</li>
                    <li className="check">Market Research</li>
                    <li className="check">Online Support</li>
                  </ul>
                  <Link legacyBehavior href="/pricing">
                    <a className="main-btn btn-black">Start Package</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              {/*=== Pricing Item ===*/}
              <div className="pricing-item-one mb-60 wow fadeInUp">
                <span className="save">Save 49%</span>
                <div className="pricing-header text-center pb-35">
                  <span className="plan">Standard Plan</span>
                  <h2 className="price">
                    <span className="currency">$</span>48
                    <span className="sm">.00</span>
                  </h2>
                </div>
                <div className="pricing-body">
                  <ul className="pricing-list">
                    <li className="check">Free Consultations</li>
                    <li className="check">Business Planning</li>
                    <li className="check">Investment Process</li>
                    <li className="check">Market Research</li>
                    <li className="check">Online Support</li>
                  </ul>
                  <Link legacyBehavior href="/pricing">
                    <a className="main-btn btn-black">Start Package</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              {/*=== Pricing Item ===*/}
              <div className="pricing-item-one mb-60 wow fadeInUp">
                <span className="save">Save 23%</span>
                <div className="pricing-header text-center pb-35">
                  <span className="plan">Silver Plan</span>
                  <h2 className="price">
                    <span className="currency">$</span>96
                    <span className="sm">.00</span>
                  </h2>
                </div>
                <div className="pricing-body">
                  <ul className="pricing-list">
                    <li className="check">Free Consultations</li>
                    <li className="check">Business Planning</li>
                    <li className="check">Investment Process</li>
                    <li className="check">Market Research</li>
                    <li className="check">Online Support</li>
                  </ul>
                  <Link legacyBehavior href="/pricing">
                    <a className="main-btn btn-black">Start Package</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Pricing Section ======*/}
      {/*====== Start Pricing Section ======*/}
      <section className="pricing-section pt-30 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*=== Faq Content Box ===*/}
              <div className="faq-one_content-box content-box-gap mb-50 wow fadeInLeft">
                <div className="section-title section-title-left">
                  <span className="sub-title">Our Pricing Package</span>
                  <h2>Best Pricing Package for Business</h2>
                </div>
                <p>
                  But I must explain you how all this mistaken idea denouncing
                  pleasure and praising pain was born and I will give you
                  coplete account of the system and expound the actual
                </p>
                <ul className="check-style-one mb-50">
                  <li>Reflection 2022 Desktop Wallpapers Edition</li>
                  <li>Designing A Better Infinite Scroll</li>
                </ul>
                <a href="#" className="main-btn filled-btn">
                  Explore More Us
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  {/*=== Pricing Item ===*/}
                  <div className="pricing-item-one mb-60 wow fadeInUp">
                    <span className="save">Save 49%</span>
                    <div className="pricing-header text-center pb-35">
                      <span className="plan">Regular Plan</span>
                      <h2 className="price">
                        <span className="currency">$</span>48
                        <span className="sm">.00</span>
                      </h2>
                    </div>
                    <div className="pricing-body">
                      <ul className="pricing-list">
                        <li className="check">Free Consultations</li>
                        <li className="check">Business Planning</li>
                        <li className="check">Investment Process</li>
                        <li className="check">Market Research</li>
                        <li className="check">Online Support</li>
                      </ul>
                      <Link legacyBehavior href="/pricing">
                        <a className="main-btn btn-black">Start Package</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  {/*=== Pricing Item ===*/}
                  <div className="pricing-item-one mb-60 wow fadeInUp">
                    <span className="save">Save 23%</span>
                    <div className="pricing-header text-center pb-35">
                      <span className="plan">Standard Plan</span>
                      <h2 className="price">
                        <span className="currency">$</span>96
                        <span className="sm">.00</span>
                      </h2>
                    </div>
                    <div className="pricing-body">
                      <ul className="pricing-list">
                        <li className="check">Free Consultations</li>
                        <li className="check">Business Planning</li>
                        <li className="check">Investment Process</li>
                        <li className="check">Market Research</li>
                        <li className="check">Online Support</li>
                      </ul>
                      <Link legacyBehavior href="/pricing">
                        <a className="main-btn btn-black">Start Package</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Pricing Section ======*/}
      {/*====== Start Pricing Section ======*/}
      <section className="pricing-area pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-75 wow fadeInDown">
                <span className="sub-title">Our Pricing Package</span>
                <h2>Amazing Pricing Package</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Pricing Item ===*/}
              <div
                className="pricing-item-two mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <span className="save">Save 100%</span>
                <div className="pricing-header text-center pb-25">
                  <span className="plan">Regular Plan</span>
                  <h2 className="price">
                    <span className="currency">$</span>19
                    <span className="sm">
                      .00/<span className="duration">monthly</span>
                    </span>
                  </h2>
                </div>
                <div className="pricing-body">
                  <ul className="pricing-list">
                    <li className="check">Free Consultations</li>
                    <li className="check">Business Planning</li>
                    <li className="check">Investment Process</li>
                    <li className="check">Market Research</li>
                  </ul>
                  <Link legacyBehavior href="/pricing">
                    <a className="main-btn btn-black">Start Package</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Pricing Item ===*/}
              <div
                className="pricing-item-two mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <span className="save">Save 23%</span>
                <div className="pricing-header text-center pb-25">
                  <span className="plan">Standard Plan</span>
                  <h2 className="price">
                    <span className="currency">$</span>39
                    <span className="sm">
                      .00/<span className="duration">monthly</span>
                    </span>
                  </h2>
                </div>
                <div className="pricing-body">
                  <ul className="pricing-list">
                    <li className="check">Free Consultations</li>
                    <li className="check">Business Planning</li>
                    <li className="check">Investment Process</li>
                    <li className="check">Market Research</li>
                  </ul>
                  <Link legacyBehavior href="/pricing">
                    <a className="main-btn btn-black">Start Package</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Pricing Item ===*/}
              <div
                className="pricing-item-two mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <span className="save">Save 15%</span>
                <div className="pricing-header text-center pb-25">
                  <span className="plan">Silver Plan</span>
                  <h2 className="price">
                    <span className="currency">$</span>98
                    <span className="sm">
                      .00/<span className="duration">monthly</span>
                    </span>
                  </h2>
                </div>
                <div className="pricing-body">
                  <ul className="pricing-list">
                    <li className="check">Free Consultations</li>
                    <li className="check">Business Planning</li>
                    <li className="check">Investment Process</li>
                    <li className="check">Market Research</li>
                  </ul>
                  <Link legacyBehavior href="/pricing">
                    <a className="main-btn btn-black">Start Package</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Pricing Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <Newsletter />
    </Layout>
  );
};
export default Pricing;
