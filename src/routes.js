import React from "react";

// Google Analytics HOC Technique
import withPageView from "./views/Utils/withPageView";

const Dashboard = React.lazy(() => import("./views/Dashboard"));
const Customers = React.lazy(() => import("./views/Customer/Customers"));
const Customer = React.lazy(() => import("./views/Customer/Customer"));
const ISPs = React.lazy(() => import("./views/ISP/ISPs"));
const ISP = React.lazy(() => import("./views/ISP/ISP"));

const routes = [
  { path: "/admin/", exact: true, name: "Beranda" },
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    component: withPageView(Dashboard),
  },

  {
    path: "/admin/customers",
    exact: true,
    name: "Customers",
    component: withPageView(Customers),
  },
  {
    path: "/admin/customers/:id",
    exact: true,
    name: "Detail Customer",
    component: withPageView(Customer),
  },
  {
    path: "/admin/isp",
    exact: true,
    name: "ISP",
    component: withPageView(ISPs),
  },
  {
    path: "/admin/isp/:id",
    exact: true,
    name: "Detail ISP",
    component: withPageView(ISP),
  },
];

export default routes;
