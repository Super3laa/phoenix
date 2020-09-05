import {Route,Redirect } from 'react-router-dom';
import React from 'react'

export default function PrivateRoute ({ component: Component, ...rest }) {
    <Route
      {...rest}
      render={props => {
        let token= localStorage.getItem('token')
        if(token){
            return(<Redirect to="/" />)
        }else{
          return(<Redirect to="/login" />)
        }
      }}
    />
}