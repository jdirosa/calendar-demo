import React from 'react';
import { CalendarEvent, EventType } from '../../types';
import { makeStyles } from '@material-ui/styles';
import { EVENT_COLORS } from '../../constants';
import { trimText } from '../../utils/text-helpers';
import { Typography } from '@material-ui/core';

const styles = (event: CalendarEvent) =>
  makeStyles(theme => ({
    event: {
      margin: 10,
      padding: 6,
      backgroundColor:
        event.type === EventType.Birthday
          ? EVENT_COLORS.birthday
          : event.type === EventType.Holiday
          ? EVENT_COLORS.holiday
          : event.type === EventType.NewHire
          ? EVENT_COLORS.newHire
          : EVENT_COLORS.personalDay,
      color: 'white',
      borderRadius: 5,
    },
  }));

interface Props {
  event: CalendarEvent;
}
export const EventMarker: React.FunctionComponent<Props> = ({ event }) => {
  const classes = styles(event)();
  const text = trimText(16, event.title);
  return (
    <div className={classes.event}>
      <Typography>{text}</Typography>
    </div>
  );
};
