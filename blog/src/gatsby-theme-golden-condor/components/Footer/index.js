import React from "react";
import Footer from "gatsby-theme-golden-condor/src/components/Footer";

const FooterShadowed = (props) => {
  return <Footer {...props} bg={"paper"} sx={{ borderTop: 0 }} />;
};

export default FooterShadowed;
