import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { PaymentMethodsProps } from "../../../types/types";

const PaymentMethod = ({
  icon,
  label,
  selected,
  onClick,
}: PaymentMethodsProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        minWidth: isSmallScreen ? "100px" : "240px",
        height: isSmallScreen ? "30px" : "52px",
        paddingLeft: isSmallScreen ? "0px" : "2px",
        borderRadius: 1,
        paddingX: isSmallScreen ? "2px" : "15px",
        cursor: "pointer",
        backgroundColor: selected ? "primary.light" : "transparent",
        border: isSmallScreen?"1px solid red":"none",
        fontSize: isSmallScreen?"0px":"14px",
        borderLeft: isSmallScreen
          ? "1px solid red"
          : selected
          ? "3px solid"
          : "3px solid transparent",
        borderColor: isSmallScreen
          ? "transparent"
          : selected
          ? "primary.main"
          : "transparent",
        mb: 1,
        "&:hover": {
          backgroundColor: selected ? "primary.light" : "",
        },
      }}
    >
      {!isSmallScreen && (
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
      )}

      <Typography
        variant="body1"
        sx={{
          fontSize: "14px",
          fontWeight: 500,
          color: "text.primary",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default PaymentMethod;
