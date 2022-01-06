import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PagePartialsModule } from './modules/page-partials/page-partials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { AboutMePageComponent } from 'src/app/components/about-me-page/about-me-page.component';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMePageComponent,
    HomePageComponent,
    ProjectsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    PagePartialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
