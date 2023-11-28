import Footer2 from "@/components/Footer2";
import Navbar from "@/components/Navbar";
import Mployee from "@/components/signUp/Mployee";
import Head from "next/head";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Jordan recruitments-Sign up</title>
        <meta name="Jordan recruitments" content="Jobs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/JR.svg" />
      </Head>

      <Navbar />
      <Mployee />
      <Footer2 />
    </>
  );
}
