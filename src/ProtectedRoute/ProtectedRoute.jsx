import React from 'react'
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({component: RouteComponent , ...rest}) {
    
    console.log("PR rendered!")

    const user = true;

    return (
        <Route
            {...rest}
            render = {
                routeProps =>
                !!user ? (
                    <RouteComponent {...routeProps}/>
                ) : (
                    <Redirect to={"/login"} />
                )
            }
        />
    )
}

export default ProtectedRoute
