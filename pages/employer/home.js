import Sidebar2 from "@/components/dashboard/Sidebar2";
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
    z-index: 10;
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
  position: relative;

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

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (max-width: 1024px) {
    align-items: center;
  }
`;

const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 500;
`;
const AppDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;
const P = styled.p`
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`;

const P2 = styled.p``;

const AppInner = styled.div`
  width: 18rem;
  padding: 1.5rem;
  border-radius: 7px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  cursor: pointer;
`;
const Hd = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
`;
const Flag = styled.div`
  background: green;
  color: #fff;
  font-size: 0.7rem;
  padding: 5px;
  width: 6rem;
  text-align: center;
  border-radius: 10px;
`;
const H3 = styled.h3`
  font-size: 1rem;
`;
const Det = styled.div`
  padding: 1.5rem;
  border: 1px solid #cde4fe;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
`;

const H32 = styled.h3`
  font-size: 1.4rem;
`;

const Btn = styled.button`
  width: 10rem;
  height: 3rem;
  font-family: inherit;
  border: none;
  background-color: #5ba4fc;
  color: #fff;
  border: 1px solid #5ba4fc;

  //font-size: 1rem;

  border-radius: 5px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const LoadDiv = styled.div`
  width: 10rem;
  height: 0.5rem;
  border-radius: 7px;
  background: #cde4fe;
  position: absolute;
  top: 20rem;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
`;
const Loader = styled.div`
  width: 2rem;
  height: 0.5rem;
  border-radius: 7px;
  background-color: #5ba4fc;
  animation: load infinite ease-in-out 2s;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);

  @keyframes load {
    0% {
      transform: translateX(8rem);
    }

    50% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(8rem);
    }
  }
`;

const Applications = () => {
  const { user, setUser } = useContext(UserContext);
  const { click, setClick } = useContext(UserContext);
  const [opt, setOpt] = useState("");
  const [apps, setApps] = useState([]);
  const [load, setLoad] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [item, setItem] = useState([]);

  const router = useRouter();

  const cookies = parseCookies();

  const userDetails = cookies?.userDetails
    ? JSON.parse(cookies?.userDetails)
    : "";

  const fetcher = (url) =>
    axios.post(url, { userId: userDetails?.user?._id }).then((res) => res.data);
  const { data, error } = useSWR("/api/jobs/getUserJobs", fetcher);

  useEffect(() => {
    if (userDetails === "") {
      router.push("/login");
    }

    setUser(userDetails);
    setOpt("/employer/home");

    setTimeout(() => {
      setLoad(false);
    }, 2000);

    setJobs(data?.result?.reverse());
  }, [data]);

  // const getJobs = async () => {
  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };

  //     const { data } = await axios.get(`/api/jobs/getJobs`, {}, config);

  //     setJobs(data?.result);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };

  //console.log(apps);

  const handleClick = (item) => {
    setItem(item);
  };

  const handleRoute = () => {
    router.push("/employer/postJob");
  };

  console.log(userDetails?.user?._id);

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
            {!click && (
              <DivHam onClick={() => setClick(true)}>
                <CgMenuLeft />
              </DivHam>
            )}
            <Sidebar2 option={opt} />

            <Wrapper>
              {load && (
                <LoadDiv>
                  <Loader />
                </LoadDiv>
              )}

              {!load && <H2>Welcome!</H2>}
              {!load && jobs?.length !== 0 && (
                <Header>
                  <P>Here are the jobs you posted.</P>
                  <P>Click cards to view job details. </P>
                </Header>
              )}

              {!load && jobs?.length === 0 && (
                <Header>
                  <P>
                    You haven't post any job yet. <br />
                    Go to post jobs to start.
                  </P>
                  <Btn onClick={handleRoute}>Post Job</Btn>
                </Header>
              )}
              <AppDiv>
                {!load &&
                  jobs?.length !== 0 &&
                  jobs?.map((item, i) => (
                    <AppInner key={i} onClick={() => handleClick(item)}>
                      <Hd>
                        <H3>{item?.title}</H3>
                        <Flag>
                          {item?.apps} application{item?.apps > 1 && "s"}
                        </Flag>
                      </Hd>
                      <P2>{item?.location}</P2>
                    </AppInner>
                  ))}
              </AppDiv>

              {item?.length !== 0 && (
                <Det>
                  <H32>{item?.title}</H32>

                  <P2>Salary: {item?.pay}</P2>
                  <P2>Job type: {item?.type}</P2>
                  <P2>Location: {item?.location}</P2>
                  <P2>{item?.desc}</P2>

                  <P2>Duration: {item?.duration}</P2>
                  <P2>Date posted: {item?.datePosted?.slice(0, 15)}</P2>
                </Det>
              )}
            </Wrapper>
          </Div>
        )}
      </div>
    </>
  );
};

export default Applications;
