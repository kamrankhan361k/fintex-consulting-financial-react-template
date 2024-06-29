import Link from "next/link";
import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const BlogListing = () => {
  return (
    <Layout>
      <PageBanner pageName={"Blog Listing"} />
      <section className="blog-section pt-130 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 order-xl-1 order-2">
              {/*=== Blog List Wrapper ===*/}
              <div className="blog-list-wrpper">
                <div className="blog-post-item-two d-flex mb-40 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img src="assets/images/blog/img-7.jpg" alt="Blog Image" />
                    <span className="post-date">
                      <a href="#">
                        25<span>Mar</span>
                      </a>
                    </span>
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <a href="#">Business</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <a href="#">Comments (05)</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>Guide To Newly Supporte Modern CSS Psedo</a>
                      </Link>
                    </h3>
                    <p>
                      Sit amet consectetur adipiscing elseds do eiusmod tempor
                      incididunt
                    </p>
                    <Link legacyBehavior href="/blog-details">
                      <a className="btn-link">Read More</a>
                    </Link>
                  </div>
                </div>
                <div className="blog-post-item-two d-flex mb-40 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img src="assets/images/blog/img-8.jpg" alt="Blog Image" />
                    <span className="post-date">
                      <a href="#">
                        25<span>Mar</span>
                      </a>
                    </span>
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <a href="#">Business</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <a href="#">Comments (05)</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>DevTools Debugging Tips Shortcuts Chrome</a>
                      </Link>
                    </h3>
                    <p>
                      Sit amet consectetur adipiscing elseds do eiusmod tempor
                      incididunt
                    </p>
                    <Link legacyBehavior href="/blog-details">
                      <a className="btn-link">Read More</a>
                    </Link>
                  </div>
                </div>
                <div className="blog-post-item-content mb-40 wow fadeInUp">
                  <div className="entry-content">
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <a href="#">Business</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <a href="#">Comments (05)</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Get Started With UI Design With These Tips To Speed Up
                          Your Workflow
                        </a>
                      </Link>
                    </h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam eaque abillon
                    </p>
                    <Link legacyBehavior href="/blog-details">
                      <a className="btn-link">Read More</a>
                    </Link>
                  </div>
                  <span className="post-date">
                    <a href="#">
                      25<span>Mar</span>
                    </a>
                  </span>
                </div>
                <div
                  className="blog-post-item-content post-content-bg mb-40 text-white wow fadeInUp"
                  style={{
                    backgroundImage: "url(assets/images/blog/item-bg-1.jpg)",
                  }}
                >
                  <div className="entry-content bg_cover">
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <a href="#">Business</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <a href="#">Comments (05)</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Online Environments That Work Well For Older Users
                          Optimizing Images For Mobile
                        </a>
                      </Link>
                    </h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam eaque abillon
                    </p>
                    <Link legacyBehavior href="/blog-details">
                      <a className="btn-link">Read More</a>
                    </Link>
                  </div>
                  <span className="post-date">
                    <a href="#">
                      25<span>Mar</span>
                    </a>
                  </span>
                </div>
                <div className="blog-post-item-two d-flex mb-40 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img src="assets/images/blog/img-9.jpg" alt="Blog Image" />
                    <span className="post-date">
                      <a href="#">
                        25<span>Mar</span>
                      </a>
                    </span>
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <a href="#">Business</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <a href="#">Comments (05)</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>Guide To Newly Supporte Modern CSS Psedo</a>
                      </Link>
                    </h3>
                    <p>
                      Sit amet consectetur adipiscing elseds do eiusmod tempor
                      incididunt
                    </p>
                    <Link legacyBehavior href="/blog-details">
                      <a className="btn-link">Read More</a>
                    </Link>
                  </div>
                </div>
                <div className="blog-post-item-two d-flex mb-40 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img src="assets/images/blog/img-10.jpg" alt="Blog Image" />
                    <span className="post-date">
                      <a href="#">
                        25<span>Mar</span>
                      </a>
                    </span>
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <a href="#">Business</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <a href="#">Comments (05)</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>DevTools Debugging Tips Shortcuts Chrome</a>
                      </Link>
                    </h3>
                    <p>
                      Sit amet consectetur adipiscing elseds do eiusmod tempor
                      incididunt
                    </p>
                    <Link legacyBehavior href="/blog-details">
                      <a className="btn-link">Read More</a>
                    </Link>
                  </div>
                </div>
                <div className="blog-post-item-content mb-40 wow fadeInUp">
                  <div className="entry-content">
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <a href="#">Business</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <a href="#">Comments (05)</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Everything You Need To Know About CSS Get Started With
                          UI Design With Speed{" "}
                        </a>
                      </Link>
                    </h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam eaque abillon
                    </p>
                    <Link legacyBehavior href="/blog-details">
                      <a className="btn-link">Read More</a>
                    </Link>
                  </div>
                  <span className="post-date">
                    <a href="#">
                      25<span>Mar</span>
                    </a>
                  </span>
                </div>
                <div className="blog-post-item-content mb-40 wow fadeInUp">
                  <div className="entry-content">
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <a href="#">Business</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <a href="#">Comments (05)</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          UX Optimizations For Keyboard-Only And Assistive
                          Technology Users Everything
                        </a>
                      </Link>
                    </h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam eaque abillon
                    </p>
                    <Link legacyBehavior href="/blog-details">
                      <a className="btn-link">Read More</a>
                    </Link>
                  </div>
                  <span className="post-date">
                    <a href="#">
                      25<span>Mar</span>
                    </a>
                  </span>
                </div>
              </div>
              <div className="fintex-pagination mt-30 mb-40 wow fadeInUp">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-left" />
                    </a>
                  </li>
                  <li>
                    <a href="#">01</a>
                  </li>
                  <li>
                    <a href="#">02</a>
                  </li>
                  <li>
                    <a href="#">03</a>
                  </li>
                  <li>
                    <span />
                    <span />
                    <span />
                    <span />
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 order-1 order-xl-2">
              {/*=== Sidebar Widget Area ===*/}
              <div className="sidebar-widget-area">
                {/*=== Search Widget ===*/}
                <div className="sidebar-widget search-widget mb-40 border-0 wow fadeInUp">
                  <h4 className="widget-title">
                    Search Here <span className="line" />
                  </h4>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="search-form"
                  >
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Search here......"
                        name="email"
                        required=""
                      />
                      <button className="search-btn">
                        <i className="far fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
                {/*=== Category Widget ===*/}
                <div className="sidebar-widget category-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">
                    Category
                    <span className="line" />
                  </h4>
                  <ul className="category-nav">
                    <li>
                      <a href="#">
                        Business Consulting <span className="number">(05)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Financial Investment<span className="number">(07)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        IT Consultations<span className="number">(03)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Digital Analytics<span className="number">(04)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Payment Processing<span className="number">(09)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Software Solutions<span className="number">(08)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/*=== Recent Post Widget ===*/}
                <div className="sidebar-widget recent-post-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">
                    Recent News
                    <span className="line" />
                  </h4>
                  <ul className="recent-post-list">
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/blog/post-thumb-1.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <i className="far fa-calendar-alt" />
                          <a href="#">May 25, 2022</a>
                        </span>
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            <a>Everything Developers Need Know About</a>
                          </Link>
                        </h6>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/blog/post-thumb-2.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <i className="far fa-calendar-alt" />
                          <a href="#">May 25, 2022</a>
                        </span>
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            <a>Variables In Hugo Static Site Generator</a>
                          </Link>
                        </h6>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/blog/post-thumb-3.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <i className="far fa-calendar-alt" />
                          <a href="#">May 25, 2022</a>
                        </span>
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            <a>Smashing Guide Worlds Of Search Engine</a>
                          </Link>
                        </h6>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/blog/post-thumb-4.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <i className="far fa-calendar-alt" />
                          <a href="#">May 25, 2022</a>
                        </span>
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            <a>Headless WordPress Site On The JAM Stack</a>
                          </Link>
                        </h6>
                      </div>
                    </li>
                  </ul>
                </div>
                {/*=== Contact Info Widget ===*/}
                <div
                  className="sidebar-widget contact-info-widget mb-40 border-0 p-0 bg_cover wow fadeInUp"
                  style={{
                    backgroundImage:
                      "url(assets/images/blog/contact-info-bg.jpg)",
                  }}
                >
                  <div className="contact-info-content">
                    <span>Need Help</span>
                    <h3 className="title">
                      Help to Create Great Business Future{" "}
                    </h3>
                    <a href="#" className="main-btn btn-red">
                      Contact us
                    </a>
                  </div>
                </div>
                {/*=== Tag Widget ===*/}
                <div className="sidebar-widget tag-cloud-widget mb-40 border-0 wow fadeInUp">
                  <h4 className="widget-title">
                    Popular Tags <span className="line" />
                  </h4>
                  <a href="#">Business</a>
                  <a href="#">Consulting</a>
                  <a href="#">Finance</a>
                  <a href="#">Technology</a>
                  <a href="#">Banking</a>
                  <a href="#">Development</a>
                  <a href="#">Corporate</a>
                  <a href="#">Digital</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Blog Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <Newsletter />
    </Layout>
  );
};
export default BlogListing;
