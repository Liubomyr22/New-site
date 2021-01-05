import React from "react";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <div className="wrapperContent">
          <Route
            path="/profile"
            render={() => (
              <Profile
                posts={props.state.messagesPage.posts}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.state.messagesPage.newPostText}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogs={props.state.profilePage.dialogs}
                messages={props.state.profilePage.messages}
              />
            )}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
