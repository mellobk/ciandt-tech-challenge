import { House, Star  } from "phosphor-react";
import React from "react";


const size= '25'
const className ='menu-icon'
const menu = [
  {
    icon: <House  size={size} className={className} color='white' />,
    link: "/",  
  },
  {
    icon: <Star  size={size} className={className} color='white' />,
    link: "/",  
  },


];

export default menu;
