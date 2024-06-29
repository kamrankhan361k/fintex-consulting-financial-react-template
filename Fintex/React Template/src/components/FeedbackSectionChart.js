import Slider from "react-slick";
import { testimonialSliderOne } from "../sliderProps";
import ProgressBar from "./ProgressBar";

const FeedbackSectionChart = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-5 col-lg-6">
          {/*=== Testimonial Wrapper ===*/}
          <div className="testimonial-wrapper-one mb-50 wow fadeInLeft">
            <Slider
              {...testimonialSliderOne}
              className="testimonial-slider-one"
            >
              <div className="testimonial-item">
                <div className="quote">
                  <i className="flaticon-left-quote-1" />
                </div>
                <div className="testimonial-content">
                  <p>
                    On the other hand, we denounce with righteous indignations
                    dislike men who are so beguile moralized by the charms of
                    pleasure of the moment so blinded desire
                  </p>
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
              <div className="testimonial-item">
                <div className="quote">
                  <i className="flaticon-left-quote-1" />
                </div>
                <div className="testimonial-content">
                  <p>
                    On the other hand, we denounce with righteous indignations
                    dislike men who are so beguile moralized by the charms of
                    pleasure of the moment so blinded desire
                  </p>
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
              <div className="testimonial-item">
                <div className="quote">
                  <i className="flaticon-left-quote-1" />
                </div>
                <div className="testimonial-content">
                  <p>
                    On the other hand, we denounce with righteous indignations
                    dislike men who are so beguile moralized by the charms of
                    pleasure of the moment so blinded desire
                  </p>
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
        </div>
        <div className="col-xl-7 col-lg-6">
          {/*=== Skill Content Box ===*/}
          <div className="skill-content-box wow fadeInRight">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-6 col-sm-12">
                <div className="single-skill-item d-flex align-items-center mb-30">
                  <ProgressBar value={85} color="#f94d1c" />
                  <div className="text">
                    <h3 className="title">Business Consulting</h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-6 col-sm-12">
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
      {/*=== Video Wrapper ===*/}
      <div
        className="video-wrapper-one bg_cover pt-220 pb-220 p-r z-1 wow fadeInUp"
        style={{ backgroundImage: "url(assets/images/bg/video-bg-1.jpg)" }}
      >
        <svg
          className="shape shape-one"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="565px"
          height="210px"
        >
          <path
            fillRule="evenodd"
            d="M0.015,210.000 L214.218,32.644 L412.208,131.393 L565.000,0.219 L565.000,210.000 L0.015,210.000 Z"
          />
        </svg>
        <div className="row align-items-center justify-content-lg-end">
          <div className="col-xl-7 col-lg-6">
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
  );
};
export default FeedbackSectionChart;
