import Header from '../../components/Header/Header';
import PatientCard from './PatientCard';

import './styles.css';

const OrderSummary = () => {
  return (
    <>
      <Header title='Order Summary' />
      
      <div className='container'>
        <PatientCard />

        {/* order summary card */}
        <PatientCard />
      </div>
    </>
  );
};

export default OrderSummary;
