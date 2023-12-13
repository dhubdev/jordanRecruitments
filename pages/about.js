import AboutUs from "@/components/AboutUs";
import Footer2 from "@/components/Footer2";

import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";

import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Jordan recruitments</title>
        <meta name="Jordan recruitments" content="Jordan recruitments" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/JR.svg" />
      </Head>

      <Navbar />
      <AboutUs />
      <Offer />
      <Footer2 />
    </>
  );
}
