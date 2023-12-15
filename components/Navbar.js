import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { CgMenuLeft } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";

const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: #cde4fe;
  position: fixed;
  height: 5.2rem;
  @media screen and (max-width: 1024px) {
    height: 4rem;
  }
`;
const NavWrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;

  display: flex;
  align-items: center;
`;

const LogoDiv = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  font-weight: 700;
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Logo = styled(Image)`
  width: 100%;
  height: 4.5rem;
  pointer-events: none;
  @media screen and (max-width: 1024px) {
    width: 10rem;
    height: 3rem;
  }

  @media screen and (max-width: 600px) {
    width: 8rem;
    height: 3rem;
  }
`;

const Ul = styled.ul`
  flex: 4;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3rem;
  font-weight: 400;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Ul2 = styled.ul`
  flex: 4;
  list-style: none;
  display: none;

  justify-content: flex-start;
  gap: 3rem;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 4rem;
    right: 0;
    width: 18rem;
    height: 40rem;
    background: #cde4fe;
    padding: 2.5rem 1.5rem;
  }

  @media screen and (max-width: 600px) {
    width: 12rem;
    gap: 2rem;
  }
`;

const NewLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const NewLink2 = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
const Li = styled.li`
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;

  @media screen and (max-width: 1024px) {
    font-weight: 400;
  }
`;

const BtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 18rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 2rem;
  }
`;

const Btn = styled.button`
  width: 8rem;
  height: 3rem;
  font-family: inherit;
  border: none;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border: 1px solid #5ba4fc;

  border-radius: 10px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const MenuDiv = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: inline;
  }
`;

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [click, setClick] = useState(false);

  const router = useRouter();

  const cookies = parseCookies();

  const userDetails = cookies?.userDetails
    ? JSON.parse(cookies?.userDetails)
    : "";

  const handleclick = () => {
    router.push("/signUp");
  };

  const handleclick2 = () => {
    router.push("/login");
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const handleclick3 = () => {
    if (!userDetails?.user?.employeer) {
      router.push("/postJob/signUp");
    } else {
      router.push("/employer/home");
    }
  };

  return (
    <NavContainer className={show ? "active" : "hidden"}>
      <NavWrapper>
        <LogoDiv>
          {/* <Logo
            src="/dhublogo.svg"
            width={4000}
            height={4000}
            loading="lazy"
            alt="logo"
          /> */}
          JORDAN
        </LogoDiv>

        <Ul>
          <NewLink href="/">
            <Li>Home</Li>
          </NewLink>
          <NewLink2 href="/jobs">
            <Li>Find job</Li>
          </NewLink2>
          <div onClick={handleclick3}>
            <Li>Post job</Li>
          </div>
          <NewLink href="/about">
            <Li>About us</Li>
          </NewLink>

          <NewLink href="/contact">
            <Li>Contact us</Li>
          </NewLink>

          <BtnDiv>
            <Btn onClick={handleclick} background="#5BA4FC" color="#fff">
              Sign up
            </Btn>
            <Btn onClick={handleclick2} background="transparent" color="#000">
              Login
            </Btn>
          </BtnDiv>
        </Ul>

        <MenuDiv>
          {!click && (
            <CgMenuLeft
              onClick={() => setClick(true)}
              style={{ fontSize: "2rem" }}
            />
          )}
          {click && (
            <CgClose
              onClick={() => setClick(false)}
              style={{ fontSize: "2rem" }}
            />
          )}
        </MenuDiv>

        {click && (
          <Ul2>
            <NewLink href="/">
              <Li>Home</Li>
            </NewLink>
            <NewLink2 href="/jobs">
              <Li>Find job</Li>
            </NewLink2>
            <div onClick={handleclick3}>
              <Li>Post job</Li>
            </div>
            <NewLink href="/about">
              <Li>About us</Li>
            </NewLink>

            <NewLink href="/contact">
              <Li>Contact us</Li>
            </NewLink>

            <BtnDiv>
              <Btn onClick={handleclick} background="#5BA4FC" color="#fff">
                Sign up
              </Btn>
              <Btn onClick={handleclick2} background="transparent" color="#000">
                Login
              </Btn>
            </BtnDiv>
          </Ul2>
        )}
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
