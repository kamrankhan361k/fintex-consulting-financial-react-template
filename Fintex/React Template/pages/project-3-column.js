import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";

import dynamic from "next/dynamic";

const Project3ColumIsotope = dynamic(
  () => import("../src/components/Project3ColumIsotope"),
  {
    ssr: false,
  }
);

const Project3Column = () => {
  return (
    <Layout>
      <PageBanner pageName={"Project Grid View"} />{" "}
      <section className="project-section pt-120 pb-70" id="project-filter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-35 wow fadeInDown">
                <span className="sub-title">Latest Project &amp; Case</span>
                <h2>Let’s Looks Our Global Projects</h2>
              </div>
            </div>
          </div>
          <Project3ColumIsotope />
        </div>
      </section>
      {/*====== End Project Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <Newsletter />
    </Layout>
  );
};
export default Project3Column;
