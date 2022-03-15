import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Product } from "../product.model";
import { ProductService } from "../product.service";


@Component({
  selector: "app-product-create2",
  templateUrl: "./product-create2.component.html",
  styleUrls: ["./product-create2.component.css"],
})
export class ProductCreate2Component implements OnInit {
  product: Product = {
    name: "",
    price: 0,
    pic: "",
  };

  form: FormGroup =  this.FormBuilder.group({
    name: ["", [Validators.required, Validators.minLength(2)] ],
    price: ["", [Validators.required,] ],
    pic: ["", [Validators.minLength(6)]]
  })

  constructor(
    private productService: ProductService, 
    private router: Router, 
    private FormBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
  }
get name() {
  return this.form.get('name');
}


  createProduct(): void {

    this.productService.create(this.form.value).subscribe(() => {
      this.productService.showMessage("Produto criado com sucesso!!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
