import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import { LoginDto } from './dto/login.dto';
import { Tokens } from './types';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    signupLocal(dto: AuthDto): Promise<Tokens>;
    signinLocal(dto: LoginDto): Promise<Tokens>;
    logout(userId: string): Promise<void>;
    refreshTokens(userId: string, refreshToken: string): Promise<Tokens>;
    hashData(data: string): Promise<string>;
    getTokens(userId: string, email: string): Promise<Tokens>;
    updateRefreshToken(userId: string, token: string): Promise<void>;
}
