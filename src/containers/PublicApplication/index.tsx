import React from 'react';
import styles from "./styles";
import {WithStyles, withStyles} from "@material-ui/core";
import {Redirect, Route, RouteComponentProps, Switch} from 'react-router-dom';
import PersonsPage from '../UsersContainer';
import NotFound from "../NotFound";
import ApplicationHeader from '../../components/ApplicationHeader';
import {sidebarItems} from "./menu";
import {SidebarItem} from "../../components/ApplicationSidebar/types";
import PublicProfile from "../PublicProfile";

interface ApplicationProps extends WithStyles<typeof styles>, RouteComponentProps<any> {

}

interface ApplicationState {
    currentPage: {
        title: string
    },
    menuItems: SidebarItem[][],
}

class PublicApplication extends React.Component<ApplicationProps, ApplicationState> {
    constructor(props: ApplicationProps) {
        super(props);
        this.state = {
            currentPage: {
                title: ''
            },
            menuItems: sidebarItems
        }
    }

    componentDidUpdate(prevProps: Readonly<ApplicationProps>, prevState: Readonly<ApplicationState>, snapshot?: any): void {
        if(this.props.location !== prevProps.location)
            this.changeActivePage(this.findSelectedItemByPath(this.props.location.pathname));
    }

    componentDidMount(): void {
        this.changeActivePage(this.findSelectedItemByPath(this.props.location.pathname));
    }

    private findSelectedItemByPath = (path: string): SidebarItem | undefined => {
        return ([] as SidebarItem[]).concat(...this.state.menuItems)
            .find(item => item.path === path);
    };

    private changeActivePage = (selectedItem: SidebarItem | undefined) => {
        if(!selectedItem) return;

        this.setState({
            ...this.state,
            currentPage: {
                ...this.state.currentPage,
                title: selectedItem.itemTitle,
            },
            menuItems: this.changeActiveElement(selectedItem),
        })
    };

    private changeActiveElement = (selectedItem: SidebarItem): SidebarItem[][] => {
        return this.state.menuItems.map(section => section.map(item => {
            (item === selectedItem) ? item.isActive = true : item.isActive = false;
            return item;
        }));
    };

    render() {
        return (
            <ApplicationHeader
                title={this.state.currentPage.title}
                sidebarItems={this.state.menuItems}
                withNotifications={false}
                withMenu={false}
            >
                <Switch>
                    <Route path='/p/profile/:userId' component={PublicProfile} />
                    <Route path='/p/users' component={PersonsPage} />
                    <Route component={NotFound}/>
                </Switch>
            </ApplicationHeader>
        )
    }
}

export default withStyles(styles)(PublicApplication);
