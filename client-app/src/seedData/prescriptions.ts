export type Prescription = {
    Identifier: string,
    MedicineName: string,
    Quantity: number,
    Note: string | any,
    Tag: string
}

const p1: Prescription = {
    Identifier: "MULVIT",
    MedicineName: "Multivitamin",
    Quantity: 2,
    Note: " 1 tab per day",
    Tag: "Supplements"
}

const p2: Prescription = {
    Identifier: "ASPIRIN",
    MedicineName: "Aspirin",
    Quantity: 1,
    Note: "1 tab when pain",
    Tag: "Painkiller"
}

const p3: Prescription = {
    Identifier: "CALCI",
    MedicineName: "Calcium",
    Quantity: 1,
    Note: " 1 tab every 2 day",
    Tag: "Supplements"
}

const p4: Prescription = {
    Identifier: "BEPANTHEN_EYE",
    MedicineName: "BEPANTHEN EYE SILMÄTIPAT 40X0,5 ML",
    Quantity: 1,
    Note: "2 drops everyday",
    Tag: "Eye drop"
}

export const prescriptions: Prescription[] = [
    p1, p2, p3
]