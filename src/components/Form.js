import {
  Button,
  createTheme,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";

import FormDisplay from "./FormDisplay";

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("userData");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}>
      {"Copyright © "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();

export const Form = () => {
  // main array of objects state || books state || books array of objects
  const [userData, setUserData] = useState(getDatafromLS());

  // input field states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [city, setCity] = useState("");

  // form submit event
  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let book = {
      name,
      email,
      mobNo,
      city,
    };
    setUserData([...userData, book]);
    setName("");
    setEmail("");
    setMobNo("");
    setCity("");
  };

  // delete book from LS
  const deleteUserData = (name) => {
    const filteredBooks = userData.filter((element, index) => {
      return element.name !== name;
    });
    setUserData(filteredBooks);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <div className="wrapper">
              <div className="main">
                <div className="form-container">
                  <form
                    autoComplete="off"
                    className="form-group"
                    onSubmit={handleAddBookSubmit}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      name="name"
                      autoComplete="email"
                      autoFocus
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />

                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />

                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="mob_no"
                      label="Mobile No"
                      type="tel"
                      id="mob_no"
                      className="form-control"
                      onChange={(e) => setMobNo(e.target.value)}
                      value={mobNo}
                    />

                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="city"
                      label="City"
                      type="text"
                      id="city"
                      className="form-control"
                      onChange={(e) => setCity(e.target.value)}
                      value={city}
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}>
                      Sign Up
                    </Button>
                    <Copyright sx={{ mt: 5 }} />
                  </form>
                </div>

                <div className="view-container">
                  {userData.length > 0 && (
                    <>
                      <tbody>
                        <FormDisplay
                          userData={userData}
                          deleteUserData={deleteUserData}
                        />
                      </tbody>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Form;
