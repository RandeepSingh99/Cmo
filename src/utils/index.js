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

export const  formatToIndianUnits=(amount) =>{
  amount = amount.split(',').join('');
  amount = amount.replace('₹', '');
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)} Cr+`;
  } else if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(2)} Lac+`;
  } else {
    return `₹${amount.toLocaleString('en-IN')}`;
  }
}
export const fixUrl=(url)=> {
  return url.replace(/\\/g, '/');
}