import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from "./styles";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    WithStyles
} from "@material-ui/core";
import {PortfolioCard} from "../../types/portfolio";
import TextTruncate from "react-text-truncate";

interface Props extends WithStyles<typeof styles> {
    item: PortfolioCard,
    showEdit: boolean,

    onEdit: (id: string) => void,
    onShow: (id: string) => void,
}

function PortfolioCardComponent(props: Props) {
    return (
        <Card className={props.classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={props.item.title}
                    height="140"
                    image="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/fa/e15e80504811e6bcaf7158d37ab7ca/LightBulb.jpg?auto=format%2Ccompress&dpr=1"
                    title={props.item.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <TextTruncate
                            line={1}
                            element="span"
                            truncateText="…"
                            text={props.item.description}
                        />
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => props.onShow(props.item.id!)}>
                    Открыть
                </Button>
                {props.showEdit &&
                    <Button size="small" color="primary" onClick={() => props.onEdit(props.item.id!)}>
                        Редактировать
                    </Button>
                }
            </CardActions>
        </Card>
    );
}

export default withStyles(styles)(PortfolioCardComponent);