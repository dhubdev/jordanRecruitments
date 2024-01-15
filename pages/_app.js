import { UserContextProvider } from "@/context/userContext";
import "@/styles/globals.css";
import { useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Add the Google Analytics script
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-XFYKQK871V";
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }

      gtag("js", new Date());
      gtag("config", "G-XFYKQK871V");
    };
  }, []);

  return (
    <>
      <UserContextProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </UserContextProvider>
    </>
  );
}
