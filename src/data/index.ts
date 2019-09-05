import { CalendarEvent, EventType } from '../types';
import { getNextDate } from '../utils/date-helpers';
import uuid from 'uuid/v1';

/** Some starting data to hydrate the app */
export function generateDefaultEventData() {
  const dates: Date[] = [getNextDate(15), getNextDate(17)];
  const response: CalendarEvent[] = [
    {
      date: dates[0],
      title: `Mom's Birthday!`,
      description: `Don't forget... AGAIN!`,
      id: uuid(),
      type: EventType.Birthday,
    },
    {
      date: dates[1],
      title: `James Hired!`,
      description: `And we thought the perfect Calendar App didn't exist...`,
      id: uuid(),
      type: EventType.NewHire,
    },
  ];
  return response;
}
