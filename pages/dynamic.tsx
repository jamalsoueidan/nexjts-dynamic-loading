import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { useState } from 'react';


const products = () => dynamic(() => import('./blocks/products'))
const form = () => dynamic(() => import('./blocks/form'))

const useComponent = (component="form") => {
  if(component!="form") {
    return products()
  }
  return form();
}

export default function Dynamic() {
  const [module, useModule] = useState('form');
  const Component = useComponent(module);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Link href="/">
          <a>Back</a>
        </Link>
        <button onClick={() => useModule('products')}>Show Products</button>
        <button onClick={() => useModule('form')}>Show Form</button>
        <Component />
      </Box>
    </Container>
  );
}
