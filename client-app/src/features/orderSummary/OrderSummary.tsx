import Header from '../../components/Header/Header';
import PrescriptionSummary from './PrescriptionSummaryCard';
import PatientCard from './PatientCard';
// import { patient } from '../../seedData/patient';
import './styles.css';

const OrderSummary = () => {
  return (
    <>
      <Header title='Order Summary' />
      <p>{ process.env.REACT_APP_MERCHANT_ID || 'env var not found'}</p>
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
