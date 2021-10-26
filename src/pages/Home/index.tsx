import React from "react";
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
} from "@chakra-ui/react";

import { LocationIcon } from "../../components/icons";

const Home = () => {
  return (
    <Box w="100%" px={4}>
      <Image w="100%" display={{ base: "none", md: "block" }} />
      <VStack align="stretch">
        <Box display={{ base: "none", md: "block" }}>
          <Heading>Welocome to Taiwan</Heading>
          <Text>台北、台中、台南、屏東、宜蘭...遊遍台灣</Text>
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <Input placeholder="搜尋關鍵字" />
        </Box>
        <HStack spacing={2}>
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
      </VStack>
    </Box>
  );
};

export default Home;
