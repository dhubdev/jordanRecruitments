import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { data } from "./FilterData";
import { MdOutlineSearch } from "react-icons/md";

const Div = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;
  //justify-content: center;
  width: 85%;
  padding-top: 8rem;

  margin: 0 auto;
  gap: 2rem;
  padding-bottom: 2rem;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;
const TopCon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 22%;
  border: 1px solid #cde4fe;
  height: 16rem;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const RImg = styled(Image)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  object-fit: cover;
`;

const LeftBanner = styled.div`
  width: 96%;
  background: #5ba4fc;
  height: 10rem;
  border-radius: 7px;
  padding: 2rem 2%;
  display: flex;
  align-items: center;
  color: #fff;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    height: unset;
    gap: 1.3rem;
    width: 94%;
    padding: 2rem 3%;
  }
`;

const BinnerLeft = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media screen and (max-width: 1024px) {
    flex: unset;
  }
`;
const BinnerRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    flex: unset;
  }
`;

const H3 = styled.h3`
  font-size: 1.6rem;
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
const P = styled.p`
  font-size: 0.9rem;
  @media screen and (max-width: 1024px) {
    flex: unset;
  }
`;

const Img = styled(Image)`
  width: 12rem;
  height: 12rem;
  object-fit: contain;
  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    height: unset;
    width: 20rem;
    height: 12rem;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 600px) {
  }
`;
const Input = styled.input`
  outline: none;
  border: 1px solid #cde4fe;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;

  width: 94%;
  height: 2.5rem;
  padding: 0 3%;
  font-family: inherit;
`;

const Btn = styled.button`
  font-family: inherit;
  width: 3rem;
  height: 2.6rem;
  font-size: 1.2rem;
  border: 1px solid #5ba4fc;
  background: #5ba4fc;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const JobsCon = styled.div`
  border: 1px solid #cde4fe;
  border-radius: 7px;
  padding: 1.5rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const H3J = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
  padding-left: 2rem;
  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
    padding-left: 1rem;
  }
`;
const InnerCon = styled.div``;
const JobCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2rem;
  border-top: 1px solid #cde4fe;
  border-bottom: 1px solid #cde4fe;
  &:hover {
    background: #cde4fe;
    transition: all ease 400ms;
  }

  @media screen and (max-width: 600px) {
    padding: 1.4rem 1rem;
  }
`;
const Title = styled.h3`
  font-weight: 500;
  font-size: 1.2rem;

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`;
const Desc = styled.p``;
const PJ = styled.p`
  font-size: 0.9rem;
`;

const ListJobs = () => {
  const [search, setSearch] = useState("");

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(data);
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    const filteredData = data.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(search.toLowerCase());
    });
    setFiltered(filteredData);
  };
  return (
    <Div>
      <Wrapper>
        <TopCon>
          <Left>
            <LeftBanner>
              <BinnerLeft>
                <H3>Get more than a job</H3>
                <P>
                  Rely on us to consistently represent you in the best possible
                  way to our valued clients, highlighting your distinctive
                  strengths and potential. Our commitment goes beyond the
                  initial placement. We foster a lasting connection with our
                  candidates, offering continuous guidance and unlocking doors
                  to opportunities that can shape your career in the long run.
                </P>
              </BinnerLeft>
              <BinnerRight>
                <Img src="/aifile.svg" width={2000} height={2000} alt="image" />
              </BinnerRight>
            </LeftBanner>
            <Form onSubmit={handelSubmit}>
              <Input
                placeholder="Search for job"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Btn>
                <MdOutlineSearch />
              </Btn>
            </Form>

            <JobsCon>
              <H3J>Available Jobs</H3J>
              <InnerCon>
                {data?.length !== 0 &&
                  filtered?.length !== 0 &&
                  filtered.map((item, i) => (
                    <JobCon key={i}>
                      <Title>{item.title}</Title>
                      <PJ>Salary: {item.pay}</PJ>
                      <Desc>{item.desc}</Desc>
                      <PJ>Date posted: {item.datePosted}</PJ>
                    </JobCon>
                  ))}
              </InnerCon>
            </JobsCon>
          </Left>
          <Right>
            <RImg src="/proficon.jpg" width={2000} height={2000} alt="image" />
            <P>You are not logged in!</P>
          </Right>
        </TopCon>
      </Wrapper>
    </Div>
  );
};

export default ListJobs;
