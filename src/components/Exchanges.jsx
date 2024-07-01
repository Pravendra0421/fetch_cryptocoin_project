import React,{useEffect, useState} from 'react'
import axios from 'axios';
import {server} from "../index";
import { Container, HStack, VStack,Image,Heading,Text } from '@chakra-ui/react';
import Loader from './Loader';
import Error from './Errorcomponent';
const Exchanges=()=>{
    const [exchanges,setExchanges] =useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    useEffect(()=>{
        const fetchExchange =async ()=>{
            try{
                const {data} = await axios.get(`${server}/exchanges`);
                setExchanges(data);
                setLoading(false);
            }
            catch(error){
                setError(true)
                setLoading(false);
            
            }
        };
        fetchExchange();

    },[])
    if(error) return <Error/>






  return (
    <Container maxW={"container.xl"}>
        {loading? <Loader/>:(
            <>
            <HStack wrap={"wrap"}>
                {
                    exchanges.map((i)=>(
                        <ExchangeCard 
                        key={i.id}
                        name={i.name} 
                        img={i.image} 
                        rank={i.trust_score_rank} 
                        url={i.url}/>
                    ))
                }
            </HStack>
            </>
        )}
    </Container>
  );
};
const ExchangeCard=({name,img,rank,url})=>(
    <a href={url} target={"blank"}>
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
                {rank}

            </Heading>
            <Text noofLines={1}>{name}</Text>

        </VStack>
    </a>
)

export default Exchanges;