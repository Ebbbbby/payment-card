import InfoCard from '../components/informationCard/InformationCard';
import RedirectIcon from '../assets/redirect.svg'
import { Box } from '@mui/material';
import ButtonTemplate from '../components/sharedUI/Button';

type Props = {
  onNext: () => void;
};
const RedirectVerification = ({  onNext }: Props) => {

  return (
    <Box>
      <InfoCard
        icon={RedirectIcon }
        text="You will be redirected to your card issuer’s verification page to complete this transaction"
      />
      <ButtonTemplate type="submit" onClick={onNext}>
        Continue
      </ButtonTemplate>
    </Box>
  );
}

export default RedirectVerification;