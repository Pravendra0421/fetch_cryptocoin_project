import { Avatar, Box, VStack , Stack,Text } from '@chakra-ui/react';
import React from 'react'

function Footer() {
  return (
    <Box bgColor={"blackAlpha.900"}
        color={"whiteAlpha.700"}
        minH={"48"}
        px={"16"}
        py={["16","8"]}
    >
        <Stack direction={["column" ,"row"]} h={"full"} alignItems={"center"}>
            <VStack w={"full"} alignItems={[]}>
                <Text fontWeight={"bold"}>About us</Text>
                <Text fontSize={"small"} letterSpacing={"widest"} textAlign={["center" ,"left"]}>
                    we are the best crypto trading app in India, we provide our guidance at a regionable price
                </Text>

            </VStack>
            <VStack>
                <Avatar boxSize={"28"} mt={["4" , "0"]}  />
                <Text>Pravendra Jain</Text>
            </VStack>

        </Stack>
    </Box>
  )
}

export default Footer;