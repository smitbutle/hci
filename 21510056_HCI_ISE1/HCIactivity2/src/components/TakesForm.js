// src/components/TakesForm.js
import React, { useRef } from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TakesForm = () => {
  const formRef = useRef(null);
  const studentIdRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Takes data submitted successfully!', {
      position: 'bottom-right',
    });

    if (formRef.current) {
      formRef.current.reset();
    }

    if (studentIdRef.current) {
      studentIdRef.current.focus();
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Takes Form
      </Typography>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Student ID"
              placeholder="S001"
              fullWidth
              required
              inputRef={studentIdRef}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Course ID"
              placeholder="CS101"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Section ID"
              placeholder="001"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Semester"
              placeholder="Fall"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Year"
              placeholder="2024"
              fullWidth
              required
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Grade"
              placeholder="A"
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

export default TakesForm;
