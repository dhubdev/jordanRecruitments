import Explore from "@/components/Explore";
import Footer2 from "@/components/Footer2";
import Intro from "@/components/Intro";
import Join from "@/components/Join";
import JoinTeam from "@/components/JoinTeam";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jordan recruitments</title>
        <meta name="Jordan recruitments" content="Jordan recruitments" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/JR.svg" />
      </Head>

      <Navbar />
      <Intro />
      <Explore />
      <Offer />
      <JoinTeam />
      <Join />
      <Footer2 />
    </>
  );
}
