import AdminBar from "@/components/AdminBar";
import EditForm3 from "@/components/dashboard/EditForm3";
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
  gap: 2rem;
  padding-bottom: 2rem;
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
  //padding: 5px;
  width: 4rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
`;
const H3 = styled.h3`
  font-size: 1rem;
`;

const EditJob = () => {
  const [option, setOption] = useState("");
  const [jobs, setJobs] = useState([]);
  const cookies = parseCookies();

  const admin = cookies?.admin ? JSON.parse(cookies?.admin) : "";
  const router = useRouter();

  const [schoolStat, setSchoolStat] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (admin === "") {
      router.push("/admin/login");
    }

    setOption("/admin/jobs");
  }, []);

  //console.log(users);

  return (
    <Div>
      <AdminBar option={option} />
      <RightDiv>
        <Wrapper>
          <Head>
            <H2>Edit Job</H2>
          </Head>
          <EditForm3 />
        </Wrapper>
      </RightDiv>
    </Div>
  );
};

export default EditJob;
