import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { ProviderDashboard } from "./pages/ProviderDashboard";
import { JobPool } from "./pages/JobPool";
import { MobileDashboard } from "./pages/MobileDashboard";
import { MobileJobPool } from "./pages/MobileJobPool";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/provider",
    Component: ProviderDashboard,
  },
  {
    path: "/jobs",
    Component: JobPool,
  },
  {
    path: "/mobile",
    Component: MobileDashboard,
  },
  {
    path: "/mobile-jobs",
    Component: MobileJobPool,
  },
]);
