/** Returns the number of days in the current month */
export function getDaysInMonth() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), -1).getDate();
}

/** Used to produce dates in terms of days from the current date */
export function getNextDate(day: number) {
  const now = new Date();
  const first = new Date(now.getFullYear(), now.getMonth(), 1);
  return new Date(first.setDate(first.getDate() + day));
}

/** Used to correct the calendar starting date to correctly align with Monday */
export function getCalendarOffset() {
  const now = new Date();
  const day = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
  return day === 0 ? 6 : day - 1;
}

/** Return true if two dates are the exact same day */
export function areDatesOnSameDay(date1: Date, date2: Date) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

/** Fromat the date in the format Thursday, Setpember 5, 2019  */
export function getFormattedDate(date: Date) {
  return `${weekdays[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
}

/** A constant to help map the day string with the date day number */
export const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

/** A constant to map the month string with the date month numbner */
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
