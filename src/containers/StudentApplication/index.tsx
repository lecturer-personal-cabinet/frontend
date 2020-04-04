import React from 'react';
import styles from "./styles";
import {WithStyles, withStyles} from "@material-ui/core";
import {Redirect, Route, RouteComponentProps, Switch} from 'react-router-dom';
import DashboardPage from '../DashboardPage';
import PersonsPage from '../UsersContainer';
import NotFound from "../NotFound";
import ApplicationHeader from '../../components/ApplicationHeader';
import {sidebarItems} from "./menu";
import {SidebarItem} from "../../components/ApplicationSidebar/types";
import {PrivateRoute} from "../../components/PrivateRoute";
import PortfolioContainer from "../PortfolioContainer";
import CompleteProfileContainer from "../CompleteProfileContainer";

interface StudentApplicationProps extends WithStyles<typeof styles>, RouteComponentProps<any> {

}

interface StudentApplicationState {
    currentPage: {
        title: string
    },
    menuItems: SidebarItem[][],
}

class StudentApplication extends React.Component<StudentApplicationProps, StudentApplicationState> {
    constructor(props: StudentApplicationProps) {
        super(props);
        this.state = {
            currentPage: {
                title: ''
            },
            menuItems: sidebarItems
        }
    }

    componentDidUpdate(prevProps: Readonly<StudentApplicationProps>, prevState: Readonly<StudentApplicationState>, snapshot?: any): void {
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
            >
                <Switch>
                    <PrivateRoute path='/s/users' component={PersonsPage} />
                    <PrivateRoute path='/s/profile/complete' component={CompleteProfileContainer} />
                    <PrivateRoute path='/s/profile' component={DashboardPage} />
                    <PrivateRoute path='/s/portfolio' component={PortfolioContainer} />
                    <Redirect from="/s" to="/s/profile" />
                    <Route component={NotFound}/>
                </Switch>
            </ApplicationHeader>
        )
    }
}

export default withStyles(styles)(StudentApplication);
