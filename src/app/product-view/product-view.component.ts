import { AfterViewInit, Component, ElementRef, inject, Input, Renderer2 } from '@angular/core';
import { Product } from '../model/product.model';
import { DatePipe, NgClass } from '@angular/common';
import { Status } from '../model/status.enum';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [DatePipe, NgClass],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss',
})
export class ProductViewComponent implements AfterViewInit {
  @Input({ required: true }) product!: Product;
  @Input({ required: true }) first!: boolean;

  protected readonly statusToStatusIndicatorClass: Record<Status, 'in-progress' | 'completed' | 'pending'> = {
    [Status.completed]: 'completed',
    [Status.pending]: 'pending',
    [Status.inProgress]: 'in-progress',
  };

  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngAfterViewInit() {
    const hostElement = this.elementRef.nativeElement;
    const parent = hostElement.parentElement;

    if (parent && parent.firstElementChild === hostElement) {
      this.renderer.addClass(hostElement, 'first-of-type');
    }
  }
}
