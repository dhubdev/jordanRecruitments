import { UserContextProvider } from "@/context/userContext";
import "@/styles/globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserContextProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </UserContextProvider>
    </>
  );
}
