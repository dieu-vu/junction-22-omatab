import Header from '../../components/Header/Header';
import { ReactComponent as Loading } from '../../assets/delivery_loading.svg';
import {
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { steps } from '../../data/steps';

import './styles.css';

export default function DeliveryLoading() {
  const [activeStep, setActiveStep] = useState(0);

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
        <Loading width='20%' style={{ position: 'absolute' }} />
      </div>
    </>
  );
}
