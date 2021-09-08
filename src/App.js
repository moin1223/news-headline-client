import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './components/Pages/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute'
import DetailNews from './components/Home/DetailNews/DetailNews';
import Sports from './components/Category/Sports/Sports';
import AllBusinessNews from './components/Category/AllBusinessNews/AllBusinessNews';
import DhasboadSidebar from './components/Dhasboard/DhasboadSidebar/DhasboadSidebar';
import AddAdmin from './components/Dhasboard/AddAdmin/Addmin';
import AddNews from './components/Dhasboard/AddNews/AddNews';

export const UserContext = createContext();


function App() {
  const [newses,setNewses] = useState([])

  return (
    <>
    
    <UserContext.Provider value={[newses,setNewses]}>
  <Router>
  
    <Switch>
        <Route exact path="/">
          <Home />
       </Route>
       <PrivateRoute path="/newsDetail/:_id">
         <DetailNews/>
       </PrivateRoute >
       <Route path="/login">
         <Login/>

       </Route>
       <Route path="/sportsNews">
         <Sports/>
       </Route>
       <Route path="/businessNews">
         <AllBusinessNews/>
       </Route>
       <PrivateRoute path="/dashboard">
       <DhasboadSidebar/>

       </PrivateRoute>
       <Route path="/addAdmin">
       <AddAdmin/>
       </Route>
       <Route path="/addNews">
       <AddNews/>
       </Route>

    </Switch>
  </Router>
  </UserContext.Provider>

  </>
  
  
  );
}

export default App;