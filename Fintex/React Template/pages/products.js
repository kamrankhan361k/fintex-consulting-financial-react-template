import Link from "next/link";
import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const Products = () => {
  return (
    <Layout>
      <PageBanner pageName={"Shop"} />{" "}
      <section className="products-page pt-130 pb-100">
        <div className="container">
          {/*=== Product Search Filter ===*/}
          <div className="product-search-filter wow fadeInUp">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="product-search mb-30">
                    <div className="form_group">
                      <input
                        type="search"
                        className="form_control"
                        placeholder="Search"
                        name="search"
                      />
                      <button className="search-btn">
                        <i className="far fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row justify-content-between align-items-center mb-15">
                    <div className="col-lg-4 col-md-6">
                      <div className="show-text mb-15">
                        <p>Showing 1 - 12 of 30 Results</p>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-6">
                      <div className="filter-category mb-15">
                        <ul>
                          <li>
                            <select className="wide">
                              <option data-display="Sort by Newness">
                                Sort by Newness
                              </option>
                              <option value={1}>Price High To Low</option>
                              <option value={2}>Price Low To High</option>
                            </select>
                          </li>
                          <li>
                            <Link legacyBehavior href="/products">
                              <a>
                                <i className="far fa-list" />
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link legacyBehavior href="/products">
                              <a>
                                <i className="far fa-th" />
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              {/*=== Products sidebar ===*/}
              <div className="product-sidebar mb-20">
                {/*=== Product Category Widget ===*/}
                <div className="sidebar-widget product-category-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">
                    Category <span className="line" />
                  </h4>
                  <ul className="category-nav">
                    <li>
                      <a href="#">
                        <i className="far fa-angle-double-right" />
                        Canvas Basket <span>(5)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-angle-double-right" />
                        Home Decoration <span>(3)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-angle-double-right" />
                        Wood Essentials <span>(7)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-angle-double-right" />
                        Home/Furniture <span>(4)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-angle-double-right" />
                        Interior Office <span>(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-angle-double-right" />
                        House Lights <span>(9)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/*=== Recent Product Widget ===*/}
                <div className="sidebar-widget recent-products-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">
                    Products <span className="line" />
                  </h4>
                  <ul className="product-list">
                    <li className="product-item d-flex align-items-center">
                      <div className="thumb">
                        <img src="assets/images/product/thumb-1.png" alt="" />
                      </div>
                      <div className="info">
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
                        <h6>
                          <Link legacyBehavior href="/product-details">
                            <a>Leather Shoes</a>
                          </Link>
                        </h6>
                        <span className="price">
                          <span className="curreny">$</span>25.95
                        </span>
                      </div>
                    </li>
                    <li className="product-item d-flex align-items-center">
                      <div className="thumb">
                        <img src="assets/images/product/thumb-2.png" alt="" />
                      </div>
                      <div className="info">
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
                        <h6>
                          <Link legacyBehavior href="/product-details">
                            <a>Smart Watch</a>
                          </Link>
                        </h6>
                        <span className="price">
                          <span className="curreny">$</span>708.95
                        </span>
                      </div>
                    </li>
                    <li className="product-item d-flex align-items-center">
                      <div className="thumb">
                        <img src="assets/images/product/thumb-3.png" alt="" />
                      </div>
                      <div className="info">
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
                        <h6>
                          <Link legacyBehavior href="/product-details">
                            <a>Black T-Shirt</a>
                          </Link>
                        </h6>
                        <span className="price">
                          <span className="curreny">$</span>62.95
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                {/*=== Price Range Widget ===*/}
                <div className="sidebar-widget price-range-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">
                    Filter By Price <span className="line" />
                  </h4>
                  <div className="price-number">
                    <span className="amount">
                      <input type="text" id="amount" />
                    </span>
                  </div>
                  <div id="slider-range" />
                </div>
                {/*=== Product Tag Widget ===*/}
                <div className="sidebar-widget product-tag-cloud mb-30 wow fadeInUp">
                  <h4 className="widget-title">
                    Popular Tags <span className="line" />
                  </h4>
                  <a href="#">Watch</a>
                  <a href="#">Shoes</a>
                  <a href="#">Decor</a>
                  <a href="#">Bags</a>
                  <a href="#">Belt</a>
                  <a href="#">Phone</a>
                  <a href="#">Leather</a>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              {/*=== Product Wrapper ===*/}
              <div className="products-wrapper">
                <div className="row">
                  <div className="col-xl-4 col-md-6 col-sm-12">
                    {/*=== Single Product Item ===*/}
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
                  </div>
                  <div className="col-xl-4 col-md-6 col-sm-12">
                    {/*=== Single Product Item ===*/}
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
                  </div>
                  <div className="col-xl-4 col-md-6 col-sm-12">
                    {/*=== Single Product Item ===*/}
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
                  </div>
                  <div className="col-xl-4 col-md-6 col-sm-12">
                    {/*=== Single Product Item ===*/}
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
                  </div>
                  <div className="col-xl-4 col-md-6 col-sm-12">
                    {/*=== Single Product Item ===*/}
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
                  </div>
                  <div className="col-xl-4 col-md-6 col-sm-12">
                    {/*=== Single Product Item ===*/}
                    <div className="single-product-item mb-30 text-center wow fadeInUp">
                      <span className="status">New</span>
                      <div className="product-img">
                        <img
                          src="assets/images/product/img-6.png"
                          alt="product image"
                        />
                        <a href="#" className="cart-btn">
                          Add To Cart
                        </a>
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
                  </div>
                  <div className="col-xl-4 col-md-6 col-sm-12">
                    {/*=== Single Product Item ===*/}
                    <div className="single-product-item mb-30 text-center wow fadeInUp">
                      <div className="product-img">
                        <img
                          src="assets/images/product/img-7.png"
                          alt="product image"
                        />
                        <a href="#" className="cart-btn">
                          Add To Cart
                        </a>
                      </div>
                      <div className="product-info">
                        <h3 className="title">
                          <Link legacyBehavior href="/product-details">
                            <a>Smart Fitness Watch</a>
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
                  </div>
                  <div className="col-xl-4 col-md-6 col-sm-12">
                    {/*=== Single Product Item ===*/}
                    <div className="single-product-item mb-30 text-center wow fadeInUp">
                      <span className="status">New</span>
                      <div className="product-img">
                        <img
                          src="assets/images/product/img-8.png"
                          alt="product image"
                        />
                        <a href="#" className="cart-btn">
                          Add To Cart
                        </a>
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
                          <span className="curreny">$</span>205.69
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 col-sm-12">
                    {/*=== Single Product Item ===*/}
                    <div className="single-product-item mb-30 text-center wow fadeInUp">
                      <div className="product-img">
                        <img
                          src="assets/images/product/img-9.png"
                          alt="product image"
                        />
                        <a href="#" className="cart-btn">
                          Add To Cart
                        </a>
                      </div>
                      <div className="product-info">
                        <h3 className="title">
                          <Link legacyBehavior href="/product-details">
                            <a>Black Smart Shoes</a>
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
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    {/*=== Fintex Pagination ===*/}
                    <div className="fintex-pagination mt-30 mb-50 text-center wow fadeInUp">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Products Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <Newsletter />
    </Layout>
  );
};
export default Products;
