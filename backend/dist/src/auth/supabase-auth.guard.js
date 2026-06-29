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
exports.SupabaseAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const supabase_service_1 = require("./supabase.service");
let SupabaseAuthGuard = class SupabaseAuthGuard {
    supabaseService;
    prisma;
    constructor(supabaseService, prisma) {
        this.supabaseService = supabaseService;
        this.prisma = prisma;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;
        if (!authHeader?.startsWith('Bearer ')) {
            throw new common_1.UnauthorizedException('Missing bearer token');
        }
        const token = authHeader.slice('Bearer '.length);
        const { data, error } = await this.supabaseService
            .getClient()
            .auth.getUser(token);
        if (error || !data.user) {
            throw new common_1.UnauthorizedException('Invalid or expired token');
        }
        const { user } = data;
        const name = user.user_metadata?.name ??
            user.user_metadata?.full_name ??
            null;
        const profile = await this.prisma.profile.upsert({
            where: { id: user.id },
            update: { email: user.email },
            create: { id: user.id, email: user.email, name },
        });
        request.user = { id: profile.id, email: profile.email, name: profile.name };
        return true;
    }
};
exports.SupabaseAuthGuard = SupabaseAuthGuard;
exports.SupabaseAuthGuard = SupabaseAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService,
        prisma_service_1.PrismaService])
], SupabaseAuthGuard);
//# sourceMappingURL=supabase-auth.guard.js.map