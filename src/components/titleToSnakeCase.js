const titleToSnakeCase = (str) =>
  str.replace('é', 'e').replace('á', 'a').replace('í', 'i').replace('ó', 'o').replace('ú', 'u').split(' ').join('-').toLowerCase()

export default titleToSnakeCase;
