import React, { ReactElement } from 'react';
import OrderSummary from '../features/orderSummary/OrderSummary';
import {
  BrowserRouter as Router, Route, RouterProvider, createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import PickupLocation from '../features/deliveryInfo/PickupLocation';
import DropoffLocation from '../features/deliveryInfo/DropoffLocation';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<OrderSummary />} />
      <Route path='/delivery/pickup' element={<PickupLocation />} />
      <Route path='/delivery/dropoff' element={<DropoffLocation />} /></>
  )
);

const App = () => {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
