export const generateRandomNumber = max => {
  return Math.floor(Math.random() * max); // Generates a random number from 0 to max-1
};
export const dateFormatter = (dateStr = '') => {
  if (dateStr === '') {
    return '';
  }
  const date = new Date(dateStr);
  const options = {day: '2-digit', month: 'short', year: 'numeric'};
  const formattedDate = date.toLocaleDateString('en-GB', options);
  return formattedDate;
};
