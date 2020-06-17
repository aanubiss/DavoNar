import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ReportIcon from '@material-ui/icons/Report';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="card" className={classes.avatar}>
                        {props.avatar}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="report">
                        <ReportIcon />
                    </IconButton>
                }
                title={props.title}
                subheader={`by AnubisS`}
            />
            <CardMedia
                className={classes.media}
                image="https://avatars.mds.yandex.net/get-pdb/1356247/63ee5ae6-2520-4006-9f10-cacb5f702ea8/s1200?webp=false"
                title="Paella dish"
            />
        </Card>
    );
}