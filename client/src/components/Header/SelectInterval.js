import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useSelector, useDispatch } from "react-redux";
import io from 'socket.io-client';
import { setNewResponse, setNewTime } from "../../redux";
import { useEffect, useState } from 'react';


const SERVER_URL = 'http://localhost:4000';

export function DialogSelect() {

  const dispatch = useDispatch();
  const { time } = useSelector(({ currency }) => currency);
  const socket = io(SERVER_URL);
  const chooseTimerSpeed = (e) => dispatch(setNewTime(+e.target.value));

  useEffect(() => {
    socket.emit("start", time);
    socket.on("ticker", data => {
      dispatch(setNewResponse(data));
    });
    return () => socket.disconnect();
  }, [ time, dispatch ]);


  const [ open, setOpen ] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button onClick={ handleClickOpen } variant="outlined" color="warning"
              size="medium">
        SELECT interval
      </Button>
      <Dialog disableEscapeKeyDown open={ open } onClose={ handleClose }>
        <DialogTitle>select interval</DialogTitle>
        <DialogContent>
          <Box component="form" sx={ { display: 'flex', flexWrap: 'wrap' } }>
            <FormControl sx={ { m: 1, minWidth: 120 } }>
              <InputLabel htmlFor="demo-dialog-native">Timer</InputLabel>
              <Select
                native
                value={ time }
                onChange={ chooseTimerSpeed }
                input={ <OutlinedInput label="time" id="demo-dialog-native"/> }
              >
                {/*<option aria-label="None" value=""/>*/ }
                <option value={ 1000 }>1 sec</option>
                <option value={ 5000 }>5 sec</option>
                <option value={ 10000 }>10 sec</option>
                <option value={ 30000 }>30 sec</option>
                <option value={ 60000 }>60 sec</option>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={ handleClose }>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}






