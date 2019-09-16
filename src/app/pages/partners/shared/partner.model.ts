import { BaseResourceModel } from 'src/app/shared/models/base-resource.models';

export class Partner extends BaseResourceModel {

    constructor(
        public id?: number,
        public name?: string,
        public type?: string,
        public cpf?: string,
        public cnpj?: string,
        public tipoPessoa?: string
    ) {
        super();
    }

    static fromJson(jsonData: any): Partner {
        return Object.assign(new Partner(), jsonData);
    }

}