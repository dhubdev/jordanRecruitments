import Footer2 from "@/components/Footer2";
import Forgot from "@/components/Forgot";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const ForgotPassword = () => {
  <Head>
    <title>Jordan recruitments-Forgot password</title>
    <meta name="Jordan recruitments" content="Forgot password" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/JR.svg" />
  </Head>;
  return (
    <>
      <Navbar />
      <Forgot />
      <Footer2 />
    </>
  );
};

export default ForgotPassword;
