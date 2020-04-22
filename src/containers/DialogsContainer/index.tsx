import React from 'react';
import {Box, Dialog, withStyles, WithStyles} from "@material-ui/core";
import {RootState} from "../../store";
import {connect} from "react-redux";
import { RouteComponentProps } from 'react-router-dom';
import styles from "./styles";
import {ThunkDispatch} from "redux-thunk";
import SearchBar from "../../components/SearchBar";
import DialogPreview from "../../components/DialogPreview";

interface MatchParams {}

interface MapStateToProps extends WithStyles<typeof styles>, RouteComponentProps<MatchParams> {}

interface MapDispatchToProps {}

type Props = MapStateToProps & MapDispatchToProps;

interface State {}

class DialogsContainer extends React.Component<Props, State> {
    private onSearch(value: string) {

    }

    render() {
        return (
            <Dialog open={true} fullWidth={true} maxWidth={"md"}>
                <Box className={this.props.classes.root}>
                    <SearchBar onSearch={this.onSearch} />
                    <DialogPreview />
                </Box>
            </Dialog>
        )
    }
}

const mapStateToProps = (state: RootState) => ({

});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({

});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(DialogsContainer))
