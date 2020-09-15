import React, { Component } from 'react';
import './shoppingList.css';

class shopping extends Component {
// class에서 function으로 변경해보기 
    render () {

        return(
            <>
                <div className="shopping-list">
                    <h1>shopping List for {this.props.name}</h1>
                    
                    <ul>
                        <li>Instagram</li>
                        <li>WhatsApp</li>
                        <li>Oculus</li>
                    </ul>

                </div>

            </>

        );
    }
}

export default shopping;