import Navbar from "@/components/Navbar";
import Head from "next/head";

import ListJobs from "@/components/findJob/ListJobs";

export default function Jobs() {
  return (
    <>
      <Head>
        <title>Jordan recruitments-Jobs</title>
        <meta name="Jordan recruitments" content="Jobs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/JR.svg" />
      </Head>

      <Navbar />
      <ListJobs />
    </>
  );
}
