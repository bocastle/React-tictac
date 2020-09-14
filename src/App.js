import React, { Component } from 'react';
import ShoppingList from './Component/shoppingList'
import './App.css';
import Game from './Component/game';


class App extends Component{

  render(){

    return(
      <>
      <ShoppingList />
      
      <Game />
     
      </>

    );
  }
}
export default App;
