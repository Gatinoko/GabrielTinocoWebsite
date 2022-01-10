import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutMePageComponent } from './components/about-me-page/about-me-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent, data: { title: 'Home' }},
  { path: '',   redirectTo: '/home', pathMatch: 'full'},
  { path: 'about-me', component: AboutMePageComponent, data: { title: 'About Me' }},
  { path: 'projects', component: ProjectsPageComponent, data: { title: 'Projects' }},
  { path: 'contact', component: ContactPageComponent, data: { title: 'Contact' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
