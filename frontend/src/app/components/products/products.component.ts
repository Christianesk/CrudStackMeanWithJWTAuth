import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products/product.service';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/products/product';

declare var M: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  addProduct(form: NgForm) {
    if (form.valid == true) {
      if (form.value._id) {
        this.productService.putProduct(form.value)
          .subscribe(res => {
            this.resetForm(form);
            M.toast({ html: res['message'], classes: 'rounded green' });
            this.getProducts();
          }, (err) => {
            console.log(err);
            M.toast({ html: err, classes: 'rounded red' });
          });
      } else {
        this.productService.postProduct(form.value).subscribe((res) => {
          this.resetForm(form);
          M.toast({ html: res['message'], classes: 'rounded green' });
          this.getProducts();
        }, (err) => {
          M.toast({ html: err, classes: 'rounded red' });
        });
      }
    } else {
      M.toast({ html: 'You must fill all the fields of the form.!', classes: 'rounded orange' });
    }

  }

  getProducts() {
    this.productService.getProducts();
  }

  editProduct(product: Product) {
    this.productService.selectedProduct = product;
  }

  deleteProduct(_id: string) {
    if (confirm('Are you sure you want to delete it?')) {
      this.productService.deleteProduct(_id)
        .subscribe(res => {
          this.getProducts();
          M.toast({ html: res['message'], classes: 'rounded green' });
        });
    }

  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.productService.selectedProduct = new Product();
    }
  }

}
