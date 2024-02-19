import { UserContext } from "@/context/userContext";
import Image from "next/image";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useContext, useEffect } from "react";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  color: #fff;
`;
const Layer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #000;
  opacity: 0.3;
`;
const Img = styled(Image)`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -10;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 600px) {
    object-fit: cover;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45rem;
  height: 50rem;
  margin: 0 auto;
  gap: 3rem;

  @media screen and (max-width: 1024px) {
    width: 80%;
    height: 35rem;
    padding-top: 5rem;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    height: 47rem;
    padding-top: unset;
  }
`;
const H1 = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;

  @media screen and (max-width: 1024px) {
    font-size: 2.3rem;
    //width: 90%;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
  }
`;
const P = styled.p`
  text-align: center;
  font-size: 1rem;
  opacity: 0.9;
  @media screen and (max-width: 1024px) {
    width: 85%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 1rem;
  }
`;
const Btn = styled.button`
  width: 10rem;
  height: 4rem;
  font-family: inherit;
  border: none;
  background-color: #5ba4fc;
  color: #fff;
  border: 1px solid #5ba4fc;
  font-weight: 500;
  font-size: 1rem;

  border-radius: 5px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const Intro = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  // const cookies = parseCookies();

  // const userDetails = cookies?.userDetails
  //   ? JSON.parse(cookies?.userDetails)
  //   : "";

  // useEffect(() => {
  //   setUser(userDetails);
  // }, []);

  // console.log(user);
  return (
    <Div>
      <Layer />
      <Img
        src="/recruit2.webp"
        width={2000}
        height={2000}
        priority={true}
        alt="image"
      />
      <Wrapper>
        <H1>
          Welcome to Jordan Recruitments - Your Gateway to Exciting
          Opportunities!
        </H1>
        <P>
          Are you ready to take the next big step in your career? Look no
          further! Jordan Recruitments is your go-to destination for connecting
          with the best employers and discovering the job of your dreams
        </P>
        <Btn onClick={() => router.push("/signUp")}>Get Started</Btn>
      </Wrapper>
    </Div>
  );
};

export default Intro;
