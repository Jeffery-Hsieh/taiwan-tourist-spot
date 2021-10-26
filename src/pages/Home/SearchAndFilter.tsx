import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Input,
  Select,
  Image,
  IconButton,
  StackProps,
  BoxProps,
} from "@chakra-ui/react";

import { LocationIcon } from "../../components/icons";

const Searchbar = (props: BoxProps) => (
  <Box display={{ base: "none", md: "block" }} {...props}>
    <Input placeholder="搜尋關鍵字" />
  </Box>
);

const CategoryAndLocationFilter = (props: StackProps) => (
  <HStack spacing={2} {...props}>
    <Select placeholder="類別">
      <option>景點</option>
      <option>活動</option>
    </Select>
    <Select>
      <option>不分縣市</option>
      <option>台北市</option>
      <option>桃園市</option>
    </Select>
    <IconButton
      aria-label="Search location"
      colorScheme="yellow"
      icon={<LocationIcon />}
    />
  </HStack>
);

const SearchAndFilter = () => (
  <Box w="100%">
    <Image w="100%" display={{ base: "none", md: "block" }} />
    <VStack align="stretch" spacing={3} px={[4, 4, 0, 0]}>
      <Box display={{ base: "none", md: "block" }}>
        <Heading>Welocome to Taiwan</Heading>
        <Text>台北、台中、台南、屏東、宜蘭...遊遍台灣</Text>
      </Box>
      <Searchbar display={{ base: "none", md: "block" }} />
      <CategoryAndLocationFilter />
    </VStack>
  </Box>
);

export default SearchAndFilter;
