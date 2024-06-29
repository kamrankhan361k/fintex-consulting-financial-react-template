import Link from "next/link";
import { Fragment, useState } from "react";
const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  return (
    <Fragment>
      <nav className="main-menu d-block d-xl-none">
        <ul>
          <li className="menu-item has-children">
            <a href="#">Home</a>
            <ul className="sub-menu" style={activeLi("home")}>
              <li className="has-children">
                <a href="#">Multipage</a>
                <ul className="sub-menu" style={multiMenuActiveLi("multiPage")}>
                  <li>
                    <Link legacyBehavior href="/">
                      Business Consultant
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="index-2">
                      Investment Solutions
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="index-3">
                      Digital Banking
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="index-4">
                      Business Advisor
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="index-5">
                      Marketing Agency
                    </Link>
                  </li>
                </ul>
                <span
                  className="dd-trigger"
                  onClick={() => multiMenuSet("multiPage")}
                >
                  <i className="far fa-angle-down" />
                </span>
              </li>
              <li className="has-children">
                <a href="#">One Page</a>
                <ul className="sub-menu" style={multiMenuActiveLi("onePage")}>
                  <li>
                    <Link legacyBehavior href="onepage-index">
                      Business Consultant
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="onepage-index-2">
                      Investment Solutions
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="onepage-index-3">
                      Digital Banking
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="onepage-index-4">
                      Business Advisor
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="onepage-index-5">
                      Marketing Agency
                    </Link>
                  </li>
                </ul>
                <span
                  className="dd-trigger"
                  onClick={() => multiMenuSet("onePage")}
                >
                  <i className="far fa-angle-down" />
                </span>
              </li>
            </ul>
            <span className="dd-trigger" onClick={() => activeMenuSet("home")}>
              <i className="far fa-angle-down" />
            </span>
          </li>
          <li className="menu-item">
            <Link legacyBehavior href="about">
              About
            </Link>
          </li>
          <li className="menu-item has-children">
            <a href="#">Services</a>
            <ul className="sub-menu" style={activeLi("services")}>
              <li>
                <Link legacyBehavior href="services">
                  Our Services
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="service-details">
                  Service Details
                </Link>
              </li>
            </ul>
            <span
              className="dd-trigger"
              onClick={() => activeMenuSet("services")}
            >
              <i className="far fa-angle-down" />
            </span>
          </li>
          <li className="menu-item has-children">
            <a href="#">Team</a>
            <ul className="sub-menu" style={activeLi("team")}>
              <li>
                <Link legacyBehavior href="team">
                  Our Team
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="team-details">
                  Team Details
                </Link>
              </li>
            </ul>
            <span className="dd-trigger" onClick={() => activeMenuSet("team")}>
              <i className="far fa-angle-down" />
            </span>
          </li>
          <li className="menu-item has-children">
            <a href="#">Pages</a>
            <ul className="sub-menu" style={activeLi("pages")}>
              <li>
                <Link legacyBehavior href="career">
                  Career
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="job-details">
                  Job Details
                </Link>
              </li>
              <li className="has-children">
                <a href="#">Project</a>
                <ul className="sub-menu" style={multiMenuActiveLi("project")}>
                  <li>
                    <Link legacyBehavior href="project-3-column">
                      Project 3 Column
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="project-masonry">
                      Project Masonry
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="project-details">
                      Project Details
                    </Link>
                  </li>
                </ul>
                <span
                  className="dd-trigger"
                  onClick={() => multiMenuSet("project")}
                >
                  <i className="far fa-angle-down" />
                </span>
              </li>
              <li>
                <Link legacyBehavior href="products">
                  Our Products
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="product-details">
                  Product Details
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="testimonial">
                  Testimonial
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="faqs">
                  Faqs
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="error-404">
                  Page 404
                </Link>
              </li>
              <li className="has-children">
                <a href="#">User Pages</a>
                <ul className="sub-menu" style={multiMenuActiveLi("auth")}>
                  <li>
                    <Link legacyBehavior href="sign-in">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="sign-up">
                      Sign Up
                    </Link>
                  </li>
                </ul>
                <span
                  className="dd-trigger"
                  onClick={() => multiMenuSet("auth")}
                >
                  <i className="far fa-angle-down" />
                </span>
              </li>
            </ul>
            <span className="dd-trigger" onClick={() => activeMenuSet("pages")}>
              <i className="far fa-angle-down" />
            </span>
          </li>
          <li className="menu-item has-children">
            <a href="#">News</a>
            <ul className="sub-menu" style={activeLi("blog")}>
              <li>
                <Link legacyBehavior href="blog-listing">
                  Blog Standard
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="blog-details">
                  Blog Details
                </Link>
              </li>
            </ul>
            <span className="dd-trigger" onClick={() => activeMenuSet("blog")}>
              <i className="far fa-angle-down" />
            </span>
          </li>
          <li className="menu-item">
            <Link legacyBehavior href="contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
export default MobileMenu;
