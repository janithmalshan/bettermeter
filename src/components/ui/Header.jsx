import * as React from "react"
import { AppBar, Toolbar } from "@material-ui/core"
import { List, ListItem, ListItemText, Hidden } from "@material-ui/core"
import logo from '../../logo.svg'
import SideDrawer from "./SideDrawer";

const navLinks = [
    { title: `dashboard`, path: `/dashboard` },
    { title: `sites`, path: `/sites` },
    { title: `campaigns`, path: `/campaigns` },
    { title: `analytics`, path: `/analytics` },
    { title: `live view`, path: `/live-view` },
    { title: `users`, path: `/users` },
]
const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <img src={logo}/>
                <Hidden smDown> {/* show in desktop*/}
                    <List component="nav" aria-labelledby="main navigation">
                        {navLinks.map(({ title, path }) => (
                            <a href={path} key={title}>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </a>
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
