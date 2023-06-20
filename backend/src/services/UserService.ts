import { Injectable } from '@nestjs/common';
import { User } from '../models/User';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserService {
  private users: User[] = [];

  getAllUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUserById(id: number): Observable<User | undefined> {
    return of(this.users.find(user => user.id === id));
  }

  createUser(user: User): Observable<User> {
    this.users.push(user);
    return of(user);
  }

  updateUser(id: number, user: User): Observable<User> {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      this.users[index] = user;
      return of(user);
    }
    throw new Error('User not found');
  }

  deleteUser(id: number): Observable<any> {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return of({ message: 'User deleted' });
    }
    throw new Error('User not found');
  }
}
