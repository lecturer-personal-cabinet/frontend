import React, {Component} from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Dialog, withStyles, WithStyles} from "@material-ui/core";
import styles from "./styles";
import Icon from "@material-ui/core/Icon";
import {options} from "./options";
import nanoid from "nanoid";
import {Title} from "../Forms/Title";
import {BuilderItem} from "../../../types/builder";
import {Description} from "../Forms/Description";
import {Skills} from "../Forms/Skills";
import {ImageBuilder} from "../Forms/ImageBuilder";

interface Props extends WithStyles<typeof styles> {
    open: boolean,

    toggleDrawer: (drawerState: boolean) => void,
    onElementSave: (item: BuilderItem) => void,
}

type Anchor = 'right' | 'top' | 'bottom';

function Picker(props: Props) {
    const onSave = (item: BuilderItem) => {
        props.onElementSave(item);
        setOpenModal(false);
    };

    const [modal, setModal] = React.useState(<Title onSave={onSave}/>);
    const [openModal, setOpenModal] = React.useState(false);

    const openModalAction = (modalId: string) => {
        switch (modalId) {
            case 'title':
                setModal(<Title onSave={onSave}/>);
                setOpenModal(true);
                break;
            case 'description':
                setModal(<Description onSave={onSave}/>);
                setOpenModal(true);
                break;
            case 'skills':
                setModal(<Skills onSave={onSave}/>);
                setOpenModal(true);
                break;
            case 'image':
                setModal(<ImageBuilder onSave={onSave}/>);
                setOpenModal(true);
                break;
            default:
                setOpenModal(false);
        }
    };

    const list = (anchor: Anchor) => (
        <div
            className={clsx(props.classes.list, {
                [props.classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={() => props.toggleDrawer(false)}
            onKeyDown={() => props.toggleDrawer(false)}
        >
            <List>
                {options.map((item, index) => (
                    <ListItem button key={nanoid()} onClick={() => openModalAction(item.modal)}>
                        <ListItemIcon><Icon>{item.itemIcon}</Icon></ListItemIcon>
                        <ListItemText primary={item.itemTitle}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <Dialog
                onClose={() => setOpenModal(false)}
                open={openModal}
                fullWidth={true}
                maxWidth={"md"}>
                {modal}
            </Dialog>
            {(['right'] as Anchor[]).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer anchor={anchor} open={props.open} onClose={() => props.toggleDrawer(false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

export default withStyles(styles)(Picker);