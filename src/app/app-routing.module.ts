import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages/pages/pages.component';


const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)},
  {
    path: '', component: PagesComponent,
    children: [
      {path: 'main', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
