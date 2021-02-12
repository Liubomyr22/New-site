import React from "react";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import { HashRouter, Route } from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";

function App(props) {
  return (
    <HashRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <div className="wrapperContent">
          <Route
            path="/profile"
            render={() => (
              <Profile
                store={props.store}
                
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <DialogsContainer
              store={props.store}
              />
            )}
          />
          <Route path="/users" render={() => <UsersContainer/>}/>
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
