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
import Icon from 'material-ui/Icon';
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
        'min-width': '500px',
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
        // marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
    },
    content: {
        width: '100%',
        'min-width': '500px',
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
    'open-external': {
        'margin-right': '0px',
    },
});

const internal = [
    {
        text: 'home',
        page: 'home',
        icon: 'home',
    },
    {
        text: 'about',
        page: 'about',
        icon: 'person_pin',
    },
    {
        text: 'interests',
        page: 'interests',
        icon: 'weekend',
    },
]

const links = [
    {
        text: 'facebook',
        link: 'https://facebook.com/siwenyong',
        icon: 'contacts',
    },
    {
        text: 'instagram',
        link: 'https://instagram.com/ineverwin',
        icon: 'photo'
    },
    {
        text: 'personal site',
        link: 'http://yiwensong.com',
        icon: 'person',
    },
    {
        text: 'linkedin',
        link: 'https://linkedin.com/in/iamyiwen',
        icon: 'work',
    },
    {
        text: 'github',
        link: 'https://github.com/yiwensong/yiwen.date',
        icon: 'code',
    },
];

const titles = {
    home: 'yiwen song (is single)',
    about: 'about yiwen',
    interests: "yiwen's (not) exciting life",
};

class YDAppBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            page: 'home',
        };
    }

    render() { 
        const handleDrawerOpen = () => {
            this.setState({open: true});
        };

        const handleDrawerClose = () => {
            this.setState({open: false});
        };

        const toggleDrawer = () => {
            this.setState({open: !this.state.open});
        };

        const contentChange = (page) => {
            return () => {
                var prev_page = this.state.page;
                this.setState({page: page});
                if (prev_page != page)
                    window.scrollTo(0, 0);
            };
        };

        const openLink = (url) => {
            return function () {
                var win = window.open(url, '_blank');
                win.focus();
            };
        };

        const {classes, theme} = this.props;
        const drawer = (
            <Drawer
                variant="persistent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
                open={this.state.open}
            >
                <div className={classes.drawerInner}>
                    <Divider />
                    <List className={classes.list}>
                        {internal.map( (x,i) =>
                            <ListItem button onClick={contentChange(x.page)} key={x.text}>
                                <ListItemIcon>
                                    <Icon>{x.icon}</Icon>
                                </ListItemIcon>
                                <ListItemText primary={x.text} />
                            </ListItem>
                        )}
                    </List>
                    <Divider />
                    <List className={classes.list}>
                        {links.map( (x,i) =>
                            <ListItem button onClick={openLink(x.link)} key={x.text}>
                                <ListItemIcon>
                                    <Icon>{x.icon}</Icon>
                                </ListItemIcon>
                                <ListItemText primary={x.text} />
                                <ListItemIcon className={classes['open-external']}>
                                    <Icon>open_in_new</Icon>
                                </ListItemIcon>
                            </ListItem>
                        )}
                    </List>
                </div>
            </Drawer>
        );

        var title = titles[this.state.page];

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
                            <Typography variant="title" color="inherit" className={classes.flex} noWrap>
                                {title}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <main className={classes.appFrame}>
                        {drawer}
                        <div className={classNames(
                            classes.content,
                            {
                                [classes['open-content']]: this.state.open,
                            }
                        )}>
                            <YDContent content={this.state.page} />
                            <br />
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
