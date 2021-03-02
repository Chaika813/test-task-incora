import React from 'react';
import {
  Link
} from "react-router-dom";
import { useDispatch} from 'react-redux';
import {currentPost} from './../actions/postsActions';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: '35vh'
  },
});

export default function CardPost(props) {
  const classes = useStyles();

  const { id, title, body, userId } = props;

  const dispatch = useDispatch();

  const defineCurrentPost = (e) => {
    dispatch(currentPost(props));
    e.preventDefault()
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={defineCurrentPost}>
         <Link to={`/posts/${userId}/post/${id}`}>Details</Link> 
        </Button>
      </CardActions>
    </Card>
  );
}
