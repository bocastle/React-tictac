import React, { Component } from 'react';

class LotteryItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            number: "?",
            decryptiongDone: "",
        };
    }

    decryptEffect(){
        this.setState ({ decryptiongDone:""});
        this.timer = setInterval(() => {
            this.randomNumber();
        }, 10);
        setTimeout(() =>{
            this.setState({
                decryptiongDone: "done",
                number: this.props.number,
            });
            clearTimeout(this.timer);
        }, 500 * + this.props.index + 500);
    }

    randomNumber(){
        this.setState({ number: Math.round(Math.random() * 44) +1 });
        
    }
    
    componentDidUpdate(nextProps) {
        const {decrypting } = this.props;
        if (nextProps.decrypting !== decrypting) {
            if(decrypting) {
                this.decryptEffect();
            }
        }
    }

    render(){

        return(
            <div
                className={`ball ${this.props.color} ${this.state.decryptiongDone}`}
            >
                {this.state.number}
            </div>
        );
    }
}
export default LotteryItem;