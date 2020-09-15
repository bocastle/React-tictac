import React, { Component } from 'react';
import {Button} from 'reactstrap';

function getRandomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

class LifeCycle extends Component{
    
    state ={
        number : 0,
        color : null,
        randomColor : '#000000',
    }
    myRef = null; 
    
    constructor(props){
        super(props);
        console.log('constuctor()' , 'constuctor실행');
        
    }

static getDerivedStateFromProps(nextProps, prevState){
    console.log('nextProps: ',nextProps);
    console.log('prevState: ',prevState);
    if(nextProps.color !== prevState.randomColor){
        return{
            color: nextProps.color
        };
        
    }
    return null;
}

componentDidMount(){
    console.log('componentDidMount()', 'componentDidMount실행');
}
shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate: ", nextProps);
    console.log("shouldComponentUpdate: ", nextState);
    return nextState.number %10 !==4; 
}

componentWillUnmount(){
    console.log('componentWillUnmount: ');
    console.log('componentWillUnmount: ');

}

handleClick = () => {
    this.setState({
        number : this.state.number +1
    });
}
handleColorClick = () => {
    this.setState({
        randomColor : getRandomColor()
    });
}
getSnapshotBeforeUpdate(prevProps, prevState){ 
    console.log('getDerivedStateFromProps :',prevState)
    console.log('getDerivedStateFromProps :',prevProps)
    if(prevProps.color !== this.props.color){
        return this.myRef.style.color;
    }
    return null;
}

componentDidUpdate(prevProps, prevState, snapshot){
    console.log('componentDidUpdate :' ,prevProps);
    console.log('componentDidUpdate :' ,prevState);
    if(snapshot){
        console.log('업데이트 되기 직전 색상 :' ,snapshot, 'componentDidUpdate실행');
    
    }
}
    render(){
        console.log('render실행');
        const colorStyle={
            color: this.state.randomColor
        }

        return(
            <div style={{textAlign: 'center'}}>
                <h1 style = {colorStyle} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color : {this.state.randomColor}</p>
                <Button outline color="primary" onClick={this.handleColorClick}>Random Color</Button>
                <br></br>
                <Button outline color="primary" onClick={this.handleClick}>plus</Button>
            </div>
        );
    }
}
export default LifeCycle;