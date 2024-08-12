import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Product } from '../model/product.model';
import { DatePipe, NgClass } from '@angular/common';
import { Status } from '../model/status.enum';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [DatePipe, NgClass],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss',
  host: { '[class.first-of-type]': 'first()' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductViewComponent {
  product = input.required<Product>();
  first = input.required<boolean>();

  protected readonly statusToStatusIndicatorClass: Record<Status, 'in-progress' | 'completed' | 'pending'> = {
    [Status.completed]: 'completed',
    [Status.pending]: 'pending',
    [Status.inProgress]: 'in-progress',
  };
}
