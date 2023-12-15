import styled from "styled-components";

import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { MdEmail } from "react-icons/md";

const FooterCon = styled.div`
  margin-top: 2rem;
  background: #5ba4fc;
  color: white;
`;
const FooterInfoCon = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 0;
  position: relative;
  @media screen and (max-width: 1024px) {
    padding: 2rem 0;
    width: 90%;
  }
  @media screen and (max-width: 600px) {
    padding: 1rem 0 0;
    width: 88%;
    align-items: flex-start;
  }
`;

const H2 = styled.h2`
  color: #fff;
  font-size: 1.7rem;
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
  }
`;

const P = styled.p`
  text-align: center;
  padding: 0 6rem;
  margin-top: 1.7rem;
  color: #fff;
  width: 50rem;
  @media screen and (max-width: 1024px) {
    padding: 0 2rem;
    width: 80%;
  }

  @media screen and (max-width: 600px) {
    text-align: center;
    padding: 0;
    font-size: 0.8rem;
    margin-top: 1rem;
    width: 100%;
  }
`;

const FooterInfo = styled.div`
  display: flex;

  justify-content: flex-start;
  gap: 4rem;
  width: 100%;
  margin-top: 2rem;

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: unset;
    margin-top: 1rem;
    gap: unset;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  color: #fff;
  margin-top: 1rem;
  font-size: 0.9rem;
  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;
const Socials = styled.div`
  display: flex;
  background: transparent;
  color: #fff;
  gap: 1.5rem;

  font-size: 2rem;
  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
    gap: 1.5rem;
  }
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 600px) {
    align-items: flex-start;
    margin-top: 2rem;
  }
`;
const LinkHead = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  width: 12rem;

  @media screen and (max-width: 600px) {
    margin-left: 0;
    font-size: 1.3rem;
  }
`;
const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Li = styled.li`
  color: #fff;
  font-size: 0.9rem;
  width: 15rem;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    align-items: flex-start;
    margin-top: 2rem;
  }
`;
const Copy = styled.div`
  color: #fff;
  margin-top: 3rem;
  opacity: 0.8;
  font-size: 0.9rem;

  @media screen and (max-width: 600px) {
    margin-top: 2rem;
    width: 100%;
    text-align: center;
    padding-bottom: 2rem;
  }
`;

const NewLink = styled.a`
  color: #fff;
  text-decoration: none !important;
  display: flex;
  align-items: center;
`;

const Img = styled(Image)`
  width: 2rem;
  height: 2rem;
  background: #fff;
  border-radius: 5px;
  object-fit: contain;
`;

const Footer2 = () => {
  return (
    <FooterCon>
      <FooterInfoCon>
        <FooterInfo>
          <Brand>
            <LinkHead>Connect</LinkHead>

            <Socials>
              <NewLink
                href="https://instagram.com/jordan_recruitments?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
              >
                <BsInstagram />
              </NewLink>
              <NewLink href="">
                <FaFacebookF />
              </NewLink>
            </Socials>
          </Brand>
          <Links>
            <LinkHead>Helpful Links</LinkHead>

            <Ul>
              <Li>
                <NewLink href="/about">About Us</NewLink>
              </Li>

              <Li>
                <NewLink href="/jobs">Find job</NewLink>
              </Li>
              <Li>
                <NewLink href="/postJob/signUp">List a job</NewLink>
              </Li>
              {/* <Li>
                <NewLink href="">Career</NewLink>
              </Li> */}
              <Li>
                <NewLink href="/privacy">Privacy policy</NewLink>
              </Li>
              <Li>
                <NewLink href="/cookie">Cookie policy</NewLink>
              </Li>
            </Ul>
          </Links>

          <Contact>
            <LinkHead>Contact Us</LinkHead>
            <Ul>
              <Li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <MdEmail style={{ fontSize: "1.2rem" }} />
                info@jordanrecruitments.com
              </Li>
              <Li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <BsFillTelephoneFill style={{ fontSize: "1.2rem" }} />{" "}
                <span>01612121379, 07930739927</span>
              </Li>
              <Li>
                <NewLink href="">
                  <IoLogoWhatsapp
                    style={{ fontSize: "1.2rem", marginRight: "5px" }}
                  />{" "}
                  <p style={{ margin: "0", padding: "0" }}>Whatsapp</p>
                </NewLink>
              </Li>
            </Ul>
          </Contact>
        </FooterInfo>
        <Copy>&copy; Jordan Recruitments {new Date().getFullYear()}</Copy>
      </FooterInfoCon>
    </FooterCon>
  );
};

export default Footer2;
