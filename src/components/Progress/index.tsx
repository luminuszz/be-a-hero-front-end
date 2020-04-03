/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { CSSProperties } from 'react';

import { useStyles } from './styles';

interface Props{
color?:any
style?:CSSProperties
load:boolean
defaultValue:string
}

const Progress: React.FC<Props> = ({
  color, style, load, defaultValue,
}) => {
  const classes = useStyles();


  return (
    <>
      <div className={classes.root}>
        {load ? (
          <CircularProgress
            color={color || 'inherit'}
            style={style || { width: 80, marginLeft: '8px' }}
          />
        ) : (
          defaultValue
        )}
      </div>
    </>
  );
};
export default Progress;
