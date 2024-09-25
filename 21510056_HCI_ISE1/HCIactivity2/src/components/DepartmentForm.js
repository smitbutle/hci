// src/components/DepartmentForm.js
import React, { useRef } from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DepartmentForm = () => {
  const formRef = useRef(null);
  const deptNameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Department data submitted successfully!', {
      position: 'bottom-right',
    });

    if (formRef.current) {
      formRef.current.reset();
    }

    if (deptNameRef.current) {
      deptNameRef.current.focus();
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Department Form
      </Typography>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Department Name"
              placeholder="Computer Science"
              fullWidth
              required
              inputRef={deptNameRef}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Building"
              placeholder="Main Building"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Budget"
              placeholder="50000"
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

export default DepartmentForm;
