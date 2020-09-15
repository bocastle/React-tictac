import React, { Component } from 'react';

class LifeCycle extends Component{

    state ={
        number : 0,
        color : null,
    }
    myRef = null; 

constructor(props){
    super(props);
    console.log('constuctor()' , 'constuctor실행');
}

static getDerivedStateFromProps(nextProps, prevState){
    console.log('nextProps: ',nextProps);
    console.log('prevState: ',prevState);
    if(nextProps.color !== prevState.color){
        return{
            color:nextProps.color
        };
    }
    return null;
}

componentDidMount(){
    console.log('componentDidMount()', 'componentDidMount실행');
}
shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate(),", nextProps,",",nextState, 'shouldComponentUpdate실행' );
    return nextState.number %10 !==4; 
}

componentWillUnmount(){
    console.log("componentWillUnmount()", 'componentWillUnmount실행');

}

handleClick = () => {
    this.setState({
        number : this.state.number +1
    });
}

getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getDerivedStateFromProps()','getDerivedStateFromProps 실행');
    if(prevProps.color !== this.props.color){
        return this.myRef.style.color;
    }
    return null;
}

componentDidUpdate(prevProps, prevState, snapshot){
    console.log('componentDidUpdate()');
    if(snapshot){
        console.log('업데이트 되기 직전 색상 :' ,snapshot, 'componentDidUpdate실행');
    }
}
    render(){
        console.log('render()','render실행');
        const style={
            color: this.props.color
        }

        return(
            <div>
                <h1 style = {style} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color : {this.state.color}</p>
                <button onClick={this.handleClick}>plus</button>
            </div>
        );
    }
}
export default LifeCycle;