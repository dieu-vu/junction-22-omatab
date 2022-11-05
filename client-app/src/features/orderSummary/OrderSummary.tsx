import Header from '../../components/Header/Header';
import PrescriptionSummary from './PrescriptionSummaryCard';
import PatientCard from './PatientCard';
// import { patient } from '../../data/patient';
import './styles.css';
import { CreateOrderContentFromPrescription } from '../../hooks/OrderDTO';
import { prescriptions } from '../../data/prescriptions';
import { useGlobalState } from '../../context/MainContext';
import { useEffect } from 'react';

const OrderSummary = () => {
  const { state, setState } = useGlobalState();
    var contents = CreateOrderContentFromPrescription(prescriptions);
  useEffect(
    () => {
          setState((prev) => ({ ...prev, orderContent: contents }));
          console.log("contents", contents);
          console.log("setState", state.orderContent);
      }, []);
    
  return (
    <>
      <Header title='Order Summary' />
        {state.orderContent !== undefined && (
            <p>{ state.orderContent[0]?.description?.toString()}</p>
              )}
      <div className='container'>
        <div className='left-card'>
          <PatientCard />
        </div>
        <div className='right-card'>
          <PrescriptionSummary />
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
