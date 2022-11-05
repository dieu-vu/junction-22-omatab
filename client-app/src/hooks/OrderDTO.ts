
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
        tags: ['alcohol']
    }
    return content;
}


export function CreateOrderContentFromPrescription(prescriptions: Prescription[]): Content[] {
    var contentArray: Content[] = [];
    contentArray = prescriptions.map(p => PrescriptionToOrderDTO(p));
    return contentArray;
}

export function BuildDeliveryInfoObject(
    isPickup: boolean,
    address: string,
    phoneNumber: string,
    smsTracking: boolean,
    name: string, 
    comment: string
): Pickup | Dropoff {
    var location: PickupLocation | DropoffLocation = {
        formatted_address: address
    }
    var contactDetail: PickupContactDetails | DropoffContactDetails = {
        name: name,
        phone_number: phoneNumber,
        send_tracking_link_sms: smsTracking
    }
    if (isPickup) {
        var pickupData: Pickup = {
            location: location,
            contact_details: contactDetail,
            comment: comment
        }
        return pickupData;
    } 
    var dropoffData: Pickup = {
        location: location,
        contact_details: contactDetail,
        comment: comment
    }
    return dropoffData; 
}

const customerSupport: CustomerSupport = {
    email: "support@wolt.com",
    phone_number: "+35840666666",
    url: "https://wolt.com/en/contact"
}


export function BuildOrderDTO(
    pickup: Pickup,
    dropoff: Dropoff,
    is_no_contact: boolean = false,
    contents: Content[],
    tips: any[],
    min_preparation_time_minutes: number = 0,
    scheduled_dropoff_time?: any,
    customer_support?: CustomerSupport,
    merchant_order_reference_id?: any,
): OrderDTO {
    var newOrder: OrderDTO = {
        pickup: pickup,
        dropoff: dropoff,
        customer_support: customer_support? customer_support : customerSupport,
        merchant_order_reference_id: merchant_order_reference_id ? merchant_order_reference_id : "",
        is_no_contact: false,
        contents: contents,
        tips:[],
        min_preparation_time_minutes: min_preparation_time_minutes,
        scheduled_dropoff_time: scheduled_dropoff_time,
    }
    return newOrder;
}
