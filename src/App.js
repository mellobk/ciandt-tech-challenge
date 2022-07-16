import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {stepRoutes} from './domains/home/application/constans/stepRoutes'
import { setTotalStep } from "./domains/home/application/slices/home";
import Router from "./shared/presentation/Router";


const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setTotalStep(stepRoutes)) 
  },[dispatch])
 
  return (
    <>
      <Router />
    </>
  );
};

export default App;
