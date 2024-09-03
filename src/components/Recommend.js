import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const CardDisplay = () => {
  const [mentor, setMentor] = useState([]);

  useEffect(() => {
    
    const storedResponse = JSON.parse(localStorage.getItem("response"));
    if (storedResponse && storedResponse.indices) {
      setMentor(storedResponse.indices);
    }
  }, []);

  return (
    <Grid container spacing={2}>
      {mentor.map((mentorInfo, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card className="mentor-card" sx={{ maxWidth: 300 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {mentorInfo.Name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Duration of Suffering: {mentorInfo.Duration_of_Suffering}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Age: {mentorInfo.Age}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Age of Suffering: {mentorInfo.Age_of_Suffering}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Marital Status: {mentorInfo.Marital_Status}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Occupation: {mentorInfo.Occupation}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone No: {mentorInfo["Phone No"]}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Reasons for Suffering: {mentorInfo.Reasons_for_Suffering}
              </Typography>
              
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardDisplay;
