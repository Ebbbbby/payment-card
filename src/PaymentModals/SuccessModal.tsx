import { Box } from '@mui/material';
import InfoCard from '../components/informationCard/InformationCard';
import SuccessIcon from "../assets/success.svg";
import ButtonTemplate from '../components/sharedUI/Button';

const SuccessModal = () => {
  return (
    <Box sx={{ paddingX: "20px" }}>
      <InfoCard
        icon={SuccessIcon}
        title="Payment Successful"
        text="We’ve received your payment. Your receipt has been sent to your email. Thanks for choosing us."
      />
      <ButtonTemplate type="submit">Done</ButtonTemplate>
    </Box>
  );
}

export default SuccessModal