import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

export class UserDataStore implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {username: "test", password:"test", firstname:"", lastname:"" },
      {username: "f1", password:"f1", firstname:"", lastname:"" }
    ];
    return {users};
  }
}