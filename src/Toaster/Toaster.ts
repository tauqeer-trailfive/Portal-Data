import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (message: string, type: string) => {
  console.log("message", message);
  console.log("type", type);

  if (type === "success") {
    toast.success(message);
    return;
  } else if (type === "error") {
    toast.error(message);
    return;
  }
};
