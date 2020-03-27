import React from 'react';
import {withStyles, WithStyles} from "@material-ui/core";
import styles from "./styles";
import Grid from '@material-ui/core/Grid';
import {RootState} from "../../store";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {PortfolioItem} from "../../types/portfolio";
import PortfolioItemComponent from '../../components/PortfolioItemComponent';

interface MapStateToProps extends WithStyles<typeof styles> {}
interface MapDispatchToProps {}

type Props = MapStateToProps & MapDispatchToProps;

interface State {
    items: PortfolioItem[],
}

class PortfolioContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            items: [
                {
                    id: '1',
                    title: 'Item Title 1',
                    description: 'The project is file-based ingestion pipeline into the HDFS. It helps in processing and visualizing large sets of data. Input data is produced by several external providers and put in AWS S3 or HDFS storage working on the cluster with several nodes. During processing steps it should be analyzed (statistical and business metrics), validated, anonymized, deduplicated and normalized. Finalized data gets aggregated, saved at the several storages (HDFS, Hive tables) and visualized through Hue dashboards in user-friendly graphics including filters, timelines, processing results and other statistic information.',
                    portfolioPhotos: [
                        'https://amayei.nyc3.digitaloceanspaces.com/2020/01/1943f78b50faa21ee7ee1f03dd52dd64fed22fd3.jpg',
                        'https://amayei.nyc3.digitaloceanspaces.com/2020/01/1943f78b50faa21ee7ee1f03dd52dd64fed22fd3.jpg',
                        'https://amayei.nyc3.digitaloceanspaces.com/2020/01/1943f78b50faa21ee7ee1f03dd52dd64fed22fd3.jpg',
                        'https://amayei.nyc3.digitaloceanspaces.com/2020/01/1943f78b50faa21ee7ee1f03dd52dd64fed22fd3.jpg',
                        'https://amayei.nyc3.digitaloceanspaces.com/2020/01/1943f78b50faa21ee7ee1f03dd52dd64fed22fd3.jpg',
                        'https://amayei.nyc3.digitaloceanspaces.com/2020/01/1943f78b50faa21ee7ee1f03dd52dd64fed22fd3.jpg',
                        'https://s3-eu-west-1.amazonaws.com/oceanographic/wp-content/uploads/2019/11/26104000/ocean-communities.jpg',
                        'https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2019/6/12/5f77ac61d2ab4d6a86e1aa0b110179c8_18.jpg',
                    ],
                    creator: {
                        id: 'string',
                        firstName: 'Vladimir',
                        lastName: 'Baklan',
                        email: 'string',
                    },
                    created: '08/02/2010 12:22'
                },
                {
                    id: '1',
                    title: 'Item Title 1',
                    description: 'The project is file-based ingestion pipeline into the HDFS. It helps in processing and visualizing large sets of data. Input data is produced by several external providers and put in AWS S3 or HDFS storage working on the cluster with several nodes. During processing steps it should be analyzed (statistical and business metrics), validated, anonymized, deduplicated and normalized. Finalized data gets aggregated, saved at the several storages (HDFS, Hive tables) and visualized through Hue dashboards in user-friendly graphics including filters, timelines, processing results and other statistic information.',
                    portfolioPhotos: [
                        'https://amayei.nyc3.digitaloceanspaces.com/2020/01/1943f78b50faa21ee7ee1f03dd52dd64fed22fd3.jpg',
                        'https://amayei.nyc3.digitaloceanspaces.com/2020/01/1943f78b50faa21ee7ee1f03dd52dd64fed22fd3.jpg',
                        'https://amayei.nyc3.digitaloceanspaces.com/2020/01/1943f78b50faa21ee7ee1f03dd52dd64fed22fd3.jpg',
                        'https://amayei.nyc3.digitaloceanspaces.com/2020/01/1943f78b50faa21ee7ee1f03dd52dd64fed22fd3.jpg',
                        'https://amayei.nyc3.digitaloceanspaces.com/2020/01/1943f78b50faa21ee7ee1f03dd52dd64fed22fd3.jpg',
                        'https://amayei.nyc3.digitaloceanspaces.com/2020/01/1943f78b50faa21ee7ee1f03dd52dd64fed22fd3.jpg',
                        'https://s3-eu-west-1.amazonaws.com/oceanographic/wp-content/uploads/2019/11/26104000/ocean-communities.jpg',
                        'https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2019/6/12/5f77ac61d2ab4d6a86e1aa0b110179c8_18.jpg',
                    ],
                    creator: {
                        id: 'string',
                        firstName: 'Vladimir',
                        lastName: 'Baklan',
                        email: 'string',
                    },
                    created: '08/02/2010 12:22'
                },
                {
                    id: '1',
                    title: 'Item Title 1',
                    description: 'The project is file-based ingestion pipeline into the HDFS. It helps in processing and visualizing large sets of data. Input data is produced by several external providers and put in AWS S3 or HDFS storage working on the cluster with several nodes. During processing steps it should be analyzed (statistical and business metrics), validated, anonymized, deduplicated and normalized. Finalized data gets aggregated, saved at the several storages (HDFS, Hive tables) and visualized through Hue dashboards in user-friendly graphics including filters, timelines, processing results and other statistic information.',
                    portfolioPhotos: [
                        'https://amayei.nyc3.digitaloceanspaces.com/2020/01/1943f78b50faa21ee7ee1f03dd52dd64fed22fd3.jpg',
                        'https://amayei.nyc3.digitaloceanspaces.com/2020/01/1943f78b50faa21ee7ee1f03dd52dd64fed22fd3.jpg',
                        'https://amayei.nyc3.digitaloceanspaces.com/2020/01/1943f78b50faa21ee7ee1f03dd52dd64fed22fd3.jpg',
                        'https://amayei.nyc3.digitaloceanspaces.com/2020/01/1943f78b50faa21ee7ee1f03dd52dd64fed22fd3.jpg',
                        'https://amayei.nyc3.digitaloceanspaces.com/2020/01/1943f78b50faa21ee7ee1f03dd52dd64fed22fd3.jpg',
                        'https://amayei.nyc3.digitaloceanspaces.com/2020/01/1943f78b50faa21ee7ee1f03dd52dd64fed22fd3.jpg',
                        'https://s3-eu-west-1.amazonaws.com/oceanographic/wp-content/uploads/2019/11/26104000/ocean-communities.jpg',
                        'https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2019/6/12/5f77ac61d2ab4d6a86e1aa0b110179c8_18.jpg',
                    ],
                    creator: {
                        id: 'string',
                        firstName: 'Vladimir',
                        lastName: 'Baklan',
                        email: 'string',
                    },
                    created: '08/02/2010 12:22'
                },
            ]
        };
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <Grid container spacing={3}>
                    {this.state.items.map(item => (
                        <Grid item md={12}>
                            <PortfolioItemComponent item={item} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer))
