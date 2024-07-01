import { Box,Image,Text} from '@chakra-ui/react';
import React from 'react'
import btcSrc from "../assets/btc.png";
const Home=()=> {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <Image src={btcSrc} w={"full"} h={"85vh"} objectFit={"contain"}   />
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whitesmoke"}
        mt={"-20"}
      >
        Xcrypto
      </Text>

    </Box>
  )
}

export default Home;