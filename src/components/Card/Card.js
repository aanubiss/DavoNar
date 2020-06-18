import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ReportIcon from '@material-ui/icons/Report';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        background: "transparent",
        borderRadius: "15px",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        background: "linear-gradient(130deg, rgba(4,0,36,1) 0%, rgba(18,9,121,1) 35%, rgba(85,0,255,1) 100%)"
    },
    head:{
        color: "#05256b",
        background: "linear-gradient(315deg, #5b6467 0%, #8b939a 74%)"
    },
}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="card" src={props.avatarUrl} className={classes.avatar}>
                        {props.avatarSign}
                    </Avatar>
                }
                action={
                    <IconButton className={classes.report} aria-label="report">
                        <ReportIcon />
                    </IconButton>
                }
                title={props.title}
                subheader={props.by}
                className={classes.head}
            />
            <CardMedia
                className={classes.media}
                image={props.img}
                title={props.imgTitle}
            />
        </Card>
    );
}