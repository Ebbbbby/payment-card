import { Box, Link as MuiLink } from "@mui/material";
import InfoCard from "../components/informationCard/InformationCard";
import ButtonTemplate from "../components/sharedUI/Button";
import PendingIcon from "../assets/pending.svg";

const PendingModal = () => {
  return (
    <Box sx={{ paddingX: "20px" }}>
      <InfoCard
        icon={PendingIcon}
        title="Payment pending "
        text="We haven’t received confirmation from your bank. If the payment fails, please contact your bank and try again"
      />
      <ButtonTemplate type="submit">Try Again</ButtonTemplate>

      <MuiLink href="" underline="hover" color="primary.main">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              color: "#08080C",
              marginBottom: "10px",
              textDecoration: "underline",
            }}
          >
            Cancel
          </span>
        </Box>
      </MuiLink>
    </Box>
  );
};

export default PendingModal;
