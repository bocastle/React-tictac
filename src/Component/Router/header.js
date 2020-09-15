import React, { Component } from 'react';

const Header = ({history}) => {
    return(
        <div>
            홈 컴포넌트
            <button onClick={() => {history.push('/')}}>게임</button>
            <button onClick={() => {history.push('/lifecycle')}}>라이프사이클</button>
        </div>
    )
}

export default Header;