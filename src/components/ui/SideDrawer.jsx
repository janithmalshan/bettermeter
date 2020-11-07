import * as React from "react"
import { IconButton } from "@material-ui/core"
import Menu from "../../images/ic-menu.svg"
import { List, ListItem, ListItemText, Drawer } from "@material-ui/core"
import { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `black`,
    },
    menu: {
        display: `block`,
        position: 'fixed',
        top: '12px',
        left: '20px'
    }
})

const SideDrawer = ({ navLinks }) => {
    const classes = useStyles();
    const [state, setState] = useState({ right: false })
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return
        }
        setState({ [anchor]: open })
    }

    const sideDrawerList = anchor => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List component="nav">
                {navLinks.map(({ title, icon, path }) => (
                    <Link to={path} key={title}>
                        <ListItem button className="ui-toolbar__link">
                            <img className="ui-toolbar__link-icon" src={icon}/>
                            <label className="ui-toolbar__link-label">{title}</label>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );

    return (
        <React.Fragment>
            <IconButton
                edge="start"
                aria-label="menu"
                onClick={toggleDrawer("left", true)}
                className={classes.menu}
                size="medium"
            >
                <img src={Menu}/>
            </IconButton>
            <Drawer
                anchor="left"
                open={state.left}
                onOpen={toggleDrawer("left", true)}
                onClose={toggleDrawer("left", false)}
            >
                {sideDrawerList("left")}
            </Drawer>
        </React.Fragment>
    )
}
export default SideDrawer
