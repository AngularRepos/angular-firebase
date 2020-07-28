//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Firebase Configuration
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth'

//Componentes
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './main/home.component';
import { PageNotFoundComponent } from './main/page-not-found.component';
import { WishesComponent } from './wishes/wishes.component';
import { WishesListComponent } from './wishes/wishes-list/wishes-list.component';
import { WishComponent } from './wishes/wish/wish.component';
import { LoginComponent } from './main/login.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UsersListComponent,
    HomeComponent,
    PageNotFoundComponent,
    WishesComponent,
    WishesListComponent,
    WishComponent,
    LoginComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
