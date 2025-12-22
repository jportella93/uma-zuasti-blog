const titleToSnakeCase = (str) =>
  String(str || '')
    // Remove accents/diacritics (áéíóúüñ → aeiouun).
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .split(/\s+/)
    .join('-')
    .toLowerCase()

export default titleToSnakeCase;
