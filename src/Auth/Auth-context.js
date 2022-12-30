import React, { useState } from "react"

const AuthContext = React.createContext({
    token: '',
    userID: 0,
    isLoggedIn: false,
    isAdmin : false,
    login : (token)=>{},
    logout : () =>{},  
    roleCheck : (role) =>{},
    userIDCheck : (id) =>{}
})

export const AuthContextProvider = (props) =>{
   
    const [token, setToken] = useState(null);
    const [userID, setUserID] = useState(0)
    const [isAdmin,setAdmin] = useState(false)
    const userIsLoggedIn = !!token; 
    const loginHandler = (token)=>{
        setToken(token);
    }
    const logoutHandler =() =>{
        setToken(null)
        setAdmin(false)
    }
    const roleCheckHandler = (role) => {
        if(role === 'admin'){
            setAdmin(true)
        }
    }
    const userIDCheckHandler = (id) =>{
        setUserID(id);
    }
    const contextValue = {
        token: token,
        isLoggedIn : userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        isAdmin : isAdmin,
        roleCheck : roleCheckHandler,
        userID : userID,
        userIDCheck : userIDCheckHandler
    }
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;