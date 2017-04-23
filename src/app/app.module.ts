import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule }     from './app.routing';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {CountDown} from "../../node_modules/angular2-simple-countdown/countdown";

import './core/rxjs-extensions';
import { firebaseConfig } from './core/firebaseConfig';
import { googleApi } from './core/googleApi';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { AboutComponent } from './components/about/about.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { RegistryComponent } from './components/registry/registry.component';
import { BridalComponent } from './components/bridal/bridal.component';

import { FirebaseService } from './services/firebase.service';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DetailsComponent,
    InstagramComponent,
    RegistryComponent,
    BridalComponent,
    CountDown
  ],
  imports: [
    CollapseModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot(googleApi.api)
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
