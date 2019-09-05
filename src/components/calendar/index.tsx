import React from 'react';
import { makeStyles, Grid, Paper, Typography } from '@material-ui/core';
import { Cell } from './cell';
import {
  getDaysInMonth,
  getNextDate,
  getCalendarOffset,
  months,
} from '../../utils/date-helpers';
import { NewEvent } from './modals/new-event';
import { useEventContext } from '../../context-providers/event-context';
import { EventType } from '../../types';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
}));
export const Calendar: React.FunctionComponent = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();
  const ctx = useEventContext();
  const handleSaveEvent = (
    title: string,
    description: string,
    type: EventType
  ) => {
    if (!selectedDate) {
      return;
    }
    ctx.addEvent(title, description, type, selectedDate);
    setSelectedDate(undefined);
  };
  const handleCellClick = (date: Date) => {
    const event = ctx.getEvent(date);
    if (event) {
      ctx.setActiveEvent(event);
    } else {
      setSelectedDate(date);
    }
  };
  const currentMonth = months[new Date().getMonth()];
  return (
    <React.Fragment>
      <Typography variant="h4">{currentMonth}</Typography>
      <Paper className={classes.root}>
        <Grid container>
          {getCalendarDays().map((d, i) => (
            <Cell
              key={i}
              date={getNextDate(d)}
              header={i < 7}
              onClick={() => handleCellClick(getNextDate(d))}
            />
          ))}
        </Grid>
        <NewEvent
          date={selectedDate}
          onSave={handleSaveEvent}
          onCancel={() => setSelectedDate(undefined)}
        />
      </Paper>
    </React.Fragment>
  );
};

/** Returns the number of days required to perfectly balance the calendar for the month. Including previous month and next month days */
const getCalendarDays = () => {
  const d = [];
  const offset = getCalendarOffset();

  const totalDays = getDaysInMonth() + offset;
  for (let i = -1 * offset; i < totalDays; i++) {
    d.push(i);
  }
  return d.sort((a, b) => a - b);
};
