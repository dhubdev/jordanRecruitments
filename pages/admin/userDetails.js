import axios from "axios";

import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

import styled from "styled-components";

import { IoMdArrowDropdown } from "react-icons/io";
import AdminBar from "@/components/AdminBar";

const Div = styled.div`
  display: flex;
`;

const RightDiv = styled.div`
  width: 81%;
  margin-left: 20%;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
`;

const H2 = styled.h2`
  font-size: 2rem;
`;

const UserDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;
const Image = styled.img`
  width: 40rem;
  height: 20rem;
  object-fit: contain;

  border: 1px solid #ff6600;
  pointer-events: none;
  background: #fff;
  padding: 1rem 0;
`;

const P = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const UserDetails = () => {
  const [user, setUser] = useState([]);
  const [option, setOption] = useState("");
  const cookies = parseCookies();
  const admin = cookies?.admin ? JSON.parse(cookies?.admin) : "";

  const userDetailsAd = cookies?.userDetailsAd
    ? JSON.parse(cookies?.userDetailsAd)
    : "";
  const router = useRouter();

  useEffect(() => {
    if (admin === "") {
      router.push("/admin/login");
    }

    setUser(userDetailsAd);
    setOption("/admin/users");
  }, []);

  return (
    <Div>
      <AdminBar option={option} />
      <RightDiv>
        <Wrapper>
          <H2>User details</H2>
          <UserDiv>
            <P>
              <span>Full Name:</span>
              {user?.fullname}
            </P>
            <P>
              <span>Email Address:</span>
              {user?.email}
            </P>

            <P>
              <span>Phone Number:</span>
              {user?.phone}
            </P>
            <P>
              <span>Address:</span>
              {user?.address}
            </P>
          </UserDiv>
        </Wrapper>
      </RightDiv>
    </Div>
  );
};

export default UserDetails;
