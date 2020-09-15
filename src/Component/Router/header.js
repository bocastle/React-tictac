import React, { Component } from 'react';
import { Button} from 'reactstrap';

const Header = ({history}) => {
    return(
        
        <div>
            <row>
                <div style={{textAlign:'center'}}>
                    홈 컴포넌트
                </div>
            </row>  
            <row>
                <div style={{textAlign:'center'}}>
                    <Button color="primary" size="sm" onClick={() => {history.push('/')}}>로그인</Button>
                    <Button color="primary" size="sm" onClick={() => {history.push('/game')}}>게임</Button>
                    <Button color="primary" size="sm" onClick={() => {history.push('/lifecycle')}}>라이프사이클</Button>
                    <Button color="primary" size="sm" onClick={() => {history.push('/shoppingList')}}>쇼핑 리스트</Button>
                    <Button color="primary" size="sm" onClick={() => {history.push('/UserList')}}>UserList</Button>
                </div>
            </row>
            
        </div>
        
    )
}

export default Header;