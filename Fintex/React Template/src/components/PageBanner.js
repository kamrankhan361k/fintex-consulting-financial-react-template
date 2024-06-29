import Link from "next/link";
const PageBanner = ({ pageTitle, pageName }) => {
  return (
    <section
      className="page-banner bg_cover p-r z-1"
      style={{ backgroundImage: "url(assets/images/bg/page-bg-1.jpg)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="page-banner-content text-center">
              <h1 className="page-title">{pageTitle ? pageTitle : pageName}</h1>
              <ul className="breadcrumb-link">
                <li>
                  <Link legacyBehavior href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="active">{pageName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
