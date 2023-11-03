import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Link,
  Paper,
  TextField,
  Toolbar,
  Typography
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark', 
  },
});

function Login() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Chat App
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Typography component="h1" variant="h5">
          Welcome to BLOOM
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            width: '25%',
            mt: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
          >
            Sign In
          </Button>
          <Box sx={{ mt: 2 }}>
            <Link href="/register" variant="body2">
              Don't have an account? Register
            </Link>
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default Login;
