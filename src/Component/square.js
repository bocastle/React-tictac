import React from 'react';
import './square.css';

/*  class사용
    class square extends Component{
    constructor(props){
        super(props);
        this.state ={
            value: null,
        };
    } 

    render(){

        return(
            <>
              <button className="square"onClick={function() {alert('click을 했습니다');}}> 
                화살표 함수 방식: 
             
             <button 
                className="square" 
                onClick={() => this.props.onClick()}> 
                 {this.props.value}
             </button>
            </>

        );
    }
}
*/

function square(props){
    return(
    <button className="square" onClick={props.onClick}> 
        {props.value}
    </button>
    );
}
export default square;