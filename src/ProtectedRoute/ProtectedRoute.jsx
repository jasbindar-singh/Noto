import React, {useContext} from 'react'
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../App';

function ProtectedRoute({component: RouteComponent , ...rest}) {
    
    console.log("PR rendered!")

    const {currentUser} = useContext(AuthContext)

    return (
        <Route
            {...rest}
            render = {
                routeProps =>
                !!currentUser ? (
                    <RouteComponent {...routeProps}/>
                ) : (
                    <Redirect to={"/login"} />
                )
            }
        />
    )
}

export default ProtectedRoute
