import { Component, OnInit } from "@angular/core";
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

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto criado com sucesso!!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
