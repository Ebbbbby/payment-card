import { Button, ButtonProps } from "@mui/material";


const ButtonTemplate = (props: ButtonProps) => {
  return (
    <Button
      fullWidth
      disabled={props.disabled}
      sx={{
        backgroundColor: "primary.main",
        color: "#fff !important",
        paddingY: 1,
        paddingX: 4,
        fontWeight: 500,
        textTransform: "capitalize",
        marginY: 2,
        fontSize: "0.95rem",
        "&:hover": {
          backgroundColor: "#d85c23",
        },
        "&:disabled": {
          backgroundColor: "#F8AD8C",
          color: "#fff !important",
        },
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default ButtonTemplate;