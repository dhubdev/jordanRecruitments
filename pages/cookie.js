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

const Cookie = () => {
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
        <H2>Cookie Policy</H2>
        <PriCon>
          <H3>What Are Cookies?</H3>
          <P>
            As is common practice with almost all professional websites, this
            site uses cookies, which are tiny files that are downloaded to your
            computer, to improve your experience. This page describes what
            information they gather, how we use it, and why we sometimes need to
            store these cookies. We will also share how you can prevent these
            cookies from being stored, however, this may downgrade or 'break'
            certain elements of the site's functionality.
          </P>
          <H3>How We Use Cookies</H3>

          <P>
            We use cookies for a variety of reasons detailed below.
            Unfortunately, in most cases, there are no industry standard options
            for disabling cookies without completely disabling the functionality
            and features they add to this site. It is recommended that you leave
            on all cookies if you are not sure whether you need them or not, in
            case they are used to provide a service that you use.
          </P>

          <H3>Disabling Cookies</H3>

          <P>
            You can prevent the setting of cookies by adjusting the settings on
            your browser (see your browser Help for how to do this). Be aware
            that disabling cookies will affect the functionality of this and
            many other websites that you visit. Disabling cookies will usually
            result in also disabling certain functionality and features of this
            site. Therefore, it is recommended that you do not disable cookies.
          </P>

          <H3>The Cookies We Set</H3>
          <P>
            Site preferences cookies
            <br />
            Third-party cookies
          </P>

          <H3>More Information</H3>
          <P>
            Hopefully, that has clarified things for you, and as was previously
            mentioned, if there is something that you aren't sure whether you
            need or not, it's usually safer to leave cookies enabled in case it
            does interact with one of the features you use on our site.
          </P>

          <H3>Contact Information</H3>
          <P>
            If you have any questions or concerns about this cookie policy,
            please contact us at info@jordanrecruitments.co.Uk
          </P>
        </PriCon>
      </PriDiv>
      <Footer2 />
    </>
  );
};

export default Cookie;
