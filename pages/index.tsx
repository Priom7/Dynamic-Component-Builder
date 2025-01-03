import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Modal from "../components/Modal";
import SampleForm10 from "@/components/global/SampleForm4";
const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="container">
        <SampleForm10 />
      </div>
      <button onClick={() => setShowModal(true)} className="btn btn-primary">
        Show Details
      </button>
      <Modal
        title="Course Information"
        body="Here is some detailed information about the course."
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default Home;
