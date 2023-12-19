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
import AppLayout from "./layouts/AppLayout";
import Database from "./pages/Database";
import Settings from "./pages/Settings";
import UserLog from "./pages/UserLog";
import User from "./pages/User";
import PageNotFound from "./pages/PageNotFound";
import EditUser from "./pages/EditUser";
import MyTicket from "./pages/MyTicket";
import NewTicket from "./pages/NewTicket";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="login" element={<LoginLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="resetPassword" element={<ResetPassword />} />
        </Route>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/database" element={<Database />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/userLog" element={<UserLog />} />
          <Route path="/user" element={<User />} />
          <Route path="/editUser" element={<EditUser />} />
          <Route path="/myTicket" element={<MyTicket />} />
          <Route path="/newTicket" element={<NewTicket />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
