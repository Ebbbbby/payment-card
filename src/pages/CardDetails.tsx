import {
  Box,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import InputTemplate from "../components/formInput/InputTemplate";
import ButtonTemplate from "../components/sharedUI/Button";
import { useForm, Controller } from "react-hook-form";

import {
  formatCardNumber,
  formatExpiryDate,
  validateCardNumber,
  validateCvv,
  validateExpiryDate,
} from "../helpers";

type FormValues = {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  rememberCard: boolean;
};
type Props = {
  onNext: () => void;
};
const CardDetails = ({ onNext }: Props) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    trigger,
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      rememberCard: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    onNext();
  };

  const watchFields = watch(["cardNumber", "expiryDate", "cvv"]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid size={12}>
        <Box>
          <Typography
            variant="body2"
            sx={{ mb: 3, fontSize: "14px", fontWeight: 400 }}
          >
            Enter your card details to complete payment
          </Typography>

          <Controller
            name="cardNumber"
            control={control}
            rules={{ validate: validateCardNumber }}
            render={({ field: { value, onChange, ...field } }) => (
              <InputTemplate
                {...field}
                label="Card Number"
                placeholder="0000 0000 0000 0000"
                value={formatCardNumber(value)}
                onChange={(e) => {
                  const val = e.target.value.replace(/\s/g, "");
                  if (val.length <= 16) {
                    onChange(val);
                    trigger("cardNumber");
                  }
                }}
                type="text"
                disabled={!watchFields[0]}
                error={!!errors.cardNumber}
                helperText={errors.cardNumber?.message}
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: watchFields[0] ? "transparent" : "",
                  },
                }}
              />
            )}
          />

          <Grid container spacing={2}>
            <Grid size={6}>
              <Controller
                name="expiryDate"
                control={control}
                rules={{ validate: validateExpiryDate }}
                render={({ field: { value, onChange, ...field } }) => (
                  <InputTemplate
                    {...field}
                    label="Expiry date"
                    placeholder="MM / YY"
                    value={formatExpiryDate(value)}
                    onChange={(e) => {
                      const rawValue = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 4);
                      onChange(rawValue);
                      trigger("expiryDate");
                    }}
                    type="text"
                    disabled={!watchFields[1]}
                    error={!!errors.expiryDate}
                    helperText={errors.expiryDate?.message}
                    sx={{
                      "& .MuiInputBase-root": {
                        backgroundColor: watchFields[1] ? "transparent" : "",
                      },
                    }}
                  />
                )}
              />
            </Grid>
            <Grid size={6}>
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{ mr: 1, fontWeight: 400, fontSize: "14px" }}
                  >
                    CVV
                  </Typography>
                  <InfoOutlinedIcon style={{ fontSize: "16px" }} />
                </Box>
                <Controller
                  name="cvv"
                  control={control}
                  rules={{ validate: validateCvv }}
                  render={({ field }) => (
                    <InputTemplate
                      {...field}
                      label=""
                      placeholder="123"
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        if (val.length <= 3) {
                          field.onChange(val);
                          trigger("cvv");
                        }
                      }}
                      type="text"
                      disabled={!watchFields[2]}
                      error={!!errors.cvv}
                      helperText={errors.cvv?.message}
                      sx={{
                        "& .MuiInputBase-root": {
                          backgroundColor: watchFields[2] ? "transparent" : "",
                        },
                      }}
                    />
                  )}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Controller
          name="rememberCard"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  size="small"
                  sx={{
                    "&.Mui-checked": {
                      border: "1px solid primary.main",
                    },
                  }}
                />
              }
              label={
                <Typography variant="body2">
                  Remember this card next time
                </Typography>
              }
              sx={{ mb: 2, fontSize: "14px", fontWeight: 400 }}
            />
          )}
        />

        <ButtonTemplate type="submit" disabled={!isValid}>
          Continue
        </ButtonTemplate>
      </Grid>
    </form>
  );
};

export default CardDetails;
