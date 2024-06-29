import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const SignIn = () => {
  return (
    <Layout>
      <PageBanner pageName={"Sign In"} />
      <section className="fintex-user-section pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="user-wrapper text-center">
                <div className="user-content">
                  <h3 className="mb-20">Log In To Your Account</h3>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="user-form"
                  >
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="User Name"
                        name="user"
                        required=""
                      />
                      <i className="fas fa-user" />
                    </div>
                    <div className="form_group">
                      <input
                        type="password"
                        className="form_control"
                        placeholder="Password"
                        name="password"
                        required=""
                      />
                      <i className="fas fa-lock" />
                    </div>
                    <div className="form_group">
                      <button className="main-btn btn-red">Log In</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default SignIn;
