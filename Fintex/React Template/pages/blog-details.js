import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const BlogDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Single Blog"} />
      <section className="blog-details-page pt-130 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              {/*===  Blog Details Wrapper  ===*/}
              <div className="blog-details-wrapper mb-40">
                {/*===  Blog Post  ===*/}
                <div className="blog-post mb-60 wow fadeInUp">
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
                  <div className="main-post">
                    <div className="entry-content">
                      <h3 className="title">
                        Everything Need Know About Transaction Email To Ask
                        Guide To Newly Supporte Modern
                      </h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error
                        voluptatem accusantium doloreque laudantium totam rem
                        aperiam eaque quae abillo inventore veritatis quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia volupt pernatur aut odit aut fugit
                        sed quia consequuntur magni dolores eos qui ratione
                      </p>
                      <figure className="block-image">
                        <img
                          src="assets/images/blog/single-blog-1.jpg"
                          alt=""
                        />
                      </figure>
                      <p>
                        Nemo enim ipsam voluptatem quia volupt pernatur aut odit
                        aut fugit sed quia consequuntur magni dolores eos qui
                        ratione volumessequ nesciunt. Neque porro quisquam est
                        qui dolorem ipsum quia dolor sit amet coctetur adipisci
                        velit sed
                      </p>
                      <div className="quote-admin text-center">
                        <div className="quote-inner-content">
                          <div className="quote-admin-content">
                            <h3>
                              Which Podcasts Should Web Designer And Developers
                              Be Listening To Ultimate Digital Clean Checklist
                              Prepare
                            </h3>
                            <h5>David H. Molina</h5>
                          </div>
                        </div>
                      </div>
                      <p>
                        Unde omnis iste natus error voluptatem accusantium
                        doloreque laudantium totam rem aperiam eaque quae abillo
                        inventore veritatis quasi architecto beatae vitae dicta
                        sunt explicabo. Nemo enim ipsam voluptatem quia volupt
                        pernatur aut odit aut fugit sed quia consequuntur magni
                        dolores eos qui ratione
                      </p>
                    </div>
                  </div>
                  <div className="entry-footer">
                    <div className="tag-links">
                      <h4>Popular Tags</h4>
                      <a href="#">Business</a>
                      <a href="#">Consulting</a>
                      <a href="#">Finance</a>
                    </div>
                    <div className="social-share">
                      <h4>Share News</h4>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                {/*===  Post Author Box  ===*/}
                <div className="post-author-box d-flex mb-80 wow fadeInUp">
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/author-1.jpg"
                      alt="post author"
                    />
                  </div>
                  <div className="author-content">
                    <h4>James M. Morrow</h4>
                    <p>
                      Unde omnis iste natus error voluptatem accusantiu loreue
                      laudantium totam rem aperiam eaque quae abillo veritatisy
                      quasi architecto beatae vitae
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
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-behance" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-dribbble" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*===  Post Navigation  ===*/}
                <div className="post-navigation pb-30 wow fadeInUp">
                  <div className="row justify-content-between">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="prev-post post-nav-item d-flex mb-30">
                        <div className="thumb">
                          <img
                            src="assets/images/blog/prev.jpg"
                            alt="Post Thumb"
                          />
                        </div>
                        <div className="content">
                          <span className="post-date">
                            <a href="#">
                              <i className="far fa-calendar-alt" />
                              25 May 2022
                            </a>
                          </span>
                          <h6>
                            <Link legacyBehavior href="/blog-details">
                              <a>Everything Developers Need Know About</a>
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="next-post post-nav-item d-flex mb-30">
                        <div className="thumb">
                          <img
                            src="assets/images/blog/next.jpg"
                            alt="Post Thumb"
                          />
                        </div>
                        <div className="content">
                          <span className="post-date">
                            <a href="#">
                              <i className="far fa-calendar-alt" />
                              25 May 2022
                            </a>
                          </span>
                          <h6>
                            <Link legacyBehavior href="/blog-details">
                              <a>Variables In Hugo Static Site Generator</a>
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*===  Comments Area  ===*/}
                <div className="comments-area mb-50 wow fadeInUp">
                  <h4 className="comments-title">Popular Comments</h4>
                  <ul className="comments-list">
                    <li className="comment mb-30">
                      <div className="comment-wrap">
                        <div className="comment-author-content">
                          <span className="date">
                            <i className="far fa-calendar-alt" />
                            Feb 25, 2022
                            <span className="time">
                              <i className="far fa-clock" />
                              50 minutes Ago
                            </span>
                          </span>
                          <p>
                            Consectetur adipiscing elit sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Quis
                            ipsum suspendisse ultrices gravida commodo viverra
                            maecenas accumsan lacus vel facilisis.{" "}
                          </p>
                          <div className="comment-author-title">
                            <img
                              src="assets/images/blog/comment-1.jpg"
                              alt="comment avater"
                            />
                            <span className="author-name">John P. Fields</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="comment mb-30">
                      <div className="comment-wrap">
                        <div className="comment-author-content">
                          <span className="date">
                            <i className="far fa-calendar-alt" />
                            Feb 25, 2022
                            <span className="time">
                              <i className="far fa-clock" />
                              50 minutes Ago
                            </span>
                          </span>
                          <p>
                            Consectetur adipiscing elit sed eiusmod tempor
                            incididunt utce et dolore magna aliquauis
                            suspendisse ultrices
                          </p>
                          <div className="comment-author-title">
                            <img
                              src="assets/images/blog/comment-2.jpg"
                              alt="comment avater"
                            />
                            <span className="author-name">
                              Charles D. Phillips
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="comment mb-30">
                      <div className="comment-wrap">
                        <div className="comment-author-content">
                          <span className="date">
                            <i className="far fa-calendar-alt" />
                            Feb 25, 2022
                            <span className="time">
                              <i className="far fa-clock" />
                              50 minutes Ago
                            </span>
                          </span>
                          <p>
                            On the other hand, we denounce with righteous
                            indignation and dislike men who are so beguiled and
                            demoralized charmsthrough{" "}
                          </p>
                          <div className="comment-author-title">
                            <img
                              src="assets/images/blog/comment-1.jpg"
                              alt="comment avater"
                            />
                            <span className="author-name">
                              Thomas D. Soares
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/*===  Comments Form  ===*/}
                <div
                  className="comments-respond mb-35"
                  id="comment-respond wow fadeInUp"
                >
                  <h4 className="comments-heading">Leave A Message</h4>
                  <p>
                    Write your valuable comments about our comapny or services
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="comment-form"
                  >
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Name *"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email *"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Website *"
                            name="phone"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            name="message"
                            className="form_control"
                            placeholder="Comments"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn btn-red">
                            Send Us Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              {/*===  Sidebar widget area  ===*/}
              <div className="sidebar-widget-area">
                {/*===  Search Widget  ===*/}
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
                {/*===  Category Widget  ===*/}
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
                {/*===  Recent Post Widget  ===*/}
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
                {/*===  Contact Info Widget  ===*/}
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
                {/*===  Tag Widget  ===*/}
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
      {/*====== End Blog Details Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <section className="newsletter-section black-bg pt-50 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-12">
              {/*===  Common Heading  ===*/}
              <div className="section-title section-title-white wow fadeInLeft">
                <h2>Subscribe Our Newsletter to Get More Updates</h2>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12">
              {/*===  Newsletter Form  ===*/}
              <div className="newsletter-from wow fadeInRight">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Enter Email Address"
                          name="email"
                        />
                        <i className="far fa-envelope" />
                      </div>
                      <div className="form_checkbox">
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="check1"
                          defaultChecked=""
                        />
                        <label htmlFor="check1">
                          <span>
                            I agree to the <a href="#"> Privacy Policy</a>.
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-button float-lg-right">
                        <button className="main-btn btn-red">
                          Subscribe Now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BlogDetails;
