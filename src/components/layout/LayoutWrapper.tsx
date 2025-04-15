import { Box, Dialog, IconButton, Typography, useMediaQuery } from "@mui/material";
import Header from "./Header";
import PaymentSidebar from "./Sidenav";
import { Close } from "@mui/icons-material";
import Footer from "../../pages/Footer";
import { useTheme } from "@mui/material/styles";


interface LayoutWrapperProps {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  title?: string;
  disableSidebar?: boolean;
}
const LayoutWrapper = ({
  children,
  title,
  open,
  onClose,
  disableSidebar,
}: LayoutWrapperProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="md"
        slotProps={{
          paper: {
            sx: {
              borderRadius: 2,
              overflow: "visible",
              backgroundColor: "#fff",
              boxShadow: 1,
              zIndex: 1000,
            },
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -10,
            right: -40,
            borderRadius: "50%",
          }}
        >
          <IconButton onClick={onClose}>
            <Close sx={{ color: "text.primary", fontSize: "14px" }} />
          </IconButton>
        </Box>

        <Box
          width="700px"

          sx={{
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              minWidth: "100%",
            },
          }}
        >
          <Header />
          
          <Box display="flex"  flexDirection={{ xs: "column", sm: "row" }}>
            <PaymentSidebar disable={disableSidebar} />
            <Box
              flexGrow={1}
              p={2}
              sx={{ width: "100%", padding: isSmallScreen ?"8px":'15px'}}
            >
              <Typography>{title}</Typography>
              {children}
            </Box>
          </Box>
        </Box>
      </Dialog>
      <Footer />
    </>
  );
};
 export default LayoutWrapper;
