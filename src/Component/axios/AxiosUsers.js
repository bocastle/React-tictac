import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

function Users() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try { 
            // 요청이 시작 할때에는 error 와 users 를 초기화 하고 
            setError(null);
            setUsers(null);
            // loading 상태를 true로 바꿉니다.
            setLoading(true);
            const response = await axios.get (
                'https://jsonplaceholder.typicode.com/users'
                );
                response.data.map(item => (
                    console.log(item.name)
                    ))
                    setUsers(response.data); //데이터는 response.data 안에 들어있습니다. 
                } catch (e) {
                    setError(e);
                }
                setLoading(false);
            };
    useEffect(() => {

        fetchUsers();

    }, []);

    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러가 발생 했습니다 </div>
    if(!users) return null

    return (
        <ul>
            {users.map(item => (
                <li key={item.id}>
                    {users.username} ({item.name})
                </li>
            ))}
            <Button onClick={fetchUsers}>다시 실행하기</Button>
        </ul>
    );
}
export default Users;