import OrderSummary from '../features/orderSummary/OrderSummary';
import {
  // BrowserRouter as Router,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import DropoffInfo from '../features/deliveryInfo/DropoffInfo';
import PickupInfo from '../features/deliveryInfo/PickupInfo';
import DeliveryLoading from '../features/deliveryLoading';
import { MainProvider } from '../context/MainContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<OrderSummary />} />
      <Route path='/delivery/pickup' element={<PickupInfo />} />
      <Route path='/delivery/dropoff' element={<DropoffInfo />} />
      <Route path='/delivery/loading' element={<DeliveryLoading />} />
    </>
  )
);

const App = () => {
  return (
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  );
};

export default App;
