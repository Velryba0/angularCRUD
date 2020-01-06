import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms'

import { BusesService } from './services/buses.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BusesComponent } from './components/buses/buses.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddbusComponent } from './components/addbus/addbus.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BusesComponent,
    AddbusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'pruebaAngular'),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [BusesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
