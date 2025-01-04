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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faYoutube,
  faTwitter,
  faInstagram,
  faWpforms,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <Provider store={store}>
      <ToastContainer autoClose={3000} position="top-right" />
      <Navbar
        links={[
          {
            href: "/",
            label: "Home",
            icon: <FontAwesomeIcon icon={faReact} />,
          },
          {
            href: "/nav_builder",
            label: "Nav Builder",
            icon: <FontAwesomeIcon icon={faWpforms} />,
          },
          {
            href: "/tab_builder",
            label: "Tab Builder",
            icon: <FontAwesomeIcon icon={faWpforms} />,
          },
          {
            href: "/table_builder",
            label: "Table Builder",
            icon: <FontAwesomeIcon icon={faWpforms} />,
          },
          {
            href: "/form_builder",
            label: "Form Builder",
            icon: <FontAwesomeIcon icon={faWpforms} />,
          },
        ]}
      />
      <Component {...pageProps} />
      <footer className="footer mt-auto py-3 bg-dark text-white">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4">
              <h5 className="text-white">About</h5>
              <p className="text-white">
                A simple application to build react components and generate
                source code.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="text-white">Social</h5>
              <a href="#" className="text-white me-2">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="text-white me-2">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" className="text-white me-2">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#" className="text-white me-2">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-white me-2">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="col-md-4">
              <h5 className="text-white">Contact Us</h5>
              <p className="text-white">Email: priom7197@gmail.com</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <p className="text-white">
                &copy; 2025 Md. Sharif Alam. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Provider>
  );
}

export default MyApp;
