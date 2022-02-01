import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Navibar from "./components/Navibar";
import Receipts from "./components/ Receipts";
import Task6 from "./components/Task6";
import HomePage from "./components/pages/HomePage";
import MainProvider from "./context/MainProvider";
import Ingredients from "./components/Ingredients";
import ShowEmail from "./components/pages/ShowEmail";
import AddContact from "./components/contactBook/AddContact";
import HomeContact from "./components/contactBook/HomeContact";
import EditContact from "./components/contactBook/EditContact";

const MyRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <MainProvider>
          <Navibar />
          {/* <EditContact /> */}
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/receipts" element={<Receipts />} />
            <Route path="/form" element={<Task6 />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/showEmail" element={<ShowEmail />} />
            <Route path="/addContact" element={<AddContact />} />
            <Route path="/homeContact" element={<HomeContact />} />
          </Routes>
        </MainProvider>
      </BrowserRouter>
    </div>
  );
};
export default MyRoutes;
