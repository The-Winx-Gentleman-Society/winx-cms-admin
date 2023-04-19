import HttpClient from './utils/HttpClient';

class AuthService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3333');
  }

  async authenticate(email: string, password: string) {
    const data = {
      email,
      password,
    };

    return this.httpClient.post('/authenticate', data);
  }
}

export default new AuthService();
