import React, { Component } from 'react';
import Square from './square';
import './board.css'
import calculateWinner from './calculateWinner';

class board extends Component{
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null), //fill 확인하기 
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'x' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    //rendersquare render에 추가를하는게 가능?
    rendersquare(i){
        return (
            <Square 
                value={this.state.squares[i]} 
                onClick={() => this.handleClick(i)}
        />
        );
    }


    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner){
            status = 'Winner:' + winner;
        }else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return(
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.rendersquare(0)}
                    {this.rendersquare(1)}
                    {this.rendersquare(2)}
                </div>
                <div className="board-row">
                    {this.rendersquare(3)}
                    {this.rendersquare(4)}
                    {this.rendersquare(5)}
                </div>
                <div className="board-row">
                    {this.rendersquare(6)}
                    {this.rendersquare(7)}
                    {this.rendersquare(8)}
                </div>

            </div>

        );
    }
}
export default board;