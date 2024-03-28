import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { QuickActions } from "../components/QuickActions";
import Alerts from "../components/Alerts";

const Dashboard = () => {
  // Sample data for pie charts
  const data = [
    { id: "green", label: "Upcoming", value: 300 },
    { id: "yellow", label: "Ongoing", value: 200 },
    { id: "purple", label: "Completed", value: 100 },
  ];

  const totalValue = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div style={{ margin: 10, backgroundColor: "#FAFDFE" }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card style={{ width: "90%", margin: 10 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Orders
              </Typography>
              <div style={{ height: "300px", position: "relative" }}>
                <ResponsivePie
                  data={data}
                  innerRadius={0.75} // Increased inner radius
                  padAngle={0.7}
                  cornerRadius={3}
                  colors={{ scheme: "set3" }}
                  borderWidth={1}
                  borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                  enableRadialLabels={false}
                  enableSliceLabels={false}
                  animate={true}
                  motionStiffness={90}
                  motionDamping={15}
                  defs={[
                    {
                      id: "total",
                      type: "text",
                      anchorX: "middle",
                      anchorY: "middle",
                      y: 0,
                      fontSize: 20,
                      fill: "#333333",
                      text: `Total: ${totalValue}`,
                    },
                  ]}
                  fill={[
                    {
                      match: "*",
                      id: "total",
                    },
                  ]}
                />
              </div>

              <Box display="flex" justifyContent="center" marginTop={2}>
                {data.map((item) => (
                  <Box
                    key={item.id}
                    bgcolor={item.id}
                    color="#fff"
                    padding={1}
                    margin={1}
                  >
                    <Typography variant="body2" color="black">
                      {item.label}: {item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card style={{ width: "90%", margin: 10 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Revenue
              </Typography>
              <div style={{ height: "300px" }}>
                <ResponsivePie
                  data={data}
                  innerRadius={0.75} // Increased inner radius
                  padAngle={0.7}
                  cornerRadius={3}
                  colors={{ scheme: "set3" }}
                  borderWidth={1}
                  borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                  enableRadialLabels={false}
                  enableSliceLabels={false}
                  animate={true}
                  motionStiffness={90}
                  motionDamping={15}
                  defs={[
                    {
                      id: "total",
                      type: "text",
                      value:
                        "Total: " + data.reduce((sum, d) => sum + d.value, 0),
                      fontSize: 20,
                      fill: "#333333",
                    },
                  ]}
                  fill={[
                    {
                      match: "*",
                      id: "total",
                    },
                  ]}
                />
              </div>
              <Box display="flex" justifyContent="center" marginTop={2}>
                {data.map((item) => (
                  <Box
                    key={item.id}
                    bgcolor={item.id}
                    color="#fff"
                    padding={1}
                    margin={1}
                  >
                    <Typography variant="body2">
                      {item.label}: {item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card style={{ width: "90%", margin: 10 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Trips
              </Typography>
              <div style={{ height: "300px" }}>
                <ResponsivePie
                  data={data}
                  innerRadius={0.75} // Increased inner radius
                  padAngle={0.7}
                  cornerRadius={3}
                  colors={{ scheme: "set3" }}
                  borderWidth={1}
                  borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                  enableRadialLabels={false}
                  enableSliceLabels={false}
                  animate={true}
                  motionStiffness={90}
                  motionDamping={15}
                  defs={[
                    {
                      id: "total",
                      type: "text",
                      value:
                        "Total: " + data.reduce((sum, d) => sum + d.value, 0),
                      fontSize: 20,
                      fill: "#333333",
                    },
                  ]}
                  fill={[
                    {
                      match: "*",
                      id: "total",
                    },
                  ]}
                />
              </div>
              <Box display="flex" justifyContent="center" marginTop={2}>
                {data.map((item) => (
                  <Box
                    key={item.id}
                    bgcolor={item.id}
                    color="#fff"
                    padding={1}
                    margin={1}
                  >
                    <Typography variant="body2">
                      {item.label}: {item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card style={{ width: "90%", margin: 10 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Expenses
              </Typography>
              <div style={{ height: "300px" }}>
                <ResponsivePie
                  data={data}
                  innerRadius={0.75} // Increased inner radius
                  padAngle={0.7}
                  cornerRadius={3}
                  colors={{ scheme: "set3" }}
                  borderWidth={1}
                  borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                  enableRadialLabels={false}
                  enableSliceLabels={false}
                  animate={true}
                  motionStiffness={90}
                  motionDamping={15}
                  defs={[
                    {
                      id: "total",
                      type: "text",
                      value:
                        "Total: " + data.reduce((sum, d) => sum + d.value, 0),
                      fontSize: 20,
                      fill: "#333333",
                    },
                  ]}
                  fill={[
                    {
                      match: "*",
                      id: "total",
                    },
                  ]}
                />
              </div>
              <Box display="flex" justifyContent="center" marginTop={2}>
                {data.map((item) => (
                  <Box
                    key={item.id}
                    bgcolor={item.id}
                    color="#fff"
                    padding={1}
                    margin={1}
                  >
                    <Typography variant="body2">
                      {item.label}: {item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div style={{ margin: 10 }}>
        <Typography variant="h5" gutterBottom>
          Quick Actions
        </Typography>
        <QuickActions />
      </div>
      <div style={{ margin: 10 }}>
        <Typography variant="h5" gutterBottom>
          High Priority Alerts (14)
        </Typography>
        <Alerts />
      </div>
    </div>
  );
};

export default Dashboard;
