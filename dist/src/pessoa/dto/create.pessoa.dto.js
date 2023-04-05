"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePessoaDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePessoaDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { nome: { required: true, type: () => String }, documento: { required: true, type: () => String }, razaoSocial: { required: true, type: () => String }, nomeFantasia: { required: true, type: () => String }, inscricaoMunicipal: { required: true, type: () => String }, inscricaoEstadual: { required: true, type: () => String }, nascimento: { required: true, type: () => Date }, dataCadastro: { required: true, type: () => Date }, dataAtualizado: { required: true, type: () => Date }, ativo: { required: true, type: () => Boolean }, isAdmin: { required: true, type: () => Boolean }, tipoId: { required: true, type: () => String }, empresaId: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePessoaDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePessoaDto.prototype, "tipoId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePessoaDto.prototype, "empresaId", void 0);
exports.CreatePessoaDto = CreatePessoaDto;
//# sourceMappingURL=create.pessoa.dto.js.map