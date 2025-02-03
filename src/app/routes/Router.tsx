import { createBrowserRouter } from 'react-router';

import { RootLayout } from '@app/layout';
import { HomePage } from "@pages/home";
import { AuthPage } from "@pages/auth";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <AuthPage/>,
      },
      {
        path: '/home',
        element: <HomePage />,
      }
    ],
  },
]);
