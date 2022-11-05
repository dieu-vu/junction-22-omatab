import {Content, Dropoff, OrderDTO, Pickup} from '../hooks/OrderDTO';

export type MainContextType = {
    orderContent: Content[];
    update: number;
    orderDTO: OrderDTO;
    pickup: Pickup;
    dropoff: Dropoff;
    trackingLink: string;
}