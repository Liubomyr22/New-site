import React from 'react'
import "./App.css";
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import { BrowserRouter, Route} from 'react-router-dom'
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';


function App() {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header />
      <Nav />
      <div className="wrapperContent">
      <Route path='/profile' render={ () => <Profile />} />
      <Route path='/dialogs' render={ () => <Dialogs />} />
      <Route path='/news' render={ () => <News />} />
      <Route path='/music' render={ () => <Music />} />
      <Route path='/settings' render={ () => <Settings />} />
     
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
