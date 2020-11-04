import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import Divider from '@material-ui/core/Divider';

const iconColor={
    color:'#fff'
}

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon style={iconColor}/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <Divider style={{backgroundColor:'#353d62'}}/>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon style={iconColor} />
      </ListItemIcon>
      <ListItemText primary="Taiga" />
    </ListItem>
    <Divider style={{backgroundColor:'#353d62'}} />
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon style={iconColor} />
      </ListItemIcon>
      <ListItemText primary="Gitlab" />
    </ListItem>
    <Divider style={{backgroundColor:'#353d62'}} />
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon style={iconColor}/>
      </ListItemIcon>
      <ListItemText primary="Datasets" />
    </ListItem>
    <Divider style={{backgroundColor:'#353d62'}} />
    <ListItem button>
      <ListItemIcon>
        <LayersIcon style={iconColor}/>
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
    <Divider style={{backgroundColor:'#353d62'}}/>
  </div>
);

