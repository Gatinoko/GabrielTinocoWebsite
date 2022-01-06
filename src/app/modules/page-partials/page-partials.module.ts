import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    PageHeaderComponent
  ]
})
export class PagePartialsModule { }
