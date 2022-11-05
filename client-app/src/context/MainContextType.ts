
import {Content} from '../hooks/OrderDTO';

export type MainContextType = {
    orderContent: Content[];
    setOrderContent: (contents: Content[]) => void;
    update: number;
    setUpdate: (count: number) => void;
}