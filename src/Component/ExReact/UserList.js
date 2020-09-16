import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import PhoneForm from './PhoneForm';
import PhoneInfoList from './PhoneInfoList';

class UserList extends Component{

    id = 2
    state = {
        information: [
            {
                id: 0,
                name: '홍길동',
                phone: '010-0000-0000'
            },
            {
                id: 1,
                name: '유관순',
                phone: '010-1234-1234'
            }
        ]
    }

    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
            information: information.concat({ id: this.id++, ...data})
        })
    }

    handleRemove = (id) => {
        const { information } = this.state;
        this.setState({
            information: information.filter(info => info.id !== id )
        })
    } 
    
    handleUpdate = (id, data) => {
        const {information } = this.state;
        this.setState({
            information: information.map(
                info => id === info.id
                 ? { ... info, ...data}
                  : info
                // 새 객체를 만들어서 기존의 값고 전달받은 data를 덮어쓰고 기존값을 그대로 유지한다. 
            )
        })
    }
    render(){
        const { information } = this.state;
        return (
            <div>
                <Row style={{justifyContent:'center'}}>
                    <Col sm="4">
                        <PhoneForm onCreate={this.handleCreate}/>
                    </Col>
                </Row>
                <Row style={{justifyContent:'center'}}>
                    <Col sm="4">
                        <PhoneInfoList 
                            data={this.state.information}
                            onRemove={this.handleRemove}
                            onUpdate={this.handleUpdate}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default UserList;


//배열을 하나 만들어서 쓸수는없을까??
/* function User ({ user, onRemove, onToggle}) {
    const { username, email, id, active } =user;
    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
            }}
            onClick={() => onToggle(id)}
            >
                {username}
            </b>
            &ndsp;
            <spna>({email})</spna>
            <button onClick={() => onRemove(id)}> 삭제 </button>
        </div>
    );
}
function UserList ({ users, onRemove, onToggle }) { 
    return(
        <div>
            {
                users.map(
                    (user, index) => (
                        <user
                            user={user}
                            key={user.id}
                            onRemove={onRemove}
                            onToggle={onToggle}
                            />
                    )
                )
            }
        </div>
    )
} */
