import { useEffect } from 'react';
import Status from '../assets/status.svg'
import InfoCard from '../components/informationCard/InformationCard';
import { Box, CircularProgress } from '@mui/material';
type Props = {
  transactionStatus: "success" | "failed" | "pending" | null;
  onDone: () => void;
};
const TransactionStatus = ({ transactionStatus, onDone }: Props) => {
   useEffect(() => {
     const timeout = setTimeout(() => {
       onDone();
     }, 3000);

     return () => clearTimeout(timeout);
   }, [onDone, transactionStatus]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <InfoCard
        icon={Status}
        title="Checking transaction status"
        text="Please don’t leave this page"
      />
      <CircularProgress />
    </Box>
  );
};

export default TransactionStatus