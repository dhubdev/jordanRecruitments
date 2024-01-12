import axios from "axios";

import { useRouter } from "next/router";
import { useState } from "react";

import { toast } from "react-toastify";
import styled from "styled-components";
import cookie from "js-cookie";

import Link from "next/link";

const Div = styled.div``;
const Wrapper = styled.div`
  margin-top: 6rem;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    height: 55rem;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
    margin: 6rem auto 0;
    height: unset;
  }
`;

const Form = styled.form`
  width: 26rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  border-radius: 5px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const H3 = styled.h3`
  font-size: 1.5rem;
  text-align: center;
`;
const Label = styled.label`
  font-size: 0.9rem;
  opacity: 0.9;
`;
const Input = styled.input`
  outline: none;
  border: 1px solid #cde4fe;
  border-radius: 7px;
  width: 96%;
  padding: 2%;
  height: 1.5rem;
  font-family: inherit;
`;

const Btn = styled.button`
  width: 10rem;
  height: 3rem;
  font-family: inherit;
  border: none;
  background-color: #5ba4fc;
  color: #fff;
  border: 1px solid #5ba4fc;

  //font-size: 1rem;

  border-radius: 5px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
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

const NewLink = styled.a`
  text-decoration: none;
  color: #5ba4fc;
`;

const P = styled.p`
  font-size: 0.9rem;
`;

const Forgot = () => {
  const [err1, setErr1] = useState(false);
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.length === 0) {
      setErr1(true);
    } else {
      setErr1(false);
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(`/api/reset/forget`, { email }, config);
      toast.success(data?.status);

      cookie.set("email", email);

      router.push("/reset/reset");
    } catch (error) {
      //console.log(error.response);
      toast.error(error.response.data.error);
    }
  };

  return (
    <Div>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <InputDiv>
            <H3>Reset password</H3>
          </InputDiv>

          <InputDiv>
            <Label>Email Address</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@gmail.com"
              style={{
                borderColor: err1 && fullname.length <= 0 ? "red" : "#cde4fe",
              }}
            />
          </InputDiv>

          <InputDiv>
            <Btn type="submit">Send</Btn>
            <NewLink href="/login">
              <P>Here by mistake? Login</P>
            </NewLink>
          </InputDiv>
        </Form>
      </Wrapper>
    </Div>
  );
};

export default Forgot;
