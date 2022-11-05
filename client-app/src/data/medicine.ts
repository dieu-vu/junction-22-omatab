import sup_icon from '../assets/item1.png';
import pain_killer_icon from '../assets/item2.png';
import eye_drop_icon from '../assets/item3.png';

export type Medicine = {
    Name: string,
    Icon: string
}

export const sup: Medicine = {
    Name: "Supplements",
    Icon: sup_icon
}

export const pain_killer: Medicine = {
    Name: "Painkiller",
    Icon: pain_killer_icon
}

export const eye_drop: Medicine = {
    Name: "Eye Drop",
    Icon: eye_drop_icon
}

export const medicines: Medicine[] = [
    sup, pain_killer, eye_drop
]