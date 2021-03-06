import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { HomeComponent } from './main/home.component';
import { PageNotFoundComponent } from './main/page-not-found.component';
import { WishesComponent } from './wishes/wishes.component';
import { WishComponent } from './wishes/wish/wish.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'wishes', component: WishesComponent},
  {path: 'wish', component: WishComponent},
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
