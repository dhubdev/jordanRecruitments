import { useRouter } from "next/router";
import styled from "styled-components";

const Div = styled.div`
  padding: 3rem 0;
`;
const Wrapper = styled.div`
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

const H2 = styled.h2`
  text-align: center;
  font-size: 2rem;
  width: 100%;
`;

const JobDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  :hover {
    transform: scale(1.04);
    transition: all ease 700ms;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    :hover {
      transform: none;
    }
  }
`;
const Job = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 15rem;
  height: 10rem;
  border: 1px solid ${(props) => props.border};
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 8rem;
    padding: 1.5rem;
  }
  :hover {
    transform: none;
  }
`;

const H3 = styled.h3`
  font-size: 1.2rem;
`;
const P0 = styled.p`
  text-align: center;
`;

const P = styled.p`
  font-size: 0.9rem;
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

const AvJobs = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/jobs");
  };
  return (
    <Div>
      <Wrapper>
        <H2>Jobs We Cover</H2>
        <P0>We offer a variety of jobs, both local and international.</P0>
        <JobDiv>
          <Job border="green">
            <H3>Construction</H3>
            <P>
              We have opportunities for experienced professionals and those
              looking to start their career in construction.
            </P>
          </Job>

          <Job border="blue">
            <H3>Cleaning</H3>
            <P>
              Join our team of dedicated cleaning professionals and contribute
              to maintaining high standards of cleabliness.
            </P>
          </Job>

          <Job border="yellow">
            <H3>Care</H3>
            <P>
              We provide rewarding opportunities to support inidividuals in need
              and make a positive impact on their lives.
            </P>
          </Job>

          <Job border="purple">
            <H3>Education</H3>
            <P>
              From teaching positions to administrative roles, we have
              opportunities for passionate educators.
            </P>
          </Job>

          <Job border="black">
            <H3>IT</H3>
            <P>
              We are looking for talented individuals to drive innovation and
              solve complex challenges.
            </P>
          </Job>

          <Job border="red">
            <H3>Remote</H3>
            <P>
              Whether you are a digital nomad or prefer the comfort of home,
              explore roles that allow you to thrive from anywhere in the world.
            </P>
          </Job>
        </JobDiv>

        <Btn onClick={handleClick}>View all jobs</Btn>
      </Wrapper>
    </Div>
  );
};

export default AvJobs;
