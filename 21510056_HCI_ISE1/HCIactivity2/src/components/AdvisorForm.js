// src/components/AdvisorForm.js
import React, { useRef } from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdvisorForm = () => {
  const formRef = useRef(null);
  const studentIdRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Advisor data submitted successfully!', {
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
        Advisor Form
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
              label="Instructor ID"
              placeholder="I001"
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

export default AdvisorForm;
