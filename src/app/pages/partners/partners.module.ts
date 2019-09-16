import { NgModule } from '@angular/core';

import { PartnersRoutingModule } from './partners-routing.module';
import { PartnerListComponent } from './partner-list/partner-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PartnersRoutingModule
  ],
  declarations: [PartnerListComponent]
})
export class PartnersModule { }


