import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { HomeComponent } from './main/home.component';
import { PageNotFoundComponent } from './main/page-not-found.component';
import { WishesComponent } from './wishes/wishes.component';
import { UsersLoginComponent } from './users/users-login/users-login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: UsersLoginComponent},
  {path: 'users', component: UsersComponent},
  {path: 'wishes', component: WishesComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
