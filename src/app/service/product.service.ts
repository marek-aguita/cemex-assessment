import { Injectable } from '@angular/core';
import { Data } from './data.constants';
import { ProductFilter } from '../model/product-filter.model';
import { map, Subject } from 'rxjs';
import { Status } from '../model/status.enum';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private static readonly products = Data.products;
  readonly filter = new Subject<ProductFilter | undefined>();
  readonly filteredProducts$ = this.filter.pipe(
    map(filter =>
      ProductService.products.filter(
        product =>
          this.filterByStatus(filter, product) &&
          this.filterByProductLine(filter, product) &&
          this.filterByDateRange(filter, product) &&
          this.filterByOrderNumber(filter, product),
      ),
    ),
  );

  private filterByStatus(filter: ProductFilter | undefined, product: Product): boolean | undefined {
    return (
      (!filter?.pending && !filter?.completed && !filter?.inProgress) ||
      (filter?.pending && product.status === Status.pending) ||
      (filter?.completed && product.status === Status.completed) ||
      (filter?.inProgress && product.status === Status.inProgress)
    );
  }

  private filterByProductLine(filter: ProductFilter | undefined, product: Product): boolean | undefined {
    return !filter?.productLine || product.productLine === filter.productLine;
  }

  private filterByDateRange(filter: ProductFilter | undefined, product: Product): boolean | undefined {
    return (
      !filter?.dateRange ||
      !filter?.dateRange?.start ||
      !filter?.dateRange?.end ||
      (product.dateRequested >= filter.dateRange.start && product.dateRequested <= filter.dateRange.end)
    );
  }

  private filterByOrderNumber(filter: ProductFilter | undefined, product: Product): boolean | undefined {
    return !filter?.orderNumber || product.orderNumber.toString().startsWith(filter.orderNumber);
  }
}
