import Slider from "react-slick";
import FeedbackSectionChart from "../src/components/FeedbackSectionChart";
import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import {
  testimonialSliderThree,
  testimonialSliderTwo,
} from "../src/sliderProps";
const Testimonial = () => {
  return (
    <Layout>
      <PageBanner pageName={"Testimonial"} />{" "}
      <section className="testimonial-area pt-120 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Clients Testtimonials</span>
                <h2>What’s Our Customer Say</h2>
              </div>
            </div>
          </div>
          {/*=== Testimonial Slider ===*/}
          <Slider {...testimonialSliderTwo} className="testimonial-slider-two">
            <div className="single-testimonial-item wow fadeInUp">
              <div className="quote-ratings d-flex justify-content-between">
                <div className="quote">
                  <i className="flaticon-left-quote-1" />
                </div>
                <ul className="ratings">
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
              <div className="testimonial-content">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error eluptate
                  accusantium doloremque laudantium, totam rem aperam eaque quae
                  abillo inventore veritatis et quasi architectoe beatae vitae
                  dicta sunt explicabo consequun
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
            <div className="single-testimonial-item wow fadeInUp">
              <div className="quote-ratings d-flex justify-content-between">
                <div className="quote">
                  <i className="flaticon-left-quote-1" />
                </div>
                <ul className="ratings">
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
              <div className="testimonial-content">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error eluptate
                  accusantium doloremque laudantium, totam rem aperam eaque quae
                  abillo inventore veritatis et quasi architectoe beatae vitae
                  dicta sunt explicabo consequun
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
            <div className="single-testimonial-item wow fadeInUp">
              <div className="quote-ratings d-flex justify-content-between">
                <div className="quote">
                  <i className="flaticon-left-quote-1" />
                </div>
                <ul className="ratings">
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
              <div className="testimonial-content">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error eluptate
                  accusantium doloremque laudantium, totam rem aperam eaque quae
                  abillo inventore veritatis et quasi architectoe beatae vitae
                  dicta sunt explicabo consequun
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
            <div className="single-testimonial-item wow fadeInUp">
              <div className="quote-ratings d-flex justify-content-between">
                <div className="quote">
                  <i className="flaticon-left-quote-1" />
                </div>
                <ul className="ratings">
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
              <div className="testimonial-content">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error eluptate
                  accusantium doloremque laudantium, totam rem aperam eaque quae
                  abillo inventore veritatis et quasi architectoe beatae vitae
                  dicta sunt explicabo consequun
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
          </Slider>
        </div>
      </section>
      {/*====== End Feedback Section ======*/}
      {/*====== Start Feedback Section ======*/}
      <section className="feedback-section p-r z-2 pb-130">
        <FeedbackSectionChart />
      </section>
      {/*====== End Feedback Section ======*/}
      {/*====== Start Feedback Section ======*/}
      <section className="testimonial-section pb-130">
        <div className="container">
          {/*=== Testimonial Wrapper ===*/}
          <div className="testimonial-wrapper-two light-gray-bg wow fadeInUp">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title section-title-left border-bottom-1 mb-40 pb-20">
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
export default Testimonial;
