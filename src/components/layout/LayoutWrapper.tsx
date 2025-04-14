import { Box, Dialog, IconButton, Typography } from "@mui/material";
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
              [theme.breakpoints.down("sm")]: {
                overflowX: "auto",
                maxWidth: "calc(100vw - 32px)",
              },
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
            zIndex: 2,
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
              width: "700px",
              minWidth: "700px",
            },
          }}
        >
          <Header />
          <Box display="flex">
            <PaymentSidebar disable = {disableSidebar}/>
            <Box flexGrow={1} p={2} sx={{ width: "100px" }}>
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
