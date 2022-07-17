import { House  } from "phosphor-react";
import React from "react";


const size= '25'
const className ='menu-icon'
const menu = [
  {
    title: "Inicio",
    active:true,
    icon: <House  size={size} className={className} />,
    link: "/",  
  },
];

export default menu;
