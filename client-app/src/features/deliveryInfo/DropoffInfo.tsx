import DeliveryForm from '../../components/DeliveryForm';
import Header from '../../components/Header/Header';
import deliveryImage from '../../assets/delivery.png';
import './styles.css';
import { useGlobalState } from '../../context/MainContext';


export default function DropoffInfo() {
  const { state } = useGlobalState();

  return (
    <>
      <Header title='Delivery Information' />
      <div className='container'>
        <DeliveryForm title='Drop off info' isPickedUp={false} />
        <div style={{ marginLeft: '5%' }}>
          <img src={deliveryImage} alt='Delivery Information' width='100%' />
        </div>
      </div>
    </>
  );
}
