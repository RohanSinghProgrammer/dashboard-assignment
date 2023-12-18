import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LoginLayout from "./layouts/LoginLayout";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="login" element={<LoginLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="resetPassword" element={<ResetPassword />} />
        </Route>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
