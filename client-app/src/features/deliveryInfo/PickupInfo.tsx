import DeliveryForm from '../../components/DeliveryForm';
import Header from '../../components/Header/Header';
import deliveryImage from '../../assets/delivery.png';
import './styles.css';

export default function PickupInfo() {
  return (
    <>
      <Header title='Delivery Information' />
      <div className='container'>
        <DeliveryForm title='Pick up info' isPickedUp={true} />
        <div style={{ marginLeft: '5%' }}>
          <img src={deliveryImage} alt='Delivery Information' width='100%' />
        </div>
      </div>
    </>
  );
}
