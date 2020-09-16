import React, { Component } from 'react';
import {InputGroup, InputGroupAddon, Container, Row, Col, InputGroupText, Input} from 'reactstrap';

class Login extends Component{
    
    constructor(props){
        super(props);
        console.log("입력받기");

        this.state ={
            id: "",
            password: "",
        };
    };
    



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
                        <Input placeholder="아이디를 입력하세요" onChange={e => {this.setState({id : e.target.value})}}></Input>
                        ID 값 확인: {this.state.id}
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon>
                            <InputGroupText>비밀번호</InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="비밀번호를 입력하세요" onChange={e => {this.setState({password: e.target.value})}}></Input>
                            pw 값 확인: {this.state.password}
                        </InputGroup>
                    </Col>
                </Row> 
                
            </Container>
        </div>
            
        )
    }
}
export default Login;