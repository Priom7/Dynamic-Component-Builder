import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Modal from "../components/Modal";
import SampleForm10 from "@/components/global/SampleForm4";
import app_banner from "@/public/images/app_logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faYoutube,
  faReact,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="container">
        <div className="flex justify-center text-center">
          {/* <Image src={app_banner} alt="App Banner" width={350} height={350} /> */}
          <div>
            <h1>
              <FontAwesomeIcon icon={faReact} size="1.5x" />
              Component Builder
            </h1>
            <p>Build your react component and generate source code.</p>
            <p>
              <FontAwesomeIcon icon={faCodepen} />
              Feel free to leave a star
            </p>
            <a
              href="https://github.com/Priom7/Dynamic-Component-Builder"
              className="text-white me-2"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
        <SampleForm10 />
      </div>
      {/* <button onClick={() => setShowModal(true)} className="btn btn-primary">
        Show Details
      </button>
      <Modal
        title="Course Information"
        body="Here is some detailed information about the course."
        show={showModal}
        onClose={() => setShowModal(false)}
      /> */}
    </>
  );
};

export default Home;
