const Newsletter = () => {
  return (
    <section className="newsletter-section black-bg pt-50 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-12">
            {/*=== Common Heading ===*/}
            <div className="section-title section-title-white wow fadeInLeft">
              <h2>Subscribe Our Newsletter to Get More Updates</h2>
            </div>
          </div>
          <div className="col-xl-7 col-lg-12">
            {/*=== Newsletter Form ===*/}
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
                        id="check2"
                        defaultChecked=""
                      />
                      <label htmlFor="check2">
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
  );
};
export default Newsletter;
