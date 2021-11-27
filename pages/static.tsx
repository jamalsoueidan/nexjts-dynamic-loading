import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link';
import * as React from 'react';
import Form from './blocks/form';
import Products from './blocks/products';

const useComponent = (component="form") => {
  if(component!="form") {
    return <Products />
  }
  return <Form />
}

export default function Static() {

  const component = useComponent();

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Link href="/">
          <a>Back</a>
        </Link>
        {component}
      </Box>
    </Container>
  );
}
