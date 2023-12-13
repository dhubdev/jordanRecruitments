import styled from "styled-components";

const PriDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 85%;
  padding-top: 8rem;
  padding-bottom: 6rem;

  margin: 0 auto;
  gap: 1rem;

  @media screen and (max-width: 1024px) {
    padding-top: 5rem;
    padding-bottom: unset;
    height: 42rem;
    gap: 2rem;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    height: unset;
    padding-bottom: 2rem;
  }
`;
const H2 = styled.h2`
  font-size: 2rem;
`;

const PriCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const P = styled.p``;

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

const ContactUs = () => {
  return (
    <PriDiv>
      <H2>Contact Us</H2>
      <PriCon>
        <P>
          Whether you are an employer looking to fill positions or a job seeker
          ready to take the next step, Jordan recruitments is here for you.
          Connect with us today to explore a world of opportunities in care,
          cleaning, and security.
        </P>
      </PriCon>
      <A href="mailto:info@jordanrecruitments.com">Contact Us</A>
    </PriDiv>
  );
};

export default ContactUs;
