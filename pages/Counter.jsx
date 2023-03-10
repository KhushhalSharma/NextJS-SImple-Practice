import { Button, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import Head from "next/head";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Head>
        <title>Counter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Heading>Count:{count}</Heading>
        <Button onClick={() => setCount(count - 1)}>Dec</Button>
        <Button onClick={() => setCount(count + 1)}>Inc</Button>
      </div>
    </>
  );
};

export default Counter;
