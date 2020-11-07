import * as React from "react"
import { AppBar, Toolbar } from "@material-ui/core"
import { List, ListItem, Hidden } from "@material-ui/core"
import logo from '../../logo.svg'
import SideDrawer from "./SideDrawer";
import dash from '../../images/ic-nav-dash.svg'
import site from '../../images/ic-nav-sites.svg'
import camp from '../../images/ic-nav-camp.svg'
import analyt from '../../images/ic-nav-analyt.svg'
import live from '../../images/ic-nav-live.svg'
import users from '../../images/ic-nav-users.svg'
import {Link} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles"

const navLinks = [
    { title: `dashboard`, path: `/dashboard`, icon: dash },
    { title: `sites`, path: `/sites`, icon: site },
    { title: `campaigns`, path: `/campaigns`, icon: camp },
    { title: `analytics`, path: `/analytics`, icon: analyt },
    { title: `live view`, path: `/live-view`, icon: live },
    { title: `users`, path: `/users`, icon: users },
];

const useStyles = makeStyles({
    active: {
        backgroundColor: 'red'
    }
});

const Header = () => {

    const classes = useStyles();

    return (
        <AppBar position="static" elevation={0} className="ui-appbar">
            <div className="ui-appbar__inner">
                <img src={logo} className="ui-appbar__inner-logo"/>
            </div>
            <Toolbar>
                <Hidden smDown> {/* show in desktop*/}
                    <List component="nav" aria-labelledby="main navigation" className="ui-toolbar" disablePadding>
                        {navLinks.map(({ title, icon , path }) => (
                            <Link to={path} key={title}>
                                <ListItem button className="ui-toolbar__link">
                                    <img className="ui-toolbar__link-icon" src={icon}/>
                                    <label className="ui-toolbar__link-label">{title}</label>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Hidden>
                <Hidden mdUp> {/*show in mobile */}
                    <SideDrawer navLinks={navLinks} />
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}

export default Header
