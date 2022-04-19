import { useState, useEffect } from "react"

import { Route, Switch } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"

const Routes = () =>{
    const [authenticated, setAuthenticated] = useState(false)
    const [user, setUser] = useState({})

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("@KenzieHub:token"))
        setUser(JSON.parse(localStorage.getItem("@KenzieHub:user")))
        if(token){
            setAuthenticated(true)
        }
    }, [authenticated])

    return(
        <Switch>
            <Route exact path="/">
                <Login
                    setAuthenticated={setAuthenticated}
                    authenticated={authenticated}
                    setUser={setUser}
                />
            </Route>
            <Route path="/cadastro">
                <SignUp
                    authenticated={authenticated}
                />
            </Route>
            <Route path="/dashboard">
                <Dashboard
                    setAuthenticated={setAuthenticated}
                    authenticated={authenticated}
                    user={user}
                    setUser={setUser}
                />
            </Route>
        </Switch>
    )
}

export default Routes