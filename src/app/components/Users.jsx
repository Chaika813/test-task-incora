import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers} from './../actions/userActions';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardUser from './CardUser';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    paddingTop: '1em'
  }
}));


export default function Users() {
  const classes = useStyles();

  const users = useSelector(state => state.usersReducer.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className={classes.root}>
      <Grid container direction='column'  >
        <Grid item>
            <h1>Users</h1>
        </Grid>
        <Grid item container justify="center" alignItems="center" spacing={2} >
        {users.map((user) => {
             return (
            <Grid item xs={3}>
                <CardUser {...user}/>
            </Grid>
             )
        })}

        </Grid>
      </Grid>
    </div>
  );
}

