import React from "react";
import Sidebar from "gatsby-theme-golden-condor/src/components/Sidebar";

const SidebarShadowed = (props) => {
  return (
    <Sidebar
      {...props}
      sx={{
        gridColumn: ["span 13", "span 13", "unset"],
        minWidth: "unset",
        a: {
          textDecoration: "underline",
          fontFamily: "heading",
          "&.isActive": {
            textDecorationColor: "secondary.4",
          },
        },
      }}
    />
  );
};
export default SidebarShadowed;
