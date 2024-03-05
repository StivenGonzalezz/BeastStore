import {Route,createBrowserRouter,createRoutesFromElements,} from "react-router-dom";
import Login from "../page/Login";
import Index from "../page/index";
import Register from "../page/Register";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/">
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/index" element={<Index />} />
      </Route>

      
    </Route>
  )
);
