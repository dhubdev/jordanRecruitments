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
  gap: 2rem;
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
  background: #fff;
  border: none;
  border-bottom: ${(props) => props.border};
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
  font-family: inherit;
  cursor: pointer;
  width: 8rem;
  height: 3rem;
`;

const UsersDiv = styled.table`
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

const Employers = () => {
  const [option, setOption] = useState("");
  const [users, setUsers] = useState([]);
  const cookies = parseCookies();

  const admin = cookies?.admin ? JSON.parse(cookies?.admin) : "";
  const router = useRouter();

  const [schoolStat, setSchoolStat] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (admin === "") {
      router.push("/admin/login");
    }
  }, []);

  const getUsers = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get(`/api/admin/getUsers`, {}, config);

      const filterData = data?.filter((item) => {
        return item?.employeer === true;
      });

      setUsers(filterData);
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
    setOption("/admin/users");
  }, []);

  const handleUser = (item) => {
    cookie.set("userDetailsAd", JSON.stringify(item));
    router.push("/admin/userDetails");
  };

  return (
    <Div>
      <AdminBar option={option} />
      <RightDiv>
        <Wrapper>
          <Head>
            <H2>Users</H2>
          </Head>

          <BtnDiv>
            <Btn onClick={() => router.push("/admin/users")} border="none">
              Job Seekers
            </Btn>
            <Btn
              onClick={() => router.push("/admin/employers")}
              border="1px solid green"
            >
              Employers
            </Btn>
          </BtnDiv>
          <UsersDiv>
            <thead>
              <Tr>
                <Th>S/N</Th>
                <Th>Full Name</Th>
                <Th>Email Address</Th>
                <Th>Phone Number</Th>
              </Tr>
            </thead>
            <tbody>
              {users?.map((user, i) => (
                <Tr key={i} onClick={() => handleUser(user)}>
                  <Td>{i + 1}</Td>
                  <Td>{user.fullname}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.phone}</Td>
                </Tr>
              ))}
            </tbody>
          </UsersDiv>
        </Wrapper>
      </RightDiv>
    </Div>
  );
};

export default Employers;
