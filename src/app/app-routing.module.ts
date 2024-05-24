import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/vet/home/home.component";
import {vetRoutes} from "./pages/vet-routing.module";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [... vetRoutes]
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
