import React, { Component } from 'react';
import Square from './square';
import './board.css';
import calculateWinner from './calculateWinner';


class board extends Component{
    /* 
    game에 있으니까 주석처리
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null), //fill 확인하기 
            xIsNext: true,
        };
    } */

    handleClick(i) {
        const history = this.state.history;
        const current = history[history.length -1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'x' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
        });
    }

    //rendersquare render에 추가를하는게 가능?
    rendersquare(i){
        return (
            <Square 
                value={this.props.squares[i]} 
                onClick={() => this.props.onClick(i)}
        />
        );
    }


    render() {

        return(
            <div>
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