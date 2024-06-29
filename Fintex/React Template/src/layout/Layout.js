import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import VideoPopup from "../components/VideoPopup";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children, header, footer, extraBodyCls, singleMenus }) => {
  useEffect(() => {
    document.querySelector("body").className = extraBodyCls
      ? extraBodyCls
      : "fintex";

    return () => {
      niceSelect({ withoutwide: true });
    };
  }, []);

  return (
    <Fragment>
      <VideoPopup />
      <Header header={header} singleMenus={singleMenus} />
      {children}
      <Footer footer={footer} />
    </Fragment>
  );
};
export default Layout;
