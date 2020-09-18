import React from 'react';
import axios from 'axios';
import useAsync from './useAsync';

//useAsync 에서는 Promise의 결과를 바로 data에 담기 때문에, 
// 요청을 한 이후 response 에서 data 추출하여 반환하는 함수를 따로 만들었습니다.

async function postItems() {
    const response = await axios.post(
       /*  'https://jsonplaceholder.typicode.com/users' */
        /* 'https://f2d0c0c3-714b-4e6a-86a8-2923d134cc9e.mock.pstmn.io/posttest', */
            'http://localhost:4000/post',
        {
            id: "admin",
            password: "1004"
        })

        /* .then(function (response){
            console.log("1번: ",response)
            console.log("2번: ",response.data)
            console.log("3번: ",response.data.index)
            console.log("4번: ",response.data.name)
        }) */
        console.log("response 값:" ,response)
          /*   response.data.map(item => (
                console.log(item.name)
            )) */
          
    return response.data; //타입이 에러가 나옴
   /*  return response; */
}

function Items() {
    const [state, refetch] = useAsync(postItems, [] );
    const {loading, data: items, error } = state; // state.data를 users 키워드로 조회한다. 
    /* console.log("Items state 값 확인: ",state) */ //확인완료
    /* console.log("Items state 값 확인: ", state.data) */  //확인완료
    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러가 발생 했습니다.</div>
    if(!items) return null;
    
  
    return(
        <>
           <ul>
               {console.log("item값확인: ", items)}
               {items}
           {/*     {items.map((item, index) => (
                   <li key={index}>
                       {item.id} ({item.password})
                   </li>
               ))} */}
               
            </ul> 
            <button onClick={refetch}>다시 불러오기</button>
        </>
    )
}
export default Items;