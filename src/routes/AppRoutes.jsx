import {createBrowserRouter} from 'react-router-dom'
import App from '../App.jsx'
import Home from '../pages/Home.jsx'
import Carrinho from '../pages/Carrinho.jsx'
import Perfil from '../pages/Perfil.jsx'


export const router = createBrowserRouter([
	{ path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "carrinho", element: <Carrinho /> },
      { path: "perfil", element: <Perfil /> },
    ],
    },
])

export default router;