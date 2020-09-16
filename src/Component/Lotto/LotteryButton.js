import React, { Component } from 'react';

class LotteryButton extends Component{

    render(){
        return(
            <button
                id="btn"
                className={this.props.decrypting && "hide"}
                onClick={this.props.run}
            >
                추첨!
            </button>
        );
    }
}
export default LotteryButton;