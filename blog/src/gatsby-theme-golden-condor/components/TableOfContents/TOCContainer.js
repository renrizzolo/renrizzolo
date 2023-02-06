import React from "react";
import { Box } from "theme-ui";
import TOCContainer from "gatsby-theme-golden-condor/src/components/TableOfContents/TOCContainer";

function TOCContainerShadowed(props) {
  return (
    <TOCContainer
      {...props}
      sx={{
        borderColor: "gray.4",
        borderWidth: 0,
        borderLeftStyle: "solid",
        borderLeftWidth: 2,
        transition: 0,
        borderRadius: 0,
        bg: "none",
        "&:hover": {},
      }}
    />
  );
}

export default TOCContainerShadowed;
