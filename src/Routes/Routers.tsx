import { createBrowserRouter } from "react-router-dom";
import { homeRouter } from "../Pages/Home/Routers";

export const router = createBrowserRouter([...homeRouter]);
