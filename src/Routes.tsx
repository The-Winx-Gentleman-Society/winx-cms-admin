import { Routes as Switch, Route, Navigate } from "react-router-dom";

import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Editor from "./pages/Editor/Editor";
import Stock from "./pages/Stock/Stock";

import getCookie from "./utils/getCookie";

type PrivateRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
}

function PrivateRoute({ children, redirectTo = '/login' }: PrivateRouteProps) {
  const token = getCookie("token");

  return token ? <>{children}</> : <Navigate to={redirectTo} />;
}

export default function Routes() {
  return (
    <Switch>
      <Route
        path="/"
        element={(
          <PrivateRoute>
            <Editor />
          </PrivateRoute>
        )}
      />
      <Route
        path="/editor"
        element={(
          <PrivateRoute>
            <Editor />
          </PrivateRoute>
        )}
      />
      <Route
        path="/stock"
        element={(
          <PrivateRoute>
            <Stock />
          </PrivateRoute>
        )}
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
}