import { Box, Grid, Stack, Typography } from "@mui/material";

import PaymentMethod from "../paymentMethod/PaymemtMethod";
import { useState } from "react";
import CardIcon from "../../assets/card.svg";
import BankIcon from "../../assets/bank.svg";
import TransferIcon from "../../assets/transfers.svg";
import MobileIcon from "../../assets/mobile.svg";
import UssdIcon from "../../assets/ussd.svg";
import QrCodeIcon from "../../assets/code.svg";


interface PaymentSidebarProps {
  disable?: boolean;
}
const PaymentSidebar = ({ disable = false }: PaymentSidebarProps) => {
  const [selectedPayment, setSelectedPayment] = useState<string>("card");

  const handlePaymentMethodSelect = (method: string) => {
     if (!disable) {
       setSelectedPayment(method);
     }
  };
  return (
    <>
      <Grid
        sx={{
          borderRight: "1px solid #F1F2F4",
          width: "286px",
          opacity: disable ? 0.5 : 1,
          pointerEvents: disable ? "none" : "auto",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="body2" color="" sx={{ mb: 2 }}>
            Payment options
          </Typography>

          <Stack spacing={1}>
            <PaymentMethod
              icon={CardIcon}
              label="Card"
              selected={selectedPayment === "card"}
              onClick={() => handlePaymentMethodSelect("card")}
            />
            <PaymentMethod
              icon={BankIcon}
              label="Bank"
              selected={selectedPayment === "bank"}
              onClick={() => handlePaymentMethodSelect("bank")}
            />
            <PaymentMethod
              icon={UssdIcon}
              label="USSD"
              selected={selectedPayment === "ussd"}
              onClick={() => handlePaymentMethodSelect("ussd")}
            />
            <PaymentMethod
              icon={TransferIcon}
              label="Bank Transfer"
              selected={selectedPayment === "transfer"}
              onClick={() => handlePaymentMethodSelect("transfer")}
            />
            <PaymentMethod
              icon={QrCodeIcon}
              label="QR Code"
              selected={selectedPayment === "qr"}
              onClick={() => handlePaymentMethodSelect("qr")}
            />
            <PaymentMethod
              icon={MobileIcon}
              label="Mobile Money"
              selected={selectedPayment === "mobile"}
              onClick={() => handlePaymentMethodSelect("mobile")}
            />
          </Stack>
        </Box>
      </Grid>
    </>
  );
};

export default PaymentSidebar;
