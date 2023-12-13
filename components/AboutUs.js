import Image from "next/image";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const Top = styled.div`
  position: relative;
  width: 100%;
  height: 40rem;
`;
const TopInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45rem;
  height: 100%;
  margin: 0 auto;
  gap: 3rem;
  color: #fff;

  @media screen and (max-width: 1024px) {
    width: 80%;
    height: 35rem;
    padding-top: 5rem;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    height: 100%;
    padding-top: unset;
  }
`;
const Layer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #000;
  opacity: 0.5;
`;

const Img = styled(Image)`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -10;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 600px) {
    object-fit: cover;
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

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 4rem;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const Employer = styled.div`
  border: 1px solid #cde4fe;
  border-radius: 10px;
  width: 100%;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 1024px) {
    width: 92%;
    padding: 4%;
  }

  @media screen and (max-width: 600px) {
    align-items: center;
  }
`;

const Employee = styled.div`
  border: 1px solid #cde4fe;
  border-radius: 10px;
  width: 100%;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 1024px) {
    width: 92%;
    padding: 4%;
  }

  @media screen and (max-width: 600px) {
    align-items: center;
  }
`;
const EmpInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const H2 = styled.h2`
  font-size: 2rem;
`;
const EmpCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
const H3 = styled.h3`
  color: #5ba4fc;
  font-weight: 600;
  font-size: 1.3rem;
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;
const ConInner = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ConInner2 = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;
const Left = styled.div`
  flex: 1;
  @media screen and (max-width: 1024px) {
    flex: unset;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (max-width: 1024px) {
    flex: unset;
    width: 100%;
  }
`;
const Img2 = styled(Image)`
  width: 90%;
  height: 15rem;
  object-fit: cover;
  border-radius: 7px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
`;
const H3I = styled.h3`
  font-size: 1.5rem;
`;
const P2 = styled.p`
  width: 90%;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Hr = styled.hr`
  border: none;
  border-bottom: 1px solid #cde4fe;
`;

const AboutUs = () => {
  return (
    <Div>
      <Top>
        <Img
          src="/partner4.jpg"
          width={4000}
          height={4000}
          priority={true}
          alt="image"
        />
        <Layer />
        <TopInner>
          <H1>
            Welcome to Jordan recruitment - Your Partner in Care, Cleaning, and
            Security Jobs
          </H1>
          <P>
            At Jordan recruitments, we understand the importance of finding the
            right talent for your care, cleaning, and security needs. Whether
            you're an employer seeking dedicated professionals or a job seeker
            looking for meaningful opportunities, we've got you covered.
          </P>
        </TopInner>
      </Top>
      <Wrapper>
        <Employer>
          <H2>For Employers</H2>
          <EmpInner>
            <EmpCon>
              <H3>Tailored Solutions for Your Business Needs</H3>
              <ConInner>
                <Left>
                  <Img2
                    src="/care.jpg"
                    width={2000}
                    height={2000}
                    loading="lazy"
                    alt="image"
                  />
                </Left>
                <Right>
                  <H3I>Care Jobs</H3I>
                  <P2>
                    Find compassionate and qualified professionals to enhance
                    your caregiving team. From nurses to support staff, we
                    connect you with individuals committed to providing
                    exceptional care.
                  </P2>
                </Right>
              </ConInner>

              <ConInner2>
                <Right>
                  <H3I>Cleaning Jobs</H3I>
                  <P2>
                    Ensure your spaces shine with our top-notch cleaning
                    professionals. Whether it's commercial or residential, we
                    match you with skilled individuals dedicated to maintaining
                    a clean and healthy environment.
                  </P2>
                </Right>

                <Left>
                  <Img2
                    src="/clean.jpeg"
                    width={2000}
                    height={2000}
                    loading="lazy"
                    alt="image"
                  />
                </Left>
              </ConInner2>

              <ConInner>
                <Left>
                  <Img2
                    src="/secure.png"
                    width={2000}
                    height={2000}
                    loading="lazy"
                    alt="image"
                  />
                </Left>
                <Right>
                  <H3I>Security Jobs</H3I>
                  <P2>
                    Safety is paramount. Discover skilled security personnel to
                    protect your premises. Our pool of candidates includes
                    trained security officers and personnel to meet your
                    specific security requirements.
                  </P2>
                </Right>
              </ConInner>
            </EmpCon>

            <Hr />

            <EmpCon>
              <H3>Efficient Recruitment Process</H3>

              <ConInner>
                <Left>
                  <Img2
                    src="/strm.jpg"
                    width={2000}
                    height={2000}
                    loading="lazy"
                    alt="image"
                  />
                </Left>

                <Right>
                  <P2>
                    We streamline the hiring process, making it easy for you to
                    find the right candidates. Our platform allows you to post
                    jobs, review applications, and connect with potential hires
                    seamlessly.
                  </P2>
                </Right>
              </ConInner>
            </EmpCon>
          </EmpInner>
        </Employer>

        <Employee>
          <H2>For Job Seekers</H2>
          <EmpInner>
            <EmpCon>
              <H3>Explore Rewarding Opportunities</H3>
              <ConInner>
                <Left>
                  <Img2
                    src="/care.jpg"
                    width={2000}
                    height={2000}
                    loading="lazy"
                    alt="image"
                  />
                </Left>
                <Right>
                  <H3I>Care Jobs</H3I>
                  <P2>
                    Make a difference in people's lives. Explore opportunities
                    in caregiving, nursing, and support roles.
                  </P2>
                </Right>
              </ConInner>

              <ConInner2>
                <Right>
                  <H3I>Cleaning Jobs</H3I>
                  <P2>
                    Join our network of cleaning professionals dedicated to
                    maintaining pristine environments.
                  </P2>
                </Right>

                <Left>
                  <Img2
                    src="/clean.jpeg"
                    width={2000}
                    height={2000}
                    loading="lazy"
                    alt="image"
                  />
                </Left>
              </ConInner2>

              <ConInner>
                <Left>
                  <Img2
                    src="/secure.png"
                    width={2000}
                    height={2000}
                    loading="lazy"
                    alt="image"
                  />
                </Left>
                <Right>
                  <H3I>Security Jobs</H3I>
                  <P2>
                    Protect and serve. Find fulfilling roles in the security
                    industry.
                  </P2>
                </Right>
              </ConInner>
            </EmpCon>

            <Hr />

            <EmpCon>
              <H3>Career Resources and Guidance</H3>

              <ConInner>
                <Left>
                  <Img2
                    src="/resos.jpg"
                    width={2000}
                    height={2000}
                    loading="lazy"
                    alt="image"
                  />
                </Left>

                <Right>
                  <P2>
                    Access valuable resources, tips, and guidance to enhance
                    your job search and career growth. We're here to support you
                    every step of the way.
                  </P2>
                </Right>
              </ConInner>
            </EmpCon>
          </EmpInner>
        </Employee>
      </Wrapper>
    </Div>
  );
};

export default AboutUs;
