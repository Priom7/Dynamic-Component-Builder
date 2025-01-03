// import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../styles/globals.css";
import { useEffect } from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import store from "../redux/store";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <Provider store={store}>
      <ToastContainer autoClose={3000} position="top-right" />
      <Navbar
        links={[
          { href: "/", label: "Home" },
          { href: "/nav_builder", label: "Nav Builder" },
          { href: "/tab_builder", label: "Tab Builder" },
          { href: "/table_builder", label: "Table Builder" },
          { href: "/form_builder", label: "Form Builder" },
        ]}
      />{" "}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
