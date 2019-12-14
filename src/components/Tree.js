import React, { useState } from "react";
import ReactJson from "react-json-view";
import "./Tree.css";

function Tree({ data }) {
  return <ReactJson src={data} />;
}

export default Tree;
