import { UserContext } from "@/context/userContext";
import { parseCookies } from "nookies";
import { useContext, useEffect } from "react";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);

  const cookies = parseCookies();

  const userDetails = cookies?.userDetails
    ? JSON.parse(cookies?.userDetails)
    : "";

  useEffect(() => {
    setUser(userDetails);
  }, []);

  console.log(user);
  return (
    <div>
      <h1>Dashboard </h1>
    </div>
  );
};

export default Dashboard;
