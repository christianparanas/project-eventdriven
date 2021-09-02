import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component'
import { RegisterComponent } from './pages/register/register.component';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AccountComponent } from './pages/account/account.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { RecoveraccountComponent } from './pages/recoveraccount/recoveraccount.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'account', component: AccountComponent },
  { path: 'product/:id', component: ProductpageComponent },
  { path: 'account/register', component: RegisterComponent },
  { path: 'account/login', component: LogInPageComponent },
  { path: 'account/recover', component: RecoveraccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
