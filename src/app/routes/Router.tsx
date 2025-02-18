// groutine-fe-v.0\src\app\routes\Router.tsx
import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout, RootLayout } from '@app/layout';
import { HomePage } from "@pages/home";
import { AuthPage, SignInPage, SignUpPage } from "@pages/auth";
<<<<<<< Updated upstream
import { MissionCertificationPage, MissionPage } from "@pages/mission";
=======
import { MyPage } from '@pages/my';
>>>>>>> Stashed changes

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
        path: '/sign-up',
        element: <SignUpPage />,
      },
      {
        path: '/sign-in',
        element: <SignInPage />,
      },
    ],
  },
  {
<<<<<<< Updated upstream
=======
    path: "/challenge/:id",
    element: <ChallengeDetailPage />,
  },
  {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    path: '/mission',
=======
    path: '/my', // MY 페이지 라우트 추가
>>>>>>> Stashed changes
    element: <RootLayout />,
    children: [
      {
        index: true,
<<<<<<< Updated upstream
        element: <MissionPage />,
      },
      {
        path: 'certification',
        element: <MissionCertificationPage />,
=======
        element: <MyPage />,
>>>>>>> Stashed changes
      },
    ],
  },
]);
