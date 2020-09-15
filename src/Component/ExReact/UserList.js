import React from 'react';
//배열을 하나 만들어서 쓸수는없을까??
function User ({ user, onRemove, onToggle}) {
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
}
export default UserList;