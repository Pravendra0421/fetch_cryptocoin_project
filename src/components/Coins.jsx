import React,{useEffect, useState} from 'react'
import axios from 'axios';
import {server} from "../index";
import { Button, Container, HStack, RadioGroup } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './Errorcomponent';
import CoinCard from './CoinCard';
import { Radio } from '@chakra-ui/react';
const Coins=()=>{
    const [coins,setCoins] =useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [currency,setCurrency] = useState("inr");
    const [page,setPage] = useState(1);


    const currencySymbol = currency ==="inr"?"₹" : currency==="eur"?"€":"$";


    const changePage =(page)=>{
        setPage(page);
        setLoading(true);
    }

    const btns = new Array(132).fill(1)

    useEffect(()=>{
        const fetchCoins =async ()=>{
            try{
                const {data} = await axios.get(
                    `${server}/coins/markets?vs_currency=${currency}&page=${page}`
                );
                setCoins(data);
                console.log(data);
                setLoading(false);
            }
            catch(error){
                setError(true);
                setLoading(false);
            
            }
        };
        fetchCoins();

    },[currency,page]); 
    if(error) return <ErrorComponent message={"Error while fetching coins"}/>;
    return (
    <Container maxW={"container.xl"}>
        {loading? (
            <Loader/>
        ):(
            //currency ==="inr"?"₹" : currency==="eur"?"€":"$";
            <>
            <RadioGroup value={currency} onChange={setCurrency}>
                <HStack spacing={"4"}>
                    <Radio value={"inr"}>₹ INR</Radio>
                    <Radio value={"eur"}>€ EURO</Radio>
                    <Radio value={"usd"}>$ USD</Radio>
                </HStack>
            </RadioGroup>
            <HStack wrap={"wrap"}>
                {
                    coins.map((i)=>(
                        <CoinCard 
                            id={i.id}
                            key={i.id}
                            name={i.name} 
                            img={i.image} 
                            price={i.current_price}
                            symbol={i.symbol} 
                            currencySymbol={currencySymbol}
                        />
                    ))
                }
            </HStack>
            <HStack w={"full"} overflowX={'auto'}>
                {
                    btns.map((item,index)=>(
                        <Button 
                    bgColor={"blackAlpha.900"}
                    color={"white"}
                    onClick={()=>changePage(index+1)}
                    >
                     {index+1}
                    </Button>
                    )) 
                }
            </HStack>
            </>
        )}
    </Container>
  );
};

export default Coins;