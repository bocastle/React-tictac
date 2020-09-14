import React, { Component } from 'react';
import ShoppingList from './Component/shoppingList'
import './App.css';
import Game from './Component/game';
import LifeCycle from './Component/LifeCycle';

function getRandomColor(){
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}
class App extends Component{
  state = {
    color : '#000000'
  }
handleClick = () => {
  this.setState({
    color : getRandomColor()
  });
}

  render(){

    return(
      <>
        <div>
        <ShoppingList />
        <Game />
        </div>
        <div>
        <button onClick={this.handleClick}>Random Color</button>
        <LifeCycle color={this.state.color} />
        </div>
      </>
    );
  }
}
export default App;
