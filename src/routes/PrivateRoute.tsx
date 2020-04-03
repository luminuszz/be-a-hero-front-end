/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import tokenRecieve from '../auth/findToken';


interface Props{
 component: any;
  isPrivate?: boolean;
  exact?:boolean;
  path?:string | string[];
}

type IProps = Props

const Routes: React.FC<IProps> = ({
  component: Component,
  ...rest
}) => (

  <Route
    {...rest}
    render={(props) => (tokenRecieve() ? (
      <Component {...props} />
    ) : (

      <Redirect
        to={{ pathname: '/logon', state: { from: props.location } }}
      />
    ))}
  />
);


export default Routes;
