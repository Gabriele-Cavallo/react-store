import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.jsx';
import Error from './pages/Error.jsx';
import Home from './pages/Home.jsx';
import Games from './pages/Games.jsx';
import GameDetails from './pages/GameDetails.jsx';
import { loader as gamesFetch } from './pages/Games.jsx';
import { loader as gameFetch } from './pages/GameDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index : true,
        element: <Home />
      },
      {
        path: 'games',
        element: <Games />,
        loader: gamesFetch
      },
      {
        path: 'games/:gameId',
        element: <GameDetails />,
        loader: gameFetch,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
