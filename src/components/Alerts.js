import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Grid,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";

const Alerts = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Card style={{ margin: 10 }}>
          <CardContent>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                <PersonIcon style={{ fontSize: 40, marginRight: 10 }} />
                <Typography variant="subtitle1">
                  Driver Raised Concern
                </Typography>
              </Box>
              <Typography variant="body2">13 Feb 24</Typography>
            </Box>
            <Typography variant="body2" style={{ marginTop: 10 }}>
              Loadno: 12345 BillTo: RoadDo BLR
            </Typography>
            <Typography variant="body2" style={{ marginTop: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Box display="flex" justifyContent="space-between" marginTop={2}>
              <Button variant="contained">Resolve</Button>
              <Box width={10}></Box>
              <Button variant="contained">Ignore</Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card style={{ margin: 10 }}>
          <CardContent>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                <DeviceThermostatIcon
                  style={{ fontSize: 40, marginRight: 10 }}
                />
                <Typography variant="subtitle1">
                  Reefer Temp. out of Range
                </Typography>
              </Box>
              <Typography variant="body2">13 Feb 24</Typography>
            </Box>
            <Typography variant="body2" style={{ marginTop: 10 }}>
              Loadno: 12345 BillTo: RoadDo BLR
            </Typography>
            <Typography variant="body2" style={{ marginTop: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Box display="flex" justifyContent="space-between" marginTop={2}>
              <Button variant="contained">Resolve</Button>
              <Box width={10}></Box>
              <Button variant="contained">Ignore</Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Alerts;
