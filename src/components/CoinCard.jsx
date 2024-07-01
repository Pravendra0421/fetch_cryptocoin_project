import React from 'react'
import { Link } from 'react-router-dom';
import { VStack,Image,Heading,Text } from '@chakra-ui/react';
    const CoinCard=({ id,name,img,symbol,price,currencySymbol="₹"})=>(
        <Link to={`/coin/${id}`} target={"blank"}>
            <VStack w={"52"}
                shadow={"lg"}
                p={"5"}
                borderRadius={"lg"}
                transition={"all 0.3s"}
                m={"4"}
                css={{
                    "&:hover":{
                        transform:"Scale(1.1)",
                    },
                }}
            >
                <Image
                    src={img}
                    w={"10"}
                    h={"10"}
                    objectFit={"contain"}
                    alt={"Exchange"}
                />
                <Heading size={"md"} noofLines={1}>
                    {symbol}
    
                </Heading>
                <Text noofLines={1}>{name}</Text>
                <Text noofLines={1}>{price?`${currencySymbol}${price}`:"NA"}</Text>
    
            </VStack>
        </Link>

    )
export default CoinCard;