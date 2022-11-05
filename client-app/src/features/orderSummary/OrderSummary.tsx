import Header from '../../components/Header/Header';
import PrescriptionSummary from './PrescriptionSummaryCard';
import PatientCard from './PatientCard';
import { useNavigate } from 'react-router-dom';
// import { patient } from '../../data/patient';
import './styles.css';
import { CreateOrderContentFromPrescription } from '../../hooks/OrderDTO';
import { prescriptions } from '../../data/prescriptions';
import { useGlobalState } from '../../context/MainContext';
import { useEffect } from 'react';

import './styles.css';
import { Button } from '@mui/material';

const OrderSummary = () => {
  const navigate = useNavigate();
  const { state, setState } = useGlobalState();
  var contents = CreateOrderContentFromPrescription(prescriptions);
  useEffect(() => {
    setState((prev) => ({ ...prev, orderContent: contents }));
    //   console.log("contents", contents);
    //   console.log("setState", state.orderContent);
  });

  return (
    <>
      <Header title='Order Summary' />
      {state.orderContent !== undefined && (
        <p>{state.orderContent[0]?.description?.toString()}</p>
      )}
      <div className='order-container'>
        <div className='summary'>
          <div className='left-card'>
            <a href="/delivery/dropoff"><PatientCard /></a>
          </div>
          <div className='right-card'>
            <PrescriptionSummary />
          </div>
        </div>
        <div className='button-container'>
          <Button
            variant='contained'
            onClick={() => navigate('/delivery/pickup')}>
            Go to Delivery Information
          </Button>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
