import EditForm from "@/components/dashboard/EditForm";
import Sidebar from "@/components/dashboard/Sidebar";
import { UserContext } from "@/context/userContext";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { toast } from "react-toastify";
import styled from "styled-components";
import useSWR from "swr";

const Div = styled.div``;

const DivHam = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: inline;
    position: absolute;
    left: 5%;
    top: 1rem;
    font-size: 2rem;
  }
`;
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
    margin: 0 auto;
    padding: 4rem 0 2rem;
    align-items: center;
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
  @media screen and (max-width: 1024px) {
    width: 92%;
  }
`;
const P = styled.p`
  font-size: 0.9rem;
`;

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const { click, setClick } = useContext(UserContext);
  const [opt, setOpt] = useState("");

  const router = useRouter();

  const cookies = parseCookies();

  const fetcher = (url) =>
    axios.post(url, { userId: userDetails?.user?._id }).then((res) => res.data);
  const { data, error } = useSWR("/api/user/getUser", fetcher);

  const userDetails = cookies?.userDetails
    ? JSON.parse(cookies?.userDetails)
    : "";

  // const getUser = async () => {
  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };

  //     const { data } = await axios.post(
  //       `/api/user/getUser`,
  //       { userId: userDetails?.user?._id },
  //       config
  //     );

  //     setUser(data?.result);
  //     //console.log(data?.profile[0]);
  //     //navigate("/login");
  //   } catch (error) {
  //     console.log(error.response);
  //     toast.error(error.response.data.error);
  //   }
  // };

  //console.log(data?.result);

  useEffect(() => {
    if (userDetails === "") {
      router.push("/login");
    }

    setUser(data?.result);
    setOpt("/dashboard/profile");
  }, [data]);

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
            {!click && (
              <DivHam onClick={() => setClick(true)}>
                <CgMenuLeft />
              </DivHam>
            )}
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
