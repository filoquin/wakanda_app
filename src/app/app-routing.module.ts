import {ModuleWithProviders, NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages/pages/pages.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {RequestPasswordComponent} from './pages/request-password/request-password.component';
import {ConfirmationCodeComponent} from './pages/confirmation-code/confirmation-code.component';
import {AuthGuard} from "./_helpers/auth.guard";
import {WelcomeVideoComponent} from './pages/welcome-video/welcome-video.component';
import {LocationComponent} from './pages/location/location.component';
import {CatalogComponent} from './pages/catalog/catalog.component';


const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'requestpassword', component: RequestPasswordComponent},
  {path: 'confirmationcode', component: ConfirmationCodeComponent},
  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
        {path: 'location', component: LocationComponent },
        {path: 'welcome', component: WelcomeVideoComponent},
        {path: 'catalog', component: CatalogComponent},

      {
        path: 'user',
        loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
      },
      {path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)},
      {path: 'prices', loadChildren: () => import('./modules/prices/prices.module').then(m => m.PricesModule)},
      {path: 'faq', loadChildren: () => import('./modules/faq/faq.module').then(m => m.FaqModule)},
      {path: 'orders', loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule)}


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
