// src/components/ClassroomForm.js
import React, { useRef } from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ClassroomForm = () => {
  const formRef = useRef(null); // Reference to the form element
  const buildingRef = useRef(null); // Reference to the building input field

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Classroom data submitted successfully!', {
      position: 'bottom-right', // Specify position directly as string
    });

    // Reset the form
    if (formRef.current) {
      formRef.current.reset();
    }

    // Focus the first input field
    if (buildingRef.current) {
      buildingRef.current.focus();
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Classroom Form
      </Typography>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Building"
              placeholder="Main Building"
              fullWidth
              required
              inputRef={buildingRef} // Attach ref to the input field
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Room Number"
              placeholder="101"
              fullWidth
              required
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Capacity"
              placeholder="50"
              fullWidth
              required
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
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

export default ClassroomForm;
