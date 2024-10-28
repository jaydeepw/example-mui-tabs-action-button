import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PhoneIcon from "@mui/icons-material/Phone";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Image from "next/image";
import PropTypes from "prop-types";
import * as React from "react";
import MyIcon from "../../public/toofancoder.png";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ActionSection = () => {
  return (
    <div
      style={{
        marginLeft: "auto", // remove this to move action items together with tabs
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Image width={24} height={24} src={MyIcon} alt="Image Icon" />
      <Button>Action2</Button>
    </div>
  );
};

/**
 *
 * @returns
 */
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  // Using the same click handler at
  // multiple places for brewity
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", gap: 10 }}>
      <Box sx={{ width: "100%", height: "300px", background: "white" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Start" {...a11yProps(0)} />
            <Tab label="Middle" {...a11yProps(1)} />
            <Tab label="End" {...a11yProps(2)} />
            <ActionSection />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Tabs list with action button aligned at the end
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Middle Tab
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          End Tab
        </CustomTabPanel>
      </Box>
      <Box sx={{ width: "100%", height: "300px", background: "white" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon tabs example"
          >
            <Tab icon={<PhoneIcon />} aria-label="phone" />
            <Tab icon={<FavoriteIcon />} aria-label="favorite" />
            <Tab icon={<PersonPinIcon />} aria-label="person" />
            <ActionSection />
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}
