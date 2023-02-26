export function renderError(err: any): string {
  return Array.isArray(err.response.data.message) ? err.response.data.message[0] : err.response.data.message;
}
