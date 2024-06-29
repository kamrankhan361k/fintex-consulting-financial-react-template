import Link from "next/link";
import Slider from "react-slick";
import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import { gallerySlider, videoSlider } from "../src/sliderProps";
const JobDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Careers Details"} />
      <section className="job-details-page pt-60 pb-100">
        <div className="container">
          {/*=== Job Details Wrapper ===*/}
          <div className="job-details-wrapper">
            <div className="row">
              <div className="col-lg-12">
                {/*=== Single Job Item ===*/}
                <div className="single-job-item d-flex mb-30 wow fadeInUp">
                  <div className="job-thumb">
                    <img
                      src="assets/images/career/job-1.png"
                      alt="Job Author"
                    />
                  </div>
                  <div className="job-main-content d-flex align-items-start">
                    <div className="job-content">
                      <h3 className="title">
                        <Link legacyBehavior href="/job">
                          <a>Senior Graphic Designer</a>
                        </Link>
                        <span className="status full">Full Time</span>
                      </h3>
                      <div className="job-meta">
                        <span>
                          <i className="far fa-tag" />
                          <a href="#">Web Designer</a>
                        </span>
                        <span>
                          <i className="far fa-map-marker-alt" />
                          New York City
                        </span>
                        <span>
                          <i className="far fa-usd-circle" />
                          $250-950
                        </span>
                        <span>
                          <i className="far fa-calendar-alt" />
                          April 25, 2022
                        </span>
                      </div>
                    </div>
                    <div className="apply-button text-lg-right">
                      <p>
                        Application ends :{" "}
                        <span className="date">May 23, 2023</span>
                      </p>
                      <a href="#" className="main-btn btn-red">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8">
                {/*=== Description Box ===*/}
                <div className="description-box mb-35 wow fadeInUp">
                  <h4 className="title">Job Descriptions</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicbo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam poris
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem
                  </p>
                </div>
                {/*=== Description Box ===*/}
                <div className="description-box mb-35 wow fadeInUp">
                  <h4 className="title">Key Responsibilities</h4>
                  <p>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam poris suscipit laboriosam
                  </p>
                  <ul className="check-style-three">
                    <li>Universal Principles Of User Experience Design</li>
                    <li>
                      An Overview Of The Most Common UX Design Deliverables
                    </li>
                    <li>Designing The Perfect Feature Comparison Table</li>
                    <li>Universal Principles Of User Experience Design</li>
                    <li>
                      An Overview Of The Most Common UX Design Deliverables
                    </li>
                    <li>Designing The Perfect Feature Comparison Table</li>
                    <li>Universal Principles Of User Experience Design</li>
                    <li>
                      An Overview Of The Most Common UX Design Deliverables
                    </li>
                    <li>Designing The Perfect Feature Comparison Table</li>
                    <li>Universal Principles Of User Experience Design</li>
                    <li>
                      An Overview Of The Most Common UX Design Deliverables
                    </li>
                    <li>Designing The Perfect Feature Comparison Table</li>
                  </ul>
                </div>
                {/*=== Description Box ===*/}
                <div className="description-box mb-35 wow fadeInUp">
                  <h4 className="title">Skill &amp; Experience</h4>
                  <ul className="check-style-three">
                    <li>
                      You have at least 2 years’ experience working as a Web
                      Designer.
                    </li>
                    <li>You have experience using Figma, Photoshop or XD</li>
                    <li>
                      You have some previous experience working in an agile
                      environment – Think two-week sprints.
                    </li>
                    <li>
                      You are familiar using Jira and Confluence in your
                      workflow
                    </li>
                  </ul>
                </div>
                {/*=== Description Box ===*/}
                <div className="description-box mb-35 wow fadeInUp">
                  <h4 className="title">Skill &amp; Experience</h4>
                  <p>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    poris suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem
                  </p>
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
                {/*=== Description Box ===*/}
                <div className="description-box gallery-box mb-35 wow fadeInUp">
                  <h4 className="title">Photos &amp; Videos</h4>
                  <Slider {...gallerySlider} className="gallery-slider mb-20">
                    <div className="single-gallery-img">
                      <img
                        src="assets/images/career/img-1.jpg"
                        alt="Gallery Image"
                      />
                    </div>
                    <div className="single-gallery-img">
                      <img
                        src="assets/images/career/img-2.jpg"
                        alt="Gallery Image"
                      />
                    </div>
                    <div className="single-gallery-img">
                      <img
                        src="assets/images/career/img-3.jpg"
                        alt="Gallery Image"
                      />
                    </div>
                    <div className="single-gallery-img">
                      <img
                        src="assets/images/career/img-2.jpg"
                        alt="Gallery Image"
                      />
                    </div>
                  </Slider>
                  <Slider
                    {...videoSlider}
                    className="video-slider mb-35 wow fadeInUp"
                  >
                    <div className="single-video">
                      <img src="assets/images/career/img-4.jpg" alt="" />
                      <div className="image-overlay" />
                      <div className="play-content text-center">
                        <a
                          href="https://www.youtube.com/watch?v=TboWOSW7qCI"
                          className="video-popup"
                        >
                          <i className="fas fa-play" />
                        </a>
                      </div>
                    </div>
                    <div className="single-video">
                      <img src="assets/images/career/img-4.jpg" alt="" />
                      <div className="image-overlay" />
                      <div className="play-content text-center">
                        <a
                          href="https://www.youtube.com/watch?v=TboWOSW7qCI"
                          className="video-popup"
                        >
                          <i className="fas fa-play" />
                        </a>
                      </div>
                    </div>
                  </Slider>
                </div>
                {/*=== Description Box ===*/}
                <div className="description-box related-jobs wow fadeInUp">
                  <h4 className="title">Related Jobs</h4>
                  <div className="single-job-item d-flex mb-30">
                    <div className="job-thumb">
                      <img
                        src="assets/images/career/job-2.png"
                        alt="Job Author"
                      />
                    </div>
                    <div className="job-main-content d-flex">
                      <div className="job-content">
                        <h3 className="title">
                          <Link legacyBehavior href="/job-details">
                            <a>Junior Product Designer</a>
                          </Link>
                          <span className="status part">Part Time</span>
                        </h3>
                        <div className="job-meta">
                          <span>
                            <i className="far fa-tag" />
                            <a href="#">Web Designer</a>
                          </span>
                          <span>
                            <i className="far fa-map-marker-alt" />
                            New York City
                          </span>
                          <span>
                            <i className="far fa-usd-circle" />
                            $250-950
                          </span>
                          <span>
                            <i className="far fa-calendar-alt" />
                            April 25, 2022
                          </span>
                        </div>
                      </div>
                      <div className="wishlist-button">
                        <a href="#">
                          <i className="fas fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="single-job-item d-flex mb-30">
                    <div className="job-thumb">
                      <img
                        src="assets/images/career/job-3.png"
                        alt="Job Author"
                      />
                    </div>
                    <div className="job-main-content d-flex">
                      <div className="job-content">
                        <h3 className="title">
                          <Link legacyBehavior href="/job-details">
                            <a>Digital Customer Services</a>
                          </Link>
                          <span className="status part">Part Time</span>
                        </h3>
                        <div className="job-meta">
                          <span>
                            <i className="far fa-tag" />
                            <a href="#">Web Designer</a>
                          </span>
                          <span>
                            <i className="far fa-map-marker-alt" />
                            New York City
                          </span>
                          <span>
                            <i className="far fa-usd-circle" />
                            $250-950
                          </span>
                          <span>
                            <i className="far fa-calendar-alt" />
                            April 25, 2022
                          </span>
                        </div>
                      </div>
                      <div className="wishlist-button">
                        <a href="#">
                          <i className="fas fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="single-job-item d-flex mb-30">
                    <div className="job-thumb">
                      <img
                        src="assets/images/career/job-4.png"
                        alt="Job Author"
                      />
                    </div>
                    <div className="job-main-content d-flex">
                      <div className="job-content">
                        <h3 className="title">
                          <Link legacyBehavior href="/job-details">
                            <a>Assistant / Store Keeper</a>
                          </Link>
                          <span className="status part">Part Time</span>
                        </h3>
                        <div className="job-meta">
                          <span>
                            <i className="far fa-tag" />
                            <a href="#">Web Designer</a>
                          </span>
                          <span>
                            <i className="far fa-map-marker-alt" />
                            New York City
                          </span>
                          <span>
                            <i className="far fa-usd-circle" />
                            $250-950
                          </span>
                          <span>
                            <i className="far fa-calendar-alt" />
                            April 25, 2022
                          </span>
                        </div>
                      </div>
                      <div className="wishlist-button">
                        <a href="#">
                          <i className="fas fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="single-job-item d-flex mb-30">
                    <div className="job-thumb">
                      <img
                        src="assets/images/career/job-5.png"
                        alt="Job Author"
                      />
                    </div>
                    <div className="job-main-content d-flex">
                      <div className="job-content">
                        <h3 className="title">
                          <Link legacyBehavior href="/job-details">
                            <a>Junior Product Designer</a>
                          </Link>
                          <span className="status part">Part Time</span>
                        </h3>
                        <div className="job-meta">
                          <span>
                            <i className="far fa-tag" />
                            <a href="#">Web Designer</a>
                          </span>
                          <span>
                            <i className="far fa-map-marker-alt" />
                            New York City
                          </span>
                          <span>
                            <i className="far fa-usd-circle" />
                            $250-950
                          </span>
                          <span>
                            <i className="far fa-calendar-alt" />
                            April 25, 2022
                          </span>
                        </div>
                      </div>
                      <div className="wishlist-button">
                        <a href="#">
                          <i className="fas fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                {/*=== Jobs Sidebar ===*/}
                <div className="jobs-sidebar">
                  <div className="job-widget job-info-widget mb-30 wow fadeInUp">
                    <h4 className="title">Job Skills</h4>
                    <div className="job-info-box d-flex">
                      <div className="icon">
                        <i className="far fa-calendar-alt" />
                      </div>
                      <div className="text">
                        <h6>Job Posted</h6>
                        <p>February 25, 2022</p>
                      </div>
                    </div>
                    <div className="job-info-box d-flex">
                      <div className="icon">
                        <i className="far fa-map-marker-alt" />
                      </div>
                      <div className="text">
                        <h6>Location</h6>
                        <p>504 Main Street, New York</p>
                      </div>
                    </div>
                    <div className="job-info-box d-flex">
                      <div className="icon">
                        <i className="far fa-usd-circle" />
                      </div>
                      <div className="text">
                        <h6>Offered Salary:</h6>
                        <p>$250-$750/monthly</p>
                      </div>
                    </div>
                    <div className="job-info-box d-flex">
                      <div className="icon">
                        <i className="far fa-calendar-alt" />
                      </div>
                      <div className="text">
                        <h6>Expiration Date :</h6>
                        <p>December 25, 2022</p>
                      </div>
                    </div>
                    <div className="job-info-box d-flex">
                      <div className="icon">
                        <i className="far fa-user" />
                      </div>
                      <div className="text">
                        <h6>Experience</h6>
                        <p>4 Years (Web Design)</p>
                      </div>
                    </div>
                    <div className="job-info-box d-flex">
                      <div className="icon">
                        <i className="far fa-graduation-cap" />
                      </div>
                      <div className="text">
                        <h6>Education</h6>
                        <p>Bachelor Degree</p>
                      </div>
                    </div>
                    <div className="job-info-box d-flex">
                      <div className="icon">
                        <i className="far fa-clipboard-list" />
                      </div>
                      <div className="text">
                        <h6>Career Level</h6>
                        <p>Assistant Officer</p>
                      </div>
                    </div>
                  </div>
                  <div className="job-widget job-skill-widget mb-30 wow fadeInUp">
                    <h4 className="title">Job Skills</h4>
                    <a href="#">Web Design</a>
                    <a href="#">UI &amp; UX</a>
                    <a href="#">App</a>
                    <a href="#">Dashboard</a>
                    <a href="#">Landing Page</a>
                  </div>
                  <div className="job-widget job-location-widget mb-30 wow fadeInUp">
                    <h4 className="title">Job Location</h4>
                    <div className="map-box">
                      <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Job Details section  ======*/}
      {/*====== Start Newsletter Section ======*/}
      <Newsletter />
    </Layout>
  );
};
export default JobDetails;
