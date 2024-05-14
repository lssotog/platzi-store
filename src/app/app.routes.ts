import { Routes } from '@angular/router';
import { LayoutComponent } from './components/templates/layout/layout.component';
import { ProductsComponent } from './pages/products/products.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const routes: Routes = [
  {
    title:'Home',
    path:'',
    component:LayoutComponent,
    children:[{
      path:'',
      loadComponent: ()=> import ('./pages/home/home.component').then(comp=>comp.HomeComponent)
    }]
  },
  {
    title:'Products',
    path:'products',
    component:LayoutComponent,
    children:[
      {
        path:'',
        loadComponent: ()=> import ('./pages/home/home.component').then(comp=>comp.HomeComponent)
      },
      {
        path:'products',
        loadComponent: ()=> import ('./pages/products/products.component').then(comp=>comp.ProductsComponent)
      },
      {
        path:'checkout',
        loadComponent: ()=> import ('./pages/checkout/checkout.component').then(comp=>comp.CheckoutComponent)
      },
  ]
  },
  {
    path:'**',
    redirectTo: '',
    pathMatch:'full'
  }
];
