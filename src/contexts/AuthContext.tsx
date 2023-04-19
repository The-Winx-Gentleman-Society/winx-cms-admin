import {
  createContext, ReactNode, useContext, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../Services/AuthService';
import CreateAccountService from '../Services/CreateAccountService';

interface IAuthProvider {
  children: ReactNode;
}

interface IHandleCreateAccount {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface IAuthContext {
  loading: boolean;
  authorized: boolean;
  handleLogin: (email: string, password: string) => Promise<Response>;
  handleLogout: () => void;
  handleCreateAccount: ({
    name, email, password, confirmPassword,
  }: IHandleCreateAccount) => Promise<void>;
}

const AuthContext = createContext({} as IAuthContext);

function AuthProvider({ children }: IAuthProvider) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [authorized, setAuthorized] = useState(true);

  async function handleLogin(email: string, password: string) {
    const response = await AuthService.authenticate(email, password);

    localStorage.setItem('user', JSON.stringify(response?.user));
    setLoading(false);
    setAuthorized(true);
    navigate('/');
    return response;
  }

  async function handleCreateAccount({
    name, email, password, confirmPassword,
  }: IHandleCreateAccount) {
    await CreateAccountService.create({
      name, email, password, confirmPassword,
    });

    await handleLogin(email, password);
  }

  async function handleLogout() {
    localStorage.clear();

    setLoading(false);
    setAuthorized(false);
    navigate('/login');
  }

  return (
    <AuthContext.Provider value={{
      loading,
      authorized,
      handleCreateAccount,
      handleLogin,
      handleLogout,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
