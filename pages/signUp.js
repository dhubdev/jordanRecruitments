import Footer2 from "@/components/Footer2";
import Navbar from "@/components/Navbar";
import Mployee from "@/components/signUp/Mployee";
import { UserContext } from "@/context/userContext";

import Head from "next/head";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useContext, useEffect } from "react";

export default function SignUp() {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const cookies = parseCookies();

  const userDetails = cookies?.userDetails
    ? JSON.parse(cookies?.userDetails)
    : "";

  useEffect(() => {
    if (userDetails !== "") {
      if (!userDetails?.user?.employeer) {
        router.push("/dashboard/home");
      } else {
        router.push("/employer/dashboard");
      }
    }
  }, []);
  return (
    <>
      <Head>
        <title>Jordan recruitments-Sign up</title>
        <meta name="Jordan recruitments" content="sign up" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/JR.svg" />
      </Head>

      <Navbar />
      <Mployee />
      <Footer2 />
    </>
  );
}
