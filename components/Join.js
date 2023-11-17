import Image from "next/image";
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
  opacity: 0.6;
  width: 15rem;
  height: 15rem;
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 3rem;
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
  background-color: #da2c85;
  color: #fff;
  border: 1px solid #da2c85;

  border-radius: 5px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
const Join = () => {
  return (
    <Div>
      <Wrapper>
        <Img src="/icon.png" width={2000} height={2000} alt="image" />
        <H2>Join Us Today!</H2>
        <P>
          Don't miss out on the opportunities that await you. Sign up now and
          embark on a journey to a brighter, more fulfilling career. Your dream
          job is just a click away!
        </P>
        <Btn>Sign Up</Btn>
      </Wrapper>
    </Div>
  );
};

export default Join;
