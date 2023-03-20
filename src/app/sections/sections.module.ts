import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { SectionsComponent } from './sections.component';
import { InputsSectionComponent } from './inputs-section/inputs-section.component';
import { NucleoSectionComponent } from './nucleo-section/nucleo-section.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';

@NgModule({
  declarations: [
    SectionsComponent,
    NucleoSectionComponent,
    InputsSectionComponent,
    NgbdModalComponent,
    NgbdModalContent
  ],
  entryComponents: [NgbdModalContent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module
  ],
  exports:[ SectionsComponent ]
})
export class SectionsModule { }
