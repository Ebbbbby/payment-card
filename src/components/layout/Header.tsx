import { Box, Typography, useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      p={2}
      borderBottom="1px solid #F1F2F4"
      gap={isMobile ? 2 : 0}
      zIndex={-10}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: isMobile ? 0 : 1,
        }}
      >
        <Avatar
          sx={{
            bgcolor: "#202027",
            width: 36,
            height: 36,
            mr: 1,
            ...(isMobile && { width: 28, height: 28 }),
          }}
        >
          H
        </Avatar>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          sx={{
            color: "text.primary",
            fontSize: isMobile ? "12px" : "14px",
          }}
        >
          Hakuna Matata Enterprises
        </Typography>
      </Box>

      <Box
        textAlign={{ xs: "left", sm: "right" }}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? 0.5 : 0,
        }}
      >
        <Typography
          variant="subtitle2"
          color="text.primary"
          sx={{
            display: "flex",
            fontSize: isMobile ? "12px" : "14px",
            fontWeight: 600,
            gap: isMobile ? 0 : 1,
          }}
        >
          <Typography
            sx={{
              color: "#9092A2",
              fontSize: isMobile ? "14px" : "16px",
              fontWeight: 700,
            }}
          >
            PAY
          </Typography>

          - [KES 120,000.00]
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: isMobile ? "11px" : "13px",
          }}
        >
          chikumbadinujurea@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;