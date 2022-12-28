import React, { useState } from "react"

const AuthContext = React.createContext({
    token: '',
    userID: 0,
    isLoggedIn: true,
    isAdmin : true,
    login : (token)=>{},
    logout : () =>{},  
    roleCheck : () =>{}
})

export const AuthContextProvider = (props) =>{
    const [token, setToken] = useState(null);
    const [isAdmin,setAdmin] = useState(true)
    const userIsLoggedIn = !!token; 
    const loginHandler = (token)=>{
        setToken(token);
    }
    const logoutHandler =() =>{
        setToken(null)
    }
    const roleCheckHandler = (role) => {
        if(role === 'admin'){
            setAdmin(true)
        }
    }

    const contextValue = {
        token: token,
        isLoggedIn : userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        isAdmin : isAdmin,
        roleCheck : roleCheckHandler
    }
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;