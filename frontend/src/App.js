import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./modules/Login/login";

import Dashboard from "./modules/Dashboard/dashboard";
import ForgotPass from "./modules/Forgot Password/sub-modules/fgpass";
import OTP from "./modules/Forgot Password/sub-modules/otp";
import ConfirmPass from "./modules/Forgot Password/sub-modules/cpass";
import Rbac from "./modules/Administrator/sub-modules/UserMasterData/UserRole";
import CreateRole from "./modules/Administrator/sub-modules/UserMasterData/CreateRole";
import EditRole from "./modules/Administrator/sub-modules/UserMasterData/EditRole";
import MasterList from "./modules/Administrator/sub-modules/UserMasterData/MasterList";

import Sidebar from "./modules/Sidebar/sidebar";

// import ProductManagement from "./modules/Product/ProductManagement";
// import ExtraOption from "./modules/Extra Option/ExtraOption";
// import ProductCategory from "./modules/ProductCategory/ProductCategoryManagement.jsx";

import { DataProvider } from './modules/Forgot Password/sub-modules/data/dataPost';
import ProtectedRoutes from "./hooks/protectedRoute";

function App() {
  return (
    <Router>
    <div className="app">
      <DataProvider>
        <Routes>
          <Route
            path="/"
            element={<Login />}
          />
          <Route
            path="/forgotpass"
            element={<ForgotPass />}
          />
          <Route
            path="/OTP"
            element={<OTP />}
          />
            <Route
            path="/ConfirmPassword/:email?"
            element={<ConfirmPass />}
          />
        </Routes>
      </DataProvider>

    <div className="main-of-containers">
        <div className="left-of-main-containers">
            <Sidebar/>
        </div>

        <div className="mid-of-main-containers">
        </div>

        <div className="right-of-main-container">
      <DataProvider>
        <ProtectedRoutes>
        <Routes>
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          {/* User Master Data */}

          <Route
            path="/userRole"
            element={<Rbac />}
          />

          <Route
            path="/createRole"
            element={<CreateRole />}
          />

          <Route
            path="/editRole/:id"
            element={<EditRole />}
          />

          <Route
            path="/masterList"
            element={<MasterList/>}
          />

          {/* <Route
            path="/productManagement"
            element={<ProductManagement/>}
          /> 
          
          <Route
          path="/extraOption"
          element={<ExtraOption/>}
        />

        <Route
          path="/productCategory"
          element={<ProductCategory/>}
        />

        <Route
          path="/updateProduct/:id"
          element={ProductCategory}
        /> */}
        
          
        </Routes>
        </ProtectedRoutes>
      </DataProvider>
      </div>
      </div>
      </div>
    </Router>
  );
}

export default App;