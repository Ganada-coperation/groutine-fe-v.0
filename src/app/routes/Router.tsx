// groutine-fe-v.0\src\app\routes\Router.tsx
import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout, RootLayout } from '@app/layout';
import { HomePage, ChallengeDetailPage } from "@pages/home";
import { AuthPage, SignInPage, SignUpPage } from "@pages/auth";
import { MissionCertificationPage, MissionPage } from "@pages/mission";
import { MyPage } from '@pages/my';

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
        path: 'sign-up',
        element: <SignUpPage />,
      },
      {
        path: 'sign-in',
        element: <SignInPage />,
      },
    ],
  },
  {
    path: "/challenge/:id",
    element: <ChallengeDetailPage />,
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
  {
    path: '/mission',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MissionPage />,
      },
      {
        path: 'certification',
        element: <MissionCertificationPage />,
      },
    ],
  },
  {
    path: '/my',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MyPage />,
      },
    ],
  },
]);
