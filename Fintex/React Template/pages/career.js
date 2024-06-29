import Link from "next/link";
import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const Career = () => {
  return (
    <Layout>
      <PageBanner pageName={"Carrer"} />
      <section className="categories-section pt-125 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*=== Jobs Heading ===*/}
              <div className="jobs-heading text-center mb-30 wow fadeInDown">
                <h3 className="title">Popular Job Categories</h3>
                <p>2020 jobs live – 293 added today.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/*=== Category ===*/}
              <div className="categories-nav-wrap d-flex justify-content-center">
                <div className="categories-nav wow fadeInUp">
                  <a href="#">
                    <i className="far fa-atom-alt" />
                    IT &amp;Technology<span className="number">(25)</span>
                  </a>
                  <a href="#">
                    <i className="far fa-usd-circle" />
                    Account &amp; Finance<span className="number">(05)</span>
                  </a>
                  <a href="#">
                    <i className="far fa-bezier-curve" />
                    Web Design<span className="number">(98)</span>
                  </a>
                  <a href="#">
                    <i className="far fa-fingerprint" />
                    security guard<span className="number">(24)</span>
                  </a>
                  <a href="#">
                    <i className="far fa-laptop-code" />
                    Web Development<span className="number">(33)</span>
                  </a>
                  <a href="#">
                    <i className="far fa-bullhorn" />
                    Marketing<span className="number">(27)</span>
                  </a>
                  <a href="#">
                    <i className="far fa-briefcase-medical" />
                    Health &amp; Care<span className="number">(03)</span>
                  </a>
                  <a href="#">
                    <i className="far fa-tools" />
                    Customer Services<span className="number">(45)</span>
                  </a>
                  <a href="#">
                    <i className="far fa-laptop-medical" />
                    Computer Operator<span className="number">(02)</span>
                  </a>
                  <a href="#">
                    <i className="far fa-box-usd" />
                    Finance &amp; Banking<span className="number">(23)</span>
                  </a>
                  <a href="#">
                    <i className="far fa-broadcast-tower" />
                    Engineering<span className="number">(10)</span>
                  </a>
                  <a href="#">
                    <i className="far fa-broom" />
                    Graphics<span className="number">(12)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Categories Section ======*/}
      {/*====== Start Jobs Section ======*/}
      <section className="jobs-section pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*=== JObs Heading ===*/}
              <div className="jobs-heading text-center mb-30 wow fadeInDown">
                <h3 className="title">Find Your Best Job’s With Fintex</h3>
                <p>2020 jobs live – 293 added today.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              {/*=== Single Job Item ===*/}
              <div className="single-job-item d-flex mb-30 wow fadeInUp">
                <div className="job-thumb">
                  <img src="assets/images/career/job-1.png" alt="Job Author" />
                </div>
                <div className="job-main-content d-flex">
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
            <div className="col-lg-6 col-md-12">
              {/*=== Single Job Item ===*/}
              <div className="single-job-item d-flex mb-30 wow fadeInUp">
                <div className="job-thumb">
                  <img src="assets/images/career/job-2.png" alt="Job Author" />
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
            <div className="col-lg-6 col-md-12">
              {/*=== Single Job Item ===*/}
              <div className="single-job-item d-flex mb-30 wow fadeInUp">
                <div className="job-thumb">
                  <img src="assets/images/career/job-3.png" alt="Job Author" />
                </div>
                <div className="job-main-content d-flex">
                  <div className="job-content">
                    <h3 className="title">
                      <Link legacyBehavior href="/job-details">
                        <a>Junior Product Designer</a>
                      </Link>
                      <span className="status features">Features</span>
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
            <div className="col-lg-6 col-md-12">
              {/*=== Single Job Item ===*/}
              <div className="single-job-item d-flex mb-30 wow fadeInUp">
                <div className="job-thumb">
                  <img src="assets/images/career/job-4.png" alt="Job Author" />
                </div>
                <div className="job-main-content d-flex">
                  <div className="job-content">
                    <h3 className="title">
                      <Link legacyBehavior href="/job-details">
                        <a>Digital Customer Services</a>
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
            <div className="col-lg-6 col-md-12">
              {/*=== Single Job Item ===*/}
              <div className="single-job-item d-flex mb-30 wow fadeInUp">
                <div className="job-thumb">
                  <img src="assets/images/career/job-5.png" alt="Job Author" />
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
            <div className="col-lg-6 col-md-12">
              {/*=== Single Job Item ===*/}
              <div className="single-job-item d-flex mb-30 wow fadeInUp">
                <div className="job-thumb">
                  <img src="assets/images/career/job-6.png" alt="Job Author" />
                </div>
                <div className="job-main-content d-flex">
                  <div className="job-content">
                    <h3 className="title">
                      <Link legacyBehavior href="/job-details">
                        <a>Assistant Manager</a>
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
            <div className="col-lg-6 col-md-12">
              {/*=== Single Job Item ===*/}
              <div className="single-job-item d-flex mb-30 wow fadeInUp">
                <div className="job-thumb">
                  <img src="assets/images/career/job-7.png" alt="Job Author" />
                </div>
                <div className="job-main-content d-flex">
                  <div className="job-content">
                    <h3 className="title">
                      <Link legacyBehavior href="/job-details">
                        <a>General Ledger Accountant</a>
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
            <div className="col-lg-6 col-md-12">
              {/*=== Single Job Item ===*/}
              <div className="single-job-item d-flex mb-30 wow fadeInUp">
                <div className="job-thumb">
                  <img src="assets/images/career/job-8.png" alt="Job Author" />
                </div>
                <div className="job-main-content d-flex">
                  <div className="job-content">
                    <h3 className="title">
                      <Link legacyBehavior href="/career">
                        <a>Assistant Manager</a>
                      </Link>
                      <span className="status features">Features</span>
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
        </div>
      </section>
      {/*====== End Jobs Section ======*/}
      {/*====== Start What we Section ======*/}
      <section className="who-we-section pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/*=== Who Image Box ===*/}
              <div className="who-one_img-box mb-50 wow fadeInLeft">
                <img src="assets/images/gallery/we-1.jpg" alt="who image" />
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Who Content Box ===*/}
              <div className="who-one_content-box content-box-gap ml-lg-70 mb-50 wow fadeInRight">
                <div className="section-title section-title-left">
                  <span className="sub-title">Who We Are</span>
                  <h2>Millions of Jobs.Find the One that Suits you.</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium totam rem apereaque abillo
                  inventore veritatis quasi architecto beatae
                </p>
                <ul className="check-style-one mb-25">
                  <li>Reflection 2022 Desktop Wallpapers Edition</li>
                  <li>Universal Principles Of User Experience Design</li>
                  <li>Designing A Better Infinite Scroll</li>
                </ul>
                <div className="who-button">
                  <a href="#" className="main-btn filled-btn">
                    Explore More Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End What we Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <Newsletter />
    </Layout>
  );
};
export default Career;
