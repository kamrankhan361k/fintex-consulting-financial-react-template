import Link from "next/link";
import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import ProgressBar from "../src/components/ProgressBar";
import Layout from "../src/layout/Layout";
const Team = () => {
  return (
    <Layout>
      <PageBanner pageName={"Team Member"} />{" "}
      <section className="skill-section pt-130 pb-160">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-12">
              {/*=== Skill Content Box ===*/}
              <div className="skill-one_content-box mb-50">
                <div className="section-title section-title-left mb-40 wow fadeInDown">
                  <span className="sub-title">Best Skills</span>
                  <h2>We Are More Experienced In Business Solutions</h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantiu doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo intore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-skill-item d-flex align-items-center mb-40 wow fadeInUp">
                      <ProgressBar value={85} color="#f94d1c" />
                      <div className="text">
                        <h3 className="title">Business Consulting</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-skill-item d-flex align-items-center mb-40 wow fadeInUp">
                      <ProgressBar value={67} color="#f94d1c" />
                      <div className="text">
                        <h3 className="title">Financial Investment</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-skill-item d-flex align-items-center mb-40 wow fadeInUp">
                      <ProgressBar value={78} color="#f94d1c" />
                      <div className="text">
                        <h3 className="title">Financial Investments</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-skill-item d-flex align-items-center mb-40 wow fadeInUp">
                      <ProgressBar value={59} color="#f94d1c" />
                      <div className="text">
                        <h3 className="title">Digital and Marketing</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {/*=== Skill Image Box ===*/}
              <div className="skill-one_image-box p-r ml-lg-40 mb-50 wow fadeInRight">
                <img src="assets/images/gallery/skil-1.jpg" alt="Skill Image" />
                <div className="quote-box-rotate-90 text-center text-white">
                  <h3>
                    Work Hard <br />
                    to Success
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Skill Section ======*/}
      {/*====== Start Author Section ======*/}
      <section className="author-section light-gray-bg pb-80">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              {/*=== Author Image ===*/}
              <div className="author-image mb-50 wow fadeInLeft">
                <img src="assets/images/team/author.jpg" alt="Author Image" />
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Author Content Box ===*/}
              <div className="author-content-box mb-50 ml-lg-60 wow fadeInRight">
                <h2>
                  <span className="thin">Hello Guys i’m </span>
                  Daniel S. Marvin
                </h2>
                <p>
                  Sit amet consectetur adipiscing elit sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravide commodo viverra maecena
                </p>
                <h5>CEO &amp; Founder</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Author Section ======*/}
      {/*====== Start Team Section ======*/}
      <section className="team-section pt-120 pb-130">
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
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Team Item ===*/}
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
                  <p className="mail">
                    <i className="far fa-envelope" />
                    <a href="mailto:infomebusniess@gmail.com">
                      infomebusniess@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Team Item ===*/}
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
                      <a>Christopher L. Wagner</a>
                    </Link>
                  </h3>
                  <p className="position">Senior Manager</p>
                  <p className="mail">
                    <i className="far fa-envelope" />
                    <a href="mailto:infomebusniess@gmail.com">
                      infomebusniess@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Team Item ===*/}
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
                  <p className="mail">
                    <i className="far fa-envelope" />
                    <a href="mailto:infomebusniess@gmail.com">
                      infomebusniess@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Team Item ===*/}
              <div className="single-team-item mb-40 wow fadeInUp">
                <div className="img-holder">
                  <img src="assets/images/team/team-8.jpg" alt="Team Image" />
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
                      <a>Matthew N. Johnson</a>
                    </Link>
                  </h3>
                  <p className="position">Business Consultant</p>
                  <p className="mail">
                    <i className="far fa-envelope" />
                    <a href="mailto:infomebusniess@gmail.com">
                      infomebusniess@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Team Item ===*/}
              <div className="single-team-item mb-40 wow fadeInUp">
                <div className="img-holder">
                  <img src="assets/images/team/team-9.jpg" alt="Team Image" />
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
                      <a>Ernest M. Christian</a>
                    </Link>
                  </h3>
                  <p className="position">Business Consultant</p>
                  <p className="mail">
                    <i className="far fa-envelope" />
                    <a href="mailto:infomebusniess@gmail.com">
                      infomebusniess@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Team Item ===*/}
              <div className="single-team-item mb-40 wow fadeInUp">
                <div className="img-holder">
                  <img src="assets/images/team/team-10.jpg" alt="Team Image" />
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
                      <a>Leonard J. Varley</a>
                    </Link>
                  </h3>
                  <p className="position">Financial Consultant</p>
                  <p className="mail">
                    <i className="far fa-envelope" />
                    <a href="mailto:infomebusniess@gmail.com">
                      infomebusniess@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Team Item ===*/}
              <div className="single-team-item mb-40 wow fadeInUp">
                <div className="img-holder">
                  <img src="assets/images/team/team-11.jpg" alt="Team Image" />
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
                      <a>Alejandro P. Santacruz</a>
                    </Link>
                  </h3>
                  <p className="position">Business Consultant</p>
                  <p className="mail">
                    <i className="far fa-envelope" />
                    <a href="mailto:infomebusniess@gmail.com">
                      infomebusniess@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Team Item ===*/}
              <div className="single-team-item mb-40 wow fadeInUp">
                <div className="img-holder">
                  <img src="assets/images/team/team-12.jpg" alt="Team Image" />
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
                      <a>Omar E. Richardson</a>
                    </Link>
                  </h3>
                  <p className="position">Business Consultant</p>
                  <p className="mail">
                    <i className="far fa-envelope" />
                    <a href="mailto:infomebusniess@gmail.com">
                      infomebusniess@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Team Item ===*/}
              <div className="single-team-item mb-40 wow fadeInUp">
                <div className="img-holder">
                  <img src="assets/images/team/team-13.jpg" alt="Team Image" />
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
                      <a>Lyman M. Rowell</a>
                    </Link>
                  </h3>
                  <p className="position">Financial Consultant</p>
                  <p className="mail">
                    <i className="far fa-envelope" />
                    <a href="mailto:infomebusniess@gmail.com">
                      infomebusniess@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/*=== Team Button ===*/}
              <div className="team-button text-center mt-10 wow fadeInUp">
                <Link legacyBehavior href="/team">
                  <a className="main-btn filled-btn">View All Member</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Team Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <Newsletter />
    </Layout>
  );
};
export default Team;
