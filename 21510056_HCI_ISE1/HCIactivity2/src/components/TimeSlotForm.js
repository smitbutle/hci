// src/components/TimeSlotForm.js
import React, { useRef } from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TimeSlotForm = () => {
  const formRef = useRef(null);
  const timeSlotIdRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Time Slot data submitted successfully!', {
      position: 'bottom-right',
    });

    if (formRef.current) {
      formRef.current.reset();
    }

    if (timeSlotIdRef.current) {
      timeSlotIdRef.current.focus();
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Time Slot Form
      </Typography>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Time Slot ID"
              placeholder="TS01"
              fullWidth
              required
              inputRef={timeSlotIdRef}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Day"
              placeholder="Monday"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Start Time"
              placeholder="09:00"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="End Time"
              placeholder="17:00"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      <ToastContainer />
    </Box>
  );
};

export default TimeSlotForm;
