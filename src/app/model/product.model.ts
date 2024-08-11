import { Status } from './status.enum';
import { ProductLine } from './product-line.enum';

export interface Product {
  status: Status;
  orderNumber: number;
  productLine: ProductLine;
  name: string;
  quantity: string;
  dateRequested: Date;
}
