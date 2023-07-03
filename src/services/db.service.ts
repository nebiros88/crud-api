import { v4 } from "uuid";

import { dataBase } from "../db/db";
import { User } from "../types/types";

export function getUsers(): User[] {
  let users = [];
  for (const user of dataBase) {
    users.push({
      id: user[0],
      username: user[1].username,
      age: user[1].age,
      hobbies: user[1].hobbies,
    });
  }
  return users;
}

export async function createUser(user: User): Promise<void> {
  const userId = v4();
  dataBase.set(userId, user);
  return Promise.resolve();
}
