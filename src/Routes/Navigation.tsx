import React from "react";
import { Route, Routes } from "react-router-dom";
import Board from "../Screens/Board";
import App from "../App";
import Success from "../Screens/Success";
import ApplyForm from "../Screens/ApplyForm";

type Props = {};

export default function Navigation({}: Props) {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/apply" element={<ApplyForm />} />
      {/* <Route path="/success" element={<Success />}  /> */}
    </Routes>
  );
}
