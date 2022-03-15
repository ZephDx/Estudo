import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { HomeComponent }  from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component"
import { ProductCreate2Component } from './components/product/product-create2/product-create2.component';


const routes: Routes = [
  {
  path: "",
  component: HomeComponent
},
{
path: "products",
component: ProductCrudComponent
},
{
path: "products/create",
component: ProductCreate2Component
},
{
  path: "products/update/:id",
  component: ProductUpdateComponent
},
{
  path: "products/delete/:id",
  component: ProductDeleteComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
