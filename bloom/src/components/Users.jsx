import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, Typography, styled } from '@mui/material';
import { useState } from 'react';
import UserProfileModal from './UserProfileModal';
    
    const Component = styled(Box)`
    width: 80%;
    margin: 50px auto;
    & > h4 {
        margin-bottom: 20px;
    }
    & > div > table > thead {
        background-color: #000;
    }
    & > div > table > thead > tr > th {
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 600;
    }
    & > div > table > tbody > tr > td {
        font-size: 15px;
    }
`;

    const defaultVal = [{
        id: 101,
        name: 'Devi',
        email : 'devi02@gmail.com',
        phone : '7503124988',
        status : 'true'
    }]


    const Users = () => {

        const[users, setUsers] = useState(defaultVal);
        const [message, setMessage] = useState('');
        const [selectedUser, setSelectedUser] = useState(defaultVal);
        const [isModalOpen, setIsModalOpen] = useState(false);

        const removeEntry = (id) => {
            const updatedUsers = users.filter(user => user.id !== id);
            setUsers(updatedUsers);
        }

        const sendEntry = (id) => {
            const userToSend = users.find((user) => user.id === id);
            if (userToSend && message) {
                //API CALL setup
              console.log(`Message sent to ${userToSend.name} (${userToSend.email}): ${message}`);
              setMessage('');
            }
          };

          const viewEntry = (id) => {
                setSelectedUser(id);
                setIsModalOpen(true);
          };

          const closeUserProfileModal = () => {
            setIsModalOpen(false);
          };

          const messageEntry = (id) => {};


    return (
   <Component>
    <Typography variant="h4">Users</Typography>
        <Box>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Share</TableCell>
                    <TableCell>Profile</TableCell>
                    <TableCell>Message</TableCell>
                    <TableCell>Remove Entry</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map (user => (
                        <TableRow key = {user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell><Button variant = "contained" color = "info" onClick = {() => sendEntry(user.id)}>Send</Button></TableCell>
                            <TableCell><Button variant = "contained" color = "success" onClick = {() => viewEntry(user.id)}>View</Button></TableCell>
                            <TableCell><Button variant = "contained" color = "success" onClick = {() => messageEntry(user.id)}>Chat</Button></TableCell>
                            <TableCell><Button variant = "contained" color = "error" onClick = {() => removeEntry(user.id)}>Remove</Button></TableCell>
                        </TableRow>
                    ))
                }
                </TableBody>
        </Table>
   </Box>
   <UserProfileModal isOpen={isModalOpen} user={selectedUser} onClose={closeUserProfileModal} />
   </Component>
    );
};
export default Users;