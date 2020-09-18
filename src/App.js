import React, { Component } from 'react';
import ShoppingList from './Component/ShoppingList/shoppingList';
import './App.css';
import Game from './Component/Tictac/game';
import LifeCycle from './Component/LifeCycle/LifeCycle';
import Header from './Component/Router/header';
import { Router, Route, Switch } from "react-router-dom";
import history from "./Component/Router/history";
import Login from './Component/Login/Login';
import UserList from './Component/ExReact/UserList'
import LotteryBox from './Component/Lotto/LotteryBox';
import AxiosUser from './Component/axios/AxiosUser';
import AxiosUsers01 from './Component/axios/AxiosUsers01';


/* function getRandomColor(){
  return '#' + Math.floor(Math.random()*16777215).toString(16);
} */
class App extends Component{
 /* 
   state = {
    color : '#000000'
  } 
  */

/* handleClick = () => {
  this.setState({
    color : getRandomColor()
  });
} */

  render(){

    return(
      // <>
      //   <div>
      //   {/* 
      //   <ShoppingList />
      //   <Game /> 
      //   */}
      //   </div>
      //   <div>
      //   <button onClick={this.handleClick}>Random Color</button>
      //   <LifeCycle color={this.state.color} />
      //   </div>
      // </>
      <Router history={history}>
        <div>
          <Header history={history}></Header>
          <div>
            <Switch>
              <Route exact path="/" component={Login}></Route>
              <Route exact path="/game" component={Game}></Route>
              <Route exact path="/lifecycle" component={LifeCycle}></Route>
              <Route exact path="/shoppingList" component={ShoppingList}></Route>
              <Route exact path="/UserList" component={UserList}></Route>
              <Route exact path="/LotteryBox" component={LotteryBox}></Route>
              <Route exact path="/AxiosUser" component={AxiosUser}></Route>
              <Route exact path="/AxiosUsers01" component={AxiosUsers01}></Route>
           
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
