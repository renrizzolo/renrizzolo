import React from "react";
import { Flex } from "@components/UI";

const SubItemWrapper = (props) => {
  return (
    <Flex
      as="ul"
      direction="column"
      gap={2}
      sx={{
        pl: 0,
        mb: 2,
        // a: {
        //   textDecoration: "none",
        //   color: "gray.2",
        // },
      }}
      {...props}
    />
  );
};

export default SubItemWrapper;
