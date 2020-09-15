import React, { Component } from 'react';
import ShoppingList from './Component/ShoppingList/shoppingList';
import './App.css';
import Game from './Component/Tictac/game';
import LifeCycle from './Component/LifeCycle/LifeCycle';
import Header from './Component/Router/header';
import { Router, Route, Switch } from "react-router-dom";
import history from "./Component/Router/history";

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
              <Route exact path="/" component={Game}></Route>
              <Route exact path="/lifecycle" component={LifeCycle}></Route>
              <Route exact path="/shoppingList" component={ShoppingList}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
