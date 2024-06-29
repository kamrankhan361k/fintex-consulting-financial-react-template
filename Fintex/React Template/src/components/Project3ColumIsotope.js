import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const Project3ColumIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".filter-row", {
        itemSelector: ".project-column",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".project-column",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-12">
          {/*=== Project Filter ===*/}
          <div className="project-filter text-center mb-40 wow fadeInUp">
            <ul className="filter-btn">
              <li
                className={`c-pointer ${activeBtn("*")}`}
                onClick={handleFilterKeyChange("*")}
                data-filter="*"
              >
                Show All <span className="number">(15)</span>
              </li>
              <li
                data-filter=".cat-1"
                className={`c-pointer ${activeBtn("cat-1")}`}
                onClick={handleFilterKeyChange("cat-1")}
              >
                Business<span className="number">(10)</span>
              </li>
              <li
                data-filter=".cat-2"
                className={`c-pointer ${activeBtn("cat-2")}`}
                onClick={handleFilterKeyChange("cat-2")}
              >
                Finance<span className="number">(05)</span>
              </li>
              <li
                data-filter=".cat-3"
                className={`c-pointer ${activeBtn("cat-3")}`}
                onClick={handleFilterKeyChange("cat-3")}
              >
                Consulting<span className="number">(07)</span>
              </li>
              <li
                data-filter=".cat-2"
                className={`c-pointer ${activeBtn("cat-2,cat-3")}`}
                onClick={handleFilterKeyChange("cat-2,cat-3")}
              >
                Investment<span className="number">(08)</span>
              </li>
              <li
                data-filter=".cat-3"
                className={`c-pointer ${activeBtn("cat-3,cat-2")}`}
                onClick={handleFilterKeyChange("cat-3,cat-2")}
              >
                Banking<span className="number">(10)</span>
              </li>
              <li
                data-filter=".cat-2,.cat-1"
                className={`c-pointer ${activeBtn("cat-2,cat-1")}`}
                onClick={handleFilterKeyChange("cat-2,cat-1")}
              >
                Global<span className="number">(09)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row filter-row">
        <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-1 cat-3">
          {/*=== Project Item ===*/}
          <div className="project-item-three mb-20 wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/project/img-8.jpg" alt="project image" />
            </div>
            <div className="project-content text-center">
              <h3 className="title">
                <Link legacyBehavior href="/project-details">
                  <a>Business Meeting</a>
                </Link>
              </h3>
              <p className="cat-btn">
                <a href="#">Fintech Consulting</a>
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-3">
          {/*=== Project Item ===*/}
          <div className="project-item-three mb-20 wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/project/img-9.jpg" alt="project image" />
            </div>
            <div className="project-content text-center">
              <h3 className="title">
                <Link legacyBehavior href="/project-details">
                  <a>Investment Planning</a>
                </Link>
              </h3>
              <p className="cat-btn">
                <a href="#">Fintech Consulting</a>
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-2 cat-1">
          {/*=== Project Item ===*/}
          <div className="project-item-three mb-20 wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/project/img-10.jpg" alt="project image" />
            </div>
            <div className="project-content text-center">
              <h3 className="title">
                <Link legacyBehavior href="/project-details">
                  <a>Financial Planning</a>
                </Link>
              </h3>
              <p className="cat-btn">
                <a href="#">Fintech Consulting</a>
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-2">
          {/*=== Project Item ===*/}
          <div className="project-item-three mb-20 wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/project/img-11.jpg" alt="project image" />
            </div>
            <div className="project-content text-center">
              <h3 className="title">
                <Link legacyBehavior href="/project-details">
                  <a>Official Conference</a>
                </Link>
              </h3>
              <p className="cat-btn">
                <a href="#">Fintech Consulting</a>
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-1">
          {/*=== Project Item ===*/}
          <div className="project-item-three mb-20 wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/project/img-12.jpg" alt="project image" />
            </div>
            <div className="project-content text-center">
              <h3 className="title">
                <Link legacyBehavior href="/project-details">
                  <a>Company Graph</a>
                </Link>
              </h3>
              <p className="cat-btn">
                <a href="#">Fintech Consulting</a>
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-3">
          {/*=== Project Item ===*/}
          <div className="project-item-three mb-20 wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/project/img-13.jpg" alt="project image" />
            </div>
            <div className="project-content text-center">
              <h3 className="title">
                <Link legacyBehavior href="/project-details">
                  <a>Co-working Developer</a>
                </Link>
              </h3>
              <p className="cat-btn">
                <a href="#">Fintech Consulting</a>
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-2 cat-3">
          {/*=== Project Item ===*/}
          <div className="project-item-three mb-20 wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/project/img-14.jpg" alt="project image" />
            </div>
            <div className="project-content text-center">
              <h3 className="title">
                <Link legacyBehavior href="/project-details">
                  <a>Client Marketing</a>
                </Link>
              </h3>
              <p className="cat-btn">
                <a href="#">Fintech Consulting</a>
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-3 cat-1">
          {/*=== Project Item ===*/}
          <div className="project-item-three mb-20 wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/project/img-15.jpg" alt="project image" />
            </div>
            <div className="project-content text-center">
              <h3 className="title">
                <Link legacyBehavior href="/project-details">
                  <a>Marketing Analysis</a>
                </Link>
              </h3>
              <p className="cat-btn">
                <a href="#">Fintech Consulting</a>
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-1 cat-2">
          {/*=== Project Item ===*/}
          <div className="project-item-three mb-20 wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/project/img-16.jpg" alt="project image" />
            </div>
            <div className="project-content text-center">
              <h3 className="title">
                <Link legacyBehavior href="/project-details">
                  <a>Official Meeting</a>
                </Link>
              </h3>
              <p className="cat-btn">
                <a href="#">Fintech Consulting</a>
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Project3ColumIsotope;
