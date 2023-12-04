import { UserContext } from "@/context/userContext";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { toast } from "react-toastify";
import styled from "styled-components";
import cookie from "js-cookie";
import { parseCookies } from "nookies";
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

const NewLink = styled(Link)`
  text-decoration: none;
  color: #5ba4fc;
`;

const P = styled.p`
  font-size: 0.9rem;
`;
const P2 = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const Mployeer = () => {
  const [visible, setVisible] = useState(false);
  const [invisible, setInvisible] = useState(true);
  const [type, setType] = useState("password");
  const [visible2, setVisible2] = useState(false);
  const [invisible2, setInvisible2] = useState(true);
  const [type2, setType2] = useState("password");
  const [err1, setErr1] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, SetConfirmPass] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let employeer = true;

    if (
      email.length === 0 ||
      fullname.length === 0 ||
      password.length === 0 ||
      confirmPass.length === 0 ||
      address.length === 0
    ) {
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

      const { data } = await axios.post(
        `/api/auth/register`,
        { email, fullname, phone, password, confirmPass, employeer, address },
        config
      );
      toast.success(data?.status);

      cookie.set("userDetails", JSON.stringify(data));

      router.push("/employer/dashboard");
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.error);
    }
  };

  return (
    <Div>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <InputDiv>
            <H3>Sign Up</H3>
            <P2>Sign up as an employer to post jobs.</P2>
          </InputDiv>
          <InputDiv>
            <Label>Company Name</Label>
            <Input
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="John Alfred"
              style={{
                borderColor: err1 && fullname.length <= 0 ? "red" : "#cde4fe",
              }}
            />
          </InputDiv>
          <InputDiv>
            <Label>Company Email Address</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@gmail.com"
              style={{
                borderColor: err1 && email.length <= 0 ? "red" : "#cde4fe",
              }}
            />
          </InputDiv>
          <InputDiv>
            <Label>Company Phone Number</Label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+44 678 000 0000"
              style={{
                borderColor: err1 && phone.length <= 0 ? "red" : "#cde4fe",
              }}
            />
          </InputDiv>

          <InputDiv>
            <Label>Company Address</Label>
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter address"
              style={{
                borderColor: err1 && address.length <= 0 ? "red" : "#cde4fe",
              }}
            />
          </InputDiv>

          <InputDiv>
            <Label>Password</Label>
            <Input
              value={password}
              type={type}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={{
                borderColor: err1 && password.length <= 0 ? "red" : "#cde4fe",
              }}
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
          <InputDiv>
            <Label>Confirm Password</Label>
            <Input
              value={confirmPass}
              type={type2}
              onChange={(e) => SetConfirmPass(e.target.value)}
              placeholder="Confirm password"
              style={{
                borderColor:
                  err1 && confirmPass.length <= 0 ? "red" : "#cde4fe",
              }}
            />

            {invisible2 ? (
              <Visible
                onClick={() => {
                  setVisible2(true);
                  setInvisible2(false);
                  setType2("text");
                }}
              >
                <MdOutlineVisibility />
              </Visible>
            ) : (
              <Invisible
                onClick={() => {
                  setInvisible2(true);
                  setVisible2(false);
                  setType2("password");
                }}
              >
                <MdOutlineVisibilityOff />
              </Invisible>
            )}
          </InputDiv>

          <InputDiv>
            <Btn type="submit">Sign up</Btn>
            <NewLink href="/login">
              <P>Have an account? Login</P>
            </NewLink>
          </InputDiv>
        </Form>
      </Wrapper>
    </Div>
  );
};

export default Mployeer;
