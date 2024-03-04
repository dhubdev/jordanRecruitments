import Sidebar from "@/components/dashboard/Sidebar";
import { UserContext } from "@/context/userContext";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
//import { data } from "../../components/findJob/FilterData";
import Image from "next/image";
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdOutlineSearch,
} from "react-icons/md";
import useSWR from "swr";
import { CgMenuLeft } from "react-icons/cg";

const Div = styled.div`
  position: relative;
  width: 100%;
`;

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
  width: 70%;
  padding: 2rem 0;
  margin: 0 0 0 20rem;

  gap: 2rem;

  @media screen and (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;
    padding: 4rem 0 2rem;
  }

  @media screen and (max-width: 600px) {
    width: 92%;
  }
`;
const TopCon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 22%;
  border: 1px solid #cde4fe;
  height: 16rem;
  border-radius: 7px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Diiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  cursor: pointer;
`;

const RImg = styled(Image)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  object-fit: cover;
`;

const LeftBanner = styled.div`
  width: 100%;
  position: relative;

  height: 13rem;
  border-radius: 7px;

  display: flex;
  align-items: center;
  color: #fff;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 1024px) {
    height: 13rem;
  }

  @media screen and (max-width: 600px) {
    height: 18rem;
  }
`;

const Layer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #000;
  opacity: 0.3;
  border-radius: 7px;
`;

const Binner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media screen and (max-width: 1024px) {
    flex: unset;
  }
`;

const H3 = styled.h3`
  font-size: 1.6rem;
  padding-left: 1rem;
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
const P = styled.p`
  font-size: 0.9rem;
  padding: 0 1rem;
  @media screen and (max-width: 1024px) {
    flex: unset;
  }
`;

const Img = styled(Image)`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 7px;
  @media screen and (max-width: 1024px) {
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 600px) {
  }
`;
const Input = styled.input`
  outline: none;
  border: 1px solid #cde4fe;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;

  width: 94%;
  height: 2.5rem;
  padding: 0 3%;
  font-family: inherit;
`;

const Btn = styled.button`
  font-family: inherit;
  width: 3rem;
  height: 2.6rem;
  font-size: 1.2rem;
  border: 1px solid #5ba4fc;
  background: #5ba4fc;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const JobsCon = styled.div`
  border: 1px solid #cde4fe;
  border-radius: 7px;
  padding: 1.5rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const H3J = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
  padding-left: 2rem;
  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
    padding-left: 1rem;
  }
`;
const InnerCon = styled.div``;
const JobCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2rem;
  border-top: 1px solid #cde4fe;
  border-bottom: 1px solid #cde4fe;
  &:hover {
    background: #cde4fe;
    transition: all ease 400ms;
  }

  @media screen and (max-width: 1024px) {
    &:hover {
      background: unset;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 1.4rem 1rem;
  }
`;

const Hd = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    gap: 1rem;
    justify-content: unset;
  }
`;
const Title = styled.h3`
  font-weight: 500;
  font-size: 1.2rem;

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;

    width: 20rem;
  }
`;

const Btn2 = styled.button`
  width: 8rem;
  height: 3rem;
  font-family: inherit;
  border: none;
  background-color: #5ba4fc;
  color: #fff;
  border: 1px solid #5ba4fc;

  border-radius: 10px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 6rem;
  }
`;

const PJ = styled.p`
  font-size: 0.9rem;
`;
function Desc({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const { click, setClick } = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [more, setMore] = useState(null);

  const [filtered, setFiltered] = useState([]);
  const [dataR, setDataR] = useState([]);

  const fetcher = (url) =>
    axios.get(url).then((res) => res.data?.result?.reverse());
  const { data, error } = useSWR("/api/jobs/getJobs", fetcher);

  const [opt, setOpt] = useState("");

  const router = useRouter();

  const cookies = parseCookies();

  const userDetails = cookies?.userDetails
    ? JSON.parse(cookies?.userDetails)
    : "";

  // const getPosts = async () => {
  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };

  //     const { data } = await axios.get(`/api/jobs/getJobs`, {}, config);

  //     setFiltered(data?.result);
  //     setDataR(data?.result);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };

  useEffect(() => {
    if (userDetails === "") {
      router.push("/login");
    }

    if (userDetails?.user?.employeer) {
      router.push("/employer/dashboard");
    }

    setFiltered(data);
    setDataR(data);

    setUser(userDetails);
    setOpt("/dashboard/home");
  }, [data]);

  const handelSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    const filteredData = data.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(search.toLowerCase());
    });
    setFiltered(filteredData);
  };

  const handleClick = (id) => {
    //console.log(id);
    setMore(id);
  };

  const handleClick2 = (id) => {
    setMore(null);
  };

  const handleApply = (id) => {
    // //console.log(id);
    router.push(`/dashboard/application/${id}`);
  };

  //console.log(data);

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
            <Sidebar option={opt} />
            <Wrapper>
              <TopCon>
                <Left>
                  <LeftBanner>
                    <Img
                      src="/jsup.jpeg"
                      width={2000}
                      height={2000}
                      priority={true}
                      alt="image"
                    />
                    <Layer />
                    <Binner>
                      <H3>Get more than a job</H3>
                      <P>
                        Rely on us to consistently represent you in the best
                        possible way to our valued clients, highlighting your
                        distinctive strengths and potential. Our commitment goes
                        beyond the initial placement. We foster a lasting
                        connection with our candidates, offering continuous
                        guidance and unlocking doors to opportunities that can
                        shape your career in the long run.
                      </P>
                    </Binner>
                  </LeftBanner>
                  <Form onSubmit={handelSubmit}>
                    <Input
                      placeholder="Search for job"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <Btn>
                      <MdOutlineSearch />
                    </Btn>
                  </Form>

                  <JobsCon>
                    <H3J>Available Jobs</H3J>
                    <InnerCon>
                      {data?.length !== 0 &&
                        filtered?.length !== 0 &&
                        filtered?.map((item, i) => (
                          <JobCon key={i}>
                            <Hd>
                              <Title>{item?.title}</Title>
                              <Btn2 onClick={() => handleApply(item?._id)}>
                                Apply
                              </Btn2>
                            </Hd>
                            <PJ>Salary: {item.pay}</PJ>
                            <PJ>Job kind: {item?.option}</PJ>
                            <PJ>Job type: {item.type}</PJ>
                            <PJ>Location: {item.location}</PJ>
                            {more !== item._id ? (
                              <Desc html={item?.desc.slice(0, 250) + "..."} />
                            ) : (
                              <Desc html={item?.desc} />
                            )}
                            {more === item._id ? (
                              <PJ
                                onClick={() => handleClick2(item?._id)}
                                style={{
                                  cursor: "pointer",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "0.3rem",
                                  color: "blue",
                                }}
                              >
                                Show less <MdArrowDropUp />
                              </PJ>
                            ) : (
                              <PJ
                                onClick={() => handleClick(item?._id)}
                                style={{
                                  cursor: "pointer",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "0.3rem",
                                  color: "blue",
                                }}
                              >
                                Show more <MdArrowDropDown />
                              </PJ>
                            )}
                            <PJ>Duration: {item.duration}</PJ>
                            <PJ>
                              Date posted: {item?.datePosted?.slice(0, 15)}
                            </PJ>
                          </JobCon>
                        ))}
                    </InnerCon>
                  </JobsCon>
                </Left>
              </TopCon>
            </Wrapper>
          </Div>
        )}
      </div>
    </>
  );
};

export default Home;
