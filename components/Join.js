import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

const Div = styled.div`
  margin-top: 3rem;
  padding-bottom: 2rem;
`;

const Wrapper = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;
const Img = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  z-index: -1;
  opacity: 0.3;
  width: 15rem;
  height: 15rem;
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 2.6rem;
  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;
const P = styled.p`
  text-align: center;
  width: 50%;
  @media screen and (max-width: 1024px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const Btn = styled.button`
  width: 9rem;
  height: 3rem;
  font-family: inherit;
  border: none;
  background-color: #5ba4fc;
  color: #fff;
  border: 1px solid #5ba4fc;

  border-radius: 5px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
const Join = () => {
  const router = useRouter();
  return (
    <Div>
      <Wrapper>
        <Img
          src="/JR.svg"
          width={2000}
          height={2000}
          loading="lazy"
          alt="image"
        />
        <H2>Sign Up Now!</H2>
        <P>
          Don't miss out on the opportunities that await you. Sign up now and
          embark on a journey to a brighter, more fulfilling career. Your dream
          job is just a click away!
        </P>
        <Btn onClick={() => router.push("/signUp")}>Sign Up</Btn>
      </Wrapper>
    </Div>
  );
};

export default Join;
