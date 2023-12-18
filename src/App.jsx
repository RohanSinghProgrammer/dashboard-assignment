import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LoginLayout from "./layouts/LoginLayout";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="login" element={<LoginLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
