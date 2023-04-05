import { Request } from 'express';
import { Strategy } from 'passport-jwt';
type JwtPayload = {
    sub: string;
    email: string;
};
declare const RtStrategy_base: new (...args: any[]) => Strategy;
export declare class RtStrategy extends RtStrategy_base {
    constructor();
    validate(req: Request, payload: JwtPayload): {
        refreshToken: string;
        sub: string;
        email: string;
    };
}
export {};
