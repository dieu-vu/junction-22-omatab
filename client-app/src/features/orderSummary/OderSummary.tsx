import Header from '../../components/Header/Header';
import PrescriptionSummary from './PrescriptionSummaryCard';
import PatientCard from './PatientCard';

import './styles.css';

const OrderSummary = () => {
  return (
    <>
      <Header title='Order Summary' />
      
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
