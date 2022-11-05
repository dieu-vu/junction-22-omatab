import { useNavigate } from 'react-router-dom';

import {
  TextField,
  Typography,
  Switch,
  FormGroup,
  FormControlLabel,
  Button,
} from '@mui/material';
import { useState } from 'react';

import './styles.css';

interface Props {
  title: string;
  isPickedUp: boolean;
}

export default function DeliveryForm({ title, isPickedUp }: Props) {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    name: '',
    phoneNumber: '',
    hasTrackingSMS: true,
    address: '',
    time: new Date().toISOString().substring(0, 19),
    comment: '',
  });

  const handleButtonClick = (event: any) => {
    event.preventDefault();

    if (
      formState.name !== '' &&
      formState.phoneNumber !== '' &&
      formState.address !== '' &&
      formState.time !== ''
    ) {
      isPickedUp ? navigate('/delivery/dropoff') : console.log(formState);
    }
  };

  return (
    <form className='form-container' onSubmit={handleButtonClick}>
      <Typography variant='h3' marginBottom={2}>
        {title}
      </Typography>
      <Typography variant='h5' marginBottom={2}>
        Contact Details
      </Typography>

      <TextField
        id='outlined-basic'
        label='Name'
        variant='outlined'
        required
        value={formState.name}
        onChange={(event) =>
          setFormState({ ...formState, name: event.target.value })
        }
        style={{ marginBottom: 10 }}
      />
      <TextField
        id='outlined-basic'
        label='Phone number'
        variant='outlined'
        required
        value={formState.phoneNumber}
        onChange={(event) =>
          setFormState({ ...formState, phoneNumber: event.target.value })
        }
        style={{ marginBottom: 10 }}
      />
      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked={formState.hasTrackingSMS} />}
          label='Send tracking SMS'
        />
      </FormGroup>

      <Typography variant='h5' marginTop={3} marginBottom={2}>
        Location and time
      </Typography>
      <TextField
        id='address'
        label='Address'
        variant='outlined'
        required
        value={formState.address}
        onChange={(event) =>
          setFormState({ ...formState, address: event.target.value })
        }
        style={{ marginBottom: 10 }}
      />

      {!isPickedUp && (
        <TextField
          id='datetime-local'
          label='Pick a time'
          type='datetime-local'
          defaultValue={formState.time}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300,
          }}
          style={{ marginTop: 10, marginBottom: 10 }}
        />
      )}

      <TextField
        id='comment'
        label='Additional comment'
        variant='outlined'
        value={formState.comment}
        onChange={(event) =>
          setFormState({ ...formState, comment: event.target.value })
        }
        multiline
        rows={5}
        style={{ marginBottom: 10 }}
      />

      <Button type='submit' variant='contained'>
        Next
      </Button>
    </form>
  );
}
