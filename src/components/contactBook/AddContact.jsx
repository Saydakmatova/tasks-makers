import React, { useContext, useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { MainContext } from "../../context/MainProvider";

const AddContact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [phone, setPhone] = useState("");
  const { addContact } = useContext(MainContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    let newContact = {
      name,
      img,
      phone,
    };
    addContact(newContact);
    setName("");
    setImg("");
    setPhone("");
    navigate("/homeContact");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter name..."
        />
        <FormControl
          value={img}
          onChange={(e) => setImg(e.target.value)}
          type="text"
          placeholder="Enter phote"
        />
        <FormControl
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          placeholder="Enter phone number"
        />
        <Button type="submit">Add Contact</Button>
      </form>
    </div>
  );
};

export default AddContact;
