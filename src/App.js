import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Users from './app/components/Users';
import Posts from './app/components/Posts';
import Post from './app/components/Post';
import PostEdit from './app/components/PostEdit';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/(/|users|)/">
            <Users />
          </Route>
          <Route exact path="/posts/:id">
            <Posts />
          </Route>
          <Route path="/posts/:id/post/:postId">
            <Post />
          </Route>
          <Route path="/posts/:id/post/:postId/edit">
            <PostEdit />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
