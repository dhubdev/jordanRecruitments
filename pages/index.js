import Explore from "@/components/Explore";
import Footer2 from "@/components/Footer2";
import Intro from "@/components/Intro";
import Join from "@/components/Join";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>DHUB Education</title>
        <meta name="DHUB Education" content="DHUB Education" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Navbar />
      <Intro />
      <Explore />
      <Offer />
      <Join />
      <Footer2 />
    </>
  );
}
