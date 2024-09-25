// src/components/InstructorForm.js
import React, { useRef } from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InstructorForm = () => {
  const formRef = useRef(null);
  const instructorIdRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Instructor data submitted successfully!', {
      position: 'bottom-right',
    });

    if (formRef.current) {
      formRef.current.reset();
    }

    if (instructorIdRef.current) {
      instructorIdRef.current.focus();
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Instructor Form
      </Typography>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="ID"
              placeholder="I001"
              fullWidth
              required
              inputRef={instructorIdRef}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Name"
              placeholder="John Doe"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Department Name"
              placeholder="Computer Science"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Salary"
              placeholder="70000"
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

export default InstructorForm;
