import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';

const UserProfileModal = ({ isOpen, user, onClose }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          User Profile
        </Typography>
        <Typography>Name: {user.name}</Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>Status: {user.status}</Typography>
        <Typography>Phone: {user.phone}</Typography>
        <Button variant="contained" color="primary" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default UserProfileModal;
