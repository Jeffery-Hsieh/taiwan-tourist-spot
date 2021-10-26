import React from "react";
import { Link as ReachLink } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Link,
  FlexOptions,
  TextProps,
} from "@chakra-ui/react";
import { LogoIcon, CircleIcon, RectangleIcon, TriangleIcon } from "../icons";

type MenuItemProps = TextProps & {
  to?: string;
  isActive?: boolean;
  isLast?: boolean;
  icon?: any;
  children: React.ReactChild;
};

const MenuItem = (props: MenuItemProps) => {
  const { children, to = "/", isActive, isLast, icon, ...rest } = props;
  return (
    <Flex
      justifyContent={{ base: "space-between", md: "flex-end" }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      {...rest}
    >
      {icon && (
        <Box display={{ base: "none", md: "block" }} mr={{ base: 0, sm: 2 }}>
          {icon}
        </Box>
      )}
      <Link as={ReachLink} to={to}>
        <Text
          color={{ base: isActive ? "pink.500" : "gray.500", md: "inherit" }}
        >
          {children}
        </Text>
      </Link>
    </Flex>
  );
};

type HeaderProps = FlexOptions & {};

const Header = (props: HeaderProps) => (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    w="100%"
    bg="white"
    mt={[4, 4, 0, 0]}
    {...props}
  >
    <Flex
      justifyContent="center"
      alignItems="center"
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <LogoIcon
        w="90px"
        h="52px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
    </Flex>

    <Flex
      w="100%"
      align={["center", "center", "center", "center"]}
      justify={{ base: "space-between", md: "flex-end" }}
      direction="row"
      boxShadow={{ base: "0px 2px 4px rgba(13, 11, 12, 0.2)", md: "none" }}
      borderRadius={{ base: "md", md: "none" }}
      mx={[4, 4, 0, 0]}
      px={[8, 8, 0, 0]}
      py={[2.5, 2.5, 0, 0]}
      mt={[4, 4, 0, 0]}
    >
      <MenuItem to="/" color="pink.500" icon={<TriangleIcon />}>
        熱門景點
      </MenuItem>
      <MenuItem to="/how" color="yellow.500" icon={<RectangleIcon />}>
        美食住宿
      </MenuItem>
      <MenuItem to="/faetures" color="green.500" icon={<CircleIcon />}>
        景點交通
      </MenuItem>
    </Flex>
  </Flex>
);

export default Header;
