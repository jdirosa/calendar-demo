import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  DialogActions,
  Typography,
} from '@material-ui/core';
import { useEventContext } from '../../context-providers/event-context';
import { getFormattedDate } from '../../utils/date-helpers';
import { red } from '@material-ui/core/colors';

export const EventViewer: React.FunctionComponent = () => {
  const { activeEvent, setActiveEvent, deleteEvent } = useEventContext();
  const handleClose = () => setActiveEvent(undefined);
  const handleDelete = () => {
    deleteEvent(activeEvent!.id);
    handleClose();
  };
  const title = activeEvent ? activeEvent.title : '';
  const date = activeEvent ? activeEvent.date : new Date();
  const type = activeEvent ? activeEvent.type : '';
  const description = activeEvent ? activeEvent.description : '';
  return (
    <Dialog fullWidth maxWidth="md" open={!!activeEvent} onClose={handleClose}>
      <React.Fragment>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText component="div">
            <Typography variant="h6" component="h3">
              When
            </Typography>
            <Typography variant="body1" component="div">
              {getFormattedDate(date)}
            </Typography>
            <br />
            <Typography variant="h6" component="h3">
              What
            </Typography>
            <Typography variant="body1" component="div">
              {type}
            </Typography>
            <br />
            {description !== '' && (
              <React.Fragment>
                <Typography variant="h6" component="h3">
                  Details
                </Typography>
                <Typography variant="body1" component="div">
                  {description}
                </Typography>
              </React.Fragment>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            style={{ backgroundColor: red[400], color: 'white' }}
            onClick={handleDelete}
          >
            Delete this Event
          </Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </React.Fragment>
    </Dialog>
  );
};
