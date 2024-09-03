import React from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Grid,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
  },
  typography: {
    fontFamily: "Quicksand, sans-serif",
  },
});

const reasonsForSuffering = [
  "Academic Pressure",
  "Career",
  "Chronic Illness",
  "Family Problems",
  "Financial Stress",
  "Health Issues",
  "Loneliness",
  "Personal Loss",
  "Relationships",
];

const occupations = [
  "Software Developer",
  "Teacher",
  "Carpenter",
  "Firefighter",
  "Engineer",
  "Lawyer",
  "Graphic Designer",
  "Marketing Manager",
  "Police Officer",
  "Sales Representative",
  "Nurse",
  "Accountant",
  "Electrician",
  "Doctor",
  "Chef",
];

const maritalStatusOptions = ["Single", "Married", "Divorced"];

const AestheticForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formValues = {};

    formData.forEach((value, key) => {
      
      formValues[key] =
        key === "Age" ||
        key === "Age_of_Suffering" ||
        key === "Duration_of_Suffering"
          ? parseInt(value)
          : value;
    });
    

    const input = {
      Name: formValues["Name"],
      Duration_of_Suffering: formValues["Duration_of_Suffering"],
      Reason_for_Suffering: formValues["Reason_for_Suffering"],
      Occupation: formValues["Occupation"],
      Age: formValues["Age"],
      Marital_Status: formValues["Marital_Status"],
      Age_of_Suffering: formValues["Age_of_Suffering"],
      Location: "India",
    };
    
    const apiUrl = process.env.REACT_APP_MentorREACT_APP_API_Key;

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(apiUrl, JSON.stringify(input), {
        headers,
      });
      localStorage.setItem("response", JSON.stringify(response.data));
      window.location.href = "/recommended/mentors";
    } catch (error) {
      console.error("AxiosError:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <Paper
          elevation={6}
          style={{ padding: "30px", borderRadius: "15px", marginTop: "20px" }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            ✨ Professional Inquiry ✨
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  name="Name"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="How Long You've Been Suffering "
                  variant="outlined"
                  name="Duration_of_Suffering"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="reason">
                  Reason for Your Suffering
                </InputLabel>
                <Select
                  fullWidth
                  label="Reason for Your Suffering"
                  variant="outlined"
                  name="Reason_for_Suffering"
                  required
                >
                  {reasonsForSuffering.map((reason) => (
                    <MenuItem key={reason} value={reason}>
                      {reason}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Your Occupation"
                  variant="outlined"
                  name="Occupation"
                  required
                  select
                >
                  {occupations.map((occupation) => (
                    <MenuItem key={occupation} value={occupation}>
                      {occupation}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Your Age"
                  variant="outlined"
                  type="number"
                  name="Age"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Marital Status"
                  variant="outlined"
                  name="Marital_Status"
                  required
                  select
                >
                  {maritalStatusOptions.map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Age When you started Suffering"
                  variant="outlined"
                  type="number"
                  name="Age_of_Suffering"
                  required
                />
              </Grid>
              
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  type="submit"
                  style={{ padding: "10px 0", fontSize: "1.2rem" }}
                >
                  Submit Your Inquiry
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default AestheticForm;
