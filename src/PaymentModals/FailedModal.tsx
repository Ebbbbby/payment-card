import { Box,Link as MuiLink  } from '@mui/material';
import InfoCard from '../components/informationCard/InformationCard';
import ButtonTemplate from '../components/sharedUI/Button';
import FailedIcon from "../assets/failed.svg";

const FailedModal = () => {
  return (
    <Box sx={{ paddingX: "20px" }}>
      <InfoCard
        icon={FailedIcon}
        title="Payment failed "
        text="We couldn’t process your card, verify your card details and try again"
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
}

export default FailedModal