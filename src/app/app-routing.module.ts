import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './home/page-not-found.component';
import { WishesComponent } from './wishes/wishes.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
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
