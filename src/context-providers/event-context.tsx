import React, { useContext } from 'react';
import { generateDefaultEventData } from '../data';
import { EventContextStore, defaultEventContextStore } from './types';
import { CalendarEvent, EventType } from '../types';
import { areDatesOnSameDay } from '../utils/date-helpers';
import uuid from 'uuid/v1';

const EventContext = React.createContext<EventContextStore>(
  defaultEventContextStore
);
export const useEventContext = () => useContext(EventContext);

export const EventContextProvider: React.FunctionComponent = ({
  children,
}: any) => {
  const [events, setEvents] = React.useState(generateDefaultEventData());
  const [activeEvent, setActiveEvent] = React.useState<CalendarEvent>();

  const handleAddEvent = (
    title: string,
    description: string,
    type: EventType,
    date: Date
  ) => {
    const newEvents = [...events];
    const newEvent: CalendarEvent = {
      date,
      title,
      description,
      id: uuid(),
      type,
    };
    newEvents.push(newEvent);
    setEvents(newEvents);
  };
  const handleDeleteEvent = (id: string) => {
    const newEvents = [...events];
    const idx = newEvents.findIndex(n => n.id === id);
    if (idx < 0) {
      // not found. Throw error in real world scenario
      return;
    }
    newEvents.splice(idx, 1);
    setEvents(newEvents);
  };
  const handleGetEvent = (date: Date) => {
    return events.find(e => areDatesOnSameDay(e.date, date));
  };
  const value: EventContextStore = {
    activeEvent,
    setActiveEvent,
    addEvent: handleAddEvent,
    deleteEvent: handleDeleteEvent,
    getEvent: handleGetEvent,
    events,
  };
  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
};
