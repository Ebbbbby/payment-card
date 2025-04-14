import { Box, TextField, Typography } from "@mui/material";
import { InputProps } from "../../../types/types";

const InputTemplate = ({
  label,
  placeholder,
  value,
  onChange,
  onFocus,
  helperText,
  error = false,
  sx,
}: InputProps) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography
        variant="body1"
        sx={{ mb: 1, fontWeight: 400, fontSize: "14px" }}
      >
        {label}
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        error={error}
        helperText={helperText}
        size="small"
        sx={sx}
      />
    </Box>
  );
};

export default InputTemplate;
