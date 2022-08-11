import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoreComponent } from './components/more/more.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductComponent } from './components/product/product.component';
import { SingleComponent } from './components/single/single.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  {path:'single/:id',component:SingleComponent},
  {path:'more/:id',component:MoreComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
