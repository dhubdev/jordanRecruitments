import axios from "axios";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import styled from "styled-components";
import cookie from "js-cookie";

import Link from "next/link";
import { parseCookies } from "nookies";

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

const Form = styled.div`
  width: 26rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  border-radius: 5px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
  padding: 4rem 1rem;

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
  font-size: 1rem;
  text-align: center;
`;

const P2 = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #5ba4fc;
  cursor: pointer;
`;

const ResendReset = () => {
  const cookies = parseCookies();
  const email = cookies?.email ? cookies?.email : "";
  const [useEmail, setUseEmail] = useState("");
  const [secs, setSecs] = useState(60);

  useEffect(() => {
    setUseEmail(email);
  }, [useEmail]);

  useEffect(() => {
    if (secs > 0) {
      setTimeout(() => setSecs(secs - 1), 1000);
    } else {
      setSecs(0);
    }
  }, [secs]);

  const handleClick = async (e) => {
    e.preventDefault();
    setSecs(60);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(`/api/reset/forget`, { email }, config);
      toast.success(data?.status);
    } catch (error) {
      //console.log(error.response);
      toast.error(error.response.data.error);
    }
  };

  return (
    <Div>
      <Wrapper>
        <Form>
          <InputDiv>
            <H3>Reset password</H3>
          </InputDiv>

          <InputDiv>
            <P>We sent a password reset link to {useEmail}!</P>
          </InputDiv>

          <InputDiv>
            {secs === 0 ? (
              <P>
                Didn't receive an email?{" "}
                <span
                  style={{ color: " #5ba4fc", cursor: "pointer" }}
                  onClick={handleClick}
                >
                  Resend
                </span>
              </P>
            ) : (
              <P2>{secs} secs</P2>
            )}
          </InputDiv>
        </Form>
      </Wrapper>
    </Div>
  );
};

export default ResendReset;
