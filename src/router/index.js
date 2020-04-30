import React from "react";
import Home from 'pages/home';
import Admin from 'pages/admin';
import Body from 'pages/body';
import EssayList from 'pages/essayList';
import EssayDetail from 'pages/essayDetail';
import { Redirect } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to={"/blog"} />,
  },
  {
    path: "/admin",
    component: Admin,
    routes: []
  },
  {
    path: "/blog",
    component: Home,
    routes: [
      {
        path: "/blog/detail/:id",
        component: EssayDetail
      },
      {
        path: "/blog",
        component: Body,
        routes: [
          {
            path: "/blog",
            component: EssayList,
          }
        ]
      }
    ]
  }
];

export default routes;