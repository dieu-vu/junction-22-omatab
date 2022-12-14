import DeliveryForm from '../../components/DeliveryForm';
import Header from '../../components/Header/Header';
import deliveryImage from '../../assets/delivery.png';
import './styles.css';


export default function DropoffInfo() {

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
