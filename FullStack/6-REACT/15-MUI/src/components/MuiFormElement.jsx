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

const MuiFormElement = () => {
  const [name, setName] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(name);
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
