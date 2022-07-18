import { House, Star  } from "phosphor-react";
import React from "react";
import { favouritesRoute, homeRoute } from "../../../domains/home/infrastructure/routes";


const size= '25'
const className ='menu-icon'
const menu = [
  {
    icon: <House  size={size} className={className} color='white' />,
    link: homeRoute,  
  },
  {
    icon: <Star  size={size} className={className} color='white' />,
    link: favouritesRoute,  
  },


];

export default menu;
