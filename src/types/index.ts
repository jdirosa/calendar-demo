export interface CalendarEvent {
  date: Date;
  type: EventType;
  description: string;
  title: string;
  id: string;
}
export enum EventType {
  Birthday = 'Birthday',
  NewHire = 'New Hire',
  Holiday = 'Holiday',
  PersonalDay = 'Personal Day',
}
