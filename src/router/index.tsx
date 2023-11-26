import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

const finalRoutes = routes.map(route => {
  return {
    ...route,
    element: <route.layout>{route.element}</route.layout>,
  };
});

const router = createBrowserRouter(finalRoutes);

export default router;
