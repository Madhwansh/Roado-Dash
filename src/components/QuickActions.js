import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PersonIcon from "@mui/icons-material/Person";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import RvHookupIcon from "@mui/icons-material/RvHookup";

export const QuickActions = () => {
  return (
    <Card style={{ margin: 10 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" flexDirection="column" alignItems="center">
            <LabelImportantIcon style={{ fontSize: 50 }} />
            <Typography variant="body2">Create Indents</Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box display="flex" flexDirection="column" alignItems="center">
            <LocalShippingIcon style={{ fontSize: 50 }} />
            <Typography variant="body2">Add Vehicle</Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box display="flex" flexDirection="column" alignItems="center">
            <PersonIcon style={{ fontSize: 50 }} />
            <Typography variant="body2">Add Driver</Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box display="flex" flexDirection="column" alignItems="center">
            <RvHookupIcon style={{ fontSize: 50 }} />
            <Typography variant="body2">Add Trailer</Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box display="flex" flexDirection="column" alignItems="center">
            <LocalShippingIcon style={{ fontSize: 50 }} />
            <Typography variant="body2">Add Indents</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
