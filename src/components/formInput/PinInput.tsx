import { Controller } from "react-hook-form";
import OtpInput from "react-otp-input";
import { PinInputProps } from "../../../types/types";

const PinInput = ({
  name,
  control,
  inputType = "text",
  numInputs = 4,
  disabled = false,
  onComplete,
}: PinInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <OtpInput
          value={value}
          onChange={(val) => {
            onChange(val);
            if (onComplete) {
              onComplete(val.length === numInputs);
            }
          }}
          numInputs={numInputs}
          inputType={inputType}
          renderInput={(inputProps, index) => (
            <input
              {...inputProps}
              key={index}
              style={{
                width: "50px",
                height: "50px",
                textAlign: "center",
                fontSize: "24px",
                borderRadius: "8px",
                border: "1px solid #D1D5DB",
                margin: "0 8px",
                backgroundColor: disabled ? "#f3f3f3" : "transparent",
                color: "#30303B",
                outline: "none",
              }}
              onFocus={(e) => {
                e.target.style.border = "2px solid #1976d2";
                e.target.style.boxShadow = "0 0 0 2px rgba(25, 118, 210, 0.2)";
              }}
              onBlur={(e) => {
                e.target.style.border = "1px solid #D1D5DB";
                e.target.style.boxShadow = "none";
              }}
            />
          )}
          containerStyle={{
            justifyContent: "start",
            marginBottom: "24px",
          }}
        />
      )}
    />
  );
};

export default PinInput;
