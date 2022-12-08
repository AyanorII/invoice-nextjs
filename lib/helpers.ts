export const getFormattedDate = (date: Date) => {
  const formattedPaymentDue = new Date(date).toLocaleDateString("en-UK", {
    day: "numeric",
    year: "numeric",
    month: "short",
  });
  return formattedPaymentDue;
};

export const getFormattedPrice = (price: number) => {
  return price.toLocaleString("en-UK", {
    style: "currency",
    currency: "EUR",
  });
};
