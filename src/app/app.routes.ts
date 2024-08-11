import { Routes } from '@angular/router';
import { MainHomeComponent } from './Components/main-home/main-home.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductsParentComponent } from './Components/products-parent/products-parent.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { GroupOfRoutesComponent } from './Components/group-of-routes/group-of-routes.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ObsAndOperatorsComponent } from './Components/obs-and-operators/obs-and-operators.component';
import { UserTemplateFormComponent } from './Components/User/user-template-form/user-template-form.component';
import { UserAuthenComponent } from './Components/user-authen/user-authen.component';
import { userGuard } from './Guards/user.guard';
import { UserReactiveFormComponent } from './Components/User/user-reactive-form/user-reactive-form.component';

// first case
export const routes: Routes = [
  // first path match
  // default path
  // {path:'',component:MainHomeComponent},
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:MainHomeComponent,title:"Home Page",canActivate:[userGuard]},
  {path:'Products',component:ProductsListComponent,title:"Products Page"},
  {path:'ProductsParent',component:ProductsParentComponent,title:"Products parent Page",canActivate:[userGuard]},
  {path:'Prd/:productID',component:ProductDetailsComponent,title:"Products Details Page"},
  {path:'Obs',component:ObsAndOperatorsComponent,title:"Observ Page"},
  {path:'UserTemplate',component:UserTemplateFormComponent,title:"User SignUp"},
  {path:'UserReactive',component:UserReactiveFormComponent,title:"User SignUp"},
  {path:'User',component:UserAuthenComponent,title:"User Auth"},
  {path:'UserLogout',component:UserAuthenComponent,title:"User Auth"},
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
