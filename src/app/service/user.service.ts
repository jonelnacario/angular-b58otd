import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserTestData } from '../model/test-data/UserTestData';
import { User } from '../model/user.interface';
import { UserServiceInterface } from './user.service.interface';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(private httpClient: HttpClient) {}

  // getUsers(): Observable<User[]> {
  //   return of(UserTestData);
  // }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('/api/user');
  }

  getUser(userId: number): Observable<string> {
    return this.httpClient.delete<string>('/api/user/' + userId);
  }

  addUser(newUser: User): Observable<number> {
    return this.httpClient.post<number>('/api/user', newUser);
  }
  updateUser(UserToUpdate: User): Observable<string> {
    return this.httpClient.put<string>('/api/user', UserToUpdate);
  }
  deleteUser(userId: number): Observable<string> {
    return this.httpClient.delete<string>('/api/user/' + userId);
  }
}
