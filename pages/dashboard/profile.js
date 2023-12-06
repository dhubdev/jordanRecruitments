import EditForm from "@/components/dashboard/EditForm";
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
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;
  //justify-content: center;
  width: 75%;
  padding: 2rem 0;
  margin: 0 0 0 20rem;

  gap: 2rem;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 600px) {
    width: 92%;
  }
`;
const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 500;
`;

const ProfileCon = styled.div`
  background: #cde4fe;

  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 7px;
  gap: 1rem;
  width: 19rem;
`;
const P = styled.p``;

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [opt, setOpt] = useState("");

  const router = useRouter();

  const cookies = parseCookies();

  const userDetails = cookies?.userDetails
    ? JSON.parse(cookies?.userDetails)
    : "";

  const getUser = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/user/getUser`,
        { userId: userDetails?.user?._id },
        config
      );

      setUser(data?.result);
      //console.log(data?.profile[0]);
      //navigate("/login");
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.error);
    }
  };

  useEffect(() => {
    if (userDetails === "") {
      router.push("/login");
    }

    getUser();
    setOpt("/dashboard/profile");
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
            <Wrapper>
              <H2>Your Profile</H2>
              <ProfileCon>
                <P>Name: {user?.fullname}</P>
                <P>Email: {user?.email}</P>
                <P>Phone: {user?.phone}</P>
                {user?.address !== "" && <P>Address: {user?.address}</P>}
              </ProfileCon>
              <EditForm />
            </Wrapper>
          </Div>
        )}
      </div>
    </>
  );
};

export default Profile;
