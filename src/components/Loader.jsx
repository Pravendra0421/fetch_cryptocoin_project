import React from 'react'
import { Spinner } from '@chakra-ui/react'
function Loader() {
  return (<>
    <Spinner
  thickness='8px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  p={'100px'}
  margin={'200px'}
  marginLeft={'400px'}
/>
    </>
  )
}

export default Loader;