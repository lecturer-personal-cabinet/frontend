import React from 'react';
import {
    Box,
    Paper,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    withStyles,
    WithStyles
} from "@material-ui/core";
import {RootState} from "../../store";
import {connect} from "react-redux";
import { RouteComponentProps } from 'react-router-dom';
import styles from "./styles";
import {ThunkDispatch} from "redux-thunk";
import SearchBar from "../../components/SearchBar";
import DialogPreview from "../../components/DialogPreview";
import nanoid from 'nanoid';
import {Dialog} from "../../types/dialogs";
import PageLoader from "../../components/PageLoader";
import {setDialogsLoading} from "../../actions/loadings";
import {getDialogsAction} from "../../actions/dialogs";
import {redirectToMessages} from "../../actions/redirects";

interface MatchParams {}

interface MapStateToProps extends WithStyles<typeof styles>, RouteComponentProps<MatchParams> {
    loading: {
        dialogs: boolean
    },
    dialogs: Dialog[],
}

interface MapDispatchToProps {
    setDialogsLoading: (loading: boolean) => void,
    getDialogsAction: (userId: string) => void,
}

type Props = MapStateToProps & MapDispatchToProps;

interface State {}

class DialogsContainer extends React.Component<Props, State> {
    UNSAFE_componentWillMount(): void {
        this.props.setDialogsLoading(true);
        this.props.getDialogsAction(localStorage.getItem('userId') || '');
    }

    private onSearch(value: string) {}

    private dialogRow = (dialog: Dialog) => (
        <TableRow key={nanoid()} className={this.props.classes.dialogRow} onClick={() => redirectToMessages(dialog.id)}>
            <TableCell>
                <DialogPreview userId={localStorage.getItem('userId') || ''} dialog={dialog} />
            </TableCell>
        </TableRow>
    );

    render() {
        console.log(this.props.dialogs);
        if(this.props.loading.dialogs) return <PageLoader />;
        return (
            <Box className={this.props.classes.root}>
                <SearchBar onSearch={this.onSearch} />
                <TableContainer component={Paper} className={this.props.classes.table}>
                    <Table>
                        <TableHead/>
                        {this.props.dialogs.map(this.dialogRow)}
                    </Table>
                </TableContainer>
            </Box>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    loading: {
        dialogs: state.loadingState.dialogs,
    },
    dialogs: state.dialogsState.dialogs,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    setDialogsLoading: (loading: boolean) => dispatch(setDialogsLoading(loading)),
    getDialogsAction: (userId: string) => dispatch(getDialogsAction(userId)),
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(DialogsContainer))
