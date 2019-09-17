import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnerListComponent } from './partner-list/partner-list.component';
import { PartnerFormComponent } from './partner-form/partner-form.component';

const routes: Routes = [
  { path: '', component: PartnerListComponent },
  { path: 'new', component: PartnerFormComponent },
  { path: ':id/edit', component: PartnerFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnersRoutingModule { }
