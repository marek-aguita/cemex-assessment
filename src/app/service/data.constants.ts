import { Product } from '../model/product.model';
import { Status } from '../model/status.enum';
import { ProductLine } from '../model/product-line.enum';

export class Data {
  static readonly products: Product[] = [
    {
      status: Status.inProgress,
      orderNumber: 3301,
      productLine: ProductLine.readyMix,
      name: '1-200-2-C-28-12-1-3-000',
      quantity: '12 m3',
      dateRequested: new Date('2022-10-20'),
    },
    {
      status: Status.pending,
      orderNumber: 3305,
      productLine: ProductLine.cement,
      name: 'Gris CPC 30 R Monterrey Extra 50Kg.',
      quantity: '10 TN',
      dateRequested: new Date('2022-10-10'),
    },
    {
      status: Status.pending,
      orderNumber: 3290,
      productLine: ProductLine.aggregates,
      name: 'Arena Triturada Caliza Malla 4',
      quantity: '2 TN',
      dateRequested: new Date('2022-09-29'),
    },
    {
      status: Status.completed,
      orderNumber: 3184,
      productLine: ProductLine.aggregates,
      name: 'Arena Triturada Caliza Malla 4',
      quantity: '5 TN',
      dateRequested: new Date('2022-05-14'),
    },
    {
      status: Status.completed,
      orderNumber: 3295,
      productLine: ProductLine.cement,
      name: 'Gris CPC30R Tolteca Extra 50Kg',
      quantity: '12 TN',
      dateRequested: new Date('2022-04-05'),
    },
    {
      status: Status.completed,
      orderNumber: 2994,
      productLine: ProductLine.readyMix,
      name: '1-200-2-C-28-14-1-3-000',
      quantity: '15.5 m3',
      dateRequested: new Date('2022-03-10'),
    },
  ];
}
