import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { fetchComments } from './../actions/commentActions';
import PostEdit from './PostEdit';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Comment from './Comment';
import { Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    marginTop: '4em'
  },
  media: {
    height: 0,
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
    width: '100%'
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { postId } = useParams();
  const comments = useSelector(state => state.commentsReducer.comments);
  const currentUser = useSelector(state => state.usersReducer.user);
  const currentPost = useSelector(state => state.postsReducer.currentPost);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments({ postId }))
  }, [])


  return (
    <Container>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Typography aria-label="recipe" className={classes.avatar}>
              {currentUser.email}
          </Typography>
          }
          title={currentPost.title}
          subheader={currentUser.username}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {currentPost.body}
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="edit">
            <Link to={`/posts/${currentUser.id}/post/${currentPost.id}/edit`}> <EditIcon /></Link>
          </Button>
          <IconButton aria-label="share">
            <DeleteIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show comments"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Grid container justify="space-between" className={classes.spacing}>
              <Typography className={classes.header} variant="h6" gutterBottom>
              {comments.map((comment) => {
                return (
                    <Comment {...comment} />
                  )
              })}
              </Typography>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
    </Container>
  );
}
