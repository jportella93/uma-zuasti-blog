const titleToSnakeCase = (str) =>
  str.replace('é', 'e').split(' ').join('-').toLowerCase()

export default titleToSnakeCase;
