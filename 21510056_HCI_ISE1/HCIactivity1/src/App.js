import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  Paper,
  TextField,
  Container,
  Snackbar,
  Alert
} from '@mui/material';
import FileIcon from '@mui/icons-material/InsertDriveFile';
import EditIcon from '@mui/icons-material/Edit';
import ViewIcon from '@mui/icons-material/Visibility';
import FormatIcon from '@mui/icons-material/FormatPaint';
import InsertIcon from '@mui/icons-material/AddCircleOutline';
import ToolsIcon from '@mui/icons-material/Build';
import MailIcon from '@mui/icons-material/MailOutline';
import HelpIcon from '@mui/icons-material/HelpOutline';

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuId, setMenuId] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setMenuId(id);
  };

  const handleMenuItemClick = (item) => {
    let message = '';
    switch (item) {
      case 'New':
        message = "✨ New document created.";
        break;
      case 'Open File':
        message = "📂 Opening file.";
        break;
      case 'Save':
        message = "💾 Saved successfully.";
        break;
      case 'Quit':
        message = "👋 Quitting the app.";
        break;
      case 'Undo':
        message = "⏪ Action undone.";
        break;
      case 'Cut':
        message = "✂️ Text cut to clipboard.";
        break;
      case 'Paste':
        message = "📋 Pasted successfully.";
        break;
      case 'Find Word':
        message = "🔍 Searching for word...";
        break;
      case 'Print Preview':
        message = "🖨️ Print queued.";
        break;
      case 'Send Mail':
        message = "📧 Your mail is sent.";
        break;
      default:
        message = `${item} success`;
    }
    setSnackbarMessage(message);
    setSnackbarOpen(true);
    handleClose();
  };


  const handleClose = () => {
    setAnchorEl(null);
    setMenuId('');
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const renderMenu = (id, items) => (
    <Menu
      anchorEl={anchorEl}
      open={menuId === id}
      onClose={handleClose}
    >
      {items.map((item) => (
        <MenuItem key={item} onClick={() => handleMenuItemClick(item)}>
          {item}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#F5F5DC', color: '#333' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: '#333' }}>
            Word Processor
          </Typography>

          {/* Menu Buttons with Icons and Labels */}
          <Button
            color="inherit"
            startIcon={<FileIcon />}
            onClick={(event) => handleClick(event, 'file')}
          >
            File
          </Button>
          {renderMenu('file', ['New', 'Open File', 'Open Copy of File', 'Save', 'Save As', 'Close File', 'Delete', 'Quit'])}

          <Button
            color="inherit"
            startIcon={<EditIcon />}
            onClick={(event) => handleClick(event, 'edit')}
          >
            Edit
          </Button>
          {renderMenu('edit', ['Undo', 'Cut', 'Copy', 'Paste', 'Clear', 'Find Word', 'Change Word', 'Go To', 'Go Back', 'Repeat Edit', 'Check Spelling', 'Count Words'])}

          <Button
            color="inherit"
            startIcon={<ViewIcon />}
            onClick={(event) => handleClick(event, 'view')}
          >
            View
          </Button>
          {renderMenu('view', ['Print Preview', 'Page Setup', 'View Page', 'Show Alternative Document', 'View Index', 'See Table of Contents', 'Glossary'])}

          <Button
            color="inherit"
            startIcon={<FormatIcon />}
            onClick={(event) => handleClick(event, 'format')}
          >
            Format
          </Button>
          {renderMenu('format', ['Character Style', 'Plain Text', 'Bold Text', 'Italic Text', 'Underline', 'Increase Point Size', 'Decrease Point Size', 'Change Font', 'Format Paragraph', 'Lay Out Document', 'Position on Page'])}

          <Button
            color="inherit"
            startIcon={<InsertIcon />}
            onClick={(event) => handleClick(event, 'insert')}
          >
            Insert
          </Button>
          {renderMenu('insert', ['Add Footnote', 'Add Page Break', 'Insert Graphic', 'Insert Index Entry', 'Table'])}

          <Button
            color="inherit"
            startIcon={<ToolsIcon />}
            onClick={(event) => handleClick(event, 'tools')}
          >
            Tools
          </Button>
          {renderMenu('tools', ['Preferences', 'Repaginate', 'Renumber Pages'])}

          <Button
            color="inherit"
            startIcon={<MailIcon />}
            onClick={(event) => handleClick(event, 'mail')}
          >
            Mail
          </Button>
          {renderMenu('mail', ['Open Mail', 'Send Mail'])}

          <Button
            color="inherit"
            startIcon={<HelpIcon />}
            onClick={(event) => handleClick(event, 'help')}
          >
            Help
          </Button>
          {renderMenu('help', ['Help'])}
        </Toolbar>
      </AppBar>

      {/* Main Content Area */}
      <Container sx={{ mt: 4 }}>
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            minHeight: '60vh',
            backgroundColor: '#FAF0E6',
            borderRadius: 2,
          }}
        >
          <TextField
            fullWidth
            multiline
            placeholder="Start typing your document here..."
            variant="outlined"
            InputProps={{
              style: {
                fontSize: '1.1rem',
                lineHeight: '1.6',
                fontFamily: 'Arial, sans-serif',
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'transparent',
                },
                '&:hover fieldset': {
                  borderColor: '#B0B0B0',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#B0B0B0',
                },
              },
            }}
          />
        </Paper>
      </Container>

      {/* Snackbar for Toast Notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleSnackbarClose} severity="info" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default App;