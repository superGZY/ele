import React from 'react';
import 'assets/styles/reset.css'
import Layout from './pages/home/layout.jsx'
import Detailmain from 'pages/detail/pagedetail/detailmain'
import Findmore from 'pages/findmore/findmore'
import { Provider } from 'react-redux'
import store from './store/index'
import {  BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom'

function App() {
  return (
    <Router>
    <Provider store={store}>
        <Switch>
          <Route path='/' exact render={()=>(
            <Redirect to='/index'/>
          )}/>
          <Route
            path='/index' 
            component={Layout}
          />
          <Route
            path='/detail' 
            component={Detailmain}
          />
          <Route
            path='/findmore' 
            component={Findmore}
          />
        </Switch>
    </Provider>
    </Router>
  );
}

export default App;
