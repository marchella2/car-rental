export class Transaction {
    id: string;
    custId: any;
    driverId: string;
    vehicleId: string;
    dateRent: Date;
    dateReturn: Date;
    rentStatus: Boolean;
    totalPrice: number;
    status: string;
}