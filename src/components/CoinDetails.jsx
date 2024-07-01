import { Container, HStack, Radio, RadioGroup, VStack,Image, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Badge,Text, Progress } from '@chakra-ui/react';
import React from 'react'
import Loader from './Loader';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {server} from "../index";
import axios from 'axios';


const CoinDetails=()=> {
  const [coin,setCoin] =useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [currency,setCurrency] = useState("inr");
    const currencySymbol = currency ==="inr"?"₹" : currency==="eur"?"€":"$";
    const params = useParams();
    useEffect(()=>{
      const fetchCoin =async ()=>{
          try{
              const {data} = await axios.get(
                  `${server}/coins/${params.id}`
              );
              setCoin(data);
              console.log(data);
              setLoading(false);
          }
          catch(error){
              setError(true);
              setLoading(false);
          
          }
      };
      fetchCoin();

  },[]); 

  return (
    <Container maxW={"container.xl"}>
      {loading?(
        <Loader/>
      ):(
        <>
        
          <RadioGroup value={currency} onChange={setCurrency}>
                <HStack spacing={"4"}>
                    <Radio value={"inr"}>₹ INR</Radio>
                    <Radio value={"eur"}>€ EURO</Radio>
                    <Radio value={"usd"}>$ USD</Radio>
                </HStack>
            </RadioGroup>
            <VStack spacing={"4"} p={"16"} alignItme={"flex-start"}>
              <text fontSize={"small"} alignSelf="center" opacity={0.7}>
                Last Updated on {Date().split("G")[0]}
              </text>
              <Image src={coin.image.large} w={"16"} h={"16"} objectFit={"contain"}></Image>
              <Stat>
                <StatLabel>{coin.name}</StatLabel>
                <StatNumber>{currencySymbol}{coin.market_data.current_price [currency]}</StatNumber>
              <StatHelpText>
                <StatArrow type={
                  coin.market_data.price_change_percentage_24h >0
                  ?"increase"
                  :"decrease"
                  }/>
                {coin.market_data.price_change_percentage_24h}%
              </StatHelpText>
              </Stat>
              <Badge 
                fontSize={"2xl"}
                bgColor={"blackAlpha.800"}
                color={"white"}
              >
                {`#${coin.market_cap_rank}`}
              </Badge>

              <CustomBar 
                high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
                low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
                 />
            </VStack>

        </>
      )}

    </Container>
  );
};


const CustomBar=({high,low})=>(
  <VStack w={"full"}>
    <Progress value={50} colorScheme={'teal'} w={"full"}/>
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme={'red'}/>
      <Text fontSize={"small"}>24H range</Text>
      <Badge children={high} colorScheme={'green'}/>
    </HStack>
  </VStack>

)

export default CoinDetails;