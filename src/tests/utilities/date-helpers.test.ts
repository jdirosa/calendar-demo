import {
  areDatesOnSameDay,
  getFormattedDate,
  weekdays,
  months,
} from '../../utils/date-helpers';

test('compares the same date and returns true', () => {
  const isDaySame = areDatesOnSameDay(new Date(), new Date());
  expect(isDaySame).toBe(true);
});

test('compares the different date and returns false', () => {
  const now = new Date();
  const oldDate = new Date(2018, now.getMonth(), now.getDate());
  const isDaySame = areDatesOnSameDay(new Date(), oldDate);
  expect(isDaySame).toBe(false);
});

test('gets the string represenation of a date', () => {
  const d = new Date(2018, 4, 1);
  expect(getFormattedDate(d)).toBe('Tuesday, May 1, 2018');
});

test('0 should be Sunday', () => {
  expect(weekdays[0]).toBe('Sunday');
});
test('6 should be Saturday', () => {
  expect(weekdays[6]).toBe('Saturday');
});
test('0 should be January', () => {
  expect(months[0]).toBe('January');
});
test('11 should be December', () => {
  expect(months[11]).toBe('December');
});
