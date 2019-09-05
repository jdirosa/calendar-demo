import { defaultEventContextStore } from '../../context-providers/types';
import { EventType } from '../../types';

test('default EventContextStore should return null', () => {
  expect(defaultEventContextStore.setActiveEvent()).toBe(null);
  expect(
    defaultEventContextStore.addEvent('', '', EventType.NewHire, new Date())
  ).toBe(null);
  expect(defaultEventContextStore.deleteEvent('')).toBe(null);
  expect(defaultEventContextStore.getEvent(new Date())).toBe(undefined);
});
