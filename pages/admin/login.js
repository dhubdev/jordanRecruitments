import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

import styled from "styled-components";

const BigDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 30%;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;
const H2 = styled.h2`
  text-align: center;
`;
const P = styled.p`
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;
  position: relative;
`;
const Label = styled.label``;
const Input = styled.input`
  outline: none;
  border: 1px solid #ccd6eb;
  border-radius: 7px;
  height: 2.5rem;
  padding: 0 1rem;
  font-family: inherit;
`;
const Btn = styled.button`
  width: 10rem;
  height: 3rem;
  color: #fff;
  font-family: inherit;
  background: #5ba4fc;
  border: none;
  border-radius: 7px;
  cursor: pointer;
`;

const Visible = styled.div`
  position: absolute;
  right: 5%;
  top: 50%;
  font-size: 1.3rem;
  cursor: pointer;
`;
const Invisible = styled.div`
  position: absolute;
  right: 5%;
  top: 50%;
  font-size: 1.3rem;
  cursor: pointer;
`;

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [invisible, setInvisible] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");

  const router = useRouter();

  const cookies = parseCookies();

  const admin = cookies?.admin ? JSON.parse(cookies?.admin) : "";

  useEffect(() => {
    if (admin) {
      router.push("/admin/users");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/admin/login`,
        { email, password },
        config
      );

      cookie.set("admin", JSON.stringify(data));
      //console.log(data);
      router.push("/admin/users");
    } catch (error) {
      //console.log(error.response);
    }
  };

  return (
    <BigDiv>
      <Wrapper>
        <Head>
          <H2>Login</H2>
          <P>Input the required details to get started</P>
        </Head>

        <Form onSubmit={handleSubmit}>
          <InputDiv>
            <Label>Email address</Label>
            <Input
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputDiv>

          <InputDiv>
            <Label>Password</Label>
            <Input
              type={type}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {invisible ? (
              <Visible
                onClick={() => {
                  setVisible(true);
                  setInvisible(false);
                  setType("text");
                }}
              >
                <MdOutlineVisibility />
              </Visible>
            ) : (
              <Invisible
                onClick={() => {
                  setInvisible(true);
                  setVisible(false);
                  setType("password");
                }}
              >
                <MdOutlineVisibilityOff />
              </Invisible>
            )}
          </InputDiv>

          <Btn>Login</Btn>
        </Form>
      </Wrapper>
    </BigDiv>
  );
};

export default Login;
