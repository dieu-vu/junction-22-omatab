import Header from '../../components/Header/Header';
import PrescriptionSummary from './PrescriptionSummaryCard';
import PatientCard from './PatientCard';
// import { patient } from '../../data/patient';
import './styles.css';
import { CreateOrderContentFromPrescription } from '../../hooks/OrderDTO';
import { prescriptions } from '../../data/prescriptions';
// import { MainContext } from '../../context/MainContext';
// import { useContext } from 'react';

const OrderSummary = () => {
  // const { setOrderContent } = React.useContext(MainContext);
  var contents = CreateOrderContentFromPrescription(prescriptions);
  // setOrderContent(contents);

  return (
    <>
      <Header title='Order Summary' />
      <p>{process.env.REACT_APP_MERCHANT_ID || 'env var not found'}</p>
      <p>{ contents[0].description.toString()}</p>
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
