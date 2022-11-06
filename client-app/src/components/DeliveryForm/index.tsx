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
import { useGlobalState } from '../../context/MainContext';
import { BuildDeliveryInfoObject, BuildOrderDTO } from '../../hooks/OrderDTO';
import { postOrder } from '../../hooks/apiHook';

interface Props {
  title: string;
  isPickedUp: boolean;
}

export default function DeliveryForm({ title, isPickedUp }: Props) {
  const navigate = useNavigate();
  const { state, setState } = useGlobalState();

  const [formState, setFormState] = useState({
    name: '',
    phoneNumber: '',
    hasTrackingSMS: true,
    address: '',
    time: new Date().toISOString().substring(0, 19),
    comment: '',
  });

  const handlePickUpInfo = async (isPickUp: boolean) => {
    var address: string = formState.address;
    var phoneNumber: string = formState.phoneNumber;
    var smsTracking: boolean = formState.hasTrackingSMS;
    var name: string = formState.name;
    var comment: string = formState.comment;
    var deliveryInfo = BuildDeliveryInfoObject(
      isPickUp,
      address,
      phoneNumber,
      smsTracking,
      name,
      comment
    );
    if (isPickUp) {
      navigate('/delivery/dropoff');
      setState((prev) => ({ ...prev, pickup: deliveryInfo }));
    } else {
      setState((prev) => ({ ...prev, dropoff: deliveryInfo }));
      var orderDTO = BuildOrderDTO(
        state.pickup,
        state.dropoff,
        false,
        state.orderContent,
        [],
        5,
        formState.time
      );
      if (state.orderDTO) {
        var postResponse = await postOrder(orderDTO);
        console.log("response: ", postResponse);
        if (!postResponse) {
          alert('Post order failed, please try again');
        }
        var trackingLink = postResponse.tracking.url;
        setState((prev) => ({ ...prev, trackingLink: trackingLink }));
        navigate('/delivery/loading');
      }
      
    }
  };

  const handleButtonClick = (event: any) => {
    event.preventDefault();

    if (
      formState.name !== '' &&
      formState.phoneNumber !== '' &&
      formState.address !== '' &&
      formState.time !== ''
    ) {
      handlePickUpInfo(isPickedUp);
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
        label='Phone number with country code, e.g +358xxxxxxxxx'
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
          value={formState.time}
          onChange={(event) => {
            setFormState({ ...formState, time: event.target.value });
          }}
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
