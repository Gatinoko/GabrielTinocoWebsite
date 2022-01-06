import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutMePageComponent } from './components/about-me-page/about-me-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent, data: { title: 'Home' }},
  { path: '',   redirectTo: '/home', pathMatch: 'full'},
  { path: 'about-me', component: AboutMePageComponent, data: { title: 'About Me' }},
  { path: 'projects', component: ProjectsPageComponent, data: { title: 'Projects' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
