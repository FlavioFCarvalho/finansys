import { Injectable, Injector } from '@angular/core';

import { Partner } from "./partner.model";
import { BaseResourceService } from 'src/app/shared/service/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class PartnerService extends BaseResourceService<Partner>{

  constructor(protected injector: Injector) {
    super("api/partners", injector, Partner.fromJson);
  }

}