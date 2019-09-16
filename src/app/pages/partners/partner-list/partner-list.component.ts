import { Component } from '@angular/core';
import { BaseResourceListComponent } from '../../../shared/base-resource-list/base-resource-list.component';
import { Partner } from '../shared/partner.model';
import { PartnerService } from '../shared/partner.service';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.css']
})
export class PartnerListComponent extends BaseResourceListComponent<Partner> {


  constructor(private partnerService: PartnerService) {
    super(partnerService);
  }


}
