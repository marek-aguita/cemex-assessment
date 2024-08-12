import { ChangeDetectionStrategy, Component, effect, inject, model } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { ProductFilter } from '../model/product-filter.model';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatHint, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { ProductLine } from '../model/product-line.enum';
import { MatDatepickerToggle, MatDateRangeInput, MatDateRangePicker, MatEndDate, MatStartDate } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [
    MatCheckbox,
    FormsModule,
    MatDivider,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
    MatHint,
    MatDateRangeInput,
    MatDatepickerToggle,
    MatDateRangePicker,
    MatStartDate,
    MatEndDate,
    MatIcon,
    MatSuffix,
    MatInput,
    JsonPipe,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFilterComponent {
  protected readonly filter = model<ProductFilter | undefined>();
  protected readonly firstJanuary2022 = new Date(2022, 0, 1);
  protected readonly productLines = [ProductLine.readyMix, ProductLine.cement, ProductLine.aggregates];
  private readonly productService = inject(ProductService);

  constructor() {
    effect(() => {
      this.productService.filter.next(this.filter());
    });
  }

  protected updateFilter(updatedFilter: Partial<ProductFilter>): void {
    this.filter.update(filter => {
      return filter || updatedFilter
        ? {
            ...filter,
            ...(updatedFilter as ProductFilter),
            dateRange: {
              ...filter?.dateRange,
              ...updatedFilter.dateRange,
            },
          }
        : undefined;
    });
  }
}
