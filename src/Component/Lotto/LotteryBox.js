import React, { Component } from 'react';
import LotteryItem from './LotteryItem';
import './Lottery.css';
import LotteryButton from './LotteryButton';
import { Row } from 'reactstrap';

const numbers = [...Array(45).keys()];

class LotteryBox extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            number: "",
            decryptiongDone: "",
        };
    }
    
    static = { number: [ 0, 0, 0, 0, 0, 0, 0 ]};

    randomize = () => {
        if (!this.state.effect) {
            const numberCopy = numbers.map((e) =>e );
            //map => e ?
            const arr = [];
            for ( let i = 0; i <=7; i++) {
                const random = Math.floor(
                    Math.random() * (numberCopy.length -1)
                );
                arr.push(numberCopy[random] +1);
                numberCopy.splice(random, 1);
            }
            this.setState({ number: arr, effect: true});
            setTimeout(() => {
                this.setState({ effect: false});
            }, 3500);
        }
    };

    render(){
        
        return(
            <React.Fragment>
                <Row style={{justifyContent:'center'}}>
                <h1 id="title">Lotto</h1>
                </Row>
                <Row style={{justifyContent:'center'}}>
                <div id="numbers">
                    <LotteryItem 
                        index="0"
                        color="blue"
                        number={this.state.number[0]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="1"
                        color="blue"
                        number={this.state.number[1]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="2"
                        color="blue"
                        number={this.state.number[2]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="3"
                        color="red"
                        number={this.state.number[3]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="4"
                        color="red"
                        number={this.state.number[4]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="5"
                        color="grey"
                        number={this.state.number[5]}
                        decrypting={this.state.effect}
                    />
                    <div className="plus">+</div>
                    <LotteryItem
                        index="6"
                        color="bonus"
                        number={this.state.number[6]}
                        decrypting={this.state.effect}
                    />
                </div>
                </Row>
                <Row style={{justifyContent:'center'}}>
                <div>
                    <LotteryButton
                        decrypting={this.state.effect}
                        run={this.randomize}
                    />
                </div>
                </Row>
            </React.Fragment>
        );
    }
}
export default LotteryBox;