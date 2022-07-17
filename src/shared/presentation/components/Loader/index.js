import { CircleNotch } from "phosphor-react";
import React from "react";
import "./Loader.scss";

const Loader = () => {

  return (
    <div className='loader'>
      <CircleNotch size={32}  />
    </div>
  );
};

export default Loader;
