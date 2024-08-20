import { CanActivate, ExecutionContext, Injectable, mixin, UnauthorizedException } from "@nestjs/common";


export const AuthorizeGuard = (roles:string[]) => {
    class RolesGuardMixin implements CanActivate{
        canActivate(context: ExecutionContext): boolean{
            const request = context.switchToHttp().getRequest()
            const result = request?.currentUser?.roles.map((role:string) => roles.includes(role))
            .find((val: boolean) => val === true)
            if(result) return true
            throw new UnauthorizedException('You are not authorized')   
        }
    }
    const guard = mixin(RolesGuardMixin)
    return guard
}

