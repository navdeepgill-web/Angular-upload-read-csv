export class Sales {
  dealNumber: number;
  customerName: string;
  dealershipName: string;
  vehicle: string;
  price: string;
  date: string;

  constructor(data) {
    Object.assign(this, data);
  }
}   
