export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


export const tryLogin = (user, password) =>{
    if(user === "Admin" && password === "Admin1234"){
        return {
            type: LOGIN, //action.type  //payload
            user:user //action.user
        }
    }else{
        throw ("Usuario y/o Contraseña invalidos")
    }

}

export const logOut = () =>{
    return{
        type: LOGOUT
    }
}