import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductApiService } from 'src/app/services/product-api/product-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(
    private productApiService: ProductApiService,
    private router: Router
  ) {}

  products: any = {};

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts() {
    this.productApiService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  public managementProduct(id: any) {
    this.router.navigate(['product-management', id]);
  }
}
