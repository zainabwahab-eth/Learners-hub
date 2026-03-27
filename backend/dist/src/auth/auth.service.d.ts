import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './register.dto';
import { LoginDto } from './login.dto';
type AuthUser = {
    id: string;
    email: string;
};
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        user: {
            id: string;
            email: string;
        };
        access_token: string;
    }>;
    login(dto: LoginDto): Promise<{
        user: {
            id: string;
            email: string;
        };
        access_token: string;
    }>;
    signToken(user: AuthUser): {
        user: {
            id: string;
            email: string;
        };
        access_token: string;
    };
}
export {};
