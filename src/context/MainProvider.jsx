import axios from "axios";
import React, { useReducer, useState } from "react";
import { API } from "../helpers/const";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const MainContext = React.createContext();

const INIT_STATE = {
  contacts: null,
  contactToEdit: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload };
    case "HANDLE_SHOW":
      return { ...state, contactToEdit: action.payload };
    default:
      return state;
  }
};

const MainProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // ! contactBook
  // 1
  const addContact = async (newContact) => {
    try {
      await axios.post(API, newContact);
      toast.success("Успешно добавлено!");
    } catch (error) {
      console.log(error);
    }
  };
  // 2

  const getContacts = async () => {
    try {
      let response = await axios(API);
      let action = {
        type: "GET_CONTACTS",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  // ! 3 delete
  const deleteContact = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getContacts();
      toast.error("Успешно удалено!");
    } catch (error) {
      console.log(error);
      toast.error("Ошибка, попробуйте позже");
    }
  };
  // ! 4 edit
  const [show, setShow] = useState(false);
  const handleShow = async (id) => {
    try {
      const response = await axios(`${API}/${id}`);
      setShow(true);
      let action = {
        type: "HANDLE_SHOW",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClose = () => setShow(false);

  // ! edit 2

  const saveEditedContact = async (editedContact) => {
    try {
      await axios.patch(`${API}/${editedContact.id}`, editedContact);
      getContacts();
    } catch (error) {
      console.log(error);
    }
  };
  // ! end

  let navigate = useNavigate();
  const [meal, setMeal] = useState("");
  function onChangeValue(event) {
    const meal = event.target.value;
    let newMeal = {
      meal,
    };
    setMeal(meal, newMeal);
    navigate("/ingredients");
  }

  // ! task 6
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [showName, setShowName] = useState(false);
  const [email, setEmail] = useState("");

  function onSumbitChange() {
    if (password1 !== password) {
      alert("Confirm password fields do not match");
    } else if (password1 === " " || name === "" || password === " ") {
      alert("fill in the");
    } else {
      setEmail(name);
      setShowName(true);
      navigate("/showEmail");
    }
    setName("");
    setPassword("");
    setPassword1("");
  }

  return (
    <MainContext.Provider
      value={{
        onChangeValue,
        onSumbitChange,
        setName,
        setPassword,
        setPassword1,
        setShowName,
        setEmail,
        addContact,
        getContacts,
        setShow,
        handleClose,
        handleShow,
        deleteContact,
        saveEditedContact,
        show,
        meal,
        name,
        password,
        password1,
        email,
        showName,
        contacts: state.contacts,
        contactToEdit: state.contactToEdit,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainProvider;
