// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ClassroomForm from './components/ClassroomForm';
import DepartmentForm from './components/DepartmentForm';
import CourseForm from './components/CourseForm';
import InstructorForm from './components/InstructorForm';
import SectionForm from './components/SectionForm';
import TeachesForm from './components/TeachesForm';
import StudentForm from './components/StudentForm';
import TakesForm from './components/TakesForm';
import AdvisorForm from './components/AdvisorForm';
import TimeSlotForm from './components/TimeSlotForm';
import PrereqForm from './components/PrereqForm';
import { Container, CssBaseline, Paper } from '@mui/material';

function App() {
  const [selectedForm, setSelectedForm] = useState('Classroom');

  const renderForm = () => {
    switch (selectedForm) {
      case 'Classroom':
        return <ClassroomForm />;
      case 'Department':
        return <DepartmentForm />;
      case 'Course':
        return <CourseForm />;
      case 'Instructor':
        return <InstructorForm />;
      case 'Section':
        return <SectionForm />;
      case 'Teaches':
        return <TeachesForm />;
      case 'Student':
        return <StudentForm />;
      case 'Takes':
        return <TakesForm />;
      case 'Advisor':
        return <AdvisorForm />;
      case 'Time Slot':
        return <TimeSlotForm />;
      case 'Prereq':
        return <PrereqForm />;
      default:
        return null;
    }
  };

  return (
    <div>
      <CssBaseline />
      <Sidebar onSelect={setSelectedForm} />
      <Container component="main" maxWidth="lg" sx={{ marginLeft: '240px', padding: '20px' }}>
        <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
          {renderForm()}
        </Paper>
      </Container>
    </div>
  );
}

export default App;
