import Image from "next/image";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
`;
const Img = styled(Image)`
  position: absolute;
  top: 6rem;

  width: 100%;
  height: 80%;
  object-fit: contain;
  z-index: -1;

  @media screen and (max-width: 1024px) {
    top: 3rem;
  }

  @media screen and (max-width: 600px) {
    object-fit: cover;
    top: 5rem;
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
  font-size: 1.2rem;
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
  background-color: #da2c85;
  color: #fff;
  border: 1px solid #da2c85;
  font-weight: 500;
  font-size: 1rem;

  border-radius: 5px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const Intro = () => {
  return (
    <Div>
      <Img src="/drop4.svg" width={2000} height={2000} alt="image" />
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
        <Btn>Get Started</Btn>
      </Wrapper>
    </Div>
  );
};

export default Intro;
