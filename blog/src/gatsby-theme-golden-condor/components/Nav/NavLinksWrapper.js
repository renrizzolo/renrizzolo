import React from "react";
import NavLinksWrapper from "gatsby-theme-golden-condor/src/components/Nav/NavLinksWrapper";

const NavLinksWrapperShadowed = ({ children }) => (
  <NavLinksWrapper flex={1} mr={2} justify="end">
    {children}
  </NavLinksWrapper>
);

export default NavLinksWrapperShadowed;
