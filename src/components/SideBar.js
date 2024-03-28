import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import threering from "../assets/three-rings.png";
import WidgetsIcon from "@mui/icons-material/Widgets";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const SideBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sidebar collapsed={collapsed}>
      <div style={{ padding: "10px", textAlign: "center" }}>
        <img
          src={threering}
          alt="Three Rings"
          style={{ width: collapsed ? "40px" : "70px", marginBottom: "20px" }}
        />
      </div>
      <Menu iconShape="circle">
        <MenuItem
          style={{ marginBottom: "8px" }}
          icon={<WidgetsIcon style={{ fontSize: "35px" }} />}
        >
          Misc
        </MenuItem>
        <MenuItem
          style={{ marginBottom: "8px" }}
          icon={<AddBoxIcon style={{ fontSize: "35px" }} />}
        >
          Addition
        </MenuItem>
        <MenuItem
          style={{ marginBottom: "8px" }}
          icon={<LabelImportantIcon style={{ fontSize: "35px" }} />}
        >
          Documentation
        </MenuItem>
        <MenuItem
          style={{ marginBottom: "8px" }}
          icon={<EventNoteIcon style={{ fontSize: "35px" }} />}
        >
          Calendar
        </MenuItem>
        <MenuItem
          style={{ marginBottom: "8px" }}
          icon={<DepartureBoardIcon style={{ fontSize: "35px" }} />}
        >
          Departures
        </MenuItem>
        <MenuItem
          style={{ marginBottom: "8px" }}
          icon={<LocalShippingIcon style={{ fontSize: "35px" }} />}
        >
          Shipping
        </MenuItem>
        <MenuItem
          style={{ marginBottom: "8px" }}
          icon={<BusinessCenterIcon style={{ fontSize: "35px" }} />}
        >
          Business
        </MenuItem>
        <MenuItem
          style={{ marginBottom: "8px" }}
          icon={<AccountBalanceWalletIcon style={{ fontSize: "35px" }} />}
        >
          Wallet
        </MenuItem>
        <MenuItem
          style={{ marginBottom: "8px" }}
          icon={<DynamicFeedIcon style={{ fontSize: "35px" }} />}
        >
          Feed
        </MenuItem>
        <MenuItem
          style={{ marginBottom: "8px" }}
          icon={<SettingsIcon style={{ fontSize: "35px" }} />}
        >
          Settings
        </MenuItem>
      </Menu>
      <div style={{ textAlign: "center", marginTop: 100 }}>
        {collapsed ? (
          <ArrowForwardIcon
            style={{ cursor: "pointer", fontSize: "35px" }}
            onClick={handleToggleCollapse}
          />
        ) : (
          <ArrowBackIcon
            style={{ cursor: "pointer", fontSize: "35px" }}
            onClick={handleToggleCollapse}
          />
        )}
      </div>
    </Sidebar>
  );
};
