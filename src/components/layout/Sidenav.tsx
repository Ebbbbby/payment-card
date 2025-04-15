import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

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
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <Box
      sx={{
        borderBottom: { xs: "1px solid #F1F2F4", sm: "none" },
        borderRight: { xs: "none", sm: "1px solid #F1F2F4" },
        width: { xs: "300px", sm: "286px"  },
        opacity: disable ? 0.5 : 1,
        pointerEvents: disable ? "none" : "auto",
        backgroundColor: "#fff",
        padding: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        variant="body2"
        sx={{ mb: 2, textAlign: { xs: "center", sm: "left" } }}
      >
        Payment options
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: isSmallScreen ? "auto" : "visible",
          gap: 1,
          pb: 1,
          width: isSmallScreen  ? "100%" : "auto",
        }}
      >
        <Stack
          direction={{ xs: "row", sm: "column" }}
          spacing={1}
          justifyContent="center"
          alignItems="center"
        >
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
    </Box>
  );
};
export default PaymentSidebar;
