import AvJobs from "@/components/AvJobs";
import Explore from "@/components/Explore";
import Footer2 from "@/components/Footer2";
import Intro from "@/components/Intro";
import Join from "@/components/Join";
import JoinTeam from "@/components/JoinTeam";
import Navbar from "@/components/Navbar";

import OfferNill from "@/components/OfferNill";
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

        <meta
          name="description"
          content="Connecting individuals with top employers to find your ideal job and advance your career."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jordanrecruitments.com/" />
        <meta property="og:title" content="Jordan Recruitments" />
        <meta
          property="og:description"
          content="Connecting individuals with top employers to find your ideal job and advance your career."
        />
        <meta
          property="og:image"
          content="https://www.jordanrecruitments.com/_next/image?url=%2Frecruit2.webp&w=2048&q=75"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.jordanrecruitments.com/"
        />
        <meta
          name="google-site-verification"
          content="JROLn3xVY3fFmYJyjnO2BoICxGgAQUn5aZOeH7T40m4"
        />
        <meta property="twitter:title" content="Jordan Recruitments" />
        <meta
          property="twitter:description"
          content="Connecting individuals with top employers to find your ideal job and advance your career."
        />
        <meta
          property="twitter:image"
          content="https://www.jordanrecruitments.com/_next/image?url=%2Frecruit2.webp&w=2048&q=75"
        />
        <script
          defer
          src="//code.tidio.co/5g21tnzxolaiux79zh7erzcrxbcpbsfu.js"
        ></script>
      </Head>

      <Navbar />
      <Intro />
      <AvJobs />
      <Explore />

      <OfferNill />
      <JoinTeam />
      <Join />
      <Footer2 />
    </>
  );
}
