import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WorkIcon from "@mui/icons-material/Work"; // New icon for Experience
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";

const DrawerComponent = ({ setOpenMenu, openMenu }) => {
  const navigate = useNavigate();
  const menuItems = [
    { text: "Home", path: "/", icon: <HomeIcon sx={{ color: "white" }} /> },
    { text: "About", icon: <InfoIcon sx={{ color: "white" }} /> },
    { text: "Experience", path: "/experience", icon: <WorkIcon sx={{ color: "white" }} /> }, // Changed icon
    { text: "Contact", icon: <ContactMailIcon sx={{ color: "white" }} /> }
  ];

  return (
    <Drawer
      anchor="right"
      onClose={() => setOpenMenu(false)}
      open={openMenu}
      PaperProps={{
        sx: {
          backgroundColor: "#252625",
          color: "#FFFFFF",
          width: "100%",
          maxWidth: "100%"
        }
      }}
    >
      <Box sx={{ width: "100%", padding: 3 }}>
        {/* Title & Close Icon */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h5" fontWeight="bold">
            Menu
          </Typography>
          <IconButton onClick={() => setOpenMenu(false)} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Menu List */}
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
              <ListItemButton
                onClick={() => {
                  if (item.path) {
                    navigate(item.path);
                  }
                  setOpenMenu(false);
                }}
              >
                <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
