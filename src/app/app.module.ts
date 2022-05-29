import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CookieService} from "ngx-cookie-service";
import {FormsModule} from "@angular/forms";
import { ProjectDisplayComponent } from './project-display/project-display.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { AboutComponent } from './about/about.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDisplayComponent,
    TopNavbarComponent,
    AboutComponent,
    SuggestionsComponent,
    ContactComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
