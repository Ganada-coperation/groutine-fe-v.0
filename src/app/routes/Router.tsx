import { createBrowserRouter } from 'react-router';

import { AuthLayout, RootLayout } from '@app/layout';
import { HomePage, ChallengeDetailPage } from "@pages/home";
import { AuthPage, SignInPage, SignUpPage } from "@pages/auth";



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
]);