import { User } from "../types/types";

export const dataBase = new Map<string, User>();

dataBase.set("7c2847e1c32fa29fc1bbca873bd787f8", {
  username: "testName",
  age: 35,
  hobbies: ["music", "reading"],
});
