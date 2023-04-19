import HttpClient from './utils/HttpClient';

interface ICreate {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

class CreateAccountService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3333');
  }

  async create({
    name, email, password, confirmPassword,
  }: ICreate) {
    const data = {
      name,
      email,
      password,
      confirmPassword,
    };

    return this.httpClient.post('/create', data);
  }
}

export default new CreateAccountService();
