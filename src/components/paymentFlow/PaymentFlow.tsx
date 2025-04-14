import { useState } from "react";
import { Dialog } from "@mui/material";
import CardDetails from "../../pages/CardDetails";
import CardPin from "../../pages/CardPin";
import PhonePin from "../../pages/PhonePin";
import RedirectVerification from "../../pages/RedirecttVerification";
import TransactionStatus from "../../pages/TransactionStatus";
import LayoutWrapper from "../layout/LayoutWrapper";
import SuccessModal from "../../PaymentModals/SuccessModal";
import FailedModal from "../../PaymentModals/FailedModal";
import PendingModal from "../../PaymentModals/PendingModal";

const PaymentFlow = () => {
  const [step, setStep] = useState(0);
  const [transactionStatus, setTransactionStatus] = useState<
    "success" | "failed" | "pending" | null
  >(null);
  const [showModal, setShowModal] = useState(false);

  const goNext = () => setStep((prev) => prev + 1);
  const goBack = () => setStep((prev) => prev - 1);

  const handlePhonePinNext = (status: "success" | "failed" | "pending") => {
    setTransactionStatus(status);
    setStep((prev) => prev + 1);
  };

  const handleRedirectNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setStep(0);
  };

  const steps = [
    <CardDetails onNext={goNext} />,
    <CardPin onNext={goNext} onBack={goBack} />,
    <PhonePin onNext={handlePhonePinNext} onBack={goBack} />,
    <RedirectVerification onNext={handleRedirectNext} />,
    <TransactionStatus
      transactionStatus={transactionStatus}
      onDone={() => setShowModal(true)}
    />,
  ];

  const renderModalContent = () => {
    if (transactionStatus == "pending") {
      return <PendingModal />;
    } else if (transactionStatus == "failed") {
      return <FailedModal />;
    } else {
      return <SuccessModal />;
    }
  };
const isSidebarDisabled = step >= 3;
  return (
    <>
      {!showModal && (
        <LayoutWrapper open disableSidebar={isSidebarDisabled}>
          {steps[step]}
        </LayoutWrapper>
      )}

      <Dialog
        open={showModal}
        onClose={handleCloseModal}
        sx={{ padding: "4px" }}
      >
        {renderModalContent()}
      </Dialog>
    </>
  );
};

export default PaymentFlow;
