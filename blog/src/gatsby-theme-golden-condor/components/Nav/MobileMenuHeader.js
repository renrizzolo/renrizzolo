import MobileMenuHeader from "gatsby-theme-golden-condor/src/components/Nav/MobileMenuHeader";
import React from "react";

const MobileMenuHeaderShadowed = ({ onToggleMenu, sx, ...props }) => {
  return (
    <MobileMenuHeader
      onToggleMenu={onToggleMenu}
      sx={{
        bg: "background",
        svg: { color: "text" },
        borderBottom: 2,
        borderBottomColor: "gray.3",
      }}
    />
  );
};

export default MobileMenuHeaderShadowed;
