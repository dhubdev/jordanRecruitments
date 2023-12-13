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
  justify-items: center;

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

const OfferNill = () => {
  return (
    <Div>
      <Wrapper>
        <H2>How We Can Help</H2>
        <ConDiv>
          <Con>
            <Img
              src="/last.jpg"
              width={2000}
              height={2000}
              loading="lazy"
              alt="image"
            />
            <H3>LAST MINUTE/SHORT-NOTICE SHIFTS</H3>
            <P>
              We understand that life can be unpredictable, and sometimes, you
              need work that fits your schedule at the last minute. That's why
              we're excited to introduce our exclusive offer to help job seekers
              like you find last-minute shifts that match your availability.
            </P>
          </Con>

          <Con>
            <Img
              src="/holi.jpg"
              width={2000}
              height={2000}
              loading="lazy"
              alt="image"
            />
            <H3>HOLIDAY COVER</H3>
            <P>
              Get offers that connects you with businesses seeking reliable
              individuals to cover shifts during the busy holiday period. We can
              also help you by connecting you with businesses seeking reliable
              individuals to cover shifts during the busy holiday period.
            </P>
          </Con>

          <Con>
            <Img
              src="/long.jpg"
              width={2000}
              height={2000}
              loading="lazy"
              alt="image"
            />
            <H3>LONG-TERM COVER/BLOCK BOOKINGS</H3>
            <P>
              Explore a tailored experience that aligns seamlessly with your
              goals and opens doors to extended-term engagements and long-term
              cover or block booking opportunities.
            </P>
          </Con>
        </ConDiv>
      </Wrapper>
    </Div>
  );
};

export default OfferNill;
