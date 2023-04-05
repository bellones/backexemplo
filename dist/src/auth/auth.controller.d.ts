import { AuthService } from './auth.service';
import { AuthDto, LoginDto } from './dto';
import { Tokens } from './types';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signupLocal(dto: AuthDto): Promise<Tokens>;
    signinLocal(dto: LoginDto): Promise<Tokens>;
    logout(userId: string): Promise<void>;
    refreshTokens(userId: string, refreshToken: string): Promise<Tokens>;
}
