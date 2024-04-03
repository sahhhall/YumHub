export const calculateEstimatedDelivery = (
  distance: number,
  openingHours: number
) => {
  const km = (distance / 1000).toFixed(1);
  const calculateEstimatedDelivery = (Number(km) * openingHours + 5).toFixed(0);
  return calculateEstimatedDelivery;
};
