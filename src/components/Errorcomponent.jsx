import React from 'react'
import { Alert,AlertIcon } from '@chakra-ui/react';
function Errorcomponent() {
  return (
    <Alert 
    status="error"
    position={"fixed"}
    bottom={"4"}
    left={"50%"}
    transform={"translateX(-50%)"}
    w={"container.lg"}
    >
      <AlertIcon />
      <p>something  error while fatching coins</p>
    </Alert>
  );
};

export default Errorcomponent;