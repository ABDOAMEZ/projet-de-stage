import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from '../Layout';
import Forms from '../pages/Forms';
import InscriptionForms from '../pages/CommuneInscriptionForms';
import OFPPTInscriptionForms from '../pages/OFPPTInscripionForm';
import StagaireInscriptionForms from '../pages/StagaireInscriptionForm';

// Lazy-loaded pages
const Home = lazy(() => import('../pages/Home'));

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Suspense fallback={<p>Loading...</p>}><Home /></Suspense> },
      { 
        path: 'forms/:target', 
        element: <Suspense fallback={<p>Loading...</p>}><Forms /></Suspense> 
      },
      { 
        path: 'commune_inscription', 
        element: <Suspense fallback={<p>Loading...</p>}><InscriptionForms /></Suspense> 
      },
      { 
        path: 'ofppt_inscription', 
        element: <Suspense fallback={<p>Loading...</p>}><OFPPTInscriptionForms /></Suspense> 
      },
      { 
        path: 'stagaire_inscription', 
        element: <Suspense fallback={<p>Loading...</p>}><StagaireInscriptionForms /></Suspense> 
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}