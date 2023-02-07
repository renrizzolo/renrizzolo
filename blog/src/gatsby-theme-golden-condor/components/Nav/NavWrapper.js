import React from "react";
import NavWrapper from "gatsby-theme-golden-condor/src/components/Nav/NavWrapper";

const NavWrapperShadowed = (props) => {
  return (
    <NavWrapper
      bg={"none"}
      sx={{
        position: "fixed",
        top: 0,
        border: "none",
        height: ["100%", "navHeight.1"],
        marginTop: ["navHeight.0", 0],
        backdropFilter: "brightness(8) blur(31px)",
        "html.dark &": {
          backdropFilter: "blur(31px)",
        },
        backgroundBlendMode: "color",
        background: "transparent",
        "& > div": {
          borderBottom: "1px solid",
          borderBottomColor: "secondary.2",
        },
      }}
      {...props}
    />
  );
};

export default NavWrapperShadowed;
