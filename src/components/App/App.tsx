import { BrowserRouter } from 'react-router-dom';

import NavigateBar from "../NavigateBar/NavigateBar";

import Routes from '../../Routes';

import { AuthProvider } from '../../contexts/AuthContext';

import getCookie from '../../utils/getCookie';

import styles from "./App.module.css";

function App() {
  const token = getCookie("token");
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className={styles["aplication--container"]}>
          {token ? <NavigateBar /> : null}
          <div className={styles["aplication--content"]}>
            <Routes />
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
