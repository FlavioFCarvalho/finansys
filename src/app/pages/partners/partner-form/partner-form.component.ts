import { Component, Injector } from '@angular/core';
import { Validators } from "@angular/forms";


import { PartnerService } from "../shared/partner.service";
import { BaseResourceFormComponent } from 'src/app/shared/base-resource-form/base-resource-form.components';
import { Partner } from '../shared/partner.model';


@Component({
  selector: 'app-partner-form',
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.css']
})


export class PartnerFormComponent extends BaseResourceFormComponent<Partner> {

  constructor(
    protected partnerService: PartnerService, protected injector: Injector) {
    super(injector, new Partner, partnerService, Partner.fromJson)
  }


  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      type: [null],
      cpf: [null],
      cnpj: [null],
      tipoPessoa: [null]

    });
  }

  protected creationPageTitle(): string {
    return "Cadastro de Novo Parceiro";
  }

  protected editionPageTitle(): string {
    const partnerName = this.resource.name || "";
    return "Editando Parceiro: " + partnerName;
  }
}



