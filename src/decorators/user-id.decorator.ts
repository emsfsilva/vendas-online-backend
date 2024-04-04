import { authorizationToLoginPayload } from '../utils/base-64-converter';
import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const UserId = createParamDecorator((_, ctx: ExecutionContext) => {
  const { authorization } = ctx.switchToHttp().getRequest().headers;
  const loginPayload = authorizationToLoginPayload(authorization);
  //console.log('authorization', authorization);
  return loginPayload?.id;
});
