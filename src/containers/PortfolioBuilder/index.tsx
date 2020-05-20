import React from 'react';
import {
    Grid,
    withStyles,
    WithStyles
} from "@material-ui/core";
import {RootState} from "../../store";
import {connect} from "react-redux";
import {RouteComponentProps} from 'react-router-dom';
import styles from "./styles";
import {ThunkDispatch} from "redux-thunk";
import Picker from "../../components/PortfolioBuilder/Picker";
import Button from "@material-ui/core/Button";
import {BuilderItem} from "../../types/builder";
import {addBuilderItem, getAllBuilderItems, saveAllBuilderItems} from "../../actions/builder";
import {setBuilderItems} from "../../actions/loadings";
import PageLoader from "../../components/PageLoader";
import {getBuilderComponent} from "../../components/PortfolioBuilder/utils/builderFactory";

interface MatchParams {
    cardId: string,
}

interface MapStateToProps extends WithStyles<typeof styles>, RouteComponentProps<MatchParams> {
    elementsToSave: BuilderItem[],
    loading: {
        builderItems: boolean,
    }
}

interface MapDispatchToProps {
    addBuilderItem: (item: BuilderItem) => void,
    setBuilderItemsLoading: (loading: boolean) => void,
    getAllBuilderItems: (portfolioId: string) => void,
    saveAllBuilderItems: (portfolioId: string, items: BuilderItem[]) => void,
}

type Props = MapStateToProps & MapDispatchToProps;

interface State {
    builderStatus: boolean,
}

class PortfolioBuilder extends React.Component<Props, State> {
    UNSAFE_componentWillMount(): void {
        this.props.setBuilderItemsLoading(true);
        this.props.getAllBuilderItems(this.props.match.params.cardId);
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            builderStatus: false,
        };

        this.toggleBuilder = this.toggleBuilder.bind(this);
        this.saveBuilderItems = this.saveBuilderItems.bind(this);
    }

    private readonly toggleBuilder = (state: boolean) => this.setState({...this.state, builderStatus: state});

    private readonly saveBuilderItems = () => {
      this.props.saveAllBuilderItems(this.props.match.params.cardId, this.props.elementsToSave);
    };

    private onElementSave = (item: BuilderItem) => {
        item.order = this.props.elementsToSave.length + 1;
        this.props.addBuilderItem(item);
    };

    render() {
        if(this.props.loading.builderItems) return <PageLoader />;
        return (
            <div className={this.props.classes.root}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => this.toggleBuilder(true)}>
                    Добавить
                </Button>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => this.saveBuilderItems()}>
                    Сохранить
                </Button>
                <Picker
                    open={this.state.builderStatus}
                    toggleDrawer={this.toggleBuilder}
                    onElementSave={this.onElementSave}
                />
                <Grid
                    direction='column'
                    spacing={3}
                    container
                    className={this.props.classes.items}
                >
                    {this.props.elementsToSave.map(item => (
                        <Grid item>{getBuilderComponent(item)}</Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    elementsToSave: state.builderState.elementsToSave,
    loading: {
        builderItems: state.loadingState.builderItems,
    }
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    addBuilderItem: (item: BuilderItem) => dispatch(addBuilderItem(item)),
    setBuilderItemsLoading: (loading: boolean) => dispatch(setBuilderItems(loading)),
    getAllBuilderItems: (portfolioId: string) => dispatch(getAllBuilderItems(portfolioId)),
    saveAllBuilderItems: (portfolioId: string, items: BuilderItem[]) => dispatch(saveAllBuilderItems(portfolioId, items))
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PortfolioBuilder))
