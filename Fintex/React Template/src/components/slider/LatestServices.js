import Link from "next/link";
import Slider from "react-slick";
import { serviceSliderOne } from "../../sliderProps";
const LatestServices = () => {
  return (
    <Slider {...serviceSliderOne} className="service-slider-one">
      {/*=== Service Item ===*/}
      <div className="service-item wow fadeInUp">
        <div className="img-holder">
          <img src="assets/images/service/img-1.jpg" alt="service image" />
        </div>
        <div className="service-content">
          <div className="text">
            <div className="title-icon d-flex">
              <i className="flaticon-competitive" />
              <h3 className="title">
                <Link legacyBehavior href="/service-details">
                  <a>Business Consulting</a>
                </Link>
              </h3>
            </div>
          </div>
          <div className="hover-text text-white">
            <div className="title-icon d-flex">
              <i className="flaticon-competitive" />
              <h3 className="title">
                <Link legacyBehavior href="/service-details">
                  <a>Business Consulting</a>
                </Link>
              </h3>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusan
            </p>
            <Link legacyBehavior href="/service-details">
              <a className="icon-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/*=== Service Item ===*/}
      <div className="service-item wow fadeInUp">
        <div className="img-holder">
          <img src="assets/images/service/img-2.jpg" alt="service image" />
        </div>
        <div className="service-content">
          <div className="text">
            <div className="title-icon d-flex">
              <i className="flaticon-finance" />
              <h3 className="title">
                <Link legacyBehavior href="/service-details">
                  <a>Business Consulting</a>
                </Link>
              </h3>
            </div>
          </div>
          <div className="hover-text text-white">
            <div className="title-icon d-flex">
              <i className="flaticon-competitive" />
              <h3 className="title">
                <Link legacyBehavior href="/service-details">
                  <a>Sales and Marketing</a>
                </Link>
              </h3>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusan
            </p>
            <Link legacyBehavior href="/service-details">
              <a className="icon-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/*=== Service Item ===*/}
      <div className="service-item wow fadeInUp">
        <div className="img-holder">
          <img src="assets/images/service/img-3.jpg" alt="service image" />
        </div>
        <div className="service-content">
          <div className="text">
            <div className="title-icon d-flex">
              <i className="flaticon-profits" />
              <h3 className="title">
                <Link legacyBehavior href="/service-details">
                  <a>Business Consulting</a>
                </Link>
              </h3>
            </div>
          </div>
          <div className="hover-text text-white">
            <div className="title-icon d-flex">
              <i className="flaticon-competitive" />
              <h3 className="title">
                <Link legacyBehavior href="/service-details">
                  <a>Financial Consulting</a>
                </Link>
              </h3>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusan
            </p>
            <Link legacyBehavior href="/service-details">
              <a className="icon-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/*=== Service Item ===*/}
      <div className="service-item wow fadeInUp">
        <div className="img-holder">
          <img src="assets/images/service/img-2.jpg" alt="service image" />
        </div>
        <div className="service-content">
          <div className="text">
            <div className="title-icon d-flex">
              <i className="flaticon-finance" />
              <h3 className="title">
                <Link legacyBehavior href="/service-details">
                  <a>Business Consulting</a>
                </Link>
              </h3>
            </div>
          </div>
          <div className="hover-text text-white">
            <div className="title-icon d-flex">
              <i className="flaticon-competitive" />
              <h3 className="title">
                <Link legacyBehavior href="/service-details">
                  <a>Sales and Marketing</a>
                </Link>
              </h3>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusan
            </p>
            <Link legacyBehavior href="/service-details">
              <a className="icon-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Slider>
  );
};
export default LatestServices;
