import React, { Component } from 'react';
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
    
    render(){
        return (
            <div>
                <PhoneForm onCreate={this.handleCreate}/>
                <PhoneInfoList data={this.state.information}/>
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
