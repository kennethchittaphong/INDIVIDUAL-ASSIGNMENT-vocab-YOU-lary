const monthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// GET DATE IN MM/DD/YYYY FORMAT
const getDate = () => {
  const date = new Date();
  const month = monthArray[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const fullDate = `${month}/${day}/${year}`;

  return fullDate;
};

// GET TIME IN HH:MM AM/PM FORMAT
const getTime = () => {
  const time = new Date();
  let hour = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
  const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();

  if (hour >= 12) {
    if (hour > 12) {
      hour -= 12;
      hour = `0${hour}`;
    }
    const pmTime = `${hour}:${minutes} PM`;
    return pmTime;
  }

  const amTime = `${hour}:${minutes} AM`;
  return amTime;
};

// GET UTC TIME
const getUTCTime = () => {
  const date = new Date();
  const utcTime = date.getTime();

  return utcTime;
};

export { getDate, getTime, getUTCTime };
