/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { CSSProperties } from 'react';

import { useStyles } from './styles';

interface Props{
color?:any
style?:CSSProperties
}

const Progress:React.FC<Props> = ({ color, style }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <CircularProgress color={color} style={style} />
      </div>
    </>
  );
};
export default Progress;
