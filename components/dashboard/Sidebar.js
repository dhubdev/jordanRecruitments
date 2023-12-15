import Image from "next/image";
import Link from "next/link";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
  MdHome,
  MdLogout,
  MdOutlineFormatListNumberedRtl,
} from "react-icons/md";
import styled from "styled-components";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { CgClose, CgMenuLeft } from "react-icons/cg";
import { UserContext } from "@/context/userContext";

const Div = styled.div`
  background: #cde4fe;
  width: 17rem;
  height: 100vh;
  position: fixed;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Div2 = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 18rem;
    height: 40rem;
    background: #cde4fe;
    padding: 2.5rem 1.5rem;
    z-index: 10;
  }

  @media screen and (max-width: 600px) {
    gap: 2rem;
    padding: 2rem 0.5rem;
    width: 16rem;
  }
`;

const MenuDiv = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: inline;
    position: absolute;
    right: -1.5rem;
    top: -1.5rem;
    font-size: 2rem;
  }

  @media screen and (max-width: 600px) {
    top: -0.8rem;
    right: -1rem;
  }
`;

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media screen and (max-width: 1024px) {
    padding: 0;
    gap: 2.5rem;
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const Logo = styled.div`
  font-size: 1.7rem;
  font-weight: 700;
  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;
const Bottom = styled.div``;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Li = styled.li`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  opacity: ${(props) => props.opacity};
  font-weight: ${(props) => props.display};
  cursor: pointer;
`;
const NewLink = styled.a`
  text-decoration: none;

  color: #000;
`;

const sidebarItems = [
  {
    name: "Home",
    href: "/dashboard/home",
    icon: MdHome,
  },

  {
    name: "Applications",
    href: "/dashboard/applications",
    icon: MdOutlineFormatListNumberedRtl,
  },

  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: BsFillPersonLinesFill,
  },
];

const Sidebar = ({ option }) => {
  const router = useRouter();
  const { click, setClick } = useContext(UserContext);

  const handleClick2 = () => {
    cookie.remove("email");
    cookie.remove("userDetails");
    router.push("/login");
  };
  return (
    <>
      <Div>
        <Wrapper>
          <Top>
            <Logo>JORDAN</Logo>
            <MenuDiv>
              {click && (
                <CgClose
                  onClick={() => setClick(false)}
                  style={{ fontSize: "2rem" }}
                />
              )}
            </MenuDiv>
          </Top>
          <Bottom>
            <Ul>
              {sidebarItems.map((item, i) => (
                <NewLink href={item.href} key={i}>
                  <Li
                    display={option === item.href ? 600 : null}
                    opacity={option === item.href ? 1 : 0.6}
                  >
                    <item.icon />
                    {item.name}
                  </Li>
                </NewLink>
              ))}

              <Li onClick={handleClick2} opacity={0.6}>
                <MdLogout />
                Sign out
              </Li>
            </Ul>
          </Bottom>
        </Wrapper>
      </Div>

      {click && (
        <Div2>
          <Wrapper>
            <Top>
              <Logo>JORDAN</Logo>
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
            </Top>
            <Bottom>
              <Ul>
                {sidebarItems.map((item, i) => (
                  <NewLink href={item.href} key={i}>
                    <Li
                      display={option === item.href ? 600 : null}
                      opacity={option === item.href ? 1 : 0.6}
                    >
                      <item.icon />
                      {item.name}
                    </Li>
                  </NewLink>
                ))}

                <Li onClick={handleClick2} opacity={0.6}>
                  <MdLogout />
                  Sign out
                </Li>
              </Ul>
            </Bottom>
          </Wrapper>
        </Div2>
      )}
    </>
  );
};

export default Sidebar;
