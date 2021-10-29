import React, { useState } from "react";

import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { addeUser, getUsers } from "../redux/actions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const Adduser = () => {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  //add new user

  const handelAdd = (e) => {
    e.preventDefault();
    dispatch(addeUser(name, email, number));
    dispatch(getUsers());
    closeModal();
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Button variant="success" onClick={openModal}>
        Add user
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form onSubmit={handelAdd}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label> number</label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button type="submit">add</button>
          <button onClick={closeModal}>cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default Adduser;
