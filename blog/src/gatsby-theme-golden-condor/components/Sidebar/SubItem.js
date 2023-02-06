import React from "react";
import SubItem from "gatsby-theme-golden-condor/src/components/Sidebar/SubItem";

const SubItemShadowed = (props) => {
  return (
    <SubItem
      {...props}
      textSx={{
        "&:before": {
          content: '""',
          width: 2,
          height: "1px",
          backgroundColor: "gray.3",
          mr: 2,
          ...props.textSx,
        },
      }}
      linkSx={{
        ...props.linkSx,
        ...(props.isActive && { color: "primary.1" }),
      }}
    />
  );
};

export default SubItemShadowed;
