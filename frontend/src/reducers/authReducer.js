
import {
    COSTUMER_USER_LOADED,
    COSTUMER_USER_FAILED,  
    PEMILIKKOS_USER_LOADED,
    PEMILIKKOS_USER_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAILED, LOGOUT_SUCCESS, REGISTER_CUSER_SUCCESS,
    REGISTER_FUSER_FAILED,
    REGISTER_FUSER_SUCCESS,
    REGISTER_CUSER_FAILED,
    CUSTOMER_USER_PROFILE,
    PEMILIKKOS_USER_PROFILE,
    CUSTOMER_USER_PROFILE_UPDATE
 } from "../actions/types"



    const initialState={
        token:localStorage.getItem('token'),
        userId: localStorage.getItem('user_id'),
        username: localStorage.getItem('username'),
        isAuthenticated:false,
        isCostumer:null,
        isPemilikKos: null,
        isLoading:false,
        email: localStorage.getItem('email'),
        user: null
    }

export const authReducer=(state=initialState, action)=>{
    switch(action.type){
        case REGISTER_CUSER_SUCCESS:
        case REGISTER_FUSER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user_id', action.payload.userId);
            localStorage.setItem('username', action.payload.username);
            return {
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isCostumer:action.payload.user.is_costumer,
                isPemilikKos:action.payload.user.is_pemilikKos,
                isLoading:false
            }
        case COSTUMER_USER_LOADED:
            return{
                ...state,
                isAuthenticated:true,
                isCostumer:true,
                userId: action.payload.user_id,
                username: action.payload.username,
                user:action.payload
            }
        case  PEMILIKKOS_USER_LOADED:
            return {
                ...state,
                isAuthenticated:true,
                isPemilikKos: true,
                isLoading:false,
                isCostumer:false,
                user:action.payload
            }

        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('user_id', action.payload.userId)
            localStorage.setItem('username', action.payload.username)
            localStorage.setItem('email', action.payload.email)
            return {
                ...state,
                ...action.payload,
                userId: action.payload.user_id,
                username: action.payload.username,
                isAuthenticated:true,
                isLoading:false,
                isCostumer:action.payload.is_costumer,
                
            }

        case REGISTER_CUSER_FAILED:
        case REGISTER_FUSER_FAILED:
        case LOGIN_FAILED:
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                isCostumer:null,
                isAuthenticated:false,
                isLoading:false
            }

        case COSTUMER_USER_FAILED:
        case PEMILIKKOS_USER_FAILED:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token')
            return {
                ...state,
                token:null,
                isCostumer:null,
                isPemilikKos:null,
                isAuthenticated:false,
                isLoading:false,
            }
        case PEMILIKKOS_USER_PROFILE:
            return {
                ...state,
                isAuthenticated:true,
                isLoading:false,
                isCostumer:false,
                pemilikKosProfile: action.payload
              }
            
        case CUSTOMER_USER_PROFILE:
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user_id', action.payload.userId);
            localStorage.setItem('username', action.payload.username);
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                isCostumer: true,
                costumerUser:action.payload,
            }
            
        default:
        return state    
    }
}

