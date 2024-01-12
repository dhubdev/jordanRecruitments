import Sidebar from "@/components/dashboard/Sidebar";
import { UserContext } from "@/context/userContext";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../firebase";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { BsFillImageFill } from "react-icons/bs";
import useSWR from "swr";
import { CgMenuLeft } from "react-icons/cg";
import { MdFileUpload } from "react-icons/md";

const Div = styled.div``;

const DivHam = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: inline;
    position: absolute;
    left: 5%;
    top: 1rem;
    font-size: 2rem;
    z-index: 10;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
  padding: 3rem 0;
  margin: 0 0 0 20rem;

  gap: 2rem;
  position: relative;

  @media screen and (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;
    padding: 4rem 0 2rem;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    width: 92%;
  }
`;

const JobCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media screen and (max-width: 600px) {
    padding: 1.4rem 0.5rem;
  }
`;

const Hd = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 600px) {
    gap: 1rem;
    justify-content: unset;
  }
`;
const Title = styled.h3`
  font-weight: 500;
  font-size: 1.5rem;

  @media screen and (max-width: 600px) {
    font-size: 1.6rem;

    width: 20rem;
  }
`;

const Desc = styled.p``;
const PJ = styled.p`
  font-size: 0.9rem;
`;

const Form = styled.form`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  border-radius: 5px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
  padding: 2rem 1.5rem;

  @media screen and (max-width: 1024px) {
    width: 95%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    padding: 2rem 1rem;
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
const P2 = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const Label2 = styled.label`
  width: 100%;

  height: 12rem;
  border-radius: 10px;
  outline: none;
  border: 2px dashed #cde4fe;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 3rem;
  cursor: pointer;
`;

const BigBar = styled.div`
  width: 7rem;
  margin-top: 1rem;
  border-radius: 7px;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.width};
  height: 0.5rem;
  transition: ease-in-out;
  background: #5ba4fc;
  border-radius: 7px;
`;

const Span = styled.span`
  @media screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const LoadDiv = styled.div`
  width: 10rem;
  height: 0.5rem;
  border-radius: 7px;
  background: #cde4fe;
  position: absolute;
  top: 20rem;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
`;
const Loader = styled.div`
  width: 2rem;
  height: 0.5rem;
  border-radius: 7px;
  background-color: #5ba4fc;
  animation: load infinite ease-in-out 2s;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);

  @keyframes load {
    0% {
      transform: translateX(8rem);
    }

    50% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(8rem);
    }
  }
