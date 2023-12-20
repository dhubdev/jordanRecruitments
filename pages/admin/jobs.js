import AdminBar from "@/components/AdminBar";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

import styled from "styled-components";

const Div = styled.div`
  display: flex;
`;

const RightDiv = styled.div`
  width: 81%;
  margin-left: 20%;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 2rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-bottom: 3rem;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const H2 = styled.h2`
  font-size: 2rem;
`;

const BtnDiv = styled.div`
  display: flex;
  align-items: center;

  gap: 0.1rem;
`;
const Btn = styled.button`
  background: #5ba4fc;
  border-radius: 7px;
  color: #fff;
  border: none;

  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
  font-family: inherit;
  cursor: pointer;
  width: 8rem;
  height: 3rem;
`;
const P2 = styled.p``;

const JobDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

const AppInner = styled.div`
  width: 20rem;
  padding: 1.5rem;
  border-radius: 7px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  //padding: 5px;
  width: 5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
`;

const Flag2 = styled.div`
  background: green;
  color: #fff;
  font-size: 0.7rem;
  //padding: 5px;
  width: 8rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
`;

const AppDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const H3 = styled.h3`
  font-size: 1rem;
`;

const AppTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const Tr = styled.tr`
  cursor: pointer;
`;

const Th = styled.th`
  width: 10rem;
  border-bottom: 1px solid #5ba4fc;
  background: #f2f5fa;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0 1.5rem;
  height: 4rem;
  text-align: left;
`;
const Td = styled.td`
  border-bottom: 1px solid #5ba4fc;
  height: 4rem;
  padding: 0 1.5rem;
  text-align: left;
`;

const Jobs = () => {
  const [option, setOption] = useState("");
  const [jobs, setJobs] = useState([]);
  const cookies = parseCookies();

  const admin = cookies?.admin ? JSON.parse(cookies?.admin) : "";
  const router = useRouter();

  const [apps, setApps] = useState([]);

  const [schoolStat, setSchoolStat] = useState(false);
  const [search, setSearch] = useState("");
  const [delOk, setDelOk] = useState(false);

  useEffect(() => {
    if (admin === "") {
      router.push("/admin/login");
    }
  }, []);

  const getJobs = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get(`/api/jobs/getJobs`, {}, config);

      setJobs(data?.result.reverse());
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getJobs();
    setOption("/admin/jobs");
  }, [delOk]);

  const handleClick = (id) => {
    cookie.set("jobId", JSON.stringify(id));
    router.push("/admin/editJob");
  };

  const handleClick2 = async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/jobs/deleteJob`,
        {
          jobId: id,
        },
        config
      );

      setDelOk(!delOk);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleView = async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/application/getAppsByJobId`,
        {
          jobId: id,
        },
        config
      );
      //toast.success(data?.status);
      setApps(data?.result?.reverse());
      //setApps([]);
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.error);
    }
  };

  const handleDetail = (item) => {
    cookie.set("appDetail", JSON.stringify(item));
    router.push("/admin/appDetail");
  };

  //console.log(users);

  return (
    <Div>
      <AdminBar option={option} />
      <RightDiv>
        <Wrapper>
          <Head>
            <H2>Jobs</H2>
          </Head>

          <BtnDiv>
            <Btn onClick={() => router.push("/admin/postJob")}>Post Job</Btn>
          </BtnDiv>
          <JobDiv>
            {jobs?.map((item, i) => (
              <AppInner key={i}>
                <Hd>
                  <H3>{item?.title}</H3>
                  <Flag onClick={() => handleClick(item?._id)}>Edit Job</Flag>
                  <Flag onClick={() => handleClick2(item?._id)}>
                    Delete Job
                  </Flag>
                </Hd>
                <P2>{item?.location}</P2>
                <AppDiv>
                  <Flag2 onClick={() => handleView(item?._id)}>
                    View Applications
                  </Flag2>

                  <small>
                    {item?.apps} Application{item?.apps > 1 ? "s" : ""}
                  </small>
                </AppDiv>
              </AppInner>
            ))}
          </JobDiv>

          {apps?.length !== 0 && (
            <div>
              <h2 style={{ marginBottom: "1.2rem" }}>Applications</h2>
              <AppTable>
                <thead>
                  <Tr>
                    <Th>S/N</Th>
                    <Th>Full Name</Th>
                    <Th>Email Address</Th>
                  </Tr>
                </thead>
                <tbody>
                  {apps?.map((item, i) => (
                    <Tr key={i} onClick={() => handleDetail(item)}>
                      <Td>{i + 1}</Td>
                      <Td>{item.fullname}</Td>
                      <Td>{item.email}</Td>
                    </Tr>
                  ))}
                </tbody>
              </AppTable>
            </div>
          )}
        </Wrapper>
      </RightDiv>
    </Div>
  );
};

export default Jobs;
