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
exports.EnderecoController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
const update_end_principal_dto_1 = require("./dto/update.end.principal.dto");
const endereco_service_1 = require("./endereco.service");
let EnderecoController = class EnderecoController {
    constructor(enderecoService) {
        this.enderecoService = enderecoService;
    }
    list(id) {
        return this.enderecoService.list(id);
    }
    listId(id) {
        return this.enderecoService.listId(id);
    }
    listPrincipal(id) {
        return this.enderecoService.listPrincipal(id);
    }
    updateEnderecoPrincipal(dto) {
        return this.enderecoService.updateEnderecoPrincipal(dto.id, dto.principal);
    }
    create(dto) {
        return this.enderecoService.createEnd(dto);
    }
    update(dto) {
        return this.enderecoService.updateEndereco(dto);
    }
    delete(id) {
        return this.enderecoService.deleteEndereco(id);
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
], EnderecoController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('listId/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EnderecoController.prototype, "listId", null);
__decorate([
    (0, common_1.Get)('listPrincipal/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EnderecoController.prototype, "listPrincipal", null);
__decorate([
    (0, common_1.Post)('updateEnderecoPrincipal'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Boolean }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_end_principal_dto_1.UpdateEnderecoPrincipalDto]),
    __metadata("design:returntype", void 0)
], EnderecoController.prototype, "updateEnderecoPrincipal", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: Boolean }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateEnderecoDto]),
    __metadata("design:returntype", void 0)
], EnderecoController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('update'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Boolean }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateEnderecoDto]),
    __metadata("design:returntype", void 0)
], EnderecoController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('delete/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Boolean }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EnderecoController.prototype, "delete", null);
EnderecoController = __decorate([
    (0, common_1.Controller)('endereco'),
    __metadata("design:paramtypes", [endereco_service_1.EnderecoService])
], EnderecoController);
exports.EnderecoController = EnderecoController;
//# sourceMappingURL=endereco.controller.js.map