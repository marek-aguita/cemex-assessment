import { ProductLine } from './product-line.enum';
import { DateRange } from '@angular/material/datepicker';

export interface ProductFilter {
  inProgress?: boolean;
  pending?: boolean;
  completed?: boolean;
  productLine?: ProductLine;
  dateRange?: Partial<DateRange<Date>>;
  orderNumber?: string;
}
