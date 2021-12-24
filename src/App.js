import React from "react";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Navigate
} from "react-router-dom";

import { Navbar } from "./app/Navbar";

import { PostsList } from "./features/posts/PostsList";
import { AddPostForm } from "./features/posts/AddPostForm";
// import { EditPostForm } from "./features/posts/EditPostForm";
import { SinglePostPage } from "./features/posts/SinglePostPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes >
          <Route
            exact={true}
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route 
          exact 
          path="/posts/:postId"
           component={SinglePostPage} />
          {/* <Route exact path="/editPost/:postId" component={EditPostForm} /> */}
          {/* <Navigate to="/" /> */}
        </Routes >
      </div>
    </Router>
  );
}

export default App;
