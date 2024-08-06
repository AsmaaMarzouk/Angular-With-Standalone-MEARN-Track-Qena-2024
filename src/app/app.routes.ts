import { Routes } from '@angular/router';
import { MainHomeComponent } from './Components/main-home/main-home.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductsParentComponent } from './Components/products-parent/products-parent.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { GroupOfRoutesComponent } from './Components/group-of-routes/group-of-routes.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

// first case
export const routes: Routes = [
  // first path match
  // default path
  // {path:'',component:MainHomeComponent},
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:MainHomeComponent,title:"Home Page"},
  {path:'Products',component:ProductsListComponent,title:"Products Page"},
  {path:'ProductsParent',component:ProductsParentComponent,title:"Products parent Page"},
  {path:'Prd/:productID',component:ProductDetailsComponent,title:"Products Details Page"},
  // not found page => wildcard path
  {path:'**',component:NotFoundPageComponent,title:"Not found Page"},

];

// second case
// export const routes: Routes = [
//   {
//     path: '',
//     component: GroupOfRoutesComponent,
//     children: [
//       { path: 'Home', component: MainHomeComponent, title: 'Home Page' },
//       {
//         path: 'Products',
//         component: ProductsListComponent,
//         title: 'Products Page',
//       },
//       {
//         path: 'ProductsParent',
//         component: ProductsParentComponent,
//         title: 'Products parent Page',
//       },
//     ],
//   },
//   // not found page => wildcard path
//   { path: '**', component: NotFoundPageComponent, title: 'Not found Page' },
// ];
