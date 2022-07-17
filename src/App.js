import Register from "./pages/register/Register";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import SendCode from "./pages/sendCode/SendCode";
import ResetPassword from "./pages/resetPassword/ResetPassword";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="App " >

            <Register />
          </div>}>
        </Route >

        <Route path="/login" element={
          <Login />
        }>

        </Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}>

        </Route>

        <Route path="/sendcode" element={<SendCode />}>

        </Route>
        <Route path="/resetpassword" element={<ResetPassword />}>

        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