`;

const Apply = () => {
  const { user, setUser } = useContext(UserContext);
  const { click, setClick } = useContext(UserContext);
  const [opt, setOpt] = useState("");

  const [err1, setErr1] = useState(false);
  const [email, setEmail] = useState("");
  const [moveIn, setMoveIn] = useState("");
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [progress, setProgress] = useState(null);
  const [progress2, setProgress2] = useState(null);
  const [progress3, setProgress3] = useState(null);
  const [doc1, setDoc1] = useState("");
  const [doc2, setDoc2] = useState("");
  const [doc3, setDoc3] = useState("");
  const [job, setJob] = useState([]);
  const [load, setLoad] = useState(true);

  const router = useRouter();
  //   const param = useParams();

  const { apply } = router.query;

  // if (app !== undefined) {
  //   ////console.log(app);
  // }

  const cookies = parseCookies();

  const userDetails = cookies?.userDetails
    ? JSON.parse(cookies?.userDetails)
    : "";

  // const fetcher = (url) =>
  //   axios.post(url, { jobId: apply }).then((res) => res.data);
  // const { data, error } = useSWR("/api/jobs/getJob", fetcher);

  useEffect(() => {
    if (userDetails === "") {
      router.push("/login");
    }

    if (userDetails?.user?.employeer) {
      router.push("/employer/dashboard");
    }

    setUser(userDetails);
    setOpt("/dashboard/applications");
    findJob();

    setTimeout(() => {
      setLoad(false);
    }, 2000);
    //setJob(data?.result);
  }, [apply]);

  const findJob = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/jobs/getJob`,
        {
          jobId: apply,
        },
        config
      );
      //toast.success(data?.status);
      setJob(data?.result);
    } catch (error) {
      ////console.log(error.response);
      toast.error(error.response.data.error);
    }
  };

  //////console.log(apply);

  const handleFile = (e) => {
    const image = e.target.files[0];

    if (image.size <= 10000000) {
      setFile(image);
    } else {
      setFile(null);
    }
  };

  const handleFile2 = (e) => {
    const image = e.target.files[0];

    if (image.size <= 10000000) {
      setFile2(image);
    } else {
      setFile3(null);
    }
  };

  const handleFile3 = (e) => {
    const image = e.target.files[0];

    if (image.size <= 10000000) {
      setFile3(image);
    } else {
      setFile3(null);
    }
  };

  const updateApp = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.patch(
        `/api/jobs/updateJob`,
        {
          id: apply,
          apps: job?.apps + 1,
        },
        config
      );

      //router.push("/employer/dashboard");
    } catch (error) {
      ////console.log(error.response);
      toast.error(error.response.data.error);
    }
  };

  const handleDataUpload = async () => {
    let userId = user?.user?._id;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/application/apply`,
        {
          email,
          fullname,
          moveIn,
          address,
          jobId: apply,
          userId,
          cv: doc1,
          rtw: doc2,
          validId: doc3,
        },
        config
      );
      toast.success(data?.status);
      updateApp();

      setEmail("");
      setFullname("");
      setMoveIn("");
      setAddress("");
      setFile(null);
      setFile2(null);
      setFile3(null);
      setProgress(null);
      setProgress2(null);
      setProgress3(null);

      //router.push("/employer/dashboard");
    } catch (error) {
      //////console.log(error.response);
      toast.error(error.response.data.error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      email.length === 0 ||
      fullname.length === 0 ||
      moveIn.length === 0 ||
      address.length === 0
    ) {
      setErr1(true);
    } else {
      setErr1(false);
    }

    if (file !== null) {
      // create file and upload on firebase
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          ////console.log("Upload is " + progress + "% done");
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              ////console.log("Upload is paused");
              break;
            case "running":
              ////console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            setDoc1(downloadURL);
          });
        }
      );
    } else {
      setDoc2("");
    }

    if (file2 !== null) {
      // create file and upload on firebase
      const fileName = new Date().getTime() + file2.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(storageRef, file2);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          ////console.log("Upload is " + progress + "% done");
          setProgress2(progress);
          switch (snapshot.state) {
            case "paused":
              ////console.log("Upload is paused");
              break;
            case "running":
              ////console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            setDoc2(downloadURL);
          });
        }
      );
    } else {
      setDoc2("");
    }

    if (file3 !== null) {
      // create file and upload on firebase
      const fileName = new Date().getTime() + file3.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(storageRef, file3);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          ////console.log("Upload is " + progress + "% done");
          setProgress3(progress);
          switch (snapshot.state) {
            case "paused":
              ////console.log("Upload is paused");
              break;
            case "running":
              ////console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            setDoc3(downloadURL);
          });
        }
      );
    } else {
      setDoc3("");
    }
  };

  useEffect(() => {
    if (doc1 !== "" && doc2 !== "" && doc3 !== "") {
      handleDataUpload();
    }
  }, [doc1, doc2, doc3]);

  return (
    <>
      <Head>
        <title>Jordan recruitments-Dashboard</title>
        <meta name="Jordan recruitments" content="Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/JR.svg" />
      </Head>
      <div>
        {user?.length !== 0 && (
          <Div>
            {!click && (
              <DivHam onClick={() => setClick(true)}>
                <CgMenuLeft />
              </DivHam>
            )}
            <Sidebar option={opt} />

            <Wrapper>
              {load && (
                <LoadDiv>
                  <Loader />
                </LoadDiv>
              )}
              {!load && (
                <JobCon>
                  <Hd>
                    <Title>{job?.title}</Title>
                  </Hd>
                  <PJ>Salary: {job?.pay}</PJ>
                  <PJ>Job type: {job?.type}</PJ>
                  <PJ>Location: {job?.location}</PJ>
                  <Desc>{job?.desc}</Desc>

                  <PJ>Duration: {job?.duration}</PJ>
                  <PJ>Date posted: {job?.datePosted?.slice(0, 15)}</PJ>
                </JobCon>
              )}

              {!load && (
                <Form onSubmit={handleSubmit}>
                  <InputDiv>
                    <H3>Fill the form below</H3>
                  </InputDiv>
                  <InputDiv>
                    <Label>Full Name</Label>
                    <Input
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      placeholder="John Alfred"
                      style={{
                        borderColor:
                          err1 && fullname.length <= 0 ? "red" : "#cde4fe",
                      }}
                    />
                  </InputDiv>
                  <InputDiv>
                    <Label>Email Address</Label>
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@gmail.com"
                      style={{
                        borderColor:
                          err1 && email.length <= 0 ? "red" : "#cde4fe",
                      }}
                    />
                  </InputDiv>
                  <InputDiv>
                    <Label>House Address</Label>
                    <Input
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter address"
                      style={{
                        borderColor:
                          err1 && address.length <= 0 ? "red" : "#cde4fe",
                      }}
                    />
                  </InputDiv>

                  <InputDiv>
                    <Label>When did you move in?</Label>
                    <Input
                      value={moveIn}
                      onChange={(e) => setMoveIn(e.target.value)}
                      placeholder="Type here"
                      style={{
                        borderColor:
                          err1 && moveIn.length <= 0 ? "red" : "#cde4fe",
                      }}
                    />
                  </InputDiv>

                  <InputDiv>
                    <Label>Upload CV</Label>

                    <Input
                      onChange={(e) => handleFile(e)}
                      type="file"
                      id="file"
                    />

                    <Label2 htmlFor="file">
                      <MdFileUpload style={{ opacity: "0.3" }} />
                      <Span style={{ fontSize: "0.8rem", textAlign: "center" }}>
                        Only files with 10mb max size are allowed
                      </Span>
                      {file && file?.size < 10000000 && (
                        <span style={{ fontSize: "0.8rem" }}>{file.name}</span>
                      )}

                      <BigBar>
                        {progress !== null && (
                          <ProgressBar width={`${progress}%`} />
                        )}
                      </BigBar>
                    </Label2>
                  </InputDiv>

                  <InputDiv>
                    <Label>Upload Right to Work</Label>

                    <Input
                      onChange={(e) => handleFile2(e)}
                      type="file"
                      id="file2"
                    />

                    <Label2 htmlFor="file2">
                      <MdFileUpload style={{ opacity: "0.3" }} />
                      <Span style={{ fontSize: "0.8rem", textAlign: "center" }}>
                        Only files with 10mb max size are allowed
                      </Span>
                      {file2 && file2?.size < 10000000 && (
                        <span style={{ fontSize: "0.8rem" }}>{file2.name}</span>
                      )}

                      <BigBar>
                        {progress2 !== null && (
                          <ProgressBar width={`${progress2}%`} />
                        )}
                      </BigBar>
                    </Label2>
                  </InputDiv>

                  <InputDiv>
                    <Label>Upload Valid ID</Label>

                    <Input
                      onChange={(e) => handleFile3(e)}
                      type="file"
                      id="file3"
                    />

                    <Label2 htmlFor="file3">
                      <MdFileUpload style={{ opacity: "0.3" }} />
                      <Span style={{ fontSize: "0.8rem", textAlign: "center" }}>
                        Only files with 10mb max size are allowed
                      </Span>
                      {file3 && file3?.size < 10000000 && (
                        <span style={{ fontSize: "0.8rem" }}>{file3.name}</span>
                      )}

                      <BigBar>
                        {progress3 !== null && (
                          <ProgressBar width={`${progress3}%`} />
                        )}
                      </BigBar>
                    </Label2>
                  </InputDiv>

                  <InputDiv>
                    <Btn type="submit">Apply</Btn>
                  </InputDiv>
                </Form>
              )}
            </Wrapper>
          </Div>
        )}
      </div>
    </>
  );
};

export default Apply;
