import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ROUTES from "../routes/ROUTES";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLoggedIn from "../hooks/useLoggedIn";
import validateLoginSchema from "../validation/loginValidation";
import { Alert } from "@mui/material";
import { toast } from "react-toastify";

const LoginPage = ({ onClose }) => {
  const [inputState, setInputState] = useState({
    email: "",
    password: "",
  });
  const [inputsErrorsState, setInputsErrorsState] = useState(null);
  const loggedIn = useLoggedIn();
  const navigate = useNavigate();

  const handleBtnClick = async (ev) => {
    try {
      const joiResponse = validateLoginSchema(inputState);
      setInputsErrorsState(joiResponse);
      if (joiResponse) {
        return;
      }

      const { data } = await axios.post("/auth/login", inputState);
      localStorage.setItem("token", data.token);
      loggedIn();
      toast.error("login");
      onClose();
      navigate(ROUTES.HOME);
    } catch (err) {
      console.log(err.response.data);
      toast.error("Error, not a registered user");
    }
  };

  const handleInputChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
    const joiResponse = validateLoginSchema(newInputState);
    if (!joiResponse) {
      setInputsErrorsState(joiResponse);
      return;
    }
    const inputKeys = Object.keys(inputState);
    for (const key of inputKeys) {
      if (inputState && !inputState[key] && key !== ev.target.id) {
        joiResponse[key] = "";
      }
    }
    setInputsErrorsState(joiResponse);
  };
  return (
    <Grid container>
      <Grid item xs={6}>
        <Container component="main" maxWidth="md">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="div" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleInputChange}
                  />
                  {inputsErrorsState && inputsErrorsState.email && (
                    <Alert severity="warning">
                      {inputsErrorsState.email.map((item) => (
                        <div key={"email-errors" + item}>{item}</div>
                      ))}
                    </Alert>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="new-password"
                    type="password"
                    onChange={handleInputChange}
                  />
                  {inputsErrorsState && inputsErrorsState.password && (
                    <Alert severity="warning">
                      {inputsErrorsState.password.map((item) => (
                        <div key={"password-errors" + item}>{item}</div>
                      ))}
                    </Alert>
                  )}
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#262626" }}
                onClick={handleBtnClick}
              >
                Sign in
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href={ROUTES.SIGNUP} variant="body2">
                    Don’t have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Grid>
      <Grid item xs={6} sx={{ width: "100%", height: "100%" }}>
        <img
          src="https://media.everlane.com/image/upload/c_fill,w_3840,ar_380:655,q_auto,dpr_1.0,f_auto,fl_progressive:steep/Modal_Desktop-05102022_pyajh1"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Grid>
    </Grid>
  );
};
export default LoginPage;
