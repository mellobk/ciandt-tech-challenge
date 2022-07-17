import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSuggestedPokemons } from "./domains/home/application/slices/home";

import Router from "./shared/presentation/Router";


const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getSuggestedPokemons()) 
  },[dispatch])
 
  return (
    <>
      <Router />
    </>
  );
};

export default App;
