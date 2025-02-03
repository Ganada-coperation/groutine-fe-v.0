import { createBrowserRouter } from 'react-router';

import { AuthLayout, RootLayout } from '@app/layout';
import { HomePage } from "@pages/home";
import { AuthPage } from "@pages/auth";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <AuthPage />,
      },
      {
        path: '/home',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/home',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
