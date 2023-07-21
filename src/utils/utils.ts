export const isUser = (obj: { username?: string; age?: number; hobbies?: string[] }) => {
  const defaultValues = ["username", "age", "hobbies"];
  const objectValues = Object.keys(obj);

  if (defaultValues.length !== objectValues.length) return false;
  const filtredProps = defaultValues.filter((elem) => objectValues.includes(elem));
  return filtredProps.length !== objectValues.length ? false : typeof obj.hobbies !== "object" ? false : true;
};
