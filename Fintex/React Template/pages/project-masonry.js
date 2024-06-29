import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
// import ProjectMasonryIsotope from "../src/components/ProjectMasonryIsotope";
import Layout from "../src/layout/Layout";

import dynamic from "next/dynamic";

const ProjectMasonryIsotope = dynamic(
  () => import("../src/components/ProjectMasonryIsotope"),
  {
    ssr: false,
  }
);
const ProjectMasonry = () => {
  return (
    <Layout>
      <PageBanner pageName={"Project Masonry"} />{" "}
      <section
        className="project-masonry-page pt-120 pb-110"
        id="masonry-project-filter"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-35 wow fadeInDown">
                <span className="sub-title">Latest Project &amp; Case</span>
                <h2>Let’s Looks Our Global Projects</h2>
              </div>
            </div>
          </div>
          <ProjectMasonryIsotope />
        </div>
      </section>
      {/*====== End Project Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <Newsletter />
    </Layout>
  );
};
export default ProjectMasonry;
