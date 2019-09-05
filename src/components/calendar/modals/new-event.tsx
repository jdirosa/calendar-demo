import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogContentText,
  ButtonGroup,
  Button,
  DialogActions,
} from '@material-ui/core';
import { getFormattedDate } from '../../../utils/date-helpers';
import { EventType } from '../../../types';

interface Props {
  date?: Date;
  onSave: (title: string, description: string, type: EventType) => void;
  onCancel: () => void;
}
export const NewEvent: React.FunctionComponent<Props> = ({
  date,
  onSave,
  onCancel,
}) => {
  const [type, setType] = React.useState(EventType.Birthday);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSave = (e: React.MouseEvent<any>) => {
    onSave(title, description, type);
    reset();
  };
  const handleCancel = (e: React.MouseEvent<any>) => {
    reset();
    onCancel();
  };
  const reset = () => {
    setType(EventType.Birthday);
    setTitle('');
    setDescription('');
  };
  const handleTitleChanged = (e: React.ChangeEvent<any>) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChanged = (e: React.ChangeEvent<any>) => {
    setDescription(e.target.value);
  };
  const handleTypeSelected = (type: EventType) => (
    e: React.MouseEvent<any>
  ) => {
    setType(type);
  };
  const dialogText = date ? getFormattedDate(date) : '';
  return (
    <Dialog open={!!date} onClose={() => null}>
      <DialogTitle>New Event</DialogTitle>

      <DialogContent>
        <DialogContentText>
          Complete the form to create an event for <strong>{dialogText}</strong>
        </DialogContentText>
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={handleTitleChanged}
        />
        <ButtonGroup
          style={{ margin: '10px 0' }}
          color="primary"
          aria-label="outlined primary button group"
        >
          <Button
            onClick={handleTypeSelected(EventType.Birthday)}
            variant={type === EventType.Birthday ? 'contained' : 'outlined'}
          >
            Birthday
          </Button>
          <Button
            onClick={handleTypeSelected(EventType.NewHire)}
            variant={type === EventType.NewHire ? 'contained' : 'outlined'}
          >
            New Hire
          </Button>
          <Button
            onClick={handleTypeSelected(EventType.Holiday)}
            variant={type === EventType.Holiday ? 'contained' : 'outlined'}
          >
            Holiday
          </Button>
          <Button
            onClick={handleTypeSelected(EventType.PersonalDay)}
            variant={type === EventType.PersonalDay ? 'contained' : 'outlined'}
          >
            Personal Day
          </Button>
        </ButtonGroup>
        <TextField
          fullWidth
          multiline
          label="Description"
          value={description}
          onChange={handleDescriptionChanged}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button
          color="primary"
          variant="contained"
          disabled={title === ''}
          onClick={handleSave}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
