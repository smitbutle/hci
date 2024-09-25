// src/components/TeachesForm.js
import React, { useRef } from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TeachesForm = () => {
  const formRef = useRef(null);
  const instructorIdRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Teaches data submitted successfully!', {
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
        Teaches Form
      </Typography>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Instructor ID"
              placeholder="I001"
              fullWidth
              required
              inputRef={instructorIdRef}
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

export default TeachesForm;
