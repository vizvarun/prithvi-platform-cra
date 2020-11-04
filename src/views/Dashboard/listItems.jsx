import React from "react";
import "./dashboard.styles.scss";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Grid, Gitlab, Database, Settings, Code, Layout } from "react-feather";

const iconColor = {
  color: "#F7F5F6",
};

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Grid style={iconColor}/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" className="list_item__text" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Layout style={iconColor} />
      </ListItemIcon>
      <ListItemText primary="Taiga" className="list_item__text" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Gitlab style={iconColor} />
      </ListItemIcon>
      <ListItemText primary="GitLab" className="list_item__text" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Code style={iconColor} />
      </ListItemIcon>
      <ListItemText primary="Coding Env." className="list_item__text" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Database style={iconColor} />
      </ListItemIcon>
      <ListItemText primary="Datasets" className="list_item__text" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Settings style={iconColor} />
      </ListItemIcon>
      <ListItemText primary="Settings" className="list_item__text" />
    </ListItem>
  </div>
);
