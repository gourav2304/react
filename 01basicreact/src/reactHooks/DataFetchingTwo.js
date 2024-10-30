import React, {useEffect,useReducer} from 'react';
import axios from 'axios'
//group related state variable overhere
const initialState ={
    loading: true,
    post:({}),
    error: ('')
}
// and the same time state trnsition also grouped together
const reducer = (state,action)=>{
    switch(action.type){
    case 'Fetch_sucessful': 
    return{
     loading: false,
     post:action.payload,
     error:('')   
    }
    case 'Fetch_error' :
    return{
     loading: false,
     post:({}),
     error:('Something went wrong')   
    }
    default:
        return{
            state
        }
}
}

function DataFetchingTwo() {
    const [state, dispatch]= useReducer(reducer,initialState)
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            dispatch({type:'Fetch_sucessful', payload:response.data})
        })
        .catch(error=> {
            dispatch({type:'Fetch_error'})
        })
    },[])

  return (
    <div>
        {state.loading ? "loading" : state.post.title}
        {state.error ? "error": null}
    </div>
  )
}

export default DataFetchingTwo