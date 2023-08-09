import { User } from '../user.interface';

export const UserTestData: Array<User> = [
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
