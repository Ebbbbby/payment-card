import { Box, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      borderBottom="1px solid #F1F2F4"
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Avatar sx={{ bgcolor: "#202027", width: 36, height: 36, mr: 1 }}>
          H
        </Avatar>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          sx={{ color: "text.primary", fontSize: "14px" }}
        >
          Hakuna Matata Enterprises
        </Typography>
      </Box>
      <Box textAlign="right">
        <Typography
          variant="subtitle2"
          color="text.primary"
          sx={{ display: "flex", fontSize: "14px", fontWeight: 600 }}
        >
          <Typography
            sx={{ color: "#9092A2", fontSize: "16px", fontWeight: 700 }}
          >
            PAY
          </Typography>{" "}
          – [KES 120,000.00]
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          chikumbadinujurea@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
