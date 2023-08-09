import { Observable } from 'rxjs';
import { User } from '../model/user.interface';

export interface UserServiceInterface {
  getUsers(): Observable<User[]>;

  getUser(userId: number): Observable<string>;

  addUser(newUser: User): Observable<number>;

  updateUser(UserToUpdate: User): Observable<string>;

  deleteUser(userId: number): Observable<string>;
}
