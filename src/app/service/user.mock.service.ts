import { Injectable } from '@angular/core';
import { UserServiceInterface } from './user.service.interface';
import { User } from '../model/user.interface';
import { UserTestData } from '../model/test-data/UserTestData';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockUserService implements UserServiceInterface {
  // private mockUser = UserTestData;

  private mockUser: User[] = [
    {
      id: 1,
      firstName: 'Jonel',
      lastName: 'Nacario',
      age: 36,
      gender: 'Male',
      location: 'Taguig',
      email: 'jonel@gmail.com',
      password: '1234',
    },
    {
      id: 2,
      firstName: 'Jose',
      lastName: 'Rizal',
      age: 35,
      gender: 'Male',
      location: 'Laguna',
      email: 'jose.rizal@gmail.com',
      password: '1235',
    },
    {
      id: 3,
      firstName: 'Gabriela',
      lastName: 'Silang',
      age: 32,
      gender: 'Female',
      location: 'Ilocos',
      email: 'gabriela.silang@gmail.com',
      password: '1236',
    },
  ];

  getUsers(): Observable<User[]> {
    return of(this.mockUser);
  }

  getUser(id: number): Observable<any> {
    const user = this.mockUser.find((user: User) => user.id === id);

    return of(user);
  }

  addUser(newUser: User): Observable<number> {
    let x;

    do {
      x = Math.floor(Math.random() * 100 + 1);
    } while (this.userExists(x) === true);
    newUser.id = x;
    const id = x;

    this.mockUser.push({
      ...newUser,
    });

    return of(id);
  }

  userExists(id: any): boolean {
    return this.mockUser.some(function (el) {
      return el.id === id;
    });
  }

  updateUser(user: User): Observable<string> {
    this.mockUser = this.mockUser.filter((item: any) => item.id !== user.id);

    this.mockUser.push(user);

    return of('Updated');
  }
  deleteUser(id: any): Observable<any> {
    this.mockUser = this.mockUser.filter((item: any) => item.id !== id);
    return of('Deleted');
    return of(this.mockUser);
  }
}
