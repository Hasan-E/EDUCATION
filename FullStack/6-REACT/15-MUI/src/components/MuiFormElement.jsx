import {
  Container,
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const MuiFormElement = () => {
  const [name, setName] = useState();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const validationEmail =()=>{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
   if(email.trim() === "" || validationEmail(email)){
    setError(true)
   }else{
    setError(false)
   }
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        color="primary.dark"
        fontWeight="bold"
      >
        Library form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Name and Surname"
          variant="filled"
          fullWidth
          value={name}
          margin="dense"
          onChange={(e) => setName(e.target.value)}
        />

        {/* Password  */}
        <FormControl sx={{ my: 2 }} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "password" : "text"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        {/* Error */}
        <TextField
          error={error}
          id="outlined-error"
          label="Email"
          sx={{ my: 5 }}
          helperText={
            error
              ? "Please enter a valid email address"
              : "Please enter an email address"
          }
          fullWidth
        />

         {/* Select */}
        <TextField
          id="outlined-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          slotProps={{
            select: {
              native: true,
            },
          }}
          helperText="Please select your currency"
          fullWidth
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        {/* submit button */}
        <Button
          variant="contained"
          color="warning"
          size="large"
          fullWidth
          type="submit"
        >
          SAVE
        </Button>
      </form>
    </Container>
  );
};

export default MuiFormElement;
