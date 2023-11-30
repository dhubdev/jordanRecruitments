import Footer2 from "@/components/Footer2";
import Navbar from "@/components/Navbar";
import ResetPass from "@/components/ResetPass";
import Head from "next/head";

const Token = () => {
  <Head>
    <title>Jordan recruitments-Reset Password</title>
    <meta name="Jordan recruitments" content="Reset password" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/JR.svg" />
  </Head>;
  return (
    <>
      <Navbar />
      <ResetPass />
      <Footer2 />
    </>
  );
};

export default Token;
