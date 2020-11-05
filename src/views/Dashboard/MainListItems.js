import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Divider from '@material-ui/core/Divider';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import StorageIcon from '@material-ui/icons/Storage';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountTreeIcon from '@material-ui/icons/AccountTree';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import GradeIcon from '@material-ui/icons/Grade';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

export default function MainListItems() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open); 
  };
  return (
    <div>
      <List>
        
        {/* from */}
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <DashboardIcon style={{ color: 'white' }} /> 
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Divider style={{backgroundColor:'#353d62'}}/>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}> */}
              <ListItem button style={{backgroundColor:'#4d516831'}}>
                <ListItemIcon>
                    <HomeIcon style={{ color: 'white' }} size="small"/>
                </ListItemIcon>
                <ListItemText primary="Home" style={{ color: 'white' }} />
              </ListItem>
            {/* </Link> */}
            <Divider style={{backgroundColor:'#353d62'}}/>

              {' '}
              <ListItem button style={{backgroundColor:'#4d516831'}}>
                <ListItemIcon>
                    <LibraryBooksIcon style={{ color: 'white' }}/>
                </ListItemIcon>
                <ListItemText primary="Projects" style={{ color: 'white' }}/>
              </ListItem>
              <Divider style={{backgroundColor:'#353d62'}}/>

              <ListItem button style={{backgroundColor:'#4d516831'}}>
                <ListItemIcon>
                    <GradeIcon style={{ color: 'white' }}/>
                </ListItemIcon>
                <ListItemText primary="Opportunities" style={{ color: 'white' }}/>
              </ListItem>
              <Divider style={{backgroundColor:'#353d62'}}/>

              <ListItem button style={{backgroundColor:'#4d516831'}}>
                <ListItemIcon >
                    <NoteAddIcon style={{ color: 'white' }}/>
                </ListItemIcon>
                <ListItemText primary="Proposals" style={{ color: 'white' }}/>
              </ListItem>
          </List>
        </Collapse>
        <Divider style={{backgroundColor:'#353d62'}}/>
        <a
          href="http://taiga.prithvi.ai/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <ListItem button>
            <ListItemIcon>
              <AccountTreeIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Taiga" />
          </ListItem>
        </a>
        <Divider style={{backgroundColor:'#353d62'}}/>
        <a
          href="http://git.prithvi.ai/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <ListItem button>
            <ListItemIcon>
              <GitHubIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Git" />
          </ListItem>
        </a>
        <Divider style={{backgroundColor:'#353d62'}}/>
        <ListItem button>
          <ListItemIcon>
            <CodeIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Coding Env" />
        </ListItem>
        <Divider style={{backgroundColor:'#353d62'}}/>
        <ListItem button>
          <ListItemIcon>
            <StorageIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Dataset" />
        </ListItem>
        <Divider style={{backgroundColor:'#353d62'}}/>

          <ListItem button>
            <ListItemIcon>
              <SettingsIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
      </List>
    </div>
  );
}
