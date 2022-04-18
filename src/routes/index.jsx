import { Route, Switch } from "react-router-dom"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"

const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route path="/cadastro">
                <SignUp/>
            </Route>
            <Route>
                
            </Route>
        </Switch>
    )
}

export default Routes