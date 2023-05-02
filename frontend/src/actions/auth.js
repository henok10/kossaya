import axios from "axios";
import {
    COSTUMER_USER_LOADED,
    COSTUMER_USER_FAILED,  
    PEMILIKKOS_USER_LOADED,
    PEMILIKKOS_USER_FAILED,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_CUSER_SUCCESS,
    REGISTER_FUSER_FAILED,
    REGISTER_FUSER_SUCCESS,
    REGISTER_CUSER_FAILED,
} from "../actions/types"



export const getCostumerUser=()=>(dispatch, getState)=>{
    const token=getState().auth.token
    const is_costumer=getState().auth.isCostumer
    const config={
        headers:{
            'Content-type':'application/json'
        }
    }

    if(token && is_costumer){
        config.headers['Authorization']=`Token ${token}`  
    }
    axios.get('http://127.0.0.1:8000/api/costumer/dashboard', config)
    .then(res =>{
        dispatch({
            type:COSTUMER_USER_LOADED,
            payload:res.data
        })
    }).catch(err =>{
        dispatch({
            type:COSTUMER_USER_FAILED
        })
    })
}



      // check token and load freelance user
      export const getPemilikKosUser = ()=>(dispatch, getState)=>{
        const token=getState().auth.token;
        const is_costumer=getState().auth.isCostumer
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }

        if(token && !is_costumer){
            config.headers['Authorization']=`Token ${token}`
        }

        axios.get('http://127.0.0.1:8000/api/pemilikKos/dashboard', config)
          .then(res =>{
              dispatch({
                  type:PEMILIKKOS_USER_LOADED,
                  payload:res.data
              })
          }).catch(err => {
              dispatch({
                  type:PEMILIKKOS_USER_FAILED
              })
          })
    }
        

export const create_costumeruser=({username, email,password, password2})=>(dispatch)=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body=JSON.stringify({username, email, password, password2})

    axios.post('http://127.0.0.1:8000/api/signup/costumer/', body, config)
    .then(res =>{
        dispatch({
            type:REGISTER_CUSER_SUCCESS,
            payload:res.data
        })
        console.log(res.data)
    }).catch(err =>{
        dispatch({
            type:REGISTER_CUSER_FAILED
        })
        console.log(err.response.data)
    })

    
}


export const create_pemilikKosuser=({username, email,password, password2})=>(dispatch)=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body=JSON.stringify({username, email, password, password2})

    axios.post('http://127.0.0.1:8000/api/signup/pemilikKos/', body, config)
    .then(res =>{
        dispatch({
            type:REGISTER_FUSER_SUCCESS,
            payload:res.data
        })
        console.log(res.data)
    }).catch(err =>{
        dispatch({
            type:REGISTER_FUSER_FAILED
        })
        console.log(err.response.data)
    })

    
}


export const login=({username, password})=>(dispatch)=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body=JSON.stringify({username, password})

    axios.post('http://127.0.0.1:8000/api/login/', body, config)
    .then(response =>{
        dispatch({
            type:LOGIN_SUCCESS,
            payload:response.data
        })
    }).catch(err =>{
        dispatch({
            type:LOGIN_FAILED
        })
    })

}


export const logout=()=>(dispatch, getState)=>{
    const token=getState().auth.token
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }

    if(token){
        config.headers['Authorization']= `Token ${token}`
    }
    axios.post('http://127.0.0.1:8000/api/logout/', null, config)
    .then(res =>{
        dispatch({
            type:LOGOUT_SUCCESS
        })
    }).catch(err =>{
        console.log(err.response.data)
    })
}

