import ApiError from '../../errors/ApiError';
import getCookie from '../../utils/getCookie';

class HttpClient {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(path: string) {
    const token = JSON.parse(getCookie('token'));

    const response = await fetch(`${this.baseUrl + path}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    let body = null;

    const contentType = response.headers.get('Content-Type') as any;

    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new ApiError(response, body);
  }

  async post(path: string, data: object) {
    const response = await fetch(`${this.baseUrl + path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    let body = null;

    const contentType = response.headers.get('Content-Type') as any;

    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      if (body.token) {
        localStorage.setItem('token', JSON.stringify(body.token));
      }
      return body;
    }

    throw new ApiError(response, body);
  }
}

export default HttpClient;
