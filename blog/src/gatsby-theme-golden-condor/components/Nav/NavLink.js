import React from "react";
import NavLink from "gatsby-theme-golden-condor/src/components/Nav/NavLink";

const NavLinkShadowed = (props) => {
  return (
    <NavLink
      linkProps={{
        color: "text",
        sx: { "&:hover": { color: "primary.2" } },
      }}
      {...props}
    />
  );
};

export default NavLinkShadowed;
