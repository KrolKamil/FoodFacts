import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  },
}));

const InputBar = ({ onTextChange, textValue, onButtonPressHandler }) => {
  const classes = useStyles();


  return (
    <Box className={classes.root} >
      <TextField onChange={(text) => onTextChange(text.target.value)} value={textValue.value} />
      <Button color="primary" onClick={onButtonPressHandler} >Press for details</Button>
    </Box>
  )
}

export default InputBar