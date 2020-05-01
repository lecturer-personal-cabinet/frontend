import React from 'react';
import {Dialog, Grid, withStyles, WithStyles} from "@material-ui/core";
import styles from "./styles";
import {RootState} from "../../store";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import PortfolioCardForm from "../../components/forms/ProfileCardForm";
import PortfolioControlPanel from "../../components/PortfolioControlPanel";
import {PortfolioCard} from "../../types/portfolio";
import {getPortfolioCardsAction, savePortfolioCardAction} from "../../actions/portfolio";
import {setPortfolioCardsLoading} from "../../actions/loadings";
import PageLoader from "../../components/PageLoader";
import PortfolioCardComponent from "../../components/PortfolioCardComponent";

interface MapStateToProps extends WithStyles<typeof styles> {
    portfolioCards: PortfolioCard[],
    loading: {
        portfolioCards: boolean,
    },
}

interface MapDispatchToProps {
    savePortfolioCardAction: (card: PortfolioCard) => void,
    setPortfolioCardsLoading: (loading: boolean) => void,
    getPortfolioCardsAction: (userId: string) => void,
}

type Props = MapStateToProps & MapDispatchToProps;

interface State {
    dialog: {
        addPortfolioCard: boolean,
    }
}

class PortfolioContainer extends React.Component<Props, State> {
    UNSAFE_componentWillMount(): void {
        this.props.setPortfolioCardsLoading(true);
        this.props.getPortfolioCardsAction(localStorage.getItem('userId') || '');
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            dialog: {
                addPortfolioCard: false,
            },
        };

        this.switchDialogPortfolioCardState = this.switchDialogPortfolioCardState.bind(this);
        this.onAddPortfolioCard = this.onAddPortfolioCard.bind(this);
    }

    private onAddPortfolioCard (title: string, description: string): void {
        const card = {
            title,
            description,
            previewImageLink: '[TEST LINK]',
            tags: [],
            userId: localStorage.getItem('userId') || '',
        };
        this.props.savePortfolioCardAction(card);
        this.switchDialogPortfolioCardState();
    }

    private dialogPortfolioCardForm () {
        return (
            <Dialog
                open={this.state.dialog.addPortfolioCard}
                onClose={() => this.switchDialogPortfolioCardState()}
                fullWidth={true}
                maxWidth={"md"}
            >
                <PortfolioCardForm
                    onSavePortfolioCard={this.onAddPortfolioCard}
                />
            </Dialog>
        );
    }

    private switchDialogPortfolioCardState () {
        this.setState({
            ...this.state,
            dialog: {
                ...this.state.dialog,
                addPortfolioCard: !this.state.dialog.addPortfolioCard,
            }
        });
    }

    render() {
        if(this.props.loading.portfolioCards) return <PageLoader />;
        return (
            <div className={this.props.classes.root}>
                {this.dialogPortfolioCardForm()}
                <PortfolioControlPanel onAddPortfolioCardClick={() => this.switchDialogPortfolioCardState()} />
                <Grid container spacing={3} className={this.props.classes.cardsContainer}>
                    {this.props.portfolioCards.map(card => (
                        <Grid item md={3}><PortfolioCardComponent item={card}/></Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = (state: RootState) => ({
    portfolioCards: state.portfolioState.cards,
    loading: {
        portfolioCards: state.loadingState.portfolioCards,
    },
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    savePortfolioCardAction: (card: PortfolioCard) => dispatch(savePortfolioCardAction(card)),
    setPortfolioCardsLoading: (loading: boolean) => dispatch(setPortfolioCardsLoading(loading)),
    getPortfolioCardsAction: (userId: string) => dispatch(getPortfolioCardsAction(userId)),
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer))
