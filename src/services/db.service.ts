import { dataBase } from "../db/db";
import { User } from "../types/types";

export async function getUsers(): Promise<User[]> {
  let users = [];
  for (const user of dataBase) {
    users.push({
      id: user[0],
      username: user[1].username,
      age: user[1].age,
      hobbies: user[1].hobbies,
    });
  }
  return Promise.resolve(users);
}
