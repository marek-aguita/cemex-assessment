import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductService } from './service/product.service';
import { AsyncPipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductViewComponent, ProductFilterComponent, AsyncPipe, MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly productService = inject(ProductService);
}
