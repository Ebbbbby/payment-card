import { Box, Typography } from "@mui/material";
import { PaymentMethodsProps } from "../../../types/types";

const PaymentMethod = ({
  icon,
  label,
  selected,
  onClick,
}: PaymentMethodsProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        width: "240px",
        height: "54px",
        paddingLeft: "15px",
        borderRadius: 1,
        cursor: "pointer",
        backgroundColor: selected ? "primary.light" : "transparent",
        borderLeft: selected ? "3px solid" : "3px solid transparent",
        borderColor: selected ? "primary.main" : "transparent",
        mb: 1,
        "&:hover": {
          backgroundColor: selected ? "primary.light" : "grey.100",
        },
      }}
    >
      <Box
        sx={{
          mr: 2,
          opacity: 0.8,
          backgroundColor: selected ? "#FCDCCF" : "#F4F4F5",
          borderRadius: "50px",
          padding: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={icon} alt={label} width={20} height={20} />
      </Box>
      <Typography variant="body1" sx={{fontSize:'14px', fontWeight:500, color: "text.primary"}}>{label}</Typography>
    </Box>
  );
};

export default PaymentMethod;
