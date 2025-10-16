import {createBrowserRouter} from 'react-router-dom'
import App from '../App.jsx'
import Home from '../Home.jsx'

export const router = createBrowserRouter([
	{path: '/',
    element: <App/>,
    },

	{path: '/Home',
        element: <Home/>
    },
])