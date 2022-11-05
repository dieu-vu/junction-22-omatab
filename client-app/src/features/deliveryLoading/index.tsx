import Header from '../../components/Header/Header';
import { ReactComponent as Loading } from '../../assets/delivery_loading.svg';
import {
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
  Button
} from '@mui/material';
import { useEffect, useState } from 'react';
import { steps } from '../../data/steps';
import { useGlobalState } from '../../context/MainContext';

import './styles.css';

export default function DeliveryLoading() {
  const [activeStep, setActiveStep] = useState(0);
  const { state } = useGlobalState();
  const trackingLink = state.trackingLink;

  useEffect(() => {
    setTimeout(() => setActiveStep(activeStep + 1), 5000);
  }, [activeStep]);

  return (
    <>
      <Header title='Tracking Delivery' />
      <div className='tracking-page'>
        <div className='tracking-container'>
          <Stepper
            activeStep={activeStep}
            orientation='vertical'
            style={{ marginTop: '50px' }}>
            {steps.map((step) => (
              <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </div>
        <div className='button-container'>
        <Button
            variant='contained'
            onClick={() => window.open(trackingLink, '_blank', 'noopener,noreferrer')}>
            Open tracking on Wolt
          </Button>
        </div>
        
        <Loading width='20%' style={{ position: 'absolute' }} />
      </div>
    </>
  );
}
