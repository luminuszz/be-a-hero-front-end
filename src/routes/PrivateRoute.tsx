/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import tokenRecieve from '../auth/findToken';


interface Props{
 component: React.ComponentType;
  isPrivate?: boolean;
  exact?:boolean;
  path?:string | string[];
}

type IProps = Props


const RouteWrapper:React.FC<IProps> = ({ component: Component, isPrivate, ...rest }) => {
  const signed = tokenRecieve();

  if (!signed && isPrivate) {
    return <Redirect to="/logon" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/profile" />;
  }
  return <Route {...rest} component={Component} />;
};


export default RouteWrapper;
