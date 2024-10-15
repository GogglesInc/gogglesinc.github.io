export default function username(firstName, lastName) {
  const username = `@${firstName?.toLowerCase()}${lastName?.toLowerCase()}`;
  return username;
}
