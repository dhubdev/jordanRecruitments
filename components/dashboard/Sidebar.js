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

const Div = styled.div`
  background: #cde4fe;
  width: 20rem;
  height: 100vh;
`;
const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
const Top = styled.div``;
const Logo = styled.div`
  font-size: 1.7rem;
  font-weight: 700;
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
const NewLink = styled(Link)`
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

  const handleClick2 = () => {
    cookie.remove("email");
    cookie.remove("userDetails");
    router.push("/login");
  };
  return (
    <Div>
      <Wrapper>
        <Top>
          <Logo>JORDAN</Logo>
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
  );
};

export default Sidebar;
