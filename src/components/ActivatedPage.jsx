import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ActivatedPage = () => {
  const { activePage } = useContext(AppContext);
  return <div></div>;
};

export default ActivatedPage;
