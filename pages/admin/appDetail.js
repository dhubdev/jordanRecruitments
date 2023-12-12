import axios from "axios";

import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

import styled from "styled-components";

import { IoMdArrowDropdown } from "react-icons/io";
import AdminBar from "@/components/AdminBar";
import Link from "next/link";

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
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const H2 = styled.h2`
  font-size: 2rem;
`;

const UserDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Image = styled.img`
  width: 10rem;
  height: 7rem;
  object-fit: contain;

  border: 1px solid #d1e2ff;
  pointer-events: none;
  background: #fff;
  padding: 1rem 0;
`;

const P = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Cred = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const CredDiv = styled.div`
  display: flex;
  align-items: center;

  gap: 2rem;
`;
const H3 = styled.h3`
  font-weight: 500;
`;
const NewLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: #000;
`;

const AppDetail = () => {
  const [app, setApp] = useState([]);
  const [option, setOption] = useState("");
  const cookies = parseCookies();
  const admin = cookies?.admin ? JSON.parse(cookies?.admin) : "";
  const appDetail = cookies?.appDetail ? JSON.parse(cookies?.appDetail) : "";

  console.log(appDetail?.cv);

  const router = useRouter();

  useEffect(() => {
    if (admin === "") {
      router.push("/admin/login");
    }

    setApp(appDetail);
    setOption("/admin/jobs");
  }, []);

  return (
    <Div>
      <AdminBar option={option} />
      <RightDiv>
        <Wrapper>
          <H2>Application details</H2>
          <UserDiv>
            <P>
              <span>Full Name:</span>
              {app?.fullname}
            </P>
            <P>
              <span>Email Address:</span>
              {app?.email}
            </P>

            <P>
              <span>Address:</span>
              {app?.address}
            </P>
            <P>
              <span>Moved in:</span>
              {app?.moveIn}
            </P>
          </UserDiv>

          <Cred>
            <H3>Click files to view credentials</H3>

            <CredDiv>
              <NewLink href={app?.cv} target="_blank">
                <Image src="/pdf.png" width={2000} height={2000} alt="image" />
                <P>CV or Resume</P>
              </NewLink>

              <NewLink href={app?.rtw} target="_blank">
                <Image src="/pdf.png" width={2000} height={2000} alt="image" />
                <P>Right to work</P>
              </NewLink>

              <NewLink href={app?.validId} target="_blank">
                <Image
                  src="/image.png"
                  width={2000}
                  height={2000}
                  alt="image"
                />
                <P>Valid Identification</P>
              </NewLink>
            </CredDiv>
          </Cred>
        </Wrapper>
      </RightDiv>
    </Div>
  );
};

export default AppDetail;
