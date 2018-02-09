import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import { createMuiTheme } from 'material-ui/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import YDContent from './Content.js';


const drawerWidth = 240;
const appbarHeight = 64;


const the_theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff5c8d',
      main: '#d81b60',
      dark: '#a00037',
      contrastText: '#fff',
    },
    secondary: {
      light: '#819ca9',
      main: '#546e7a',
      dark: '#29434e',
      contrastText: '#fff',
    },
  },
});

const styles = theme => ({
    root: {
        width: '100%',
        //        marginTop: theme.spaceing.unit * 3,
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    drawerPaper: {
        // position: 'relative',
        marginTop: `${appbarHeight}px`,
        height: `calc(100vh - ${appbarHeight}px)`,
        width: drawerWidth,
    },
    drawerInner: {
        width: drawerWidth,
    },
    'open-content': {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`
    },
    content: {
        width: '100%',
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        marginTop: `calc(${appbarHeight}px + 1px)`,
        height: `calc(100% - ${appbarHeight}px)`,
        // marginLeft: -drawerWidth,
        // 'text-align': 'center',
        // marginTop: 56,
    },
    appBarClass: {
        margin: '0px',
    },
});

class YDAppBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    render() { 
        const handleDrawerOpen = () => {
            this.setState({open: true});
        }

        const handleDrawerClose = () => {
            this.setState({open: false});
        }

        const toggleDrawer = () => {
            this.setState({open: !this.state.open});
        }

        const {classes, theme} = this.props;
        const drawer = (
            <Drawer
                type="persistent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
                open={this.state.open}
            >
                <div className={classes.drawerInner}>
                    <Divider />
                    <List className={classes.list}>
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary='List Item' />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary='Another one' />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary='Yeet' />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        );

        console.log(this.state.open);
        console.log('ok');

        return (
            <MuiThemeProvider theme={the_theme}>
                <div
                    className={classNames(
                        classes.root,
                    )}
                >
                    <AppBar position="fixed" className={classes.appBarClass}>
                        <Toolbar disableGutters={!open}>
                            <IconButton className={classes.menuButton} onClick={toggleDrawer} color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography type="title" color="inherit" className={classes.flex} noWrap>
                                yiwen song (is single)
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <main className={classes.appFrame}>
                        {drawer}
                        <div className={classNames(
                            classes.content,
                            {
                            }
                        )}>
                        <div className={classNames(
                            {
                                [classes['open-content']]: this.state.open,
                            }
                        )}>
                        <YDContent title="wow this is a title" img="https://storage.googleapis.com/yiwen_dot_date_img/bw-yiwen-1.jpg" content="this is a string."/>
                        <br />
                    </div>
                </div>
            </main>
        </div>
    </MuiThemeProvider>
        );
    }
}

YDAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(YDAppBar);
