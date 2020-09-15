import React from "react";
import Head from 'next/head'



const HeadMeta = () => {
  return (
    <>
      <Head>
        <meta httpEquiv="content-security-policy"
              content="default-src 'self'; style-src 'self'; img-src 'self'; font-src 'self';"
        />
      </Head>
    </>
  )
};


export default HeadMeta;