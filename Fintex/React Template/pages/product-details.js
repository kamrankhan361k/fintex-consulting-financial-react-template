import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import ProductGallerySlider from "../src/components/slider/ProductGallerySlider";
import Layout from "../src/layout/Layout";
import { recentProductSlider } from "../src/sliderProps";
const ProductDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Shop Details"} />
      <section className="products-details-page pt-170 pb-125">
        <div className="container">
          {/*=== Product Details Wrapper ===*/}
          <div className="product-details-wrapper">
            <div className="row">
              <div className="col-lg-7">
                {/*=== Product Gallery ===*/}
                <ProductGallerySlider />
              </div>
              <div className="col-lg-5">
                {/*=== Product Info ===*/}
                <div className="product-info mb-50 wow fadeInRight">
                  <h3 className="title">Fitness Smart Watch</h3>
                  <div className="products-rating-price d-flex">
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
                    <span className="price">
                      <span className="curreny">$</span>59.56
                    </span>
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error silupt atem
                    accusantium doloremque laudantium rem riams eaque quae
                    abillo inventore quasi architecto beatae vitae dicta sunt
                    explicabo. Nemo enim psaml uptatem quia voluptas sit
                    aspernatur aut odit aut fugit sedes quia consequuntur magni
                    dolores eos
                  </p>
                  <ul className="product-meta">
                    <li>
                      <span>Categories :</span>
                      <a href="#">Smart Watch, Fitness, Watch</a>
                    </li>
                    <li>
                      <span>Tags :</span>
                      <a href="#">Shop, eCommerce, Electronics</a>
                    </li>
                  </ul>
                  <div className="product-cart">
                    <ul>
                      <li>
                        <input type="number" defaultValue={1} />
                      </li>
                      <li>
                        <a href="#" className="main-btn btn-red">
                          Add to cart
                        </a>
                      </li>
                      <li>
                        <a href="#" className="wishlist-btn">
                          <i className="far fa-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Description Area ===*/}
          <Tab.Container defaultActiveKey={"descrptions"}>
            <div className="description-area pb-120 wow fadeInUp">
              <div className="description-tabs mb-20">
                <Nav as={"ul"} className="nav">
                  <li className="nav-item">
                    <Nav.Link
                      as="a"
                      className="nav-link"
                      data-toggle="tab"
                      eventKey="descrptions"
                      href="#descrptions"
                    >
                      Descriptions
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      as="a"
                      className="nav-link"
                      data-toggle="tab"
                      eventKey="information"
                      href="#information"
                    >
                      Information
                    </Nav.Link>
                  </li>
                </Nav>
              </div>
              <Tab.Content className="tab-content">
                <Tab.Pane className="tab-pane fade" eventKey="descrptions">
                  <div className="content-box">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore verit atis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit sed quia non numquam eius modi
                      tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure
                      reprehenderit qui in ea voluptate velit esse quam nihil
                      molestiae consequatur, vel illum qui dolorem eum
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="information">
                  <div className="content-box">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore verit atis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit sed quia non numquam eius modi
                      tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure
                      reprehenderit qui in ea voluptate velit esse quam nihil
                      molestiae consequatur, vel illum qui dolorem eum
                    </p>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
          {/*=== Review Form ===*/}
          <div className="review-form wow fadeInUp">
            <h3 className="title mb-15">Leave Your Reviews</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form_group">
                    <ul className="ratings mb-25">
                      <li>
                        <span className="mr-2">Your Rating:</span>
                      </li>
                      <li className="star">
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li className="star">
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li className="star">
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li className="star">
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li className="star">
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form_group">
                    <input
                      type="text"
                      className="form_control"
                      placeholder="Full Name"
                      name="name"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form_group">
                    <input
                      type="text"
                      className="form_control"
                      placeholder="Email Address"
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
                      placeholder="Phone Number"
                      name="phone"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form_group w-100">
                    <select className="wide">
                      <option data-display="Subject :">Subject :</option>
                      <option value={1}>Customer Support</option>
                      <option value={2}>Best Product</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form_group">
                    <textarea
                      name="message"
                      className="form_control"
                      placeholder="Write Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form_group">
                    <button className="main-btn btn-red">Write Message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/*====== End Product Details Page Section ======*/}
      {/*====== Start Recent-Products Section ======*/}
      <section className="recent-product-section pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Latest Products</span>
                <h2>Visit Related Ptoducts</h2>
              </div>
            </div>
          </div>
          {/*=== Recent Product Slider ===*/}
          <Slider {...recentProductSlider} className="recent-product-slider">
            <div className="single-product-item mb-30 text-center wow fadeInUp">
              <span className="status">New</span>
              <div className="product-img">
                <img
                  src="assets/images/product/img-1.png"
                  alt="product image"
                />
                <div className="product-meta">
                  <a href="#" className="cart-btn">
                    Add To Cart
                  </a>
                </div>
              </div>
              <div className="product-info">
                <h3 className="title">
                  <Link legacyBehavior href="/product-details">
                    <a>Men Leather Shoes</a>
                  </Link>
                </h3>
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
                <span className="price">
                  <span className="prev-price">
                    <span className="curreny">$</span>53.97
                  </span>
                  <span className="curreny">$</span>35.56
                </span>
              </div>
            </div>
            <div className="single-product-item mb-30 text-center wow fadeInUp">
              <div className="product-img">
                <img
                  src="assets/images/product/img-2.png"
                  alt="product image"
                />
                <a href="#" className="cart-btn">
                  Add To Cart
                </a>
              </div>
              <div className="product-info">
                <h3 className="title">
                  <Link legacyBehavior href="/product-details">
                    <a>Pink Smart Watch</a>
                  </Link>
                </h3>
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
                <span className="price">
                  <span className="curreny">$</span>205.69
                </span>
              </div>
            </div>
            <div className="single-product-item mb-30 text-center wow fadeInUp">
              <div className="product-img">
                <img
                  src="assets/images/product/img-3.png"
                  alt="product image"
                />
                <a href="#" className="cart-btn">
                  Add To Cart
                </a>
              </div>
              <div className="product-info">
                <h3 className="title">
                  <Link legacyBehavior href="/product-details">
                    <a>Women Leather Bags</a>
                  </Link>
                </h3>
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
                <span className="price">
                  <span className="prev-price">
                    <span className="curreny">$</span>53.97
                  </span>
                  <span className="curreny">$</span>35.56
                </span>
              </div>
            </div>
            <div className="single-product-item mb-30 text-center wow fadeInUp">
              <div className="product-img">
                <img
                  src="assets/images/product/img-4.png"
                  alt="product image"
                />
                <a href="#" className="cart-btn">
                  Add To Cart
                </a>
              </div>
              <div className="product-info">
                <h3 className="title">
                  <Link legacyBehavior href="/product-details">
                    <a>Leather Pant Belt</a>
                  </Link>
                </h3>
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
                <span className="price">
                  <span className="prev-price">
                    <span className="curreny">$</span>53.97
                  </span>
                  <span className="curreny">$</span>35.56
                </span>
              </div>
            </div>
            <div className="single-product-item mb-30 text-center wow fadeInUp">
              <div className="product-img">
                <img
                  src="assets/images/product/img-5.png"
                  alt="product image"
                />
                <a href="#" className="cart-btn">
                  Add To Cart
                </a>
              </div>
              <div className="product-info">
                <h3 className="title">
                  <Link legacyBehavior href="/product-details">
                    <a>Black Smart Watch</a>
                  </Link>
                </h3>
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
                <span className="price">
                  <span className="curreny">$</span>205.69
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Recent-Products Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <Newsletter />
    </Layout>
  );
};
export default ProductDetails;
