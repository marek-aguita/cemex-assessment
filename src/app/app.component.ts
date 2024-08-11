import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Data } from './data.constants';
import {ProductViewComponent} from "./product-view/product-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected products = Data.products;
}
