import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");


const darkTheme = createTheme({
  palette: {
    mode: 'dark',  
  },
});

function JoinRoom() {
    const[username, setUsername] = useState("");
    const[room, setRoom] = useState("");

    const joinRoom = () => {
        if(username !== "" && room !== "") {
          socket.emit("join_room", room);
        }
    };

  return (
    <ThemeProvider theme={darkTheme}>

      <div className = "App" >
        <h3>Join A Chat</h3>
            <input type = "text"
            placeholder = "John..." 
            onChange = {(event) => {setUsername(event.target.value)}}
            /> 
            <input type = "text" 
            placeholder = "Room ID..." 
            onChange = {(event) => {setRoom(event.target.value)}}
            />
            <button onClick={joinRoom}>Join a Room</button>
      </div>

    </ThemeProvider>
  );
}

export default JoinRoom;
