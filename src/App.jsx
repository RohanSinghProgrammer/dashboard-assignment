import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/Login";
import LoginLayout from "./layouts/LoginLayout";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Database from "./pages/Database";
import Settings from "./pages/Settings";
import UserLog from "./pages/UserLog";
import User from "./pages/User";
import PageNotFound from "./pages/PageNotFound";
import EditUser from "./pages/EditUser";
import MyTicket from "./pages/MyTicket";
import NewTicket from "./pages/NewTicket";
import TicketApproval from "./pages/TicketApproval";
import Performance from "./pages/Performance";
import ProtectedRoutes from "./utils/ProtectedRoutes";

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
          <Route path="/user" element={<User />} />
          <Route path="/editUser" element={<EditUser />} />
          <Route
            path="/database"
            element={
              <ProtectedRoutes roles={["admin"]}>
                <Database />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoutes roles={["admin"]}>
                <Settings />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/userLog"
            element={
              <ProtectedRoutes roles={["admin"]}>
                <UserLog />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/newTicket"
            element={
              <ProtectedRoutes roles={["user"]}>
                <NewTicket />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/myTicket"
            element={
              <ProtectedRoutes
                roles={["user", "operationTeam", "technicalSupport"]}
              >
                <MyTicket />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/ticketApproval"
            element={
              <ProtectedRoutes roles={["operationTeam"]}>
                <TicketApproval />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/performance"
            element={
              <ProtectedRoutes roles={["operationTeam", "technicalSupport"]}>
                <Performance />
              </ProtectedRoutes>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
