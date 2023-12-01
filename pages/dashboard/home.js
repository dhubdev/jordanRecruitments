import Sidebar from "@/components/dashboard/Sidebar";
import { UserContext } from "@/context/userContext";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

const Div = styled.div``;
const Wrapper = styled.div``;

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const [opt, setOpt] = useState("");

  const router = useRouter();

  const cookies = parseCookies();

  const userDetails = cookies?.userDetails
    ? JSON.parse(cookies?.userDetails)
    : "";

  useEffect(() => {
    if (userDetails === "") {
      router.push("/login");
    }

    setUser(userDetails);
    setOpt("/dashboard/home");
  }, []);

  return (
    <>
      <Head>
        <title>Jordan recruitments-Dashboard</title>
        <meta name="Jordan recruitments" content="Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/JR.svg" />
      </Head>
      <div>
        {user?.length !== 0 && (
          <Div>
            <Sidebar option={opt} />
            <Wrapper></Wrapper>
          </Div>
        )}
      </div>
    </>
  );
};

export default Home;
