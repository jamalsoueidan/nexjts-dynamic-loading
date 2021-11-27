import * as React from 'react';
import Link from 'next/link'
import { GetServerSideProps, NextPage } from 'next';

type Data = {
  id: string;
  name: string;
  email: string;
};

const Index: NextPage<{ data: Data }> = props => {
  return (
    <>
    Welcome back, {props.data.name} <br/>
    <Link href="/static">
      <a>Static (with function 735kb)</a>
    </Link>
    <br />
    <Link href="/dynamic">
      <a>Dynamic (with dynamic loading 635kb)</a>
    </Link>
    <br />
    <Link href="/all">
      <a>All blocks (show all components 735kb)</a>
    </Link>
  </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res
}) => {
  try {
    const result = await fetch(`http://localhost:3000/api/user/1`);
    const data: Data = await result.json();

    return {
      props: { data }
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {}
    };
  }
};

export default Index;