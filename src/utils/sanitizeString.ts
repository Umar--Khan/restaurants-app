export const sanitizeString = (input: string) =>
  input.replace(/\s\s+/g, ' ').toLowerCase().trim();
