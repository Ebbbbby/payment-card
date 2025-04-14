

# Payment Flow Application

This application handles a multi-step payment process with different verification methods.

## Phone PIN Behavior

The transaction status is determined by the PIN entered in the Phone PIN verification step:

| PIN Entered | Transaction Status | Description
|-------------|--------------------|--------------------------------------
| `0000`      | `pending`          | Transaction will be marked as pending
| `1111`      | `failed`           | Transaction will fail
| Any other 4-digit PIN | `success`   | Transaction will succeed

## Development Notes

### Key Components

1. **PaymentFlow**: Main component that orchestrates the payment steps
2. **Steps**:
   - CardDetails
   - CardPin
   - PhonePin
   - RedirectVerification
   - TransactionStatus

