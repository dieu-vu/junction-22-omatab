import React, {Dispatch, SetStateAction } from "react";
import {Content} from '../hooks/OrderDTO';

export type MainContextType = {
    orderContent: Content[];
    update: number;
}