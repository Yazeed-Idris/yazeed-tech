import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CookieService} from "ngx-cookie-service";
import {FormsModule} from "@angular/forms";
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { ContactComponent } from './components/contact/contact.component';
import {MdbCarouselModule} from "mdb-angular-ui-kit/carousel";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    AboutComponent,
    SuggestionsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MdbCarouselModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
