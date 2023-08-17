import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { EmpModalComponent } from './emp-modal/emp-modal.component';
import { StopLossPoPupComponent } from './stop-loss-po-pup/stop-loss-po-pup.component';

import { StopLossComponent } from './stop-loss/stop-loss.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    PopoverModule,
    TooltipModule,
    ModalModule.forRoot(),
    BsDropdownModule,
    ButtonsModule,
  ],
  declarations: [EmpModalComponent, StopLossComponent, StopLossPoPupComponent],
  bootstrap: [StopLossComponent],
})
export class AppModule {}
