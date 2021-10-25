import React from "react";
import { Flex, FlexOptions } from "@chakra-ui/react";
import Header from "../sections/Header";

type LandingLayoutProp = FlexOptions & {
  children: React.ReactNode;
};

const LandingLayout = (props: LandingLayoutProp) => (
  <Flex
    direction="column"
    align="center"
    maxW={{ xl: "1200px" }}
    m="0 auto"
    {...props}
  >
    <Header />
    {props.children}
  </Flex>
);

export default LandingLayout;
