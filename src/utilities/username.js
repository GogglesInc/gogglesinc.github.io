export default function username (name) {
  let username =
    '@' +
    name
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '')
      .replace(/_+/g, '')

  const lastChar = username.slice(-1)

  if (lastChar === '_') {
    username = username.substring(0, username.length - 1)
  }

  return username
}
