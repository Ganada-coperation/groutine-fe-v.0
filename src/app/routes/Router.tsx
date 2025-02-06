import { createBrowserRouter } from 'react-router';

import { RootLayout } from '@app/layout';
import { HomePage } from "@pages/home";
import { AuthPage } from "@pages/auth";
import { ChallengeDetailPage } from '@pages/challenge/ui/ChallengeDetailPage';


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
      },
      {
        path: "/challenge/:id", // 챌린지 상세 페이지 추가
        element: <ChallengeDetailPage />,
      },
    ],
  },
]);