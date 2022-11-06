import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductApiService } from 'src/app/services/product-api/product-api.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css'],
})
export class ProductManagementComponent implements OnInit {
  productManagementForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });

  productToManage: any = {};
  productId: any = 0;

  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute,
    private productApiService: ProductApiService
  ) {}

  ngOnInit(): void {
    this.productId = this.activedRoute.snapshot.paramMap.get('id');

    if (this.productId != 0) {
      this.productApiService
        .getProductById(this.productId)
        .subscribe((data) => {
          this.productToManage = data;
          this.productManagementForm.setValue({
            name: this.productToManage.name,
            description: this.productToManage.description,
            amount: this.productToManage.amount,
            price: this.productToManage.price,
          });
        });
    }
  }

  public manageForm(postForm: any) {
    if (this.productId == 0) {
      this.productApiService.postProduct(postForm).subscribe((data) => {
        this.router.navigate(['/product']);
      });
    } else {
      this.productApiService
        .putProductById(this.productId, postForm)
        .subscribe();
    }
  }

  public deleteForm() {
    this.productApiService
      .deleteProductById(this.productId)
      .subscribe((data) => {
        this.router.navigate(['/product']);
      });
  }
}
