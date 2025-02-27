// groutine-fe-v.0\src\app\routes\Router.tsx
import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout, RootLayout } from '@app/layout';
import { HomePage, ChallengeDetailPage } from "@pages/home";
import { AuthPage, SignInPage, SignUpPage } from "@pages/auth";
import { MissionCertificationPage, MissionPage } from "@pages/mission";
import { MyPage, OngoingChallengeDetail, CompletedChallengeDetail, AppliedChallengeDetail } from '@pages/my';

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
    element: <RootLayout />,
    children: [
      { path: '/home', element: <HomePage /> },
      { path: '/challenge/:id', element: <ChallengeDetailPage /> },
      {
        path: '/mission',
        children: [
          { index: true, element: <MissionPage /> },
          { path: 'certification', element: <MissionCertificationPage /> },
        ],
      },
      {
        path: '/my',
        children: [
          { index: true, element: <MyPage /> },
          { path: 'challenge/ongoing/:id', element: <OngoingChallengeDetail /> },
          { path: 'challenge/applied/:id', element: <AppliedChallengeDetail /> },
          { path: 'challenge/completed/:id', element: <CompletedChallengeDetail /> },
        ],
      },
    ],
  },
]);