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
     <Route path="/posts/post">
        <Post />
     </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
