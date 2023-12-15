import styled from "styled-components";
import cookie from "js-cookie";
import Link from "next/link";

import { AiFillFolderAdd } from "react-icons/ai";
import { RiUserAddFill } from "react-icons/ri";
import { MdOutlineArrowBack } from "react-icons/md";
import { useRouter } from "next/router";
import { HiUserGroup } from "react-icons/hi";

const Aside = styled.aside`
  transition: all 700ms ease;
  height: 100vh;
  width: 19%;
  padding: 2rem 1rem;
  background: #000;
  position: fixed;
  color: #fff;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
`;
const H2 = styled.h2``;
const P = styled.p`
  font-size: 0.9rem;
`;

const Ul = styled.ul`
  list-style: none;
  color: #5ba4fc;
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
  margin-top: 2rem;
  font-size: 0.9rem;
`;
const Li = styled.li`
  cursor: pointer;
`;
const NewLink = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  background: #5ba4fc;
  border-radius: 10px;
  height: 3rem;
  width: 80%;
  color: #fff;
  border: ${(props) => props.border};
`;

const Back = styled.div`
  font-size: 2rem;
  cursor: pointer;
`;

const IconSpan = styled.span`
  width: 80%;
  font-size: 1.8rem;
`;
const Span = styled.span`
  width: 80%;
`;

const SignoutP = styled.button`
  margin: 2rem 0.5rem 0;
  border-radius: 7px;
  border: none;
  width: 8rem;
  height: 3rem;
  background: #fff;
  cursor: pointer;
  color: #000;
  font-family: inherit;
  font-weight: 600;
`;

const sidebarItems = [
  {
    name: "Users",
    href: "/admin/users",
  },
  {
    name: "Jobs",
    href: "/admin/jobs",
  },
];

const AdminBar = ({ option }) => {
  const router = useRouter();
  const handlePrev = () => {
    window.history.back();
  };

  const handleClick = () => {
    cookie.remove("token");
    cookie.remove("admin");
    router.push("/admin/login");
  };

  return (
    <Aside>
      <Div>
        <Back onClick={handlePrev}>
          <MdOutlineArrowBack />
        </Back>
        <Head>
          <H2>Administration</H2>
          <P>What would you like to do today?</P>
        </Head>
        <Ul>
          {sidebarItems.map((item, i) => (
            <Li key={i}>
              <NewLink
                href={item.href}
                border={
                  option === item.href ? "2px solid #fff" : "2px solid #5ba4fc"
                }
              >
                <Span>{item.name}</Span>
              </NewLink>
            </Li>
          ))}
        </Ul>
        <SignoutP onClick={handleClick} style={{ fontSize: "1rem" }}>
          Sign out
        </SignoutP>
      </Div>
    </Aside>
  );
};

export default AdminBar;
