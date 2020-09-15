import React, { Component } from 'react';
import Board from './board';
import calculateWinner from './calculateWinner';
import './game.css'
import {Button} from 'reactstrap';

class game extends Component{
    constructor(props) {
        super(props);
        this.state ={
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }
    
    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length -1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? 'X': "O"; 
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step, 
            xIsNext: (step % 2) === 0,
        });
    }

    render(){
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ? 'Go To move #' + move : 
                                'Go To game start';
            console.log('move :' + move)
            return(
                <li key={move}>
                    <Button outline color="primary" onClick={() => this.jumpTo(move)}>{desc}</Button>
                    
                </li>
            );
        });


        let status;
        if (winner) {
            status = 'Winner:' + winner;
        }else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return(
        <div>    
            <div className="game">
                <div className="game-info">
                    <div>{status}</div>
                </div>
            </div>
            <div className="game-info">    
                <div >
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                     />
                </div>
            </div>
            <div>    
                <div className="game-info">
                    <ol>{moves}</ol>
                </div>
            </div>
        </div>
        );
    }
}
export default game;