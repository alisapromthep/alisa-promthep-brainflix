
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import Header from './components/Header/Header';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {


  render() {

    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage}/> 
            <Route path="/upload" component={UploadPage} />
            <Route path="/video/:videoId"/>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
