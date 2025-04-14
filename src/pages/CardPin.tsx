
import { useForm } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import ButtonTemplate from "../components/sharedUI/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PinInput from "../components/formInput/PinInput";
import { useState } from "react";


/* eslint-disable  @typescript-eslint/no-explicit-any */
type Props = {
  onBack: () => void;
  onNext: () => void;
};
const CardPin = ({ onBack, onNext }: Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: { cardPin: "" },
  });

  const [isComplete, setIsComplete] = useState(false);

  const onSubmit = (data: any) => {
    console.log("PIN Submitted:", data);
     onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{ width: "100%" }}
      >
        <Typography
          variant="body2"
          onClick={() => onBack()}
          sx={{ cursor: "pointer", color: "text.main", mb: 1 }}
        >
          <KeyboardBackspaceIcon />
        </Typography>
        <Typography
          variant="body2"
          sx={{ mb: 3, fontSize: "14px", fontWeight: 400 }}
        >
          Please enter your 4 digits card PIN to authorise this payment
        </Typography>
        <PinInput
          name="cardPin"
          control={control}
          inputType="password"
          onComplete={setIsComplete}
        />
        <ButtonTemplate type="submit" disabled={!isComplete}>
          Continue
        </ButtonTemplate>
      </Box>
    </form>
  );
};

export default CardPin;
