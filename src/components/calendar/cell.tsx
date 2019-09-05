import React from 'react';
import { Grid, makeStyles, Typography, Avatar } from '@material-ui/core';
import { weekdays, months, areDatesOnSameDay } from '../../utils/date-helpers';
import { useEventContext } from '../../context-providers/event-context';
import { EventMarker } from './cell-event';

interface Props {
  header: boolean;
  date: Date;
  onClick: () => void;
}

const cellStyles = makeStyles(theme => ({
  grid: {
    width: 'calc(100% / 7)',
  },
  paper: {
    borderRight: '1px solid #ccc',
    borderBottom: '1px solid #ccc',
    padding: 6,
    borderRadius: 0,
    minHeight: 140,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  today: {
    backgroundColor: 'rgba(222, 53, 158,1)',
    color: 'white',
    fontSize: 14,
    width: 30,
    height: 30,
  },
  avatar: {
    backgroundColor: 'white',
    color: '#333',
    fontSize: 14,
  },
}));
export const Cell: React.FunctionComponent<Props> = ({
  date,
  header,
  onClick,
}) => {
  const classes = cellStyles();
  const day = date.getDate();
  const dateText = day === 1 ? `${months[date.getMonth()]} ${day}` : day;
  const ctx = useEventContext();
  const event = ctx.getEvent(date);
  const isToday = areDatesOnSameDay(new Date(), date);
  return (
    <Grid item className={classes.grid}>
      <div className={classes.paper} onClick={onClick}>
        {header && (
          <Typography style={{ marginBottom: 6 }} variant="h6" component="h4">
            {weekdays[date.getDay()]}
          </Typography>
        )}
        {day === 1 ? (
          <Typography component="div">{dateText}</Typography>
        ) : (
          <Avatar className={isToday ? classes.today : classes.avatar}>
            {dateText}
          </Avatar>
        )}

        {event && <EventMarker event={event} />}
      </div>
    </Grid>
  );
};
