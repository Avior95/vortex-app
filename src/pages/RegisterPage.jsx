import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import axios from "axios";
import validateRegisterSchema from "../validation/registerValidation";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ROUTES from "../routes/ROUTES";
import { useSelector } from "react-redux";
import { Alert } from "@mui/material";

const RegisterPage = () => {
  const [inputState, setInputState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [inputsErrorsState, setInputsErrorsState] = useState({});
  const navigate = useNavigate();
  const { payload } = useSelector((bigSlice) => bigSlice.authSlice);

  const handleBtnClick = async (ev) => {
    try {
      const JoiResponse = validateRegisterSchema(inputState);
      console.log(JoiResponse);
      setInputsErrorsState(JoiResponse);
      if (JoiResponse) {
        return;
      }
      await axios.post("/auth/register", {
        firstName: inputState.firstName,
        lastName: inputState.lastName,
        email: inputState.email,
        password: inputState.password,
      });
      navigate(ROUTES.LOGIN);
    } catch (err) {
      console.log(err.response.data);
      toast.error(err.response.data);
    }
  };
  const handleInputChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
    const joiResponse = validateRegisterSchema(newInputState);
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
        <Container component="main" maxWidth="xs">
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
              Sign up
            </Typography>
            <Box component="div" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    id="firstName"
                    label="First Name"
                    required={true}
                    fullWidth
                    autoFocus
                    onChange={handleInputChange}
                  />
                  {inputsErrorsState && inputsErrorsState["firstName"] && (
                    <Alert severity="warning">
                      {inputsErrorsState["firstName"].map((item) => (
                        <div key={"firstName" + "-errors" + item}>{item}</div>
                      ))}
                    </Alert>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="family-name"
                    name="lastName"
                    id="lastName"
                    label="Last Name"
                    required={true}
                    fullWidth
                    onChange={handleInputChange}
                  />
                  {inputsErrorsState && inputsErrorsState["lastName"] && (
                    <Alert severity="warning">
                      {inputsErrorsState["lastName"].map((item) => (
                        <div key={"lastName" + "-errors" + item}>{item}</div>
                      ))}
                    </Alert>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="email"
                    name="email"
                    id="email"
                    label="Email Address"
                    required={true}
                    fullWidth
                    onChange={handleInputChange}
                  />
                  {inputsErrorsState && inputsErrorsState["email"] && (
                    <Alert severity="warning">
                      {inputsErrorsState["email"].map((item) => (
                        <div key={"email" + "-errors" + item}>{item}</div>
                      ))}
                    </Alert>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    autoComplete="new-password"
                    name="password"
                    id="password"
                    label="Password"
                    required={true}
                    fullWidth
                    onChange={handleInputChange}
                  />
                  {inputsErrorsState && inputsErrorsState["password"] && (
                    <Alert severity="warning">
                      {inputsErrorsState["password"].map((item) => (
                        <div key={"password" + "-errors" + item}>{item}</div>
                      ))}
                    </Alert>
                  )}
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                onClick={handleBtnClick}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
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
export default RegisterPage;
