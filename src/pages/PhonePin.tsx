import { useForm } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import ButtonTemplate from "../components/sharedUI/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PinInput from "../components/formInput/PinInput";
import { useState } from "react";

/* eslint-disable  @typescript-eslint/no-explicit-any */
type Props = {
  onBack: () => void;
  onNext: (status: "success" | "failed" | "pending") => void;
};

const PhonePin = ({ onBack, onNext }: Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: { phonePin: "" },
  });

  const [isComplete, setIsComplete] = useState(false);

  const onSubmit = (data: any) => {
    const pin = data.phonePin;
    let status: "success" | "failed" | "pending" = "pending";

    if (pin === "0000") {
      status = "pending";
    } else if (pin === "1111") {
      status = "failed";
    } else {
      status = "success";
    }

    onNext(status);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ width: "100%" }}>
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
          Please enter the 4 digits code sent to your phone number to complete
          this transaction
        </Typography>
        <PinInput
          name="phonePin"
          control={control}
          inputType="text"
          onComplete={setIsComplete}
        />
        <ButtonTemplate type="submit" disabled={!isComplete}>
          Pay KES 120,000.00
        </ButtonTemplate>
      </Box>
    </form>
  );
};


export default PhonePin;
