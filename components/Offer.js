import Image from "next/image";
import styled from "styled-components";

const Div = styled.div`
  margin-top: 3rem;
  padding-bottom: 2rem;
`;
const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;
const H2 = styled.h2`
  text-align: center;
  font-size: 2rem;
`;
const ConDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  place-items: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
const Con = styled.div`
  width: 18rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  background: #f8f9fb;

  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1024px) {
    width: 88%;
    padding: 6%;
  }
`;
const Img = styled(Image)`
  width: 100%;
  height: 9rem;
  object-fit: cover;
  border-radius: 7px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
`;
const H3 = styled.h3`
  text-align: center;
  font-size: 1rem;
`;
const P = styled.p`
  background: #fff;
  font-size: 0.9rem;
  border-radius: 7px;
  padding: 0.5rem;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
`;

const Offer = () => {
  return (
    <Div>
      <Wrapper>
        <H2>Our Commitment to You</H2>
        <ConDiv>
          <Con>
            <Img
              src="/josrch.png"
              width={2000}
              height={2000}
              loading="lazy"
              alt="image"
            />
            <H3>Streamlined Job Search</H3>
            <P>
              Navigate effortlessly through our user-friendly interface to find
              the perfect job. Our advanced search and filtering options ensure
              that you can quickly pinpoint opportunities that align with your
              expertise and career goals.
            </P>
          </Con>

          <Con>
            <Img
              src="/apply.jpg"
              width={2000}
              height={2000}
              loading="lazy"
              alt="image"
            />
            <H3>Apply with Ease</H3>
            <P>
              Gone are the days of complex application processes. With Jordan
              Recruitments, applying for jobs is as simple as a few clicks. Save
              time and effort with our streamlined application process, allowing
              you to focus on what truly matters - showcasing your talents to
              potential employers.
            </P>
          </Con>

          <Con>
            <Img
              src="/profile.jpg"
              width={2000}
              height={2000}
              loading="lazy"
              alt="image"
            />
            <H3>Elevate Your Profile</H3>
            <P>
              Build a compelling professional profile that showcases your
              skills, experiences, and achievements. Stand out to employers by
              presenting a comprehensive overview of what makes you the ideal
              candidate for their team.
            </P>
          </Con>

          <Con>
            <Img
              src="/connect.png"
              width={2000}
              height={2000}
              loading="lazy"
              alt="image"
            />
            <H3>Connect with Leading Companies</H3>
            <P>
              Connect with top-notch employers actively seeking talented
              individuals like you. We facilitate seamless communication between
              candidates and companies, fostering meaningful connections that
              pave the way for career success.
            </P>
          </Con>

          <Con>
            <Img
              src="/notify.png"
              width={2000}
              height={2000}
              loading="lazy"
              alt="image"
            />
            <H3>Get Notified About New Opportunities</H3>
            <P>
              Stay ahead of the curve by setting up personalized job alerts.
              Receive instant notifications when new positions matching your
              preferences are posted, ensuring that you never miss out on the
              perfect opportunity.
            </P>
          </Con>

          <Con>
            <Img
              src="/empower.jpg"
              width={2000}
              height={2000}
              loading="lazy"
              alt="image"
            />
            <H3>Empowering Your Career Journey</H3>
            <P>
              At Jordan Recruitments, we believe in empowering individuals to
              take charge of their career journeys. Whether you're a recent
              graduate or a seasoned professional, our platform provides the
              tools and resources you need to thrive in the ever-evolving job
              market.
            </P>
          </Con>
        </ConDiv>
      </Wrapper>
    </Div>
  );
};

export default Offer;
