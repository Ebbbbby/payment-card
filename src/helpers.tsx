export const validateExpiryDate = (value: string) => {
  if (!/^\d{4}$/.test(value)) return "Use MM/YY format";

  const month = parseInt(value.slice(0, 2), 10);
  const year = parseInt(value.slice(2), 10);

  const currentYear = new Date().getFullYear() % 100;
  const currentMonth = new Date().getMonth() + 1;

  if (month < 1 || month > 12) return "Invalid month";
  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return "Card expired";
  }
  return true;
};

export const validateCardNumber = (value: string) => {
  const card = value.replace(/\s/g, "");
  if (!/^\d{16}$/.test(card)) return "Card number must be 16 digits";
  return true;
};

export const validateCvv = (value: string) => {
  if (!/^\d{3,4}$/.test(value)) return "CVV must be 3 digits";
  return true;
};

export const formatExpiryDate = (value: string) => {
  const date = value.replace(/\D/g, "").slice(0, 4);
  if (date.length < 3) return date;
  return `${date.slice(0, 2)} / ${date.slice(2)}`;
};
 export const formatCardNumber = (value: string) => {
   return value
     .replace(/\s/g, "")
     .replace(/(\d{4})/g, "$1 ")
     .trim();
 };