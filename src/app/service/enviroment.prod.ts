import { MockUserService } from './user.mock.service';
import { UserService } from './user.service';

export const environment = {
  production: true,
  providers: [{ provide: UserService, useClass: MockUserService }],
};
