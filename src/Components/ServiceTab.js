import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@react-hook/media-query";
import "../Css/Home.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isRowBased = useMediaQuery("(max-width: 400px)");
  const isHorizontal = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "transparent",
        display: "flex",
        flexDirection: isHorizontal ? "column" : "row",
        height: 370,
        width: isHorizontal ? "90vw" : "auto",
        marginTop: "2vw",
        marginLeft: "10vw",
        marginHorizontal: "5vw",
      }}
    >
      <Tabs
        orientation={isHorizontal ? "horizontal" : "vertical"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          label="IT Consulting"
          {...a11yProps(0)}
          style={{
            fontSize: isRowBased ? "11px" : "20px",
            marginBottom: "4vh",
            marginTop: isRowBased ? "-40px" : "0",
            width: isHorizontal ? "30vw" : "auto",
            height: isHorizontal ? "15vh" : "auto",
            flexWrap: isHorizontal ? "wrap" : "nowrap",
          }}
        />
        <Tab
          label="App Development"
          {...a11yProps(1)}
          style={{
            fontSize: isRowBased ? "11px" : "20px",
            marginBottom: "4vh",
            marginTop: isRowBased ? "-40px" : "0",
            width: isHorizontal ? "34vw" : "auto",
            height: isHorizontal ? "15vh" : "auto",
            flexWrap: isHorizontal ? "wrap" : "nowrap",
          }}
        />
        <Tab
          label="Web Designing"
          {...a11yProps(2)}
          style={{
            fontSize: isRowBased ? "11px" : "20px",
            marginBottom: "4vh",
            marginTop: isRowBased ? "-40px" : "0",
            width: isHorizontal ? "29vw" : "auto",
            height: isHorizontal ? "15vh" : "auto",
            flexWrap: isHorizontal ? "wrap" : "nowrap",
          }}
        />
        <Tab
          label="Network Security"
          {...a11yProps(3)}
          style={{
            fontSize: isRowBased ? "11px" : "20px",
            marginBottom: "4vh",
            marginTop: isRowBased ? "-40px" : "0",
            width: isHorizontal ? "30vw" : "auto",
            height: isHorizontal ? "15vh" : "auto",
            flexWrap: isHorizontal ? "wrap" : "nowrap",
          }}
        />
        <Tab
          label="Cloud Services"
          {...a11yProps(4)}
          style={{
            fontSize: isRowBased ? "11px" : "20px",
            marginBottom: "4vh",
            marginTop: isRowBased ? "-40px" : "0",
            width: isHorizontal ? "30vw" : "auto",
            height: isHorizontal ? "15vh" : "auto",
            flexWrap: isHorizontal ? "wrap" : "nowrap",
          }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="service-tab">
          <img
            src="https://www.6degreesit.com/wp-content/uploads/2019/02/consultancy.png"
            alt="it-consulting"
            className="service-img"
          />
          <div className="service-text">
            As IT consultants we provide a variety of services, including giving
            technical advices and solutions, estimating, competetive analysis,
            development of an IT corporate strategy, implementation of IT
            systems, system management and more.
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="service-tab">
          <img
            src="https://www.lx.com.sg/wp-content/uploads/2020/08/mobile-app-dev.png"
            alt="app-dev"
            className="service-img"
          />
          <div className="service-text">
            We offer a full package of application design, integration,
            management and deployment along with maintenance and future
            customizations to help meet market needs and empower the brand's
            identity.
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="service-tab">
          <img
            src="https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg"
            alt="web-design"
            className="service-img"
          />
          <div className="service-text">
            Web designing is essential to bring out your business brand/ product
            in the digital world. Our services include website development,
            content writing, SEO, email marketing and much more to make your
            business grow to it's full potential.
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="service-tab">
          <img
            src="https://www.ttsystems.com/application/files/9715/9783/7156/img_02.jpg"
            alt="network-security"
            className="service-img"
          />
          <div className="service-text">
            With the increasing need for cybersecurity everyday, we'd like to
            present our advanced integrated network security that helps you
            manage risk and gives protection against cyberattacks. Accelerate
            your websites and applications with this now.
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className="service-tab">
          <img
            src="https://i.nextmedia.com.au/Utils/ImageResizer.ashx?n=https%3A%2F%2Fi.nextmedia.com.au%2FNews%2FiStock-1137011043.jpg&w=480&c=0&s=1"
            alt="cloud-services"
            className="service-img"
          />
          <div className="service-text">
            We understand that Cloud computing is the new normal for enterprise
            IT. We offer cloud services that'll allow your business to cut their
            fixed regular costs of hardwares, servers, databases etc. Cloud
            computing provides maintainability and automatic updates.
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
