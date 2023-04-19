export default class ApiError extends Error {
  response: any;

  constructor(response: any, body: any) {
    super();

    this.name = 'ApiError';
    this.response = response;
    this.message = body?.error || `${response.status} - ${response.statusText}`;
  }
}
