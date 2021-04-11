import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FaceIcon from "@material-ui/icons/Face";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import {Link} from 'react-router-dom'

export const mainListItems = (
  <div>
     <Link to="/Publicaciones">
      <ListItem button>
         <ListItemIcon><DashboardIcon /></ListItemIcon>
         <ListItemText primary="Dashboard" />
      </ListItem>
      </Link>
   
    
    
       <Link to="/Perfil">
        <ListItem button>
           <ListItemIcon> <FaceIcon /> </ListItemIcon>
           <ListItemText primary="Perfil" />
         </ListItem>
         </Link>

         <Link to="/Usuarios">
          <ListItem button href="./Usuarios">
             <ListItemIcon>   <PeopleIcon /> </ListItemIcon>
             <ListItemText primary="Usuarios" />  
          </ListItem>
          </Link>
            
  </div>
);
