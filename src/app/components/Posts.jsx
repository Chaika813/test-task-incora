import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  useParams
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {fetchPosts, addNewPost} from './../actions/postsActions';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import CardPost from './CardPost';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    paddingTop: '1em'
  }
}));


export default function Posts() {
  const classes = useStyles();

  const {id} = useParams();

  const [newPostValue, setNewPostValue] = useState({})

  const posts = useSelector(state => state.postsReducer.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts({id}))
  }, [])

  const onSubmit = (e) => {
    debugger
      dispatch(addNewPost(newPostValue, {id}))
      setNewPostValue({body: "", title: ""});
      e.preventDefault();
  }

  const handleFormInput = (keyName, e) => {
    setNewPostValue(prevState => {
        return ({...prevState, [keyName]: e.target.value, userId: id})
    })
  }

  return (
    <div className={classes.root}>
      <Grid container direction='column'  >
        <Grid item>
            <h1>Posts</h1>
        </Grid>
        <Grid item container spacing={2} alignItems="center" >
        {posts.map((postData) => {
             return (
            <Grid item xs={3}>
                <CardPost {...postData} />
            </Grid>
             )
        })}
        <Grid item  >
            <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
                <TextField  placeholder="Title" name="title" value={newPostValue.title} onChange={(e) => handleFormInput('title', e)}/><br></br>
                <TextField  placeholder="Body" name="body" value={newPostValue.body} onChange={(e) => handleFormInput('body', e)}/><br></br>
                <Button type="submit">
                <AddIcon style={{ fontSize: 50 }}></AddIcon>
                <Typography gutterBottom variant="body1">New post</Typography>
                </Button>
            </form>
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
