import React, { Component } from 'react';
import ShoppingList from './Component/shoppingList'
import './App.css';
import Board from './Component/board';
import Game from './Component/game';
import CalculateWinner from './Component/calculateWinner';

class App extends Component{

  render(){

    return(
      <>
      <ShoppingList />
      <Board />
      <Game />
      <CalculateWinner />
      </>

    );
  }
}
export default App;
