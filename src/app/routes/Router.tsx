import { createBrowserRouter } from 'react-router';

import { AuthLayout, RootLayout } from '@app/layout';
import { HomePage } from "@pages/home";
import { AuthPage, SignInPage, SignUpPage } from "@pages/auth";
import { ChallengeDetailPage } from '@pages/challenge/ui/ChallengeDetailPage';


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
    path: "/challenge/:id", // 챌린지 상세 페이지 추가
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
]);