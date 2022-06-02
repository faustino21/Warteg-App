import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ColumnLayout from "./layout/columnLayout";
import { PageNotFound } from "./layout/pageNotFound";
import AuthBloc from "./page/auth/bloc/loginBloc";
import Login from "./page/auth/component/login";
import { RequireAuth } from "./page/auth/requireAuth";
import AuthService from "./page/auth/service/loginService";


function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login bloc={() => AuthBloc(AuthService)}/>}/>
        <Route path='/protected/*' element={
          <RequireAuth redirectTo={"/"}>
            <ColumnLayout/>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
