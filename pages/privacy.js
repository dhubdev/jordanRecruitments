import Footer2 from "@/components/Footer2";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import styled from "styled-components";

const PriDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 85%;
  padding-top: 8rem;

  margin: 0 auto;
  gap: 2rem;

  @media screen and (max-width: 1024px) {
    padding-top: 5rem;
  }

  @media screen and (max-width: 600px) {
    width: 90%;

    //padding-top: unset;
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

const H3 = styled.h3``;
const P = styled.p``;

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Jordan recruitments</title>
        <meta name="Jordan recruitments" content="Jordan recruitments" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/JR.svg" />
      </Head>
      <Navbar />
      <PriDiv>
        <H2>Privacy Policy</H2>
        <PriCon>
          <P>
            At Jordan Recruitments, we are committed to protecting the privacy
            of our users, partners, and all visitors to our website. We respect
            your privacy and we are committed to safeguarding any personal
            information that we collect from you. This policy outlines how we
            collect, use, store, and disclose your personal information.
          </P>
          <H3>Collection of Personal Information</H3>

          <P>
            We may collect personal information from you when you interact with
            us, such as when you sign up on our website or to newsletters. This
            information may include your name, address, email address, phone
            number, and other details that you voluntarily provide.
          </P>

          <H3>Use of Personal Information</H3>

          <P>
            We may use your personal information to communicate with you about
            available job opportunities and events. We may also use your
            information for administrative purposes, such as maintaining our
            database and analyzing our effectiveness.
          </P>

          <H3>Disclosure of Personal Information</H3>
          <P>
            We do not share, sell, or otherwise disclose your personal
            information to third parties except as required by law or as
            necessary to fulfill our purposes. For example, we may share your
            information with our trusted partners who assist us in processing
            sending newsletters, or analyzing our database for effectiveness.
          </P>

          <H3>Data Security</H3>
          <P>
            We take reasonable measures to protect the security of your personal
            information and to prevent unauthorized access, disclosure, or
            modification. However, no data transmission over the internet or
            other network can be guaranteed to be 100% secure. Therefore, while
            we strive to protect your personal information, we cannot guarantee
            its absolute security.
          </P>
          <H3>Changes to this Privacy Policy</H3>
          <P>
            We reserve the right to update or modify this privacy policy at any
            time without prior notice. Your continued use of our website and
            services constitutes your agreement to this policy and any updates
            or modifications.
          </P>
          <H3>Contact Information</H3>
          <P>
            If you have any questions or concerns about this privacy policy,
            please contact us at info@jordanrecruitments.com.
          </P>
        </PriCon>
      </PriDiv>
      <Footer2 />
    </>
  );
};

export default Privacy;
