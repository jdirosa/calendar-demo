import { CalendarEvent, EventType } from '../../types';

export interface EventContextStore {
  events: CalendarEvent[];
  activeEvent?: CalendarEvent;
  setActiveEvent: (event?: CalendarEvent) => void;
  addEvent: (
    title: string,
    description: string,
    type: EventType,
    date: Date
  ) => void;
  deleteEvent: (eventId: string) => void;
  getEvent: (date: Date) => CalendarEvent | undefined;
}

export const defaultEventContextStore: EventContextStore = {
  events: [],
  activeEvent: undefined,
  setActiveEvent: () => null,
  addEvent: () => null,
  deleteEvent: () => null,
  getEvent: () => undefined,
};
