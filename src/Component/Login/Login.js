import Axios from 'axios';
import React, { Component } from 'react';
import {InputGroup, InputGroupAddon, Container, Row, Col, InputGroupText, Input, Button} from 'reactstrap';



class Login extends Component{
    
    constructor(props){
        super(props);
        console.log("입력받기");

        this.state ={
            id: '',
            password: '',
        };

        /* this.handleSubmit = this.handleSubmit.bind(this);
        console.log("state값받기",this.state) */
    };

 
    handleSubmit = (e) => {
        e.preventDefault();
        alert("ID: " + this.state.id + "Pwd: " + (this.state.password));
        console.log(this.state);
        this.handleAccount(this.state);
        console.log("무엇을 넘길것인가:",this.state)
    }
    
    handleAccount = (Items) => {
        console.log("Items 확인: ",Items)
        //추가 부분
        /* let form = new FormData()
        form.append('id', this.state.id)
        form.append('password', this.state.password)
        console.log("form:", form)
        Axios.post(`http://localhost:4000/post`, form) 
    } */
        
       /*  console.log(Items);
        const a = JSON.stringify(Items);
        console.log(a); */
        //추가 부분
        Axios.post(`http://localhost:4000/post`, 
           Items
          /* data: JSON.stringify(Items) */
        )
        /* .then( res => res.json()) */
        .then( obj => {
            if(obj.result === 'succ') {
                alert("성공했다!!");
            }
        })
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        /* console.log(e.target); */ //타겟이 나온다.
    }

    render() {
        return (
            
        <div>
            <Container>
                <Row style={{justifyContent:'center'}}>
                    <Col>
                        <form onSubmit={this.handleSubmit}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>아이디</InputGroupText>
                            </InputGroupAddon>
                        <Input
                            type="text"
                            placeholder="아이디를 입력하세요" 
                            onChange={this.handleChange}
                            name="id">
                            {/* onChange={e => {this.setState({id : e.target.value})}}> */}
                            {/* {console.log(this.handleChange)} */}
                        </Input>
                        ID 값 확인: {this.state.id}
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText>비밀번호</InputGroupText>
                            </InputGroupAddon>
                        <Input
                            type="password"
                            placeholder="비밀번호를 입력하세요" 
                            onChange={this.handleChange}
                            name="password">                           
                            {/* onChange={e => {this.setState({password: e.target.value})}}> */}
                        </Input>
                            pw 값 확인: {this.state.password}
                        </InputGroup>
                        <Button type="submit">로그인</Button>
                        </form>
                    </Col>
                </Row> 
                
            </Container>
        </div>
            
        )
    }
}
export default Login;