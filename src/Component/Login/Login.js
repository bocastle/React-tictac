import React, { Component } from 'react';
import {InputGroup, InputGroupAddon, Container, Row, Col, InputGroupText, Input} from 'reactstrap';

class Login extends Component{
    state = {
        id: '',
        password: '',
    }
    
    handleChange = (e) => {
        this.setState({
            id: e.target.value,
            password: e.target.value
        })
    }
  


    render() {
        return (
            
        <div>
            <Container>
                <Row>
                    <Col sm="4">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>아이디</InputGroupText>
                            </InputGroupAddon>
                        <Input placeholder="아이디를 입력하세요" value={this.state.id}/>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon>
                            <InputGroupText>비밀번호</InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="비밀번호를 입력하세요" value={this.state.password}/>
                        </InputGroup>
                    </Col>
                </Row> 
                
            </Container>
        </div>
            
        )
    }
}
export default Login;