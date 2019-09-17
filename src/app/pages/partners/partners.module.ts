import { NgModule } from '@angular/core';

import { PartnersRoutingModule } from './partners-routing.module';
import { PartnerListComponent } from './partner-list/partner-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PartnerFormComponent } from './partner-form/partner-form.component';

@NgModule({
  imports: [
    SharedModule,
    PartnersRoutingModule
  ],
  declarations: [PartnerListComponent, PartnerFormComponent]
})
export class PartnersModule { }


