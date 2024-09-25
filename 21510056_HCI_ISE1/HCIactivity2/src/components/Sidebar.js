// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Box } from '@mui/material';
import { Home, School, Subject, Person, AccessAlarm, CalendarToday, LocalLibrary, Assignment, ListAlt, Info, School as SchoolIcon } from '@mui/icons-material';

const Sidebar = ({ onSelect }) => {
    const handleSelect = (formName) => {
        onSelect(formName);
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                    backgroundColor: '#f4f4f4',
                    //   paddingTop: 2,
                    paddingBottom: 2,
                },
            }}
        >
            <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid #ddd', backgroundColor: '#fff' }}>
                <SchoolIcon sx={{ fontSize: 40, color: '#1976d2', mb: 1 }} />
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: '#333', mb: 0.5 }}>
                    SIMS
                </Typography>
                <Typography variant="subtitle1" component="div" sx={{ color: '#666', textAlign: 'center'}}>
                    Student Management Information System
                </Typography>
            </Box>
            <List>
                <ListItem button onClick={() => handleSelect('Classroom')}>
                    <ListItemIcon><Home /></ListItemIcon>
                    <ListItemText primary="Classroom" />
                </ListItem>
                <ListItem button onClick={() => handleSelect('Department')}>
                    <ListItemIcon><School /></ListItemIcon>
                    <ListItemText primary="Department" />
                </ListItem>
                <ListItem button onClick={() => handleSelect('Course')}>
                    <ListItemIcon><Subject /></ListItemIcon>
                    <ListItemText primary="Course" />
                </ListItem>
                <ListItem button onClick={() => handleSelect('Instructor')}>
                    <ListItemIcon><Person /></ListItemIcon>
                    <ListItemText primary="Instructor" />
                </ListItem>
                <ListItem button onClick={() => handleSelect('Section')}>
                    <ListItemIcon><AccessAlarm /></ListItemIcon>
                    <ListItemText primary="Section" />
                </ListItem>
                <ListItem button onClick={() => handleSelect('Teaches')}>
                    <ListItemIcon><CalendarToday /></ListItemIcon>
                    <ListItemText primary="Teaches" />
                </ListItem>
                <ListItem button onClick={() => handleSelect('Student')}>
                    <ListItemIcon><LocalLibrary /></ListItemIcon>
                    <ListItemText primary="Student" />
                </ListItem>
                <ListItem button onClick={() => handleSelect('Takes')}>
                    <ListItemIcon><Assignment /></ListItemIcon>
                    <ListItemText primary="Takes" />
                </ListItem>
                <ListItem button onClick={() => handleSelect('Advisor')}>
                    <ListItemIcon><ListAlt /></ListItemIcon>
                    <ListItemText primary="Advisor" />
                </ListItem>
                <ListItem button onClick={() => handleSelect('Time Slot')}>
                    <ListItemIcon><Info /></ListItemIcon>
                    <ListItemText primary="Time Slot" />
                </ListItem>
                <ListItem button onClick={() => handleSelect('Prereq')}>
                    <ListItemIcon><School /></ListItemIcon>
                    <ListItemText primary="Prereq" />
                </ListItem>
            </List>
            <Divider />
        </Drawer>
    );
};

export default Sidebar;
