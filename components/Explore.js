import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

const Div = styled.div`
  background: #cde4fe;
  padding: 3rem 0;
`;
const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;

  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const Con = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 2rem;
    //width: 90%;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media screen and (max-width: 1024px) {
    flex: unset;
    width: 100%;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 1024px) {
    flex: unset;
    width: 100%;
    justify-content: center;
  }
`;

const H2 = styled.h2`
  font-size: 2rem;
  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;
const P = styled.p``;
const ImageDiv = styled.div`
  width: 85%;
`;
const Img = styled(Image)`
  width: 30rem;
  height: 20rem;
  border-radius: 5px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 1024px) {
    width: 70%;
    height: 15rem;
    object-fit: cover;
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

const Explore = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/jobs");
  };
  return (
    <Div>
      <Wrapper>
        <Con>
          <Left>
            <H2>Explore Diverse Opportunities</H2>
            <P>
              Discover a vast array of job listings from top companies across
              industries. Whether you're a seasoned professional or just
              starting your career, our platform offers a diverse range of
              opportunities to match your skills and aspirations.
            </P>
            <Btn onClick={handleClick}>Explore Now</Btn>
          </Left>
          <Right>
            <Img
              src="/expl.png"
              width={2000}
              height={2000}
              loading="lazy"
              alt="image"
            />
          </Right>
        </Con>
      </Wrapper>
    </Div>
  );
};

export default Explore;
