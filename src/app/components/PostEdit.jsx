import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { editPost } from '../actions/postsActions';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '80ch',
        },
    },
    box: {
        margin: '2em',
    }
}));



export default function FormPropsTextFields() {
    const classes = useStyles();
    const currentUser = useSelector(state => state.usersReducer.user);
    const currentPost = useSelector(state => state.postsReducer.currentPost);

    const history = useHistory();
    const [updatedPostValue, setUpdatedPostValue] = useState({title: currentPost.title,  body: currentPost.body})

    const dispatch = useDispatch();
    const updatePost = () => {
        dispatch(editPost(updatedPostValue));
        history.push(`/posts/${currentUser.id}/post/${currentPost.id}`)
    }

    const handleFormInput = (keyName, e) => {
        debugger
        setUpdatedPostValue(prevState => {
            return ({...prevState, [keyName]: e.target.value, id: currentPost.id})
        })
    }

    return (
        <Box className={classes.box} border={1} borderColor="primary.main">
            <form className={classes.root} noValidate autoComplete="off" onSubmit={updatePost}>
    
                    <TextField required multiline rowsMax={3} label="Required" 
                    value={updatedPostValue.title} defaultValue={currentPost.title} onChange={(e) => handleFormInput('title', e)}/><br></br>
                    <TextField required multiline rowsMax={6} label="Required" 
                    value={updatedPostValue.body} defaultValue={currentPost.body} onChange={(e) => handleFormInput('body', e)}/><br></br>
                    <Button type="submit" size="medium" color="primary">Save
                    </Button>
                
            </form>
        </Box>
    );
}
