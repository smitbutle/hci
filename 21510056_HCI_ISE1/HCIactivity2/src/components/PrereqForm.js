// src/components/PrereqForm.js
import React, { useRef } from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrereqForm = () => {
  const formRef = useRef(null);
  const courseIdRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Prerequisite data submitted successfully!', {
      position: 'bottom-right',
    });

    if (formRef.current) {
      formRef.current.reset();
    }

    if (courseIdRef.current) {
      courseIdRef.current.focus();
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Prerequisite Form
      </Typography>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Course ID"
              placeholder="CS101"
              fullWidth
              required
              inputRef={courseIdRef}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Prerequisite ID"
              placeholder="CS100"
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

export default PrereqForm;
