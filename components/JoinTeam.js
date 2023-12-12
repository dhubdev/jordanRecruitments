import Image from "next/image";
import styled from "styled-components";

const Div = styled.div`
  background: #cde4fe;
  margin-top: 3rem;
  padding: 3rem 0;
`;
const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const Con = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    //width: 90%;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    justify-content: center;
    flex: unset;
    width: 100%;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media screen and (max-width: 1024px) {
    flex: unset;
    width: 100%;
  }
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
const H2 = styled.h2`
  font-size: 2rem;
  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;
const P = styled.p``;
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

const A = styled.a`
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
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  font-size: 0.9rem;
`;

const JoinTeam = () => {
  return (
    <Div>
      <Wrapper>
        <Con>
          <Left>
            <Img
              src="/jointeam.jpg"
              width={2000}
              height={2000}
              loading="lazy"
              alt="image"
            />
          </Left>
          <Right>
            <H2>Join Our Team</H2>
            <P>
              Are you passionate about connecting talent with opportunity?
              Joining our team at Jordan recruitments means becoming an integral
              part of a dynamic and innovative recruitment platform. We are more
              than just a company; we're a community of dedicated professionals
              working together to redefine the future of careers.
            </P>
            <A href="mailto:info@jordanrecruitments.com">Join now</A>
          </Right>
        </Con>
      </Wrapper>
    </Div>
  );
};

export default JoinTeam;
