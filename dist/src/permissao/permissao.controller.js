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
exports.PermissaoController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const permissao_service_1 = require("./permissao.service");
let PermissaoController = class PermissaoController {
    constructor(permissaoService) {
        this.permissaoService = permissaoService;
    }
    list(id) {
        return this.permissaoService.list(id);
    }
    createTipo(dto) {
        return this.permissaoService.createPermissao(dto);
    }
    updateTipo(dto) {
        return this.permissaoService.updatePermissao(dto);
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
], PermissaoController.prototype, "list", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: Boolean }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], PermissaoController.prototype, "createTipo", null);
__decorate([
    (0, common_1.Post)('update'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Boolean }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], PermissaoController.prototype, "updateTipo", null);
PermissaoController = __decorate([
    (0, common_1.Controller)('permissao'),
    __metadata("design:paramtypes", [permissao_service_1.PermissaoService])
], PermissaoController);
exports.PermissaoController = PermissaoController;
//# sourceMappingURL=permissao.controller.js.map