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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const decorations_1 = require("../auth/common/decorations");
const dto_1 = require("./dto");
const pessoa_service_1 = require("./pessoa.service");
let PessoaController = class PessoaController {
    constructor(pessoaService) {
        this.pessoaService = pessoaService;
    }
    list(id) {
        return this.pessoaService.list(id);
    }
    listId(id) {
        return this.pessoaService.listId(id);
    }
    create(dto) {
        return this.pessoaService.createPessoa(dto);
    }
    createPerspon(dto) {
        return this.pessoaService.createPessoa(dto);
    }
    update(dto) {
        return this.pessoaService.updatePessoa(dto);
    }
    delete(id) {
        return this.pessoaService.deletePessoa(id);
    }
};
__decorate([
    (0, common_1.Get)('list/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: [Object] }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PessoaController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('listId/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PessoaController.prototype, "listId", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: Boolean }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreatePessoaDto]),
    __metadata("design:returntype", void 0)
], PessoaController.prototype, "create", null);
__decorate([
    (0, decorations_1.Public)(),
    (0, common_1.Post)('createPerson'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: Boolean }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreatePessoaDto]),
    __metadata("design:returntype", void 0)
], PessoaController.prototype, "createPerspon", null);
__decorate([
    (0, common_1.Post)('update'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Boolean }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdatePessoaDto]),
    __metadata("design:returntype", void 0)
], PessoaController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('delete/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Boolean }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PessoaController.prototype, "delete", null);
PessoaController = __decorate([
    (0, common_1.Controller)('pessoa'),
    __metadata("design:paramtypes", [pessoa_service_1.PessoaService])
], PessoaController);
exports.PessoaController = PessoaController;
//# sourceMappingURL=pessoa.controller.js.map