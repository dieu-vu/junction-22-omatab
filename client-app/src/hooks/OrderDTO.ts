
import { Prescription } from "../data/prescriptions";

export interface PickupLocation {
    formatted_address: string;
}

export interface PickupContactDetails {
    name: string;
    phone_number: string;
    send_tracking_link_sms: boolean;
}

export interface Pickup {
    location: PickupLocation;
    comment: string;
    contact_details: PickupContactDetails;
}

export interface DropoffLocation {
    formatted_address: string;
}

export interface DropoffContactDetails {
    name: string;
    phone_number: string;
    send_tracking_link_sms: boolean;
}

export interface Dropoff {
    location: DropoffLocation;
    contact_details: DropoffContactDetails;
    comment: string;
}

export interface CustomerSupport {
    email: string;
    phone_number: string;
    url: string;
}

export interface Content {
    count: number;
    description: string;
    identifier: string;
    tags: any[];
}

export interface OrderDTO {
    pickup: Pickup;
    dropoff: Dropoff;
    customer_support: CustomerSupport;
    merchant_order_reference_id?: any;
    is_no_contact: boolean;
    contents: Content[];
    tips: any[];
    min_preparation_time_minutes: number;
    scheduled_dropoff_time?: any;
}


function PrescriptionToOrderDTO(prescription: Prescription): Content {
    var content: Content = {
        count: prescription.Quantity,
        description: `${prescription.MedicineName}. Note: ${prescription.Note}`,
        identifier: prescription.Identifier,
        tags: prescription.Tag
    }
    return content;
}


export function CreateOrderContentFromPrescription(prescriptions: Prescription[]): Content[] {
    var contentArray: Content[] = [];
    contentArray = prescriptions.map(p => PrescriptionToOrderDTO(p));
    return contentArray;
}



