import { useContext, useEffect, useState } from "react";
import { parseCookies } from "nookies";

import styled from "styled-components";
import { toast } from "react-toastify";
//import { UserContext } from "../context/userContext";
import axios from "axios";
import { UserContext } from "@/context/userContext";
import useSWR from "swr";

const Div = styled.div`
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //padding: 2rem 0;
  gap: 2rem;
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const P = styled.h3`
  font-size: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
const Label = styled.label`
  font-size: 0.9rem;
`;
const Input = styled.input`
  outline: none;
  width: 96%;
  padding: 0 2%;
  height: 2.5rem;
  border: 1px solid #d1e2ff;
  font-family: inherit;
  background: inherit;
  border-radius: 7px;
`;

const Pound = styled.div`
  position: absolute;
  top: 46%;
  left: 0.7rem;
`;
const TextField = styled.textarea`
  outline: none;
  width: 98%;
  padding: 1%;
  height: 12rem;
  border: 1px solid #d1e2ff;
  font-family: inherit;
  background: inherit;
  border-radius: 7px;
  resize: none;
`;

const Btn = styled.button`
  width: 9rem;
  height: 3rem;
  font-family: inherit;
  border: none;
  background-color: #5ba4fc;
  color: white;
  border-radius: 10px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const EditForm2 = () => {
  const [title, setTitle] = useState("");
  const [pay, setPay] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [err1, setErr1] = useState(false);

  const { updatedUser, user, setUser } = useContext(UserContext);

  const cookies = parseCookies();
  const userDetails = cookies?.userDetails
    ? JSON.parse(cookies?.userDetails)
    : "";

  //console.log(profile);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      title.length === 0 ||
      pay.length === 0 ||
      location.length === 0 ||
      desc.length === 0 ||
      duration.length === 0 ||
      type.length === 0
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
        `/api/jobs/postJobs`,
        {
          userId: userDetails?.user?._id,
          title,
          pay,
          location,
          desc,
          type,
          duration,
        },
        config
      );
      toast.success(data?.status);

      setTitle("");
      setDesc("");
      setPay("");
      setDuration("");
      setLocation("");
      setType("");

      //console.log(data);
      //console.log(data?.profile[0]);
      //navigate("/login");
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.error);
    }
  };

  return (
    <>
      <Div>
        <Form onSubmit={handleSubmit}>
          <InputDiv>
            <Label>Job Title</Label>
            <Input
              placeholder="Marketing Manager"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              style={{ borderColor: err1 && title.length <= 0 && "red" }}
            />
          </InputDiv>

          <InputDiv>
            <Label>Job Location</Label>
            <Input
              placeholder="Type here..."
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              style={{ borderColor: err1 && location.length <= 0 && "red" }}
            />
          </InputDiv>

          <InputDiv>
            <Label>Job Type</Label>
            <Input
              placeholder="Full-time"
              onChange={(e) => setType(e.target.value)}
              value={type}
              style={{ borderColor: err1 && type.length <= 0 && "red" }}
            />
          </InputDiv>

          <InputDiv>
            <Label>Job Description</Label>
            <TextField
              placeholder="Type here..."
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              style={{ borderColor: err1 && desc.length <= 0 && "red" }}
            />
          </InputDiv>

          <InputDiv>
            <Label>Job Duration</Label>
            <Input
              placeholder="4 years"
              onChange={(e) => setDuration(e.target.value)}
              value={duration}
              style={{ borderColor: err1 && duration.length <= 0 && "red" }}
            />
          </InputDiv>

          <InputDiv>
            <Label>Salary</Label>
            <Input
              placeholder="500"
              onChange={(e) => setPay(e.target.value)}
              value={pay}
              style={{ borderColor: err1 && pay.length <= 0 && "red" }}
            />
            <Pound>£</Pound>
          </InputDiv>

          <InputDiv>
            <Btn type="submit">Submit</Btn>
          </InputDiv>
        </Form>
      </Div>
    </>
  );
};

export default EditForm2;
