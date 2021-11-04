import {LOGIN} from '../actions/authAction'
import { LOGOUT } from '../actions/authAction'

const initialState = {
    user: null,
    login:false
}

export default (state=initialState, action)=>{
    switch(action.type){
        case LOGIN:
            return{
                user:action.user,
                login:true
            }
        case LOGOUT:
            return{
                user:'',
                login: false
            }
    
    }
    return state;
}