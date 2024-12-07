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

 export function formatToIndianUnits(input) {
  const number = parseFloat(input.replace(/,/g, ''));
  
    if (isNaN(number)) {
        return "Invalid number";
    }

    if (number >= 10000000) { // 1 Crore
        return (number / 10000000).toFixed(2) + " Cr+";
    } else if (number >= 100000) { // 1 Lac
        return (number / 100000).toFixed(2) + " Lac+";
    } else {
        return number.toString(); // Less than 1 Lac
    }
}