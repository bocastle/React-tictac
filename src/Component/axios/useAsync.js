import { useEffect, useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return{
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return{
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
        return{
            loading: false,
            data: null,
            error: action.error
        };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function useAsync(callback, deps = [] ) {
    const [ state, dispatch ] = useReducer(reducer, {
        loading: false,
        data: null,
        error: false
    });
    /* console.log(callback) */ //postItems로 들어옴 값 확인
    const fetchData = async () => {
        dispatch ({type: 'LOADING'});
      
        try {
            const data = await callback();
            dispatch({type: 'SUCCESS',data });
           /*  console.log("SUCCESS값확인:" , data)  *///확인완료
        } catch (e) {
            dispatch ({ type: 'ERROR', error: e});
          /*   console.log("data확인:", e) */ //에러는 값이 찍힌다. 타입에러
        }
    };

    useEffect (() => {
        fetchData();
        //eslint 설정을 다음줄에섬 비활성화 
        //eslint-disable-next-line
    }, deps);
    return [state, fetchData];
}

export default useAsync;