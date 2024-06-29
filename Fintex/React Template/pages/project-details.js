import Link from "next/link";
import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const PProjectDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Project Grid View"} />{" "}
      <section className="project-details-page pt-120 pb-100">
        <div className="container">
          {/*=== Project Details Wrapper ===*/}
          <div className="project-details-wrapper">
            {/*=== Project Content ===*/}
            <div className="project-content pb-105 border-bottom-1">
              <div className="row align-items-end">
                <div className="col-xl-6 col-lg-12">
                  <div className="section-title section-title-left mb-50 wow fadeInLeft">
                    <span className="sub-title">Financial Consultations</span>
                    <h2 className="title">
                      We’re Committed to Provide your Financial Consultations
                    </h2>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <div className="project-information mb-60 wow fadeInRight">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="item-info mb-20">
                          <h4>Category</h4>
                          <p>
                            <a href="#">Business Consuting</a>{" "}
                            <a href="#">Financial Investment</a>
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="item-info mb-20">
                          <h4>Clients</h4>
                          <p>Willo Comapny New York</p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="item-info mb-20">
                          <h4>Date</h4>
                          <p>25 March 2022</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*=== Block Image ===*/}
              <figure className="block-image mb-30 wow fadeInUp">
                <img src="assets/images/project/project-single-1.jpg" alt="" />
              </figure>
              {/*=== Content Block ===*/}
              <div className="content-block mb-35 wow fadeInUp">
                <h3 className="title">Business Consulting</h3>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble that are bound to ensue;
                  and equal blame belongs to those who fail in their duty
                  through weakness of will, which is the same as saying through
                  shrinking from toil and pain. These cases are perfectly simple
                  and easy to distinguish. In a free hour, when our power of
                  choice is untrammelled and when nothing prevents our being
                  able to do what we like best, every pleasure to be comed and
                  every pain avoided. But in certain circumstances and owing to
                  the claims of duty or the obligations of business it will
                  frequently occur that pleasures have to be repudiated and
                  annoyances accepted. The wise man therefore always holds in
                  these matters to this principle of selection: he rejects
                  pleasures to secure other greater pleasures, or else he
                  endures pains to avoid worse pains
                </p>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                  {/*=== Features Item ===*/}
                  <div
                    className="features-item animate-hover-icon mb-60 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="icon">
                      <i className="flaticon-stats" />
                    </div>
                    <div className="text">
                      <h4 className="title">Strategy and Innovation</h4>
                      <p>Natus error sit volupte atem accusa dolore</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                  {/*=== Features Item ===*/}
                  <div
                    className="features-item animate-hover-icon mb-60 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="icon">
                      <i className="flaticon-support" />
                    </div>
                    <div className="text">
                      <h4 className="title">Quality Insure Compliance</h4>
                      <p>Natus error sit volupte atem accusa dolore</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                  {/*=== Features Item ===*/}
                  <div
                    className="features-item animate-hover-icon mb-60 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="icon">
                      <i className="flaticon-digital-strategy" />
                    </div>
                    <div className="text">
                      <h4 className="title">Sales &amp; Market Research</h4>
                      <p>Natus error sit volupte atem accusa dolore</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                  {/*=== Features Item ===*/}
                  <div
                    className="features-item animate-hover-icon mb-60 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="icon">
                      <i className="flaticon-data" />
                    </div>
                    <div className="text">
                      <h4 className="title">Data Analytics Solutions</h4>
                      <p>Natus error sit volupte atem accusa dolore</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <figure className="block-image mb-40 wow fadeInUp">
                    <img
                      src="assets/images/project/project-single-2.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-md-6">
                  <figure className="block-image mb-40 wow fadeInUp">
                    <img
                      src="assets/images/project/project-single-3.jpg"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
              <div className="content-block wow fadeInUp">
                <h3 className="title">The Results</h3>
                <p>
                  These cases are perfectly simple and easy to distinguish a
                  free hour, when our power of choice is untrammelled and when
                  nothing prevents our being able to do what we like best, every
                  pleasure to be comed and every pain avoided. But certain
                  circumstances and owing the claims of duty the obligations of
                  business it will frequently occur that pleasures have to be
                  repudiated and annoyances accepted. The wise man therefore
                  always holds in these matters to this principle of selection:
                  he rejects pleasures to secure other greater pleasures or else
                  he endures pains to avoid worse pains
                </p>
              </div>
            </div>
            {/*=== Post Navigation ===*/}
            <div className="post-navigation-two pt-80 wow fadeInUp">
              <div className="row justify-content-between">
                <div className="col-lg-6 col-md-6">
                  <div className="prev-post post-nav-item d-flex align-items-center mb-30">
                    <div className="thumb">
                      <img
                        src="assets/images/project/prev.jpg"
                        alt="Post Thumb"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link legacyBehavior href="/project-details">
                          <a>Financial Investment</a>
                        </Link>
                      </h6>
                      <p>
                        <a href="#">Business</a>,<a href="#">Consulting</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="next-post post-nav-item d-flex align-items-center mb-30">
                    <div className="thumb">
                      <img
                        src="assets/images/project/next.jpg"
                        alt="Post Thumb"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link legacyBehavior href="/blog-details">
                          <a>Digital Banking</a>
                        </Link>
                      </h6>
                      <p>
                        <a href="#">Insurance</a>, <a href="#">Banking</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Project Details Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <Newsletter />
    </Layout>
  );
};
export default PProjectDetails;
