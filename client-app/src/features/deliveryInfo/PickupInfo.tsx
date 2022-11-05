import DeliveryForm from '../../components/DeliveryForm';
import Header from '../../components/Header/Header';
import deliveryImage from '../../assets/delivery.png';
import './styles.css';
import { useGlobalState } from '../../context/MainContext';


export default function PickupInfo() {
  const { state } = useGlobalState();

  console.log(state.orderContent);
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
