import React, { useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {currentUser} from './../actions/userActions';
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
  },
  media: {
    height: 140,
  },
});



export default function CardUser(props) {
  const classes = useStyles();
  
  const { id, name, username, email } = props;
  const dispatch = useDispatch();

  const defineCurrentUser = () => {
    debugger
    dispatch(currentUser(props))
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {username}<br></br>
            {email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/posts/${id}`}>Posts</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
